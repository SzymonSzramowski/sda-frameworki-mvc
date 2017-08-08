import { LoginService } from '../services/login-service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {

  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loginService.userIsLogged()) {
      this.router.navigate(['/login']);
    }
    return this.loginService.userIsLogged();
  }
}
