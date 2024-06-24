import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { AuthServise } from "./auth.service";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class PermissionService {

    constructor(private router: Router, private authService: AuthServise) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PermissionService).canActivate(next, state)
}