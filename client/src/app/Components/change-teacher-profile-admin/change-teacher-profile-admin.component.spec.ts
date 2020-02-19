import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTeacherProfileAdminComponent } from './change-teacher-profile-admin.component';

describe('ChangeTeacherProfileAdminComponent', () => {
  let component: ChangeTeacherProfileAdminComponent;
  let fixture: ComponentFixture<ChangeTeacherProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTeacherProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTeacherProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
