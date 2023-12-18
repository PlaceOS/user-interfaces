import { Injectable, Optional } from '@angular/core';
import {
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { onlineState } from '@placeos/ts-client';
import { SettingsService, current_user } from '@placeos/common';
import { first } from 'rxjs/operators';

import { StaffUser } from '../../../users/src/lib/user.class';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';

export abstract class PLACEOS_APP_ACCESS {
    public readonly group: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard {
    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService,
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
        await combineLatest([onlineState(), this._org.initialised])
            .pipe(first(([online, org_init]) => online && org_init))
            .toPromise();
        const user: StaffUser = await current_user
            .pipe(first((_) => !!_))
            .toPromise();
        const groups = this._access?.group
            ? [this._access.group]
            : this._settings.get('app.access_groups') || [];
        const can_activate = !!(
            user &&
            (!groups.length || groups.find((_) => user.groups.includes(_)))
        );
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }
}
