import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  totalValue: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
          // Calculating the total value
          this.totalValue = this.calculateTotalValue(products);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe({
        next: (response) => {
          // After deleting the product, I want to refresh the product list.
          // Calling the getAllProducts method again here.
          this.productsService.getAllProducts()
            .subscribe({
              next: (products) => {
                this.products = products;
              },
              error: (response) => {
                console.log(response);
              }
            });
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  private calculateTotalValue(products: Product[]): number {
    return products.reduce((total, product) => total + product.value, 0);
  }
}
