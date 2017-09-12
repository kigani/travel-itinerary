import { TestBed, inject } from '@angular/core/testing';

import { TravelDetailsService } from './travel-details.service';

describe('TravelDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelDetailsService]
    });
  });

  it('should be created', inject([TravelDetailsService], (service: TravelDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
