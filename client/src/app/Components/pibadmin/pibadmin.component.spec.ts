import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIBAdminComponent } from './pibadmin.component';

describe('PIBAdminComponent', () => {
  let component: PIBAdminComponent;
  let fixture: ComponentFixture<PIBAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIBAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIBAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
