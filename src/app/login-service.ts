import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public userIsLogged: boolean = false;

    constructor(private router: Router) {

    }

    public login(login: string, password: string): boolean {
        console.log('zaloguj', login, password);
        if (login === 'Szymon' && password === 'abc') {
            this.userIsLogged = true;
            this.router.navigate(['/home']);
            return true;
        } else {
            this.userIsLogged = false;
            return false;
        }
    }
}
