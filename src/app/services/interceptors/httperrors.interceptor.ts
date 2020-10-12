import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {

  constructor(
    private router:Router, 
    private alertService:AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      
      tap( (err) => {

        // Ceci est un exemple, en capturant un objet HttpResponse
        // car notre api ne renvoie pas d'erreurs HTTP, 
        // mais juste une erreur dans le corps de la réponse

        if( err instanceof HttpResponse) {
         if(err.body.code == 401) {
           this.alertService.showSnackbar('Connectez-vous pour effectuer cette action');
           this.router.navigate(['login']);
         }
        }

        /* MAIS DANS UN CAS REEL D'API qui renvoie des erreurs HTTP
           capturer un objet: HttpErrorResponse
           (exemple: tester les erreurs 401-403-404-500)
        */

        // if(err instanceof HttpErrorResponse) {
        //   console.log('http error',err)
        //   switch(err.status) {
        //     // Non authentifié
        //     case 401:
        //       localStorage.removeItem('token');
        //       this.router.navigate(['login']);
        //     break;
        //     // non autorisé
        //     case 403 : 
        //       this.alertService.showSnackbar('Vous n\êtes pas autorisé');
        //     break;
        //     // pas de ressources disponible
        //     case 404 : 
        //       this.alertService.showSnackbar('Ressource inexistante');
        //       this.router.navigate(['404']);
        //     break;
        //     // Erreur Serveur
        //     case 500 : 
        //       this.alertService.showSnackbar('Erreur Serveur');
        //     break;
        //   }
        // }

        /*
          FIN
        */
        
      }) 
    );
  }
}
