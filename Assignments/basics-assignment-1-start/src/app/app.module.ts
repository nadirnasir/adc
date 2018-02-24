import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessAlertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
