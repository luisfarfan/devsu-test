import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRepository } from 'src/app/core/adapters';
import { ApiProductRepository } from 'src/app/core/infraestructure/repositories/api-product.repository';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
