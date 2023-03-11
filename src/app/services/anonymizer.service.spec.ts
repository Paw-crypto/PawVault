import { TestBed, inject } from '@angular/core/testing';

import { AnonymizerService } from './anonymizer.service';

describe('AnonymizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonymizerService]
    });
  });

  it('should be created', inject([AnonymizerService], (service: AnonymizerService) => {
    expect(service).toBeTruthy();
  }));
});
