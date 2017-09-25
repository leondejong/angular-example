import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private authService: AuthService;
  private router: Router;

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuth(state.url);
  }

  public checkAuth(url: string): boolean {
    if (this.authService.isAuthenticated()) return true;

    this.authService.target = url;
    this.router.navigate(['', { outlets: { login: ['login'] } }]);

    return false;
  }
}
