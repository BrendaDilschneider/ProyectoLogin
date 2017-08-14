import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PruebaFinComponent } from './prueba-fin/prueba-fin.component';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    PruebaFinComponent
  ],
  
  imports: [
    BrowserModule,
    NgProgressModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
