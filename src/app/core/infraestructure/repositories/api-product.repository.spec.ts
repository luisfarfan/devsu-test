import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiProductRepository } from './api-product.repository';
import { ProductEndpoints } from '../config/product.endpoints';
import { Product } from '../../domain';

describe('ApiProductRepository', () => {
  let service: ApiProductRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiProductRepository],
    });
    service = TestBed.inject(ApiProductRepository);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products with author header', () => {
    const expectedProducts: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: 'Logo 1',
        date_release: '2022-01-01',
        date_revision: '2022-01-01',
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        logo: 'Logo 2',
        date_release: '2022-02-02',
        date_revision: '2022-02-02',
      },
    ];

    service.getProducts().subscribe((products) => {
      expect(products).toEqual(expectedProducts);
    });

    const req = httpMock.expectOne(ProductEndpoints.getAll);
    expect(req.request.method).toBe('GET');

    req.flush(expectedProducts);
  });

  it('should create product with author header', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };

    service.createProduct(mockProduct).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(ProductEndpoints.create);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockProduct);

    req.flush(mockProduct);
  });

  it('should edit product with author header', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };

    service.editProduct(mockProduct).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(ProductEndpoints.update());
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockProduct);

    req.flush(mockProduct);
  });

  it('should delete product with author header', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };

    service.deleteProduct(mockProduct.id).subscribe((product) => {
      expect(product).toEqual({} as Product);
    });

    const req = httpMock.expectOne(ProductEndpoints.delete(mockProduct.id));
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toEqual(null);

    req.flush(mockProduct);
  });

  it('should validate if product ID exist', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };

    service.verifyProductId(mockProduct.id).subscribe((exists) => {
      expect(exists).toEqual(true);
    });

    const req = httpMock.expectOne(ProductEndpoints.verifyId(mockProduct.id));
    expect(req.request.method).toBe('GET');
    expect(req.request.body).toEqual(null);

    req.flush(true);
  });
});
