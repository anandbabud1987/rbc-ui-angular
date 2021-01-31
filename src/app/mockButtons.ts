import {Button} from './button';

// tslint:disable-next-line:max-line-length
export const BUTTONS_LEFT: ({ path: string; name: string; label: string })[] = [{
  label: 'Home',
  name: 'home',
  path: '/home',
},
  {
    label: 'Products',
    name: 'products',
    path: '/products',
  },
  {
    label: 'Orders',
    name: 'orders',
    path: '/orders',
  }];

export const BUTTONS_RIGHT: ({ path: string; name: string; label: string })[] = [{
  label: 'Cart',
  name: 'cart',
  path: '/cart',
}];
