import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(id: string) {
    return this.productRepository.deleteProduct(id);
  }
}
