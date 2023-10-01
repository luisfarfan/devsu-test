import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductComponent } from './add-edit-product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRepository } from 'src/app/core/adapters';
import { MockProductRepositoryService } from 'src/app/core/infraestructure/repositories/mock-product.repository.service';

describe('AddEditProductComponent', () => {
  let component: AddEditProductComponent;
  let fixture: ComponentFixture<AddEditProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditProductComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProductRepository,
          useClass: MockProductRepositoryService,
        },
      ],
    });
    fixture = TestBed.createComponent(AddEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
