import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorUpisOceneNapomeneIzostankaComponent } from './profesor-upis-ocene-napomene-izostanka.component';

describe('ProfesorUpisOceneNapomeneIzostankaComponent', () => {
  let component: ProfesorUpisOceneNapomeneIzostankaComponent;
  let fixture: ComponentFixture<ProfesorUpisOceneNapomeneIzostankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorUpisOceneNapomeneIzostankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorUpisOceneNapomeneIzostankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
