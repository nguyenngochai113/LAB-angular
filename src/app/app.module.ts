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







@NgModule({
  declarations: [
    AppComponent,
    Lab2Component,
    DetailComponent,
    ContactsComponent,
    Lap06Component,
    Detaillap06Component,
    NavHeaderLap06Component,




  
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
