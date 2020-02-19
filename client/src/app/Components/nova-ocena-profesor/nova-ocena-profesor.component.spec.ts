import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaOcenaProfesorComponent } from './nova-ocena-profesor.component';

describe('NovaOcenaProfesorComponent', () => {
  let component: NovaOcenaProfesorComponent;
  let fixture: ComponentFixture<NovaOcenaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaOcenaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaOcenaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
