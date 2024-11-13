import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { User } from './user'

const EMPTY_USER: User = {id: 0, email: '', name: '', accessToken: ''};

type UserDTO = Omit<User, 'accessToken'> & {token: string;}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL + '/users/log-in';
  private readonly currentUser$ = new BehaviorSubject<User>(EMPTY_USER);

  constructor(private httpClient: HttpClient) {}

  isAuth(): Observable<boolean> {
     return this.currentUser$.pipe(map(u => Boolean(u.accessToken)))
  }

  authToken(): Observable<string> {
    return this.currentUser$.pipe(map(u => u.accessToken))
  }

  logOut(): void {
    this.currentUser$.next(EMPTY_USER);
  }

  logIn(email: string, password: string): Observable<User> {
    // password to teraz: 1234
    // email to dalej: john@doe.com
    return this.httpClient.post<UserDTO>(this.baseURL, {email, password}).pipe(
      map((user: UserDTO): User => {
        const {token, ...tokenLess} = user;
        return {...tokenLess, accessToken: token}
      }),
      tap(user => this.currentUser$.next(user))
    );
  }
}
