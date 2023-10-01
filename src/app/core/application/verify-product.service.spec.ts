import { TestBed } from '@angular/core/testing';

import { VerifyProductService } from './verify-product.service';
import { ProductRepository } from '../adapters';
import { of } from 'rxjs';

describe('VerifyProductService', () => {
  let service: VerifyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useValue: {
            verifyProductId: () => {
              return of(true);
            },
          },
        },
      ],
    });
    service = TestBed.inject(VerifyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the result of calling createProduct method of productRepository with the given product parameter', () => {
    const productId = '5';
    const result = service.execute(productId);

    result.subscribe((exists) => {
      expect(exists).toEqual(true);
    });
  });
});
