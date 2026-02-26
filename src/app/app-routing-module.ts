import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { AddProduct } from './add-product/add-product';


// Define application routes
// Context path: 
const routes: Routes = [
  {path:'products', component: ProductList},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'add-product', component: AddProduct}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
