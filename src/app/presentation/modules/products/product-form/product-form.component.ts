import { Component, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { CreateProductService } from 'src/app/core/application/create-product.service';
import { Product } from 'src/app/core/domain';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Input() product: Product | null = null;

  form = this._createForm();

  constructor(
    private fb: NonNullableFormBuilder,
    private createProductService: CreateProductService
  ) {}

  private _createForm() {
    return this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
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
      logo: ['', Validators.required],
      date_release: ['', [Validators.required]],
      date_revision: ['', [Validators.required]],
    });
  }

  createProduct() {
    if (this.form.valid) {
      const product = this.form.getRawValue();
      this.createProductService.execute(product).subscribe();
    }
  }
}
