import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact;

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.contact = this.fb.group({
      gender: ['', Validators.required],
      name: ['', [ Validators.minLength(2), Validators.maxLength(5), Validators.pattern()]],
      email: ['',  Validators.email],
      status: new FormControl()
    });

    this.contact.controls.status.setValue('Active');

  }

  addContact(contact) {

  }

}