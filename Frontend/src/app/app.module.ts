import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
