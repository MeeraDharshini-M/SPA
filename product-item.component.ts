import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  deleteProduct(): void {
    this.delete.emit(this.product.id);
  }
}
