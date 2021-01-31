import {Item} from './item';

export interface CheckOutItems extends Item{
  checkoutDate:string;
  totalPrice:number;
}
