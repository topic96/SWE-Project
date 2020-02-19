import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaNapomenaProfesorComponent } from './nova-napomena-profesor.component';

describe('NovaNapomenaProfesorComponent', () => {
  let component: NovaNapomenaProfesorComponent;
  let fixture: ComponentFixture<NovaNapomenaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaNapomenaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaNapomenaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
