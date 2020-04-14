import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IProduct from '../models/IProduct';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  constructor() { }

  // addToCart(product:IProduct) {
  //   this.products.push(this.products);
  // }

  // getCartList()
  // {
  //   return this.products;
  // }
}
