import { TestBed, inject } from '@angular/core/testing';

import { ObavestenjeService } from './obavestenje.service';

describe('ObavestenjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObavestenjeService]
    });
  });

  it('should be created', inject([ObavestenjeService], (service: ObavestenjeService) => {
    expect(service).toBeTruthy();
  }));
});
