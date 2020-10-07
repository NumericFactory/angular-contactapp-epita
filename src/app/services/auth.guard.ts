import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/*
 Nous pouvons utiliser le guard AuthGard sur les routes de notre choix
 dans app-routing.module.ts (nous l'utiliserons sur la route /users/add)
*/

@Injectable()
export class AuthGuard implements CanActivate {

  /* On injecte authService et Route */
  constructor(private authService:AuthService, private router:Router) {}

  /*
    Cette méthode est appelée à chaque demande d'accès à la "route" ; 
    elle doit alors retourner une valeur de type boolean ou Promise<boolean> ou Observable<boolean> 
    indiquant si l'accès à la "route" est autorisé ou non.
    Il serait donc possible d'attendre le résultat d'un traitement asynchrone pour décider d'autoriser l'accès ou non.
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    /* 
      Nous utlisons ici la méthode idLogin qui renvoie un simple boolean
      en vérifiant le user dispose d'un token dans le localStorage
    */
    if(this.authService.isLogin()) {
      return true;
    } // true ou false
    
    // Naviguer sur la page login
    if(confirm('Vous n\'êtes pas autorisé(e) à effectuer cette action. Connectez-vous maintenant ? ')) {
      this.router.navigate(['/login']);
      // you can save redirect url so after authing we can move them back to the page they requested
    }
    return false;
   

  }

}
