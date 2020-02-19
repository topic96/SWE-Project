import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledIzmenaBrisanjeProfilaComponent } from './pregled-izmena-brisanje-profila.component';

describe('PregledIzmenaBrisanjeProfilaComponent', () => {
  let component: PregledIzmenaBrisanjeProfilaComponent;
  let fixture: ComponentFixture<PregledIzmenaBrisanjeProfilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledIzmenaBrisanjeProfilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledIzmenaBrisanjeProfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
