import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Product} from '../product';
import {Item} from '../item';
import {AddCartService} from '../add-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product [] = [];
  count: number = 0;
  item: Item = {
    name: '',
    price: 0,
    quantity: 1
  };

  items: Item[] = [];

  constructor(private apiService: ApiService,private cartService:AddCartService) {
  }

  getAllProducts(): void {
    this.apiService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }


  ngOnInit(): void {
    this.getAllProducts();
    this.cartService.quantity.subscribe(value => {
      value.forEach(value1 => {
        this.items.forEach(value2 => {
          if(value2.name===value1.name){
            value2.quantity=value1.quantity;
          }
        })
      });
    })

  }

  // tslint:disable-next-line:typedef use-lifecycle-interface


  plus(product: Product): void {
    product.quantity++;
    let item: Item = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    this.item = item;
    console.log(this.item);
  }

  minus(product: Product) {
    if (product.quantity <= 0) {
      return;
    }
    product.quantity--;

    let item: Item = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    this.item = item;
    console.log(this.item);
  }

  addToCart() {
    this.items.push(this.item);

    console.log(this.items);
    this.cartService.updateCartItems(this.items);
  }
}
