import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUcenikaComponent } from './lista-ucenika.component';

describe('ListaUcenikaComponent', () => {
  let component: ListaUcenikaComponent;
  let fixture: ComponentFixture<ListaUcenikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUcenikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUcenikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
