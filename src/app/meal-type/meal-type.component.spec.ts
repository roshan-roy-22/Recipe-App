import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTypeComponent } from './meal-type.component';

describe('MealTypeComponent', () => {
  let component: MealTypeComponent;
  let fixture: ComponentFixture<MealTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealTypeComponent]
    });
    fixture = TestBed.createComponent(MealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
