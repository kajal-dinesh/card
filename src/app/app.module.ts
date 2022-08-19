import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } 
from '@angular/platform-browser/animations';
import { TypeaheadModule} 
from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    AddprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
