import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ProductRepository } from './app/core/adapters';
import { ApiProductRepository } from './app/core/infraestructure/repositories/api-product.repository';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { headersInterceptor } from './app/core/infraestructure/interceptors/header.interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([headersInterceptor])),
    {
      provide: ProductRepository,
      useClass: ApiProductRepository,
    },
    importProvidersFrom(BrowserModule, HttpClientModule, AppRoutingModule),
  ],
}).catch((err) => console.error(err));
