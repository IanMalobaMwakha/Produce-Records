import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    {
      id: 'h34st5w8-6eh3-6wky-5sl3-363hysle5djr',
      name: 'Milk',
      category: 'Livestock Derived',
      farmer_name: 'Ian Maloba',
      email: 'ianmaloba@gmail.com',
      quantity: '400kgs',
      value: 1000,
    },
    {
      id: 'h36sk5w8-6ek3-8wpy-5so3-363hyoe5djr',
      name: 'Beans',
      category: 'Plant Derived',
      farmer_name: 'John Doe',
      email: 'john@gmail.com',
      quantity: '508 sacks',
      value: 7830002,
    },
    {
      id: 'h34yt5w8-6rh3-6wuy-5sr3-363gysle5djr',
      name: 'Cotton',
      category: 'Plant Derived',
      farmer_name: 'Mary Miles',
      email: 'marymiles@gmail.com',
      quantity: '8 tonnes',
      value: 98200000,
    }
  ];
  constructor() { }

  ngOnInit(): void {

    }

}
