import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component'
import { Lap06Component } from './lap06/lap06.component';





const routes: Routes = [
  {path: 'lab2', component: Lab2Component},
{path: 'detail', component: DetailComponent},
{path : 'contacts/:id' , component:ContactsComponent },
{path:'lap06', component:Lap06Component}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
