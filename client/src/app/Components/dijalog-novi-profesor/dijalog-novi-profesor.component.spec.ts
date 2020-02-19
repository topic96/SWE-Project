import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DijalogNoviProfesorComponent } from './dijalog-novi-profesor.component';

describe('DijalogNoviProfesorComponent', () => {
  let component: DijalogNoviProfesorComponent;
  let fixture: ComponentFixture<DijalogNoviProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DijalogNoviProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DijalogNoviProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
