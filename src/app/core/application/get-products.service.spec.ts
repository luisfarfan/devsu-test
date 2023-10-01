import { TestBed } from '@angular/core/testing';

import { GetProductsService } from './get-products.service';
import { Product } from '../domain';
import { ProductRepository } from '../adapters';
import { MockProductRepositoryService } from '../infraestructure/repositories/mock-product.repository.service';
import { of } from 'rxjs';

describe('GetProductsService', () => {
  let service: GetProductsService;
  const expectedProducts: Product[] = [
    {
      id: '1',
      name: 'Test Product',
      description: 'Test Description',
      logo: 'test_logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    },
    {
      id: '2',
      name: 'Test Product',
      description: 'Test Description',
      logo: 'test_logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useValue: {
            getProducts: () => {
              return of(expectedProducts);
            },
          },
        },
      ],
    });
    service = TestBed.inject(GetProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the result of calling createProduct method of productRepository with the given product parameter', () => {
    const result = service.execute();

    result.subscribe((products) => {
      expect(products).toEqual(expectedProducts);
      expect(products.length).toEqual(2);
    });
  });
});
