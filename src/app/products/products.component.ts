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

  constructor(private apiService: ApiService, private cartService: AddCartService) {
  }

  getAllProducts(): void {
    this.apiService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }


  ngOnInit(): void {
    this.getAllProducts();

  }


  plus(product: Product): void {
    product.quantity++;
    let item: Item = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    this.item = item;
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
  }

  addToCart(): void {
    this.items.push(this.item);
    const finalItems = Array.from(new Set(this.items));
    this.cartService.updateCartItems(finalItems);
    this.cartService.updateQuanity(finalItems.length);
  }
}
