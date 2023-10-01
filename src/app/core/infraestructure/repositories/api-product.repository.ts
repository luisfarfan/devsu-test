import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductRepository } from '../../adapters';
import { Product } from '../../domain';
import { Observable, map, tap } from 'rxjs';
import { ProductEndpoints } from '../config/product.endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiProductRepository extends ProductRepository {
  constructor(private http: HttpClient) {
    super();
  }

  override getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ProductEndpoints.getAll);
  }

  override createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(ProductEndpoints.create, product);
  }

  override editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(ProductEndpoints.update(), product);
  }

  override deleteProduct(id: string): Observable<Product> {
    return this.http
      .delete<Product>(ProductEndpoints.delete(id), {
        observe: 'response',
        responseType: 'text' as 'json',
      })
      .pipe(
        map(() => {
          return {} as unknown as Product;
        })
      );
  }

  override verifyProductId(id: string): Observable<boolean> {
    return this.http.get<boolean>(ProductEndpoints.verifyId(id)).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }
}
