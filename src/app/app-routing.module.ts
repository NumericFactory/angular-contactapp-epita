import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactlistComponent } from './contact-container/contactlist/contactlist.component';


const routes: Routes = [
  // je définis des routes
  { path:'', component: ContactlistComponent },
  { path: 'api', component: ApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
