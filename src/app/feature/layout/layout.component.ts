import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private title: string = 'Angular Example';
  private authenticated: boolean;

  private titleService: Title;
  private router: Router;
  private authService: AuthService;

  public constructor(titleService: Title, router: Router, authService: AuthService) {
    this.titleService = titleService;
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    this.updateAuthentication();
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public login(): void {
    this.router.navigate(['', { outlets: { login: ['login'] } }]);
  }

  public logout(): void {
    this.authService.logout();
    this.updateAuthentication();
    this.router.navigate(['/dashboard']);
  }

  public currentYear(): number {
    return new Date().getFullYear();
  }

  private updateAuthentication(): void {
    this.authenticated = this.authService.isAuthenticated();
  }
}
