import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DieCardComponent } from './die-card/die-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTabsModule } from '@angular/material/tabs';

import { RollCardComponent } from './roll-card/roll-card.component';
import { FormsModule } from '@angular/forms';
import { AutoButtonsComponent } from './auto-buttons/auto-buttons.component';
import { PrerollerComponent } from './preroller/preroller.component';
import { RollerComponent } from './roller/roller.component';
import { ResultsCardComponent } from './roller-components/results-card/results-card.component';
import { DiceSelectorComponent } from './roller-components/dice-selector/dice-selector.component';
import { SingleDieComponent } from './roller-components/single-die/single-die.component';

@NgModule({
  declarations: [
    AppComponent,
    DieCardComponent,
    RollCardComponent,
    AutoButtonsComponent,
    PrerollerComponent,
    RollerComponent,
    ResultsCardComponent,
    DiceSelectorComponent,
    SingleDieComponent,
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
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
