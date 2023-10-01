import { TestBed } from '@angular/core/testing';

import { MockProductRepositoryService } from './mock-product.repository.service';

describe('MockProductRepositoryService', () => {
  let service: MockProductRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProductRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
