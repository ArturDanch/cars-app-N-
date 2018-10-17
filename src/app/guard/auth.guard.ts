import { Injectable } from '@angular/core';

import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.userService.isLoggedIn()) {
        return true;
      }
      this.router.navigate(['/login'])
    }
  public canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    // else navigate to login
    this.router.navigate(['/login']);
    }
  }

