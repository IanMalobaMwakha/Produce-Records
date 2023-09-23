import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductRequest: Product = {
    id: "",
    name: "",
    category: "",
    farmerName: "",
    email: "",
    quantity: "",
    value: 0,

  };
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
         this.router.navigate(['products']);
      }
    });
  }

}
