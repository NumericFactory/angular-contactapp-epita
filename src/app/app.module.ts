import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactsidebarComponent } from './contactsidebar/contactsidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { PersoUppercasePipe } from './shared/perso-uppercase.pipe';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MaterialModule, AppRoutingModule ],
  declarations: [ AppComponent, ContactlistComponent, ContactsidebarComponent, PersoUppercasePipe, ApiComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, AuthService]
})
export class AppModule { }
