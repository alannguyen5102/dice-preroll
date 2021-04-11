import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-selector',
  templateUrl: './dice-selector.component.html',
  styleUrls: ['./dice-selector.component.scss']
})
export class DiceSelectorComponent implements OnInit {

  public results: number = 0;

  public currentRoll: number = 0;

  public d100: number = 0;
  public d20: number = 0;
  public d12: number = 0;
  public d10: number = 0;
  public d8: number = 0;
  public d6: number = 0;
  public d4: number = 0;
  public d3: number = 0;
  public d2: number = 0;

  public diceString: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

  rolledSingleDie(result: number) {
    this.currentRoll = result;
    this.results += result;
  }

  typeSingleDie(result: string) {
    this.diceString = "";
    switch(result) {
      case "d100":
        this.d100++;
        break;

      case "d20":
        this.d20++;
        break;

      case "d12":
        this.d12++;
        break;

      case "d10":
        this.d10++;
        break;
      
      case "d8":
        this.d8++;
        break;
      
      case "d6":
        this.d6++;
        break;
      
      case "d4":
        this.d4++;
        break;
      
      case "d3":
        this.d3++;
        break;
      
      case "d2":
        this.d2++;
        break;

      default:
        break;

    }

    if (this.d100 !== 0){
      this.diceString = this.diceString + this.d100 + "d100+";
    }
    if (this.d20 !== 0){
      this.diceString = this.diceString + this.d20 + "d20+";
    }
    if (this.d12 !== 0){
      this.diceString = this.diceString + this.d12 + "d12+";
    }
    if (this.d10 !== 0){
      this.diceString = this.diceString + this.d10 + "d10+";
    }
    if (this.d8 !== 0){
      this.diceString = this.diceString + this.d8 + "d8+";
    }
    if (this.d6 !== 0){
      this.diceString = this.diceString + this.d6 + "d6+";
    }
    if (this.d4 !== 0){
      this.diceString = this.diceString + this.d4 + "d4+";
    }
    if (this.d3 !== 0){
      this.diceString = this.diceString + this.d3 + "d3+";
    }
    if (this.d2 !== 0){
      this.diceString = this.diceString + this.d2 + "d2+";
    }

  }

}
