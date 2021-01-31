import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CheckOutItems} from '../check-out-items';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any=[];
  checkeditem: CheckOutItems={name: '', price: 0, quantity: 0,checkoutDate:new Date().toString(),totalPrice:0};
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllOrders().subscribe(data => {
      this.orders = data;

      });
  }


}
