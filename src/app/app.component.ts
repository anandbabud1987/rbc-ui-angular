import {Component} from '@angular/core';
import {BUTTONS_LEFT,BUTTONS_RIGHT} from './mockButtons';
import {AddCartService} from './add-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbc-test-ui';
  leftNavbuttons = BUTTONS_LEFT;
  rightNavbuttons = BUTTONS_RIGHT;
  addedCarts: number=0;
  constructor(private addCartService:AddCartService) {
  }
  ngOnInit():void{

  }
}
