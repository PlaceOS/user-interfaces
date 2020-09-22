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
import { PlaceUser, onlineState } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { StaffService } from 'src/app/users/staff.service';
import { StaffUser } from 'src/app/users/user.class';

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
        const user: StaffUser = await this._users.active_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }

    public async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: StaffUser = await this._users.active_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }
}
