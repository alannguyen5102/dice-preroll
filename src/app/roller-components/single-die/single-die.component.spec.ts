import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDieComponent } from './single-die.component';

describe('SingleDieComponent', () => {
  let component: SingleDieComponent;
  let fixture: ComponentFixture<SingleDieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
