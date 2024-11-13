import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { AddAuctionPageReactiveComponent } from './add-auction-page-reactive/add-auction-page-reactive.component';
// To jest przydatne do testów
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    AuctionCardComponent,
    PromotionsPageComponent,
    AddAuctionPageComponent,
    ShoppingCartPageComponent,
    AddAuctionPageReactiveComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ],
  // providers: [AuctionsService],
  // , ale będziemy tego używać w środku testu a nie tutaj !
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AuctionsPageComponent
  ]
})
export class AuctionModule { }
