import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-card',
  templateUrl: './dice-card.component.html',
  styleUrls: ['./dice-card.component.scss']
})
export class DiceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rollDice(die: number) {
    let rollResult = Math.floor(Math.random() * die) + 1;
    console.log(rollResult);
    return rollResult;
  }

}
