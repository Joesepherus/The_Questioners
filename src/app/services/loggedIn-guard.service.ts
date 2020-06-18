// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('adminId')) {
      this.router.navigate(['about']);
      return false;
    }
    return true;
  }
}