import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }


  getObject(order: any): any[] {
    const arrayObj = JSON.parse(order);
    return arrayObj;
  }
}
