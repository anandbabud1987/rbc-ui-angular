import {Injectable} from '@angular/core';
import {Item} from './item';
import {BehaviorSubject} from 'rxjs';
import {CheckOutItems} from './check-out-items';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  item:Item={name:'',price:0,quantity:0};
  cartItems = new BehaviorSubject<Item[]>([]);
  quantity = new BehaviorSubject<CheckOutItems[]>([]);
  cartItem = this.cartItems.asObservable();
  quantityData = this.quantity.asObservable();

  constructor() {
  }

  updateCartItems(updatedCart: Item[]) {
    this.cartItems.next(updatedCart);
  }
  updateQuanity(items:CheckOutItems[]){
    this.quantity.next(items);
  }
}
