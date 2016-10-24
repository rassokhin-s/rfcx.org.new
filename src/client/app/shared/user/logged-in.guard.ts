import { Injectable } from '@angular/core';
import { Router, CanActivate,  } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(
        private router: Router,
        private user: UserService
    ) {}

    canActivate(): boolean {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}