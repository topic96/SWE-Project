import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIBTeacherComponent } from './pibteacher.component';

describe('PIBTeacherComponent', () => {
  let component: PIBTeacherComponent;
  let fixture: ComponentFixture<PIBTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIBTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIBTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
