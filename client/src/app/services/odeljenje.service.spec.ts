import { TestBed, inject } from '@angular/core/testing';

import { OdeljenjeService } from './odeljenje.service';

describe('OdeljenjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdeljenjeService]
    });
  });

  it('should be created', inject([OdeljenjeService], (service: OdeljenjeService) => {
    expect(service).toBeTruthy();
  }));
});
