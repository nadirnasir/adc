import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NadirComponent } from './nadir/nadir.component';
import { MenuComponent } from './menu/menu.component';
import { TempbranchComponent } from './tempbranch/tempbranch.component';


@NgModule({
  declarations: [
    AppComponent,
    NadirComponent,
    MenuComponent,
    TempbranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
