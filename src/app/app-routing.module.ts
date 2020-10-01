import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactDetailComponent } from './contact-container/contact-detail/contact-detail.component';
import { LoginComponent } from './login/login.component';
import { ContactlistComponent} from './contact-container/contactlist/contactlist.component';



const routes: Routes = [
  // je définis des routes
  // { path:'', component: ContactContainerComponent },
  // { path:':id', component: ContactDetailComponent},
  // { path: 'api', component: ApiComponent },
  // { path: 'login', component : LoginComponent }
  { path: 'api', component: ApiComponent},
  {
      path : 'users', 
      component: ContactContainerComponent,

      children : [
        { path: '', redirectTo: 'list' },
          { path: 'list', ContactlistComponent},
          { path: 'detail/:id', ContactDetailComponent},
      ]

  },
  { path: 'login', component : LoginComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
