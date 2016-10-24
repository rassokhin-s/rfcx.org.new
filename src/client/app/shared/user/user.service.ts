import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { CookieService}  from 'angular2-cookie/core';

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private cookieService: CookieService
    ) {}

    logIn(email: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                'http://localhost:8080/v1/login', 
                JSON.stringify({ email, password }), 
                headers
            )
            .map(res => res.json())
            .map((res) => {
                console.log('res', res);
            })
    
    }

    logOut(): void {
        this.cookieService.remove('guid');
        this.cookieService.remove('token');
    }

    areCookiesExist(): boolean {
        return !!this.cookieService.get('token') && !!this.cookieService.get('guid');
    }

    isLoggedIn(): boolean {
        return this.areCookiesExist();
    }
}