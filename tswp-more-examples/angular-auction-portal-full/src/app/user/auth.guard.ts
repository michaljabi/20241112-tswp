import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuth().pipe(
      tap(value => {
        if(!value) {
          this.snackBar.open(`Zaloguj się aby otworzyć ${state.url}`)
          this.router.navigate(['login']);
        }
      })
    );
  }

}
