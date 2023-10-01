import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/presentation/modules/products/products.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/core/domain';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [CommonModule, ProductsModule, RouterModule],
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent {
  selectedProduct = this.router.getCurrentNavigation()?.extras.state?.[
    'product'
  ] as Product | null;

  constructor(private router: Router) {}
}
