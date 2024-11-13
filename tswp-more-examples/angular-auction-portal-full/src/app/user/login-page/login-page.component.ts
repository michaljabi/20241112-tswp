import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, Subject, takeUntil } from 'rxjs'
import { AuthService } from '../auth.service'

@Component({
  template: `
    <section *ngIf="(isAuth$ | async) === false; else logOutPanel" fxLayout="column" fxLayoutAlign="center center" style="margin-top: 20px">
      <h2>Sign in to Auction Portal</h2>
      <mat-card [formGroup]="loginForm">
        <mat-card-content>
          <mat-form-field appearance="outline" class="form-field">
            <mat-label>E-mail</mat-label>
            <input matInput name="login" formControlName="email"  required>
            <mat-icon matSuffix>email</mat-icon>
            <mat-error> {{ emailError }}</mat-error>
            <!--<mat-error>{{loginForm.getError('required', 'email')}}</mat-error>-->
          </mat-form-field>
          <mat-form-field appearance="outline" class="form-field">
            <mat-label>Hasło</mat-label>
            <input matInput type="password" name="password" formControlName="password" required>
            <mat-icon matSuffix>password</mat-icon>
            <mat-error> {{ passwordError }}</mat-error>
          </mat-form-field>
          <div fxLayout fxLayoutAlign="end">
            <button mat-raised-button (click)="handleLogIn()">
              Log in
            </button>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
    <ng-template #logOutPanel>
      <h2>User info</h2>
      <mat-card>
        <mat-card-content>
          <h6>signed in</h6>
          <div>
            <button mat-raised-button color="primary" (click)="handleLogOut()">
              Log out
            </button>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: [
      `
        .form-field {
          width: 100%;
        }
      `
  ]
})
export class LoginPageComponent implements OnDestroy {

  isAuth$: Observable<boolean> = this.authService.isAuth();
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  unSub = new Subject<void>();

  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  handleLogIn() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.logIn(email, password)
      .pipe(takeUntil(this.unSub))
      .subscribe({
        next: () => {
          this.loginForm.reset();
        },
        error: (response: HttpErrorResponse) => {
          const { message = 'Brak połączenia' } = response.error;
          this.snackBar.open('Nie udało się zalogować :( ' + message)
        }
    })
  }

  handleLogOut() {
    this.authService.logOut()
  }

  get emailError() {
     const errors: string[] = [];
     const {required, email} = this.loginForm.get('email')?.errors || {};
     required && errors.push('To pole jest wymagane');
     email && errors.push('Nieprawidłowy format adresu e-mail');

     return errors.join('\n');
  }

  get passwordError() {
    const {required} = this.loginForm.controls.password?.errors || {};
    return required && 'To pole jest wymagane';
  }


}
