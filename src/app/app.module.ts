import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactsidebarComponent } from './contactsidebar/contactsidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersoUppercasePipe } from './shared/perso-uppercase.pipe';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';
import { TokenInterceptor } from './services/token.interceptor';
// importer des components UI 
import { MaterialModule } from './shared/material/material.module';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './services/loader.interceptor';


@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule,
    MaterialModule 
  ],
  declarations: [ AppComponent, ContactlistComponent, ContactsidebarComponent, PersoUppercasePipe, ApiComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    UserService, AuthService, LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ]
})
export class AppModule { }
