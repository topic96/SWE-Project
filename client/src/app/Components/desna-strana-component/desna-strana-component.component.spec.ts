import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesnaStranaComponentComponent } from './desna-strana-component.component';

describe('DesnaStranaComponentComponent', () => {
  let component: DesnaStranaComponentComponent;
  let fixture: ComponentFixture<DesnaStranaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesnaStranaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesnaStranaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
