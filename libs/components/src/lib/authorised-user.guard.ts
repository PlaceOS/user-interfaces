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
import { current_user } from '@user-interfaces/common';
import { first } from 'rxjs/operators';

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
        @Optional() private _access: PLACEOS_APP_ACCESS
    ) {}

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
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: StaffUser = await current_user
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
}
