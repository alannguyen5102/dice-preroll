import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-die',
  templateUrl: './single-die.component.html',
  styleUrls: ['./single-die.component.scss']
})
export class SingleDieComponent implements OnInit {

  @Output() newRollEvent = new EventEmitter<number>();
  @Output() newTypeEvent = new EventEmitter<string>();

  @Input() public dieType: number;
  constructor() { }

  ngOnInit(): void {
  }

  rollSingleDie() {
  
    let rollResult: number = Math.floor(Math.random() * this.dieType) + 1;
    this.newRollEvent.emit(rollResult);
    this.newTypeEvent.emit("d" + this.dieType);
  }
}
