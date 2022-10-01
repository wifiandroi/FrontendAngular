import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Component
import { ListComponent } from './actividad/list.component';
import { DetailsComponent } from './actividad/details.component';
import { CreateComponent } from './actividad/create.component';
import { UpdateComponent } from './actividad/update.component';
//External
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
     ToastrModule.forRoot(),
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
