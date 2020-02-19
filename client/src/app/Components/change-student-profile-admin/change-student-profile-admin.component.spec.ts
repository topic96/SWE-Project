import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStudentProfileAdminComponent } from './change-student-profile-admin.component';

describe('ChangeStudentProfileAdminComponent', () => {
  let component: ChangeStudentProfileAdminComponent;
  let fixture: ComponentFixture<ChangeStudentProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStudentProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStudentProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
