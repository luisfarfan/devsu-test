import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/presentation/modules/products/products.module';
import { GetProductsService } from 'src/app/core/application/get-products.service';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, ProductsModule],
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss'],
})
export class ProductsListPageComponent {
  $products = this.getProductsService.execute();

  constructor(private getProductsService: GetProductsService) {}
}
