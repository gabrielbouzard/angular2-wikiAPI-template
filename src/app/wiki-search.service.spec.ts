import { TestBed, inject } from '@angular/core/testing';

import { WikiService } from './wiki.service';

describe('WikiSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiService]
    });
  });

  it('should be created', inject([WikiService], (service: WikiService) => {
    expect(service).toBeTruthy();
  }));
});
