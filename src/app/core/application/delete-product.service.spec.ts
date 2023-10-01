import { TestBed } from '@angular/core/testing';

import { DeleteProductService } from './delete-product.service';
import { ProductRepository } from '../adapters';
import { MockProductRepositoryService } from '../infraestructure/repositories/mock-product.repository.service';
import { Product } from '../domain';

describe('DeleteProductService', () => {
  let service: DeleteProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
      ],
    });
    service = TestBed.inject(DeleteProductService);
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

    const result = service.execute(product.id);

    result.subscribe((products) => {
      expect(products).toEqual({} as Product);
    });
  });
});
