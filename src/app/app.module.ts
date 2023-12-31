import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// libs
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

// components
import { HomeComponent } from './home/home.component';
import { BillsComponent } from './bills/bills.component';
import { BillStatusPipe } from './pipes/bill-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillsComponent,
    BillStatusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
