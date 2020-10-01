import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // je définis des routes
  { path:'', component: ContactContainerComponent },
  { path:':id', component: ContactDetailComponent},
  { path: 'api', component: ApiComponent },
  { path: 'login', component : LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
