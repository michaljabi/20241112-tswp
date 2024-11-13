import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-auction-card',
  template: `
    <mat-card *ngIf="auction">
      <mat-card-header>
        <mat-card-title>{{auction.title}}</mat-card-title>
      </mat-card-header>
      <img mat-card-image [src]="auction.imgUrl" [alt]="auction.title">
      <mat-card-content>
        <strong> {{auction.price}} zł</strong>
        <p>
          {{auction.description}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-stroked-button (click)="handleAddToCart()">
          <mat-icon>add_shopping_cart</mat-icon> Add to cart
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `:host {
      width: 90%;
    }`
  ]
})
export class AuctionCardComponent {
  // To jest dumb-component ponieważ nie ma pojęcia skąd pochodzą dane

  @Input() auction?: AuctionItem;
  @Output() addToCart = new EventEmitter<AuctionItem>();

  handleAddToCart(): void {
    this.addToCart.emit(this.auction);
  }
}
