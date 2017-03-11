import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { BasketComponent } from './basket/basket.component';
import { Product } from './product/shared/product'
import { ProductService } from "./product/shared/product.service";
import {
  ActivatedRouteSnapshot,
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Product>;
  isLoading: boolean = true;
  constructor(
    public dialog: MdDialog,
    public ProductService: ProductService,
    private router: Router
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

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

  /**
   * Shows and hides the loading spinner during RouterEvent changes
   *
   * @param {RouterEvent} event
   * @memberOf AppComponent
   */
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
