import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParentProfileAdminComponent } from './change-parent-profile-admin.component';

describe('ChangeParentProfileAdminComponent', () => {
  let component: ChangeParentProfileAdminComponent;
  let fixture: ComponentFixture<ChangeParentProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeParentProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeParentProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
