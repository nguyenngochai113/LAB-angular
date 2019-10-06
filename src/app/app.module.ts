import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


const routesConfig: Routes = [

]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab2Component } from './lab2/lab2.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Lab3Component } from './lab3/lab3.component';


@NgModule({
  declarations: [
    AppComponent,
    Lab2Component,
    DetailComponent,
    ContactsComponent,
    Lab3Component,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
