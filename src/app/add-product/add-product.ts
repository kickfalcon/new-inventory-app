import { Component } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html'
})
export class AddProduct {
  // two way data binding with ngModel
  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.saveProduct();
  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToProductList();
        },
        error:(error:any) => {console.log(error)},
      }
    )
  }

  goToProductList() {
    this.router.navigate(['/products']);
  }
}
