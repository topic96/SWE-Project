import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviPredmetDialogComponent } from './novi-predmet-dialog.component';

describe('NoviPredmetDialogComponent', () => {
  let component: NoviPredmetDialogComponent;
  let fixture: ComponentFixture<NoviPredmetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviPredmetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviPredmetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
