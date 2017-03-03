import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { BasketComponent } from './basket/basket.component';
import { Product } from './product/shared/product'
import { ProductService } from "./product/shared/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Product>
  constructor(
    public dialog: MdDialog,
    public ProductService: ProductService
  ) {
    this.products = ProductService.items;
  }

  openBasket() {
    let dialogRef = this.dialog.open(BasketComponent, {
      width: '300px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
