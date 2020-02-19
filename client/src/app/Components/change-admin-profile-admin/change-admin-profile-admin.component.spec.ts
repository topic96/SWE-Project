import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAdminProfileAdminComponent } from './change-admin-profile-admin.component';

describe('ChangeAdminProfileAdminComponent', () => {
  let component: ChangeAdminProfileAdminComponent;
  let fixture: ComponentFixture<ChangeAdminProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAdminProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAdminProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
