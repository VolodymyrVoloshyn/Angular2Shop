import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConstObject } from './services/model/const-object';
import { ConstantsService } from './services/constants.service';
import { CartService } from './cart/cart.service';

const constantsService = new ConstantsService({ app: 'Burger Shop', ver: 'ver 1.0' });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule
  ],
  providers: [
    LocalStorageService, ConfigOptionsService,
    { provide: ConstantsService, useValue: constantsService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
