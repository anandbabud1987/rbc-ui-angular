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
  checkeditems: CheckOutItems[] = [];
  checkeditem: CheckOutItems={name: '', price: 0, quantity: 0,checkoutDate:new Date().toString(),totalPrice:0};
  item: Item = {name: '', price: 0, quantity: 0};


  constructor(private cartService: AddCartService,private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(value => {
      this.items = value;
    });

    this.cartService.updateQuanity(this.checkeditems);
  }

  checkout(): void {
    const currentDate=new Date().toString();
    this.items.forEach(value => {
      this.checkeditem.checkoutDate=currentDate;
      this.checkeditem.name=value.name;
      this.checkeditem.price=value.price;
      this.checkeditem.quantity=value.quantity;
      this.checkeditem.totalPrice=(value.quantity*value.price);
      this.checkeditems.push(this.checkeditem);
    });
    this.apiService.checkout(this.checkeditems);
  }

  changeQuantity(value: any, item: Item): void {
    this.items.forEach((value1, index) => {
      value1.price=item.price;
      value1.quantity=value.target.value;
    });

  }

  deleteItem(item: Item) {
    this.items=this.items.filter(value => value.name!==item.name);
  }
}
