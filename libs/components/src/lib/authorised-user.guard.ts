import { Injectable, Optional } from '@angular/core';
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

import { StaffService } from '../../../users/src/lib/staff.service';
import { StaffUser } from '../../../users/src/lib/user.class';

export abstract class PLACEOS_APP_ACCESS {
    public readonly group: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard implements CanActivate, CanLoad {
    constructor(
        private _router: Router,
        private _users: StaffService,
        @Optional() private _access: PLACEOS_APP_ACCESS
    ) {}

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
        const can_activate = !!(
            user &&
            (!this._access?.group || user.groups.includes(this._access.group))
        );
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
