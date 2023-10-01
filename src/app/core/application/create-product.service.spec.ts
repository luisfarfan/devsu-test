import { TestBed } from '@angular/core/testing';

import { CreateProductService } from './create-product.service';
import { Product } from '../domain';
import { ProductRepository } from '../adapters';
import { MockProductRepositoryService } from '../infraestructure/repositories/mock-product.repository.service';

describe('CreateProductService', () => {
  let service: CreateProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
      ],
    });
    service = TestBed.inject(CreateProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the result of calling createProduct method of productRepository with the given product parameter', () => {
    const product: Product = {
      id: '1',
      name: 'Test Product',
      description: 'Test Description',
      logo: 'test_logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };

    const result = service.execute(product);

    result.subscribe((products) => {
      expect(products).toEqual(product);
    });
  });
});
