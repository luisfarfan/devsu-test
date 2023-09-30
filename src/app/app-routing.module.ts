import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPageComponent } from './presentation/pages/products/products-list-page/products-list-page.component';
import { AddEditProductComponent } from './presentation/pages/products/add-edit-product/add-edit-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsListPageComponent,
      },
      {
        path: 'create',
        component: AddEditProductComponent,
      },
      {
        path: 'edit/:id',
        component: AddEditProductComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
