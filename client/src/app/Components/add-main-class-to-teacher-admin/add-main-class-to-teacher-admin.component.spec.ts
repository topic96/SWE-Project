import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainClassToTeacherAdminComponent } from './add-main-class-to-teacher-admin.component';

describe('AddMainClassToTeacherAdminComponent', () => {
  let component: AddMainClassToTeacherAdminComponent;
  let fixture: ComponentFixture<AddMainClassToTeacherAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainClassToTeacherAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainClassToTeacherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
