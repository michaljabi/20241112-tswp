import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button
        type="button"
        aria-label="Toggle sidenav"
        mat-icon-button
        (click)="toggleMenu.emit()"
        *ngIf="isHandset">
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <span>Auction Portal</span>
      <div class="spacer"></div>
      <button mat-icon-button aria-label="Log in to app" routerLink="/login">
        <mat-icon>{{ (authService.isAuth() | async) ? 'person' : 'login' }}</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .spacer {
        flex: 1 1 auto;
      }
    `
  ]
})
export class HeaderComponent  {

  @Input() isHandset?: boolean | null;
  @Output() toggleMenu = new EventEmitter<void>()

  constructor(public authService: AuthService) {}
}
