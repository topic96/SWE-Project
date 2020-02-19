import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObavestenjeComponentComponent } from './obavestenje-component.component';

describe('ObavestenjeComponentComponent', () => {
  let component: ObavestenjeComponentComponent;
  let fixture: ComponentFixture<ObavestenjeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObavestenjeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObavestenjeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
