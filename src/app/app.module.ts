import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiceCardComponent } from './dice-card/dice-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RollCardComponent } from './roll-card/roll-card.component';
import { FormsModule } from '@angular/forms';
import { AutoButtonsComponent } from './auto-buttons/auto-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceCardComponent,
    RollCardComponent,
    AutoButtonsComponent
  ],
  entryComponents: [
    RollCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
