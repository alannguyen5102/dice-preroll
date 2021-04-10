import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-die',
  templateUrl: './single-die.component.html',
  styleUrls: ['./single-die.component.scss']
})
export class SingleDieComponent implements OnInit {

  @Output() newRollEvent = new EventEmitter<number>();

  @Input() public dieType: number;
  constructor() { }

  ngOnInit(): void {
  }

  rollSingleDie() {
  
    let rollResult: number = Math.floor(Math.random() * this.dieType) + 1;
    console.log("Selected: " + rollResult);
    this.newRollEvent.emit(rollResult);
  }
}
