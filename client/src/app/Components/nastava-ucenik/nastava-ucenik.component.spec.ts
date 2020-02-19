import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavaUcenikComponent } from './nastava-ucenik.component';

describe('NastavaUcenikComponent', () => {
  let component: NastavaUcenikComponent;
  let fixture: ComponentFixture<NastavaUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavaUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavaUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
