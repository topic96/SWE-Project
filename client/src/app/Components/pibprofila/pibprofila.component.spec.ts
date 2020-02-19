import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIBProfilaComponent } from './pibprofila.component';

describe('PIBProfilaComponent', () => {
  let component: PIBProfilaComponent;
  let fixture: ComponentFixture<PIBProfilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIBProfilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIBProfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
