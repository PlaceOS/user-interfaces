import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { current_user } from '@placeos/common';
import { onlineState } from '@placeos/ts-client';
import { combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { StaffUser } from 'libs/users/src/lib/user.class';

export abstract class PLACEOS_APP_ACCESS {
    public readonly group: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _access = inject(PLACEOS_APP_ACCESS, { optional: true });

    public async canActivate(
        next?: ActivatedRouteSnapshot,
        state?: RouterStateSnapshot,
    ): Promise<boolean | UrlTree> {
        return this.checkUser();
    }

    public async canLoad(
        route?: Route,
        segments?: UrlSegment[],
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
            : this._settings.get('app.allow_access_groups') || [];
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
