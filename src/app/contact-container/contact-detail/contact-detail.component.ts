import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  userId:number;
  user:User;
  userRessources$:Observable<any>;
  todos:Array<any>;
  dones:Array<any>;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    
    this.userRessources$ = this.userService.userRessources$
    
    // this.route.snapshot.params.id
    // permet de récupérer les paramètres de l'url de manière statique

    // this.route.params.subscribe()
    // permet de récupérer les paramètres de l'url de manière dynamique
    this.route.params.subscribe(routeParams => {
      // Charger le Contact
      this.user = this.userService.getUsersValue().find(user => routeParams.id == user.id)

      // Charger les posts, comments et todos du user
      this.userService.loadUserRessources(routeParams.id);
      this.userRessources$.subscribe(ressources => {
        this.todos = ressources.todos.filter( todo => todo.completed==false)
        this.dones = ressources.todos.filter( todo => todo.completed==true)
      })
     
    });    

  } // fin ngOnInit

}