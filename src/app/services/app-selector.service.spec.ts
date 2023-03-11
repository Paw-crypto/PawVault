import { TestBed, inject } from '@angular/core/testing';

import { AppSelectorService } from './appselector.service';

describe('AppSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSelectorService]
    });
  });

  it('should be created', inject([AppSelectorService], (service: AppSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
