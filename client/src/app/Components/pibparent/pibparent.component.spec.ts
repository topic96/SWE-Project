import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIBParentComponent } from './pibparent.component';

describe('PIBParentComponent', () => {
  let component: PIBParentComponent;
  let fixture: ComponentFixture<PIBParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIBParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIBParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
