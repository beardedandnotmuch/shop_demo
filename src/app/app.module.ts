import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";
import 'hammerjs';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { ProductService } from "./product/shared/product.service";
import { ProductResolver } from "./product/shared/product.resolver.service";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    resolve: {
      resolvedProducts: ProductResolver,
    }
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyByJ0HdLVBOlC6Y9CQDwNepdEuLfjdd4Bc",
  authDomain: "tittle-tattle-faf84.firebaseapp.com",
  databaseURL: "https://tittle-tattle-faf84.firebaseio.com",
  storageBucket: "tittle-tattle-faf84.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BasketComponent,
    HomeComponent
  ],
  entryComponents: [ BasketComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    ProductService,
    ProductResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
