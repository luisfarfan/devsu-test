import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/domain';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[] | null = [];
}
