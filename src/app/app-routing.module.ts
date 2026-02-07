import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client/client.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { DonnationComponent } from './client/donnation/donnation.component';
import { ActivitesComponent } from './client/activites/activites.component';

const routes: Routes = [
  {path:'', redirectTo: 'ONG', pathMatch: 'full'},
  {path: 'ONG', component : ClientComponent, 
    children:[
      {path: '', redirectTo: 'accueil', pathMatch: 'full'},
      {path: 'accueil', component : AccueilComponent},
      {path: 'about', component: AboutComponent},
      {path:'contact', component: ContactComponent},
      {path:'donnation', component: DonnationComponent},
      {path:'activites', component: ActivitesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
