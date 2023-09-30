import { Injectable } from '@angular/core';
import { Product } from '../domain';
import { Observable } from 'rxjs';

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract createProduct(product: Product): Observable<Product>;
  abstract editProduct(id: string, product: Product): Observable<Product>;
  abstract deleteProduct(id: string): Observable<Product>;
}
