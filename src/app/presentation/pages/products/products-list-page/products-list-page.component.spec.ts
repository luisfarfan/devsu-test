import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRepository } from 'src/app/core/adapters';
import { MockProductRepositoryService } from 'src/app/core/infraestructure/repositories/mock-product.repository.service';

describe('ProductsListPageComponent', () => {
  let component: ProductsListPageComponent;
  let fixture: ComponentFixture<ProductsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsListPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
      ],
    });
    fixture = TestBed.createComponent(ProductsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
