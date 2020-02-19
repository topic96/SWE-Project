import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIBStudentComponent } from './pibstudent.component';

describe('PIBStudentComponent', () => {
  let component: PIBStudentComponent;
  let fixture: ComponentFixture<PIBStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIBStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIBStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
