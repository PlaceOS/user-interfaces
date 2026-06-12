import { inject, Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import {
    current_user,
    firstTruthyValueFrom,
    GroupPermission,
    hasPermission,
    observableFromSignal,
    user_groups_loaded,
} from '@placeos/common';
import { authority, onlineState, waitForSignal } from '@placeos/ts-client';
import { combineLatest, lastValueFrom } from 'rxjs';
import { first } from 'rxjs/operators';

import { OrganisationService } from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';

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

    public async canActivateChild(
        next?: ActivatedRouteSnapshot,
        state?: RouterStateSnapshot,
    ): Promise<boolean | UrlTree> {
        return this.checkUser();
    }

    private async checkUser() {
        const groups = this._access?.group
            ? [this._access.group]
            : this._settings.get('app.allow_access_groups') || [];
        const use_group_subsystem_access = await this.useGroupSubsystemAccess();
        let can_activate = false;
        if (use_group_subsystem_access) {
            await waitForSignal(onlineState(), Boolean);
            const user = await firstTruthyValueFrom(current_user);
            can_activate = await this.checkSubsystemAccess(user);
        } else if (!groups.length) {
            can_activate = true;
        } else {
            await lastValueFrom(
                combineLatest([
                    observableFromSignal(onlineState()),
                    this._org.initialised,
                ]).pipe(first(([online, org_init]) => online && org_init)),
            );
            const user = await firstTruthyValueFrom(current_user);
            can_activate = !!(
                user && groups.find((_) => user.groups.includes(_))
            );
        }
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }

    private async useGroupSubsystemAccess() {
        const value = authority()?.config?.['use_group_subsystem_access'];
        return value === true || value === 'true';
    }

    private async checkSubsystemAccess(user: any) {
        if (!user) return false;
        const app_name = `${this._settings.app_name || ''}`
            .trim()
            .toLowerCase();
        if (!app_name) return false;
        await this.waitForUserGroups();
        return hasPermission(app_name, GroupPermission.Read);
    }

    private async waitForUserGroups() {
        for (let i = 0; i < 50; i++) {
            if (user_groups_loaded()) return;
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }
}
