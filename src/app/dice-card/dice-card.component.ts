import {   
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewRef, 
  Component, 
  OnInit, 
  Input} from '@angular/core';
import { RollCardComponent } from '../roll-card/roll-card.component';

@Component({
  selector: 'app-dice-card',
  templateUrl: './dice-card.component.html',
  styleUrls: ['./dice-card.component.scss']
})
export class DiceCardComponent implements OnInit {

  @Input() public dieType: number;

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<RollCardComponent>>()

  constructor(private CFR: ComponentFactoryResolver) {}

  createComponent(result: number) {
    let componentFactory = this.CFR.resolveComponentFactory(RollCardComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.rollResult = result;
    childComponent.parentRef = this;
    

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(key: number) {
    console.log("remove key: " + key);
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    )[0];


    console.log("componentRef" + componentRef);

    let vcrIndex: number = this.VCR.indexOf(componentRef as any);

    // removing component from container
    console.log("Removing: " + vcrIndex);
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }

  ngOnInit(): void {
  }

  rollDice(die: number) {
    let rollResult = Math.floor(Math.random() * die) + 1;
    console.log(rollResult);
    return rollResult;
  }

}
