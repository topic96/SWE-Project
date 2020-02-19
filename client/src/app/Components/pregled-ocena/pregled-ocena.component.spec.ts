import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledOcenaComponent } from './pregled-ocena.component';

describe('PregledOcenaComponent', () => {
  let component: PregledOcenaComponent;
  let fixture: ComponentFixture<PregledOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
