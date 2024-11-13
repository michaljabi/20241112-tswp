import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/auth.guard'
import { AddAuctionPageReactiveComponent } from './add-auction-page-reactive/add-auction-page-reactive.component'
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent  },
  { path: 'promotions', component: PromotionsPageComponent  },
  { path: 'add-auction', component: AddAuctionPageComponent, canActivate: [AuthGuard]  },
  { path: 'add-auction-reactive', component: AddAuctionPageReactiveComponent, canActivate: [AuthGuard]  },
  { path: 'shopping-cart', component: ShoppingCartPageComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
