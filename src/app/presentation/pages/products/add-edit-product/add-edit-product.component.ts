import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/presentation/modules/products/products.module';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [CommonModule, ProductsModule],
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {

}
