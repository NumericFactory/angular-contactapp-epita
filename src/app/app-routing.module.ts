import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactlistComponent } from './contactlist/contactlist.component';


const routes: Routes = [
  {path: '', component: ContactlistComponent},
  {path: 'api', component: ApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
