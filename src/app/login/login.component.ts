import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private alertService:AlertService) { }

  loginForm: FormGroup;
  fakeCredentials = {email:'mark@fb.com', password: 'angular'};

  ngOnInit() {
    /*
      On initiatlise un formulaire de type réactive form
      - en lui assignant une instance de FormGroup()
      - puis en instanciant chaque élement de formulaire avec une instance de FormControl
      - On peut si on le souhaite spécifier une validation pour un champ à l'aide de la classe Validators

       Le modèle ci-dessous est liée dans la VUE HTML grâce :
      -> à la directive formGroup qui relie le formulaire
      -> à la directive formControlName qui relie Les propriétés du formulaire
      (voir la vue : https://stackblitz.com/edit/angular-contactapp-epita?file=src%2Fapp%2Flogin%2Flogin.component.html)
    */
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    });
    /*
      Nous verrons qu'il est possible de construire plus simplement
      des formulaire de type FormGroup à l'aide de la class FormBuilder 
      (voir le lien : https://stackblitz.com/edit/angular-contactapp-epita?file=src%2Fapp%2Fcontact-container%2Fcontact-form%2Fcontact-form.component.ts) 
    */
  
  }

  /*
    Action appeleé à la soumission du forulaire
  */
  loginAction() {
    console.log(this.loginForm.value); // {email:'', password: ''}
    console.log(this.loginForm.valid); // true ou false
    if(this.loginForm.valid) {
      if(JSON.stringify(this.loginForm.value) == JSON.stringify(this.fakeCredentials)) {
        this.authService.setTokenInLocalStorage('f0cb8a50aa5a42eaf3c68511c73742534dcf51dec7e3c71f8aef0a7541a39d8c');
        this.router.navigate(['/']);
        this.alertService.showSnackbar('Ok vous êtes connecté');
      }
      else {
        this.alertService.showSnackbar('Email ou mot de passe erroné')
      }
    }
  }



}