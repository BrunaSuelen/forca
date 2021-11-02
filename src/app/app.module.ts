import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { ChancesComponent } from './components/chances/chances.component';
import { BackgroundComponent } from './template/background/background.component';
import { CardStrengthComponent } from './components/card-strength/card-strength.component';
import { StrengthComponent } from './components/strength/strength.component';
import { InputComponent } from './components/input/input.component';
import { TipsComponent } from './components/tips/tips.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ChancesComponent,
    CardStrengthComponent,
    StrengthComponent,
    InputComponent,
    TipsComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
