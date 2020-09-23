import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatInputHarness} from '@angular/material/input/testing';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
