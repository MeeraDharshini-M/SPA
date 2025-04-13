import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
