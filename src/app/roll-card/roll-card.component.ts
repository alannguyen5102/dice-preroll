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

  constructor() { }

  ngOnInit(): void {
  }

  remove_me() {
    this.parentRef.remove(this.unique_key);
  }
}
