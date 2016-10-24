import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user/user.service';

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
}) 
export class LoginComponent {
    constructor(
        private userService: UserService, 
        private router: Router
    ) {}
}