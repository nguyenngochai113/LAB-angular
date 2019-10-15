import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component'
import { Lap06Component } from './lap06/lap06.component';
import { Detaillap06Component } from './detaillap06/detaillap06.component';
import { Lab5Component } from './lab5/lab5.component';





const routes: Routes = [
  {path: 'lab2', component: Lab2Component},
{path: 'detail', component: DetailComponent},
{path : 'contacts/:id' , component:ContactsComponent },
{path:'lap06', component:Lap06Component},
{path:'detaillap06', component:Detaillap06Component},
{path:'lab5', component:Lab5Component},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
