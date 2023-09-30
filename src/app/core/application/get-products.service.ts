import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';
import { Product } from '../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(private productRepository: ProductRepository) {}

  execute(): Observable<Product[]> {
    return this.productRepository.getProducts();
  }
}
