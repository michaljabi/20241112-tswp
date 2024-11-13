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
    const auctions = this.cartItemSubject.getValue();
    auctions.push(auction);
    this.cartItemSubject.next(auctions);
  }

  getAll(): Observable<AuctionItem[]> {
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

/*

import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: AuctionItem[] = [];

  addItem(auction: AuctionItem): void {
    this.cartItems.push(auction);
  }

  getAll(): AuctionItem[] {
    return this.cartItems;
  }

  count(): number {
    return this.cartItems.length;
  }
}


*/
