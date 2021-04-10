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
export class DiceCardComponent {
  @Input() public dieType: number;
  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<RollCardComponent>>();

  constructor(private CFR: ComponentFactoryResolver) {}

  createComponent(result: number) {
    let componentFactory = this.CFR.resolveComponentFactory(RollCardComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;
    childComponent.rollResult = result;
    childComponent.rollCrit = this.dieType;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(key: number) {
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    )[0];

    //let vcrIndex: number = this.VCR.indexOf(componentRef as any);
    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView); 

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }

  rollDice(die: number) {
    let rollResult = Math.floor(Math.random() * die) + 1;
    return rollResult;
  }

}
