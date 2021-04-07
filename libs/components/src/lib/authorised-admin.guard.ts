import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { onlineState } from '@placeos/ts-client';
import { current_user } from '@placeos/common';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedAdminGuard implements CanActivate, CanLoad {
    constructor(private _router: Router) {}

    public async canActivate(
        next?: ActivatedRouteSnapshot,
        state?: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        return this.checkUser();
    }

    public async canLoad(
        route?: Route,
        segments?: UrlSegment[]
    ): Promise<boolean> {
        return this.checkUser();
    }

    private async checkUser() {
        console.log('Online State:', onlineState);
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        console.log('Current User:', current_user);
        const user = await current_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups.includes('placeos_admin');
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
