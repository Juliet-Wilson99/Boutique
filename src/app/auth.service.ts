import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  getLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

}
