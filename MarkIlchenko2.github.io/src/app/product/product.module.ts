import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductTemplateComponent } from './product-template/product-template.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProductModule { }
