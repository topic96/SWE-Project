import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiAdminComponent } from './predmeti-admin.component';

describe('PredmetiAdminComponent', () => {
  let component: PredmetiAdminComponent;
  let fixture: ComponentFixture<PredmetiAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetiAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
