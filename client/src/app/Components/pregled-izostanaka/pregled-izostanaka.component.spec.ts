import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledIzostanakaComponent } from './pregled-izostanaka.component';

describe('PregledIzostanakaComponent', () => {
  let component: PregledIzostanakaComponent;
  let fixture: ComponentFixture<PregledIzostanakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledIzostanakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledIzostanakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
