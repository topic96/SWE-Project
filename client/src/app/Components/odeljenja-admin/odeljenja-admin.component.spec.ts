import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjaAdminComponent } from './odeljenja-admin.component';

describe('OdeljenjaAdminComponent', () => {
  let component: OdeljenjaAdminComponent;
  let fixture: ComponentFixture<OdeljenjaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
