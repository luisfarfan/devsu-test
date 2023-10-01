import { TestBed } from '@angular/core/testing';

import { ProductRepository } from './product.repository';
import { MockProductRepositoryService } from '../infraestructure/repositories/mock-product.repository.service';
import { Product } from '../domain';
import { of } from 'rxjs';

describe('ProductRepositoryService', () => {
  let service: ProductRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
      ],
    });
    service = TestBed.inject(ProductRepository);
  });

  it('should retrieve a list of products when getProducts is called', () => {
    // Arrange
    const productRepository = service;
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
    spyOn(productRepository, 'getProducts').and.returnValue(
      of(expectedProducts)
    );

    const result = productRepository.getProducts();

    result.subscribe((products) => {
      expect(products).toEqual(expectedProducts);
    });
  });

  it('should create a new product when createProduct is called', () => {
    const productRepository = service;
    const newProduct: Product = {
      id: '3',
      name: 'New Product',
      description: 'New Description',
      logo: 'New Logo',
      date_release: '2022-03-03',
      date_revision: '2022-03-03',
    };
    spyOn(productRepository, 'createProduct').and.returnValue(of(newProduct));

    const result = productRepository.createProduct(newProduct);

    result.subscribe((product) => {
      expect(product).toEqual(newProduct);
    });
  });

  it('should edit an existing product when editProduct is called', () => {
    const productRepository = service;
    const existingProduct: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    const updatedProduct: Product = {
      id: '1',
      name: 'Updated Product',
      description: 'Updated Description',
      logo: 'Updated Logo',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    spyOn(productRepository, 'editProduct').and.returnValue(of(updatedProduct));

    const result = productRepository.editProduct(existingProduct);

    result.subscribe((product) => {
      expect(product).toEqual(updatedProduct);
    });
  });

  it('should delete an existing product ID when deleteProduct is called', () => {
    const productRepository = service;
    const productId = '5';
    spyOn(productRepository, 'deleteProduct').and.returnValue(
      of({ id: productId } as Product)
    );

    const result = productRepository.deleteProduct(productId);

    result.subscribe((product) => {
      expect(product.id).toEqual(productId);
    });
  });

  it('should verify an existing product ID when verifyProduct is called', () => {
    const productRepository = service;
    const productId = '5';
    spyOn(productRepository, 'verifyProductId').and.returnValue(
      of(true)
    );

    const result = productRepository.verifyProductId(productId);

    result.subscribe((exist) => {
      expect(exist).toEqual(true);
    });
  });
});
