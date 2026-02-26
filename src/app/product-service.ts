import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl: string = 'http://localhost:8080/inventory-app/products';
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }
  addProduct(product: Product): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, product);
  }
}
