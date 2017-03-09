import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import * as _ from "lodash";

@Injectable()
export class ProductService {
  items: Array<Product> = [];

  constructor() {
  }

  list(): Product[] {
    return PRODUCTS;
  }

  collect(product: Product): void {
    if(!_.includes(_.map(this.items, 'id'), product.id)) {
      product.count++;
      this.items.push(product);
    } else {
      this.items = _.map(this.items, (item: Product) => {
        if (item.id === product.id) {
          item.count++
        }
        return item;
      });
    }
    console.log(this.items);
  }

  getSelectedItems(): Array<Product> {
    return this.items;
  }
}
