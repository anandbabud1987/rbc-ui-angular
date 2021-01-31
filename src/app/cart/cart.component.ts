import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {AddCartService} from '../add-cart.service';
import {ApiService} from '../api.service';
import {CheckOutItems} from '../check-out-items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
  checkedItems: CheckOutItems[] = [];
  checkedItem: CheckOutItems = {name: '', price: 0, quantity: 0, checkoutDate: new Date().toString(), totalPrice: 0};


  constructor(private cartService: AddCartService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(value => {
      this.items = value;
    });
    this.cartService.updateQuanity(this.items.length);
  }

  checkout(): void {
    const currentDate = new Date().toString();
    this.items.forEach(value => {
      this.checkedItem.checkoutDate = currentDate;
      this.checkedItem.name = value.name;
      this.checkedItem.price = value.price;
      this.checkedItem.quantity = value.quantity;
      this.checkedItem.totalPrice = (value.quantity * value.price);
      this.checkedItems.push(this.checkedItem);
    });
    this.apiService.checkout(this.checkedItems).then(data => {
      data.subscribe(value => {
        alert(value);
      });
    });
  }

  changeQuantity(value: any, item: Item): void {
    this.items.forEach((value1, index) => {
      value1.price = item.price;
      value1.quantity = value.target.value;
    });

  }

  deleteItem(item: Item): void {
    this.items = this.items.filter(value => value.name !== item.name);
  }
}
