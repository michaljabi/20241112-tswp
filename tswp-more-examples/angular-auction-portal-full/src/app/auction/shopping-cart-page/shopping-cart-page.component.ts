import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AuctionItem } from '../auction-item';
import { CartService } from '../cart.service';

@Component({
  templateUrl: './shopping-cart-page.component.html',
  styles: [
  ]
})
export class ShoppingCartPageComponent {

  item$: Observable<AuctionItem[]> = this.cartService.getAll();

  constructor(private cartService: CartService) { }
}
