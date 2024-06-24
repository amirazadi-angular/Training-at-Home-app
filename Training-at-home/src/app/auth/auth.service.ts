import { Iuser } from "./user.model";
import { IauthData } from "./auth.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthServise {

    authChange = new Subject<boolean>();

    private users: Iuser | null | undefined;

    constructor(private router: Router) { }

    regesterUser(authData: IauthData) {
        this.users = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authChange.next(true);
        this.SuccessAuth();
    }

    login(authData: IauthData) {
        this.users = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authChange.next(true);
        this.SuccessAuth();

    }

    logOut() {
        this.users = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.users };
    }

    isAuth() {
        return this.users != null;
    }

    private SuccessAuth() {
        this.router.navigate(['']);
    }
}