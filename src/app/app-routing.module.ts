import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component'


const routes: Routes = [
  {path: 'lab2', component: Lab2Component},
{path: 'detail', component: DetailComponent},
{path : ':id' , component:ContactsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
