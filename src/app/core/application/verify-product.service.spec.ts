import { TestBed } from '@angular/core/testing';

import { VerifyProductService } from './verify-product.service';

describe('VerifyProductService', () => {
  let service: VerifyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
