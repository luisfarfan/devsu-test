import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductRepository } from '../../adapters';
import { Product } from '../../domain';
import { Observable } from 'rxjs';
import { ProductEndpoints } from '../config/product.endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiProductRepository extends ProductRepository {
  constructor(private http: HttpClient) {
    super();
  }

  override getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      authorId: 50
    });

    const requestOptions = { headers: headers };
    return this.http.get<Product[]>(ProductEndpoints.getAll, requestOptions);
  }
}
