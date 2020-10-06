import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient) { }

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
    this.contact = this.fb.group({
      gender: ['', Validators.required],
      name: ['', [ Validators.minLength(2), Validators.maxLength(5)]],
      email: ['', [ Validators.required, Validators.email ]],
      status: new FormControl()
    });

    // la méthode setValue sur un formControl permet de setter la valeur d'un champ
    this.contact.controls.status.setValue('Active');

  }

  addContact(contact) {
    console.log(contact)
    if(contact.status=='INVALID') {
      alert('Corrigez vos erreurs')
    }
    else {
      alert('Ok')
    }
  }

}