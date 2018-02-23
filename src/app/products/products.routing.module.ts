import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsMainComponent, ProductComponent, ProductListComponent } from '.';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsMainComponent,
    children: [
      {
        path: 'product/:productId',
        component: ProductComponent,
        resolve: {
          product: ProductResolveGuard
        }
      },
      // {
      //   path: '',
      //   component: ProductListComponent
      // }
    ],
    data: {
      title: 'Burger Shop',
      meta: [{
        name: 'description',
        content: 'Burger Shop'
      },
      {
        name: 'keywords',
        content: 'Angular 4, SPA Application, Routing'
      }]
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
