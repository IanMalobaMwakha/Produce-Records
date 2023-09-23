import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetails: Product = {
    id: "",
    name: "",
    category: "",
    farmerName: "",
    email: "",
    quantity: "",
    value: 0,
  };

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe ({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.productService.getProduct(id)
          .subscribe({
            next: (response) => {
              this.productDetails = response;
            }
          })
        }
      }
    })
  }

}
