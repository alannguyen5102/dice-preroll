import { Component, OnInit, ComponentRef  } from '@angular/core';
import { DiceCardComponent } from '../dice-card/dice-card.component';

@Component({
  selector: 'app-roll-card',
  templateUrl: './roll-card.component.html',
  styleUrls: ['./roll-card.component.scss']
})
export class RollCardComponent {

  public unique_key: number;
  public parentRef: DiceCardComponent;
  public rollResult: number;
  public rollCrit: number;
  public rollColor: string;

  constructor() { 
  }

  ngOnInit(): void {
    if (this.rollResult === this.rollCrit && this.rollCrit === 20) {
      this.rollColor = 'primary';
    }
    else if (this.rollResult === 1 && this.rollCrit === 20) {
      this.rollColor = 'warn';
    }
    else {
      this.rollColor = 'accent';
    }
  }

  remove_me() {
    this.parentRef.remove(this.unique_key);
  }
}
