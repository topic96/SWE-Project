import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeProfilaComponent } from './dodavanje-profila.component';

describe('DodavanjeProfilaComponent', () => {
  let component: DodavanjeProfilaComponent;
  let fixture: ComponentFixture<DodavanjeProfilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeProfilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeProfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
