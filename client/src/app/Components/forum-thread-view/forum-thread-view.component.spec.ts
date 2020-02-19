import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadViewComponent } from './forum-thread-view.component';

describe('ForumThreadViewComponent', () => {
  let component: ForumThreadViewComponent;
  let fixture: ComponentFixture<ForumThreadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
