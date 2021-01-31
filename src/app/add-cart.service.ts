import {Injectable} from '@angular/core';
import {Item} from './item';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  item: Item = {name: '', price: 0, quantity: 0};
  cartItems = new BehaviorSubject<Item[]>([]);
  quantity = new BehaviorSubject<number>(0);
  cartItem = this.cartItems.asObservable();
  quantityData = this.quantity.asObservable();

  constructor() {
  }

  updateCartItems(updatedCart: Item[]) {
    this.cartItems.next(updatedCart);
  }

  updateQuanity(items: number) {
    this.quantity.next(items);
  }

  removeDups(inputs: Item[]): Item[] {
    return Array.from(new Set(inputs));
  }
}
