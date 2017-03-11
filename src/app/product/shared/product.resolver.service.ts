import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.productService.list());
        observer.complete();
      }, 2000);
    });
  }
}
