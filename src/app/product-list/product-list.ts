import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html'
})
export class ProductList {
  products: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    // Fetch the products when the component initializes
    this.getProducts();
  }
  private getProducts() {
    // Design pattern: Observable Subscription
    //async data fetching with Observables
    this.productService.getProductsList().subscribe(
      // Lambda Expression
      (data => {
        this.products = data;
        console.log('Products fetched successfully:', data);
      })
    );
  }
}
