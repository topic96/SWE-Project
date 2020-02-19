import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOdeljenjaComponent } from './lista-odeljenja.component';

describe('ListaOdeljenjaComponent', () => {
  let component: ListaOdeljenjaComponent;
  let fixture: ComponentFixture<ListaOdeljenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOdeljenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOdeljenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
