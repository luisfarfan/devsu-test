import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';
import { Product } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class EditProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(id: string, product: Product) {
    return this.productRepository.editProduct(id, product);
  }
}
