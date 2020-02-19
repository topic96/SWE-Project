import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DijalogNoviRoditeljComponent } from './dijalog-novi-roditelj.component';

describe('DijalogNoviRoditeljComponent', () => {
  let component: DijalogNoviRoditeljComponent;
  let fixture: ComponentFixture<DijalogNoviRoditeljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DijalogNoviRoditeljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DijalogNoviRoditeljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
