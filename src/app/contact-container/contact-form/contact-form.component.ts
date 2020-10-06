import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private fb:FormBuilder, private userService: UserService) { }

  ngOnInit() {
    /*
      On instancie un formulaire de type FormGroup
      à l'aide de la méthode group() de la class FormBuilder
      Celle-ci prend en paramètre les propriétés de notre objet formulaire

      Le modèle ci-dessous est liée dans la VUE HTML grâce :
      -> à la directive formGroup qui relie le formulaire
      -> à la directive formControlName qui relie Les propriétés du formulaire
      (voir la vue : https://stackblitz.com/edit/angular-contactapp-epita?file=src%2Fapp%2Fcontact-container%2Fcontact-form%2Fcontact-form.component.html)
    */
   
    this.contactForm = this.fb.group({
      gender: ['', Validators.required],
      name: ['', [ Validators.minLength(2), Validators.maxLength(5)]],
      email: ['', [ Validators.required, Validators.email ]],
      status: new FormControl()
    });
  

    // la méthode setValue sur un formControl permet de setter la valeur d'un champ
    this.contactForm.controls.status.setValue('Active');

  }

  addContactAction() {
    console.log('form Instance: ', this.contactForm);
    console.log('contact: ', this.contactForm.value);
    console.log('valid ?  ', this.contactForm.valid);

    // gestion des erreurs
    console.log('champs email est valide ? ', this.contactForm.controls.email.valid ) // true or false
    console.log('quelle(s) validation(s) ne sont pas respectées sur le champ Email ? ', this.contactForm.controls.email.errors);
    /*
      ON PEUT 
    */

    // if(this.contactForm.valid) {
    //   this.userService.addUserInDb(contact).subscribe(response => console.log(response))
    //   alert('Le conctact a bien été ajouté');

    // }
    // else {
    //   alert('Corrigez vos erreurs');
    // }
  }

}