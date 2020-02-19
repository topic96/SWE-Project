import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassesToTeacherAdminComponent } from './add-classes-to-teacher-admin.component';

describe('AddClassesToTeacherAdminComponent', () => {
  let component: AddClassesToTeacherAdminComponent;
  let fixture: ComponentFixture<AddClassesToTeacherAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassesToTeacherAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassesToTeacherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
