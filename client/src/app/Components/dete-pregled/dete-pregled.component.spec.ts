import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetePregledComponent } from './dete-pregled.component';

describe('DetePregledComponent', () => {
  let component: DetePregledComponent;
  let fixture: ComponentFixture<DetePregledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetePregledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetePregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
