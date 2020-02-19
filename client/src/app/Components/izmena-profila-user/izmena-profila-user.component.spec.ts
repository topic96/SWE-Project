import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaProfilaUserComponent } from './izmena-profila-user.component';

describe('IzmenaProfilaUserComponent', () => {
  let component: IzmenaProfilaUserComponent;
  let fixture: ComponentFixture<IzmenaProfilaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaProfilaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaProfilaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
