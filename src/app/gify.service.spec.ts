import { TestBed, inject } from '@angular/core/testing';

import { GifyService } from './gify.service';

describe('GifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifyService]
    });
  });

  it('should be created', inject([GifyService], (service: GifyService) => {
    expect(service).toBeTruthy();
  }));
});
