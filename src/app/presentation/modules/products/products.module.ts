import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRepository } from 'src/app/core/adapters';
import { ApiProductRepository } from 'src/app/core/infraestructure/repositories/api-product.repository';
import { SearchComponent } from 'src/app/ui/search/search.component';
import { TableComponent } from 'src/app/ui/table/table.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, SearchComponent, TableComponent],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
