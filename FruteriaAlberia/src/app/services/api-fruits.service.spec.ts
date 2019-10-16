import { TestBed } from '@angular/core/testing';

import { ApiFruitsService } from './api-fruits.service';

describe('ApiFruitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFruitsService = TestBed.get(ApiFruitsService);
    expect(service).toBeTruthy();
  });
});
