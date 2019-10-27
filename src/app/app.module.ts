import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab2Component } from './lab2/lab2.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Lap06Component } from './lap06/lap06.component';
import { Detaillap06Component } from './detaillap06/detaillap06.component';
import { NavHeaderLap06Component } from './nav-header-lap06/nav-header-lap06.component';
import { HttpClientModule } from '@angular/common/http';
import { Lab5Component } from './lab5/lab5.component';
import { Home8Component } from './home8/home8.component';
import { Viewcard8Component } from './viewcard8/viewcard8.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Detail8Component } from './detail8/detail8.component';







@NgModule({
  declarations: [
    AppComponent,
    Lab2Component,
    DetailComponent,
    ContactsComponent,
    Lap06Component,
    Detaillap06Component,
    NavHeaderLap06Component,
    Lab5Component,
    Home8Component,
    Viewcard8Component,
    CheckoutComponent,
    Detail8Component,




  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
