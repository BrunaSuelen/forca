import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { ChancesComponent } from './components/chances/chances.component';
import { BackgroundComponent } from './template/background/background.component';
import { CardStrengthComponent } from './components/card-strength/card-strength.component';
import { StrengthComponent } from './components/strength/strength.component';
import { InputComponent } from './components/input/input.component';
import { TipsComponent } from './components/tips/tips.component';
import { ResumeComponent } from './components/resume/resume.component';
import { GameOverComponent } from './components/game-over/game-over.component';

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
    GameOverComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
