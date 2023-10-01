import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';
import { Product } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class EditProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(product: Product) {
    return this.productRepository.editProduct(product);
  }
}
