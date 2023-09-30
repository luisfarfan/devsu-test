import { Injectable } from '@angular/core';
import { Product } from '../domain';
import { Observable } from 'rxjs';

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
}
