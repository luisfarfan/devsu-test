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

  private _createAuthorHeader() {
    const headers = new HttpHeaders({
      authorId: 50,
    });

    const requestOptions = { headers: headers };

    return requestOptions;
  }

  override getProducts(): Observable<Product[]> {
    const requestOptions = this._createAuthorHeader();
    return this.http.get<Product[]>(ProductEndpoints.getAll, requestOptions);
  }

  override createProduct(product: Product): Observable<Product> {
    const requestOptions = this._createAuthorHeader();
    return this.http.post<Product>(
      ProductEndpoints.create,
      product,
      requestOptions
    );
  }

  override editProduct(product: Product): Observable<Product> {
    const requestOptions = this._createAuthorHeader();
    return this.http.put<Product>(
      ProductEndpoints.update(),
      product,
      requestOptions
    );
  }

  override deleteProduct(id: string): Observable<Product> {
    const requestOptions = this._createAuthorHeader();
    return this.http
      .delete<Product>(ProductEndpoints.delete(id), {
        ...requestOptions,
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
    const requestOptions = this._createAuthorHeader();
    return this.http
      .get<boolean>(ProductEndpoints.verifyId(id), requestOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }
}
