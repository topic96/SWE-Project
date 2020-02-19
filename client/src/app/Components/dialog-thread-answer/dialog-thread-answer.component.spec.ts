import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogThreadAnswerComponent } from './dialog-thread-answer.component';

describe('DialogThreadAnswerComponent', () => {
  let component: DialogThreadAnswerComponent;
  let fixture: ComponentFixture<DialogThreadAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogThreadAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThreadAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
