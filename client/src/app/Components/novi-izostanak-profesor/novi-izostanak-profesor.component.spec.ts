import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviIzostanakProfesorComponent } from './novi-izostanak-profesor.component';

describe('NoviIzostanakProfesorComponent', () => {
  let component: NoviIzostanakProfesorComponent;
  let fixture: ComponentFixture<NoviIzostanakProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviIzostanakProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviIzostanakProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
