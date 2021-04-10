import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerollerComponent } from './preroller.component';

describe('PrerollerComponent', () => {
  let component: PrerollerComponent;
  let fixture: ComponentFixture<PrerollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrerollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrerollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
