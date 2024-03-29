import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-buttons',
  templateUrl: './auto-buttons.component.html',
  styleUrls: ['./auto-buttons.component.scss']
})
export class AutoButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  autoRoll() {
    for(var i:number = 1; i < 10; i++) {
      document.getElementById("d100").click();
      document.getElementById("d20").click();
      document.getElementById("d12").click();

      document.getElementById("d10").click();
      document.getElementById("d8").click();
      document.getElementById("d6").click();

      document.getElementById("d4").click();
      document.getElementById("d3").click();
      document.getElementById("d2").click();
    }
  }

  clearAll() {
    document.getElementById("c100").click();
    document.getElementById("c20").click();
    document.getElementById("c12").click();

    document.getElementById("c10").click();
    document.getElementById("c8").click();
    document.getElementById("c6").click();

    document.getElementById("c4").click();
    document.getElementById("c3").click();
    document.getElementById("c2").click();
    }
}
