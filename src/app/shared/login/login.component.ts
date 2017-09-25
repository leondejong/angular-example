import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public message: string;

  private router: Router;
  private authService: AuthService;

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.email = 'name@domain.ext';
    this.password = 'password';
  }

  public submit(dialog: any): void {
    if (this.authService.login(this.email, this.password)) {
      this.message = null;
      this.router.navigate([this.authService.target || '/dashboard'])
        .then(() => { dialog.close(); location.reload(); });
    } else {
      this.password = null;
      this.message = 'Combination of e-mail and password does not exist.';
    }
  }
}
