import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpisOcenaProfesorComponent } from './upis-ocena-profesor.component';

describe('UpisOcenaProfesorComponent', () => {
  let component: UpisOcenaProfesorComponent;
  let fixture: ComponentFixture<UpisOcenaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpisOcenaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpisOcenaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
