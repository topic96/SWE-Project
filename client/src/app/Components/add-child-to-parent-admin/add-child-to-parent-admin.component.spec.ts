import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildToParentAdminComponent } from './add-child-to-parent-admin.component';

describe('AddChildToParentAdminComponent', () => {
  let component: AddChildToParentAdminComponent;
  let fixture: ComponentFixture<AddChildToParentAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChildToParentAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildToParentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
