import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoButtonsComponent } from './auto-buttons.component';

describe('AutoButtonsComponent', () => {
  let component: AutoButtonsComponent;
  let fixture: ComponentFixture<AutoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
