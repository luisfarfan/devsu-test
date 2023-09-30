import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/ui/search/search.component';
import { TableComponent } from 'src/app/ui/table/table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchComponent,
    TableComponent,
  ],
  exports: [ProductsListComponent, ProductFormComponent],
})
export class ProductsModule {}
