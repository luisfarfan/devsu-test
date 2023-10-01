import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/presentation/modules/products/products.module';
import { GetProductsService } from 'src/app/core/application/get-products.service';
import { DeleteProductService } from 'src/app/core/application/delete-product.service';
import { Subject, switchMap, startWith } from 'rxjs';
import { ConfirmModalComponent } from 'src/app/ui/confirm-modal/confirm-modal.component';
import { Product } from 'src/app/core/domain';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, ProductsModule, ConfirmModalComponent],
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss'],
})
export class ProductsListPageComponent implements AfterViewInit {
  private loadSubject = new Subject<void>();

  openModal = false;

  selectedProduct: Product | null = null;

  $products = this.loadSubject.pipe(
    switchMap(() => this.getProductsService.execute())
  );

  constructor(
    private getProductsService: GetProductsService,
    private deleteProductsService: DeleteProductService
  ) {}

  ngAfterViewInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loadSubject.next();
  }

  openModalToDeleteProduct(product: Product) {
    this.openModal = true;
    this.selectedProduct = product;
  }

  deleteProduct() {
    this.deleteProductsService
      .execute(this.selectedProduct?.id as string)
      .subscribe(() => {
        console.log('Product deleted');
        this.loadProducts();
      });
  }
}
