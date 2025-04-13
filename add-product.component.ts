import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name = '';
  description = '';
  price = 0;

  constructor(private productService: ProductService) {}

  addProduct(): void {
    const newProduct = new Product(
      Date.now(), // Generate unique ID using timestamp
      this.name,
      this.description,
      this.price
    );
    this.productService.addProduct(newProduct);
    this.name = '';
    this.description = '';
    this.price = 0;
    alert('Product Added!');
  }
}
