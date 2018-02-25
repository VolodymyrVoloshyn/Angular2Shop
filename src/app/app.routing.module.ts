import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    //   {
    //     path: 'messages',
    //     component: MessagesComponent,
    //     outlet: 'popup'
    //   },
    {
        path: 'cart',
        component: CartComponent,
        data: { title: 'Cart' }
    },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //     data: { title: 'Login' }
    //   },
    //   {
    //     path: 'admin',
    //     canLoad: [AuthGuard],
    //     loadChildren: 'app/admin/admin.module#AdminModule',
    //     data: { title: 'Admin' }
    //   },
    //   {
    //     path: 'users',
    //     loadChildren: 'app/users/users.module#UsersModule',
    //     data: {
    //       preload: false,
    //       title: 'Users'
    //     }
    //   },


    // {
    //     path: 'products',
    //     loadChildren: 'app/products/products.module#ProductsModule',
    // // ?    pathMatch: 'full'
    //   },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },

    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];

export const appRouterComponents = [PageNotFoundComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
