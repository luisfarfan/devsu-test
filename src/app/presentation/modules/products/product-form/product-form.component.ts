import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductService } from 'src/app/core/application/create-product.service';
import { EditProductService } from 'src/app/core/application/edit-product.service';
import { VerifyProductService } from 'src/app/core/application/verify-product.service';
import { Product } from 'src/app/core/domain';
import { formatIsoDate } from 'src/app/presentation/shared/utils';
import { validateIfValidProductId } from 'src/app/presentation/shared/validators/form.validators';
import { environment } from 'src/environments/environment';

const DEFAULT_LOGO = environment.defaultLogo;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product | null = null;

  form = this._createForm();

  modalOpened = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private createProductService: CreateProductService,
    private editProductService: EditProductService,
    private verifyProductService: VerifyProductService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.setProduct(this.product);
    }
  }

  private _createForm() {
    return this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        [validateIfValidProductId(this.verifyProductService)],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      logo: [DEFAULT_LOGO, Validators.required],
      date_release: ['', [Validators.required]],
      date_revision: ['', [Validators.required]],
    });
  }

  openModal() {
    this.modalOpened = true;
  }

  save() {
    if (this.product) {
      this.editProduct();
    } else {
      this.createProduct();
    }
  }

  createProduct() {
    if (this.form.valid) {
      const product = this.form.getRawValue();
      this.createProductService.execute(product).subscribe(() => {
        this.modalOpened = false;
        this.goToList();
      });
    }
  }

  editProduct() {
    if (this.form.valid) {
      const product = this.form.getRawValue();
      this.editProductService.execute(product).subscribe(() => {
        this.modalOpened = false;
        this.goToList();
      });
    }
  }

  goToList() {
    this.router.navigate(['/']);
  }

  setProduct(product: Product) {
    const parsedDatesProduct = {
      ...product,
      date_release: formatIsoDate(product.date_release),
      date_revision: formatIsoDate(product.date_revision),
    };
    this.form.patchValue(parsedDatesProduct);
    this.form.controls.id.disable();
  }
}
