import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './template/background/background.component';
import { ChancesComponent } from './components/chances/chances.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ChancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
