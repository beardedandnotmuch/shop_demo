import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service'
import { Product } from './shared/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: any;
  constructor(
    private productService: ProductService
  ) {
    this.products = productService.list();
  }

  collect(product: Product) {
    this.productService.collect(product);
  }

  ngOnInit() {
  }
}
