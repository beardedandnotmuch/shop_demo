import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service'
import { Product } from './shared/product'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  collect(product: Product) {
    this.productService.collect(product);
  }

  ngOnInit() {
    this.products = this.route.snapshot.data['resolvedProducts'];
  }
}
