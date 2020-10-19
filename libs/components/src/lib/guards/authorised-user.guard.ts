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
import { first } from 'rxjs/operators';

import { StaffService } from '../../../../users/src/lib/staff.service';
import { StaffUser } from '../../../../users/src/lib/user.class';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard implements CanActivate, CanLoad {
    constructor(private _router: Router, private _users: StaffService) {}

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: StaffUser = await this._users.active_user
            .pipe(first((_) => !!_))
            .toPromise();
        const can_activate = !!(user && user.groups);
        console.log('Activate:', can_activate);
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }

    public async canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Promise<boolean> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: StaffUser = await this._users.active_user
            .pipe(first((_) => !!_))
            .toPromise();
        const can_activate = !!(user && user.groups);
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }
}
