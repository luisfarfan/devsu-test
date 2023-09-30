import { TestBed } from '@angular/core/testing';

import { ApiProductRepository } from './api-product.repository';

describe('ApiProductRepository', () => {
  let service: ApiProductRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProductRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
