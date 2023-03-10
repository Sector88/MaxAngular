import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAssignmentComponent } from './unit-assignment.component';

describe('UnitAssignmentComponent', () => {
  let component: UnitAssignmentComponent;
  let fixture: ComponentFixture<UnitAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
