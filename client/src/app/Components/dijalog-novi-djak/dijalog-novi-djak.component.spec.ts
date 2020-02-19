import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DijalogNoviDjakComponent } from './dijalog-novi-djak.component';

describe('DijalogNoviDjakComponent', () => {
  let component: DijalogNoviDjakComponent;
  let fixture: ComponentFixture<DijalogNoviDjakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DijalogNoviDjakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DijalogNoviDjakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
