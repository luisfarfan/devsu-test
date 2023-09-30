import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/domain';
import { TableHeader } from 'src/app/ui/table/ui-table.models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[] | null = [];

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
}
