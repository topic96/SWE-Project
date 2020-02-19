import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoObavestenjeComponent } from './novo-obavestenje.component';

describe('NovoObavestenjeComponent', () => {
  let component: NovoObavestenjeComponent;
  let fixture: ComponentFixture<NovoObavestenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoObavestenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoObavestenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
