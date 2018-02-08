import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  protected router: Router;

  protected _target: string;

  protected email: string;
  protected password: string;

  constructor(router: Router) {
    this.router = router;
    this.email = 'name@domain.ext';
    this.password = 'password';
  }

  get target() {
    return this._target;
  }

  set target(target: string) {
    this._target = target;
  }

  public login(email: string, password: string): boolean {
    // API call to backend
    if (email === this.email && password === this.password) {
      localStorage.setItem('authenticated', 'true');
    }

    return this.isAuthenticated();
  }

  public logout(): boolean {
    localStorage.removeItem('authenticated');

    return this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    return <any>localStorage.getItem('authenticated');
  }
}
