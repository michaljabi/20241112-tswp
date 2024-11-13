import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';
import { CartService } from '../cart.service';

const COL_MAPPER = {
  [Breakpoints.XSmall]: 1,
  [Breakpoints.Small]: 1,
  [Breakpoints.Medium]: 2,
  [Breakpoints.Large]: 3,
  [Breakpoints.XLarge]: 4
}

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styles: [
  ]
})
export class AuctionsPageComponent implements OnInit, OnDestroy {

  unSubscribe = new Subject<void>();
  matColumns = 1;
  errorMessage = '';
  isLoading = false;
  subscription?: Subscription;
  auctions: AuctionItem[] = [];
  // private auctionService: AuctionsService
  constructor(private auctionService: AuctionsService, private cartService: CartService, private breakpointObserver: BreakpointObserver) {
    // this.auctionService = auctionService;
  }

  handleAddToCart(auction: AuctionItem): void {
    this.cartService.addItem(auction);
  }


  ngOnInit(): void {

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ])
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(result => {
        const [current] = Object.entries(result.breakpoints).find(([, value]) => value) || [];
        this.matColumns = COL_MAPPER[String(current)] || this.matColumns;
      });

    // CONSUMER:
    this.isLoading = true;
    this.errorMessage = '';
    this.subscription = this.auctionService.getAll()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe({
        next: (auctions: AuctionItem[]) => {
          this.auctions = auctions;
          console.log('Aukcje przyszły !', auctions);
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
          this.isLoading = false;
          this.errorMessage = error.message;
        },
        complete: () => {
          console.log('auctionService.getAll COMPLETE');
          this.isLoading = false;
        }
      });
    // console.log(this.auctionService.getAll());
  }

  ngOnDestroy(): void {
    console.log('AuctionsPageComponent destroyed!');
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
