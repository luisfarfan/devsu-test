import { Injectable } from '@angular/core';
import { ProductRepository } from '../../adapters';
import { Observable, of } from 'rxjs';
import { Product } from '../../domain';

@Injectable()
export class MockProductRepositoryService extends ProductRepository {

  constructor() {
    super();
  }

  override getProducts(): Observable<Product[]> {
    return of([]);
  }
  override createProduct(product: Product): Observable<Product> {
    return of(product);
  }
  override editProduct(product: Product): Observable<Product> {
    return of(product);
  }
  override deleteProduct(id: string): Observable<Product> {
    return of({} as Product);
  }

  override verifyProductId(id: string): Observable<boolean> {
    return of(true);
  }
}
