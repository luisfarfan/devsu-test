import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { CreateProductService } from 'src/app/core/application/create-product.service';
import { EditProductService } from 'src/app/core/application/edit-product.service';
import { VerifyProductService } from 'src/app/core/application/verify-product.service';
import { Product } from 'src/app/core/domain';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { ProductRepository } from 'src/app/core/adapters';
import { MockProductRepositoryService } from 'src/app/core/infraestructure/repositories/mock-product.repository.service';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let mockCreateProductService: CreateProductService,
    mockEditProductService: EditProductService,
    mockVerifyProductService: VerifyProductService,
    mockRouter: any;

  let mockProduct = {
    id: '1234',
    name: 'visa',
    description: 'visa',
    logo: 'Logo 1',
    date_release: '2022-01-01',
    date_revision: '2022-01-01',
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
        {
          provide: VerifyProductService,
          useValue: {
            execute: (id: string) => {
              return of(false);
            },
          },
        },
        FormBuilder,
        CreateProductService,
        EditProductService,
        { provide: Router, useValue: mockRouter },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    mockCreateProductService = TestBed.inject(CreateProductService);
    mockEditProductService = TestBed.inject(EditProductService);
    mockVerifyProductService = TestBed.inject(VerifyProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.form.controls.id.value).toBe('');
  });

  it('should set product values when product input changes', () => {
    component.product = mockProduct;
    component.ngOnChanges({
      product: new SimpleChange(null, mockProduct, true),
    });
    expect(component.form.controls.id.value).toBe(mockProduct.id);
  });

  it('should call createProductService when saving a new product', () => {
    const spyCreateService = spyOn(
      mockCreateProductService,
      'execute'
    ).and.callThrough();
    component.form.setValue({
      id: '1234',
      name: 'visa',
      description: 'visa',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    });
    component.save();
    expect(spyCreateService).toHaveBeenCalled();
  });

  it('should call editProductService when editing an existing product', () => {
    component.product = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'Logo 1',
      date_release: '2022-01-01',
      date_revision: '2022-01-01',
    };
    const spyEditService = spyOn(mockEditProductService, 'execute')
      .withArgs(mockProduct)
      .and.callThrough();
    component.form.setValue({ ...mockProduct });
    component.save();
    expect(component.form.valid).toBeTrue();
    expect(spyEditService).toHaveBeenCalled();
    expect(component.modalOpened).toBeFalse();
  });

  it('should handle modalOpened when product is created', () => {
    const createSpy = spyOn(mockCreateProductService, 'execute')
      .withArgs(mockProduct)
      .and.callThrough();
    component.form.setValue({
      ...mockProduct,
    });
    component.save();
    expect(component.modalOpened).toBeFalse();
    expect(createSpy).toHaveBeenCalled();
  });

  it('should navigate to root when goToList is called', () => {
    component.goToList();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should format date correctly', () => {
    const isoString = '2022-01-01T00:00:00.000Z';
    const formattedDate = component.formatDate(isoString);
    expect(formattedDate).toBe('2022-01-01');
  });
});
