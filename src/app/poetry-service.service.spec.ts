import { TestBed } from '@angular/core/testing';

import { PoetryServiceService } from './poetry-service.service';

describe('PoetryServiceService', () => {
  let service: PoetryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
