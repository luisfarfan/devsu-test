import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/domain';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display products list with headers and data', () => {
    const mockProducts = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: 'logo1.png',
        date_release: '2021-01-01',
        date_revision: '2021-02-01',
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        logo: 'logo2.png',
        date_release: '2021-03-01',
        date_revision: '2021-04-01',
      },
    ];
    component.products = mockProducts;

    component.ngOnChanges({
      products: new SimpleChange(null, mockProducts, true),
    });

    fixture.detectChanges();

    // Assert
    expect(component.filteredProducts).toEqual(mockProducts);
  });

  it('should filter products by name and return filtered products', () => {
    const mockProducts = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        logo: 'logo1.png',
        date_release: '2021-01-01',
        date_revision: '2021-02-01',
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        logo: 'logo2.png',
        date_release: '2021-03-01',
        date_revision: '2021-04-01',
      },
    ];
    component.products = mockProducts;
    component.filterProducts('Product 2');
    expect(component.filteredProducts).toEqual([mockProducts[1]]);
  });

  it('should navigate to the "create" route', () => {
    const routerSpy = spyOn(router, 'navigate');

    component.goToCreate();

    expect(routerSpy).toHaveBeenCalledWith(['create']);
  });

  it('should navigate to the edit route with the product id and state', () => {
    const routerSpy = spyOn(router, 'navigate');
    const product: Product = {
      id: '123',
      name: 'Test Product',
      description: 'Test Description',
      logo: 'test-logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-02',
    };
    component.goToEdit(product);
    expect(routerSpy).toHaveBeenCalledWith(['edit', product.id], {
      state: { product },
    });
  });
});
