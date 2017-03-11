import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/shared/product.service';
import { MdDialogRef } from '@angular/material';
import { Product } from '../product/shared/product'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {
  public products: Array<Product>;
  public phoneNumber: string = '';
  constructor(
    public dialogRef: MdDialogRef<BasketComponent>,
    private ProductService: ProductService
  ) {
    this.products = ProductService.getSelectedItems();
  }

  order(): void {
    this.products = [];
    this.ProductService.resetItems();
    this.dialogRef.close();

    console.log('make an order');
  }

  ngOnInit() {
  }

}
