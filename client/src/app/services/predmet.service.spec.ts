import { TestBed, inject } from '@angular/core/testing';

import { PredmetService } from './predmet.service';

describe('PredmetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredmetService]
    });
  });

  it('should be created', inject([PredmetService], (service: PredmetService) => {
    expect(service).toBeTruthy();
  }));
});
