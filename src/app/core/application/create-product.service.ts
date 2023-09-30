import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';
import { Product } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(product: Product) {
    return this.productRepository.createProduct(product);
  }
}
