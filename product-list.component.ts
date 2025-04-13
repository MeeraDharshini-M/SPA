import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getProducts(); // Refresh the list
  }
}
