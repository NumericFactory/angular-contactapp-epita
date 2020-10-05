import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactDetailComponent } from './contact-container/contact-detail/contact-detail.component';
import { LoginComponent } from './login/login.component';
import { ContactFormComponent } from './contact-container/contact-form/contact-form.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  // je définis des routes
  // { path:'', component: ContactContainerComponent },
  // { path:':id', component: ContactDetailComponent},
  // { path: 'api', component: ApiComponent },
  // { path: 'login', component : LoginComponent }

  // je redéfinis des routes 
  // avec cette fois des routes enfants de la route /users
  { path: '', redirectTo:'users', pathMatch: 'full' },
  { path: 'api', component: ApiComponent},
  { path: 'login', component : LoginComponent },
  {
    path : 'users', 
    component: ContactContainerComponent,
      children : [
        { path: '', redirectTo: 'detail/1', pathMatch: 'full' },
        { path: 'detail/:id', component: ContactDetailComponent},
        { path: 'add', component: ContactFormComponent},
      ]
  },
  { path: '**', component : Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
