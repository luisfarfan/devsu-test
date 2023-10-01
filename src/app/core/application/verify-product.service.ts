import { Injectable } from '@angular/core';
import { ProductRepository } from '../adapters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(id: string): Observable<boolean> {
    return this.productRepository.verifyProductId(id);
  }
}
