import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  userId:number;
  userRessources$:Observable<any>;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id; // ex:{id:109}
    
    // Charger les posts, comments et todos du user
    this.userService.loadUserRessources(this.userId);
    // S'abonner à l'Observable
    this.userRessources$ = this.userService.userRessources$

  }

}