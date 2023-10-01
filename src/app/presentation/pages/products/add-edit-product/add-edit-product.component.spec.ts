import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductComponent } from './add-edit-product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRepository } from 'src/app/core/adapters';
import { MockProductRepositoryService } from 'src/app/core/infraestructure/repositories/mock-product.repository.service';
import { Product } from 'src/app/core/domain';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AddEditProductComponent', () => {
  let component: AddEditProductComponent;
  let fixture: ComponentFixture<AddEditProductComponent>;
  let router: Router;

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    description: 'This is a test product',
    logo: 'test_logo.png',
    date_release: '2022-01-01',
    date_revision: '2022-01-02',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditProductComponent, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
        { provide: Router, useValue: { getCurrentNavigation: () => ({ extras: { state: { product: mockProduct } } }) } }
      ],
    });
    fixture = TestBed.createComponent(AddEditProductComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve selected product from router navigation extras', () => {
    fixture.detectChanges();
    expect(component.selectedProduct).toEqual(mockProduct);
  });
});
