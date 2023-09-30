import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ProductRepository } from './app/core/adapters';
import { ApiProductRepository } from './app/core/infraestructure/repositories/api-product.repository';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: ProductRepository,
      useClass: ApiProductRepository,
    },
    importProvidersFrom(BrowserModule, HttpClientModule, AppRoutingModule),
  ],
}).catch((err) => console.error(err));
