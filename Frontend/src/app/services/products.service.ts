import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http:   HttpClient) { }

  getAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/products')
  }

  addProduct(addProductRequest: Product): Observable<Product> {
    addProductRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/api/products', addProductRequest);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/api/products/'+ id);
  }

  updateProduct(id: string, updateProductRequest: Product): 
  Observable<Product> {
    return this.http.put<Product>(this.baseApiUrl + '/api/products/'+ id, updateProductRequest);
  }

}
