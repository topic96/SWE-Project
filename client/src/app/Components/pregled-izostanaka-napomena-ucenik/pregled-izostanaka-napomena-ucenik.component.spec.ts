import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledIzostanakaNapomenaUcenikComponent } from './pregled-izostanaka-napomena-ucenik.component';

describe('PregledIzostanakaNapomenaUcenikComponent', () => {
  let component: PregledIzostanakaNapomenaUcenikComponent;
  let fixture: ComponentFixture<PregledIzostanakaNapomenaUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledIzostanakaNapomenaUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledIzostanakaNapomenaUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
