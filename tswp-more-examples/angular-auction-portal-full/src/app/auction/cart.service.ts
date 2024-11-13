import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemSubject = new BehaviorSubject<AuctionItem[]>([]);

  constructor() {
    // Inicjowanie koszyka (przykład):
    // this.addItem({id: 1, title: 'hello', price: 1212, imgUrl: ''});
  }

  addItem(auction: AuctionItem): void {
    const auctions: AuctionItem[] = this.cartItemSubject.getValue();
    auctions.push(auction);
    this.cartItemSubject.next(auctions);
  }

  // cartService.getAll().next() // zabrane - bo nie chcemy żeby było możliwe!!!
  getAll(): Observable<AuctionItem[]> {
    // this.cartItemSubject.next() // to działą
    // this.cartItemSubject.asObservable().next() // to nie działa
    return this.cartItemSubject.asObservable();
  }

  count(): Observable<number> {
    // ---[A, A, A] ----- [A, A, A, A]
    //      |
    //       \.length
    // ----3----------------4
    return this.cartItemSubject.pipe(map( (auctions: AuctionItem[]) => auctions.length ));
  }
}


interface CartItem {
  count: number;
  id: number;
  auction: AuctionItem
}

export class CartService2 {

  private cartItems: CartItem[] = [];

  addItem(auction: AuctionItem): void {
    const ref = this.cartItems.find(i => i.id === auction.id);
    if(ref) {
      ref.count++;
    } else {
      this.cartItems.push({count: 1, id: auction.id, auction});
    }
  }

  getAll(): readonly CartItem[] {
    return this.cartItems;
  }

  count(): number {
    return this.cartItems.length;
  }
}

const cartService = new CartService2();

// cartService.getAll().push() // zabrane - bo nie chcemy żeby było możliwe!!!
