import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component'
import { Lap06Component } from './lap06/lap06.component';
import { Detaillap06Component } from './detaillap06/detaillap06.component';
import { Lab5Component } from './lab5/lab5.component';
import { Viewcard8Component } from './viewcard8/viewcard8.component';
import { Home8Component } from './home8/home8.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Detail8Component } from './detail8/detail8.component';





const routes: Routes = [
{path: 'lab2', component: Lab2Component},
{path: 'detail', component: DetailComponent},
{path : 'contacts/:id' , component:ContactsComponent },
{path:'lap06', component:Lap06Component},
{path:'detaillap06', component:Detaillap06Component},
{path:'lab5', component:Lab5Component},
{path:'home8', component: Home8Component},
{path: 'home8/viewcard8', component: Viewcard8Component},
{path:'home8/checkout', component:CheckoutComponent},
{path:'home8/detail8/:id', component: Detail8Component},
{path: 'viewcart8', component:Viewcard8Component}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
