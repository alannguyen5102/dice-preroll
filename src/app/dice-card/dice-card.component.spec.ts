import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceCardComponent } from './dice-card.component';

describe('DiceCardComponent', () => {
  let component: DiceCardComponent;
  let fixture: ComponentFixture<DiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
