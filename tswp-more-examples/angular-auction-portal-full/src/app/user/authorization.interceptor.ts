import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  private authToken = '';

  constructor(private authService: AuthService) {
    authService.authToken().subscribe((token) => {
      this.authToken = token;
    })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.authToken) {
      return next.handle(request);
    }
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.authToken}`)
    });
    return next.handle(authReq);
  }
}
