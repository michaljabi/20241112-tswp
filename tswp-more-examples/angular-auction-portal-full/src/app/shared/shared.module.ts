import { LayoutModule } from '@angular/cdk/layout'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import {
  faCartPlus,
  faCoffee,
  faEdit, faEnvelope,
  faGavel,
  faImage, faKey,
  faPlus,
  faShoppingBasket, faSignInAlt, faSync, faTag, faUser
} from '@fortawesome/free-solid-svg-icons'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}
  ],
  exports: [
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons( faCoffee,
      faCartPlus, faEdit,
      faGavel,
      faImage,
      faPlus,
      faShoppingBasket, faTag,
      faUser,
      faSync,
      faEnvelope, faSignInAlt, faKey);
  }
}
