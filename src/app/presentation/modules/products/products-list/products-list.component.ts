import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/domain';
import { TableHeader } from 'src/app/ui/table/ui-table.models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnChanges {
  @Input() products: Product[] | null = [];

  filteredProducts: Product[] = [];

  querySearch = '';

  headers: TableHeader<Product>[] = [
    {
      accesor: 'id',
      label: 'ID',
    },
    {
      accesor: 'name',
      label: 'Nombre del producto',
    },
    {
      accesor: 'description',
      label: 'Descripción',
    },
    {
      accesor: 'date_release',
      label: 'Fecha de liberación',
    },
    {
      accesor: 'date_revision',
      label: 'Fecha de reestructuración',
    },
  ];

  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.products?.length) {
      this.filteredProducts = [...this.products];
    }
  }

  filterProducts(querySearch: string) {
    this.querySearch = querySearch;
    if (this.products?.length) {
      this.filteredProducts = this.querySearch
        ? this.products.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(this.querySearch.toLowerCase());
          })
        : [...this.products];
    }
  }

  goToCreate() {
    this.router.navigate(['create']);
  }

  goToEdit(product: Product) {
    this.router.navigate(['edit', product.id], { state: { product } });
  }
}
