import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class LoginService {


    constructor(private router: Router, public cookieService: CookieService) {

    }

    public userIsLogged(): boolean {
        return this.cookieService.check('isUserLoggedIn') && this.cookieService.get('isUserLoggedIn') === 'true';
    }

    public login(login: string, password: string): boolean {
        console.log('zaloguj', login, password);
        if (login === 'Szymon' && password === 'abc') {
            this.router.navigate(['/home']);
            this.cookieService.set('isUserLoggedIn', 'true');
            return true;
        } else {
            this.cookieService.set('isUserLoggedIn', 'false');
            return false;
        }
    }

    public logout(): void {
        this.cookieService.set('isUserLoggedIn', 'false');
        this.router.navigate(['/home']);
    }


}
