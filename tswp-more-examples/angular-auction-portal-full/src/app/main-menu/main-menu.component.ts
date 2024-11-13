import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { CartService } from '../auction/cart.service';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {

  menuItems: MenuItem[] = [
    { link: '/auctions', title: 'Aukcje' },
    { link: '/promotions', title: 'Promocje' },
    { link: '/advices', title: 'Podpowiadamy' },
  ];
  cartItemsCounter$: Observable<number> = this.cartService.count();

  constructor(private cartService: CartService) {}

}
