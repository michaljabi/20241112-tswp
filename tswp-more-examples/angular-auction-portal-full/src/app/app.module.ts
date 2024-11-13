import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';

import { AdviceModule } from './advice/advice.module';
import { A404pageComponent } from './a404page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    A404pageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuctionModule,
    HttpClientModule,
    AdviceModule,
    RouterModule.forChild([
      {path: ':id/:name', component: A404pageComponent},
      {path: '**', component: A404pageComponent}
    ]),
    SharedModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
