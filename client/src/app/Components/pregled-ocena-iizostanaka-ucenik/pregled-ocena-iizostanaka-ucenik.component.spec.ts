import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledOcenaIIzostanakaUcenikComponent } from './pregled-ocena-iizostanaka-ucenik.component';

describe('PregledOcenaIIzostanakaUcenikComponent', () => {
  let component: PregledOcenaIIzostanakaUcenikComponent;
  let fixture: ComponentFixture<PregledOcenaIIzostanakaUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledOcenaIIzostanakaUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledOcenaIIzostanakaUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
