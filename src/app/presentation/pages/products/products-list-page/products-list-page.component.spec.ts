import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRepository } from 'src/app/core/adapters';
import { MockProductRepositoryService } from 'src/app/core/infraestructure/repositories/mock-product.repository.service';
import { GetProductsService } from 'src/app/core/application/get-products.service';
import { DeleteProductService } from 'src/app/core/application/delete-product.service';
import { of } from 'rxjs';
import { Product } from 'src/app/core/domain';

describe('ProductsListPageComponent', () => {
  let component: ProductsListPageComponent;
  let fixture: ComponentFixture<ProductsListPageComponent>;
  let getService: GetProductsService;
  let deleteService: DeleteProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsListPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
        GetProductsService,
        DeleteProductService,
      ],
    });
    fixture = TestBed.createComponent(ProductsListPageComponent);
    component = fixture.componentInstance;
    getService = TestBed.inject(GetProductsService);
    deleteService = TestBed.inject(DeleteProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on initialization', () => {
    const spyService = spyOn(getService, 'execute').and.callThrough();

    // Call ngOnInit
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(spyService).toHaveBeenCalled();
    });
  });

  it('should delete product and reload products on deleteProduct() call', () => {
    component.selectedProduct = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: '',
      date_release: '',
      date_revision: '',
    };

    const spyDelete = spyOn(deleteService, 'execute')
      .withArgs('1')
      .and.callThrough();

    const spyGet = spyOn(getService, 'execute').and.callThrough();

    component.deleteProduct();

    expect(spyDelete).toHaveBeenCalledWith('1');

    expect(spyGet).toHaveBeenCalled();
  });

  it('should handle no products returned from getProductsService', () => {
    const expectedProducts = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: '',
        date_release: '',
        date_revision: '',
      },
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: '',
        date_release: '',
        date_revision: '',
      },
    ];
    const spyGet = spyOn(getService, 'execute')
      .and.returnValue(of(expectedProducts))
      .and.callThrough();

    component.loadProducts();

    fixture.detectChanges();

    expect(spyGet).toHaveBeenCalled();

    component.$products.subscribe((products) => {
      expect(products.length).toBe(0);
      expect(products).toEqual([]);
    });
  });

  it('should set openModal to true when called with a valid product', () => {
    const product: Product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'logo1.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-02',
    };

    component.openModalToDeleteProduct(product);

    expect(component.openModal).toBe(true);
  });
});
