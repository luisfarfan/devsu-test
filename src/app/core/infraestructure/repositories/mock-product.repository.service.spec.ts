import { TestBed } from '@angular/core/testing';

import { MockProductRepositoryService } from './mock-product.repository.service';
import { Product } from '../../domain';

describe('MockProductRepositoryService', () => {
  let service: MockProductRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProductRepositoryService],
    });
    service = TestBed.inject(MockProductRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty array', () => {
    const result = service.getProducts();
    result.subscribe((products) => {
      expect(products).toEqual([]);
    });
  });

  it('should create a product successfully', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    service.createProduct(mockProduct).subscribe((result) => {
      expect(result).toEqual(mockProduct);
    });
  });

  it('should edit a product successfully', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    service.editProduct(mockProduct).subscribe((result) => {
      expect(result).toEqual(mockProduct);
    });
  });

  it('should delete a product', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    service.deleteProduct(mockProduct.id).subscribe((result) => {
      expect(result).toEqual({} as Product);
    });
  });

  it('should verify product ID a product', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    service.verifyProductId(mockProduct.id).subscribe((result) => {
      expect(result).toEqual(true);
    });
  });
});
