import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledDeceRoditeljComponent } from './pregled-dece-roditelj.component';

describe('PregledDeceRoditeljComponent', () => {
  let component: PregledDeceRoditeljComponent;
  let fixture: ComponentFixture<PregledDeceRoditeljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledDeceRoditeljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledDeceRoditeljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
