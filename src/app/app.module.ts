import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HolaMundoComponent,Nombre,amigos } from 'primercomponente/primer.componente';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    Nombre,
    amigos

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
