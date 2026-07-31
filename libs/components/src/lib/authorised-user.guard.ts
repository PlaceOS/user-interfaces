import { inject, Injectable, Injector } from '@angular/core';
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
    firstValueWhere,
    GroupPermission,
    hasPermission,
    log,
    OrganisationService,
    user_groups_loaded,
} from '@placeos/common';
import {
    authority,
    onlineState,
    token,
    waitForSignal,
} from '@placeos/ts-client';

import { SettingsService } from 'libs/common/src/lib/settings.service';

/** How long to wait on backend-dependent state before falling back */
const OFFLINE_FALLBACK_DELAY = 20 * 1000;

/** Whether this device holds credentials from a previous successful session */
function hasCachedCredentials() {
    try {
        return !!token();
    } catch {
        return false;
    }
}

/** Resolves true if `promise` settles successfully within `delay` */
function resolvedWithin(promise: Promise<unknown>, delay: number) {
    return new Promise<boolean>((resolve) => {
        const timer = setTimeout(() => resolve(false), delay);
        promise.then(
            () => {
                clearTimeout(timer);
                resolve(true);
            },
            () => {
                clearTimeout(timer);
                resolve(false);
            },
        );
    });
}

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
    private _injector = inject(Injector);
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
        const state_ready = await resolvedWithin(
            Promise.all([
                this._org.waitUntilInitialised(),
                firstValueWhere(user_groups_loaded, Boolean, this._injector),
            ]),
            OFFLINE_FALLBACK_DELAY,
        );
        if (!state_ready) return this.offlineAccess();
        const groups = this._access?.group
            ? [this._access.group]
            : this._settings.get('app.allow_access_groups') || [];
        const use_group_subsystem_access = await this.useGroupSubsystemAccess();
        let can_activate = false;
        if (use_group_subsystem_access) {
            const user = await this.waitForUser();
            if (!user) return this.offlineAccess();
            can_activate = this.checkSubsystemAccess(user);
            log('ACCESS', 'Checking subsystem access', can_activate);
        } else if (!groups.length) {
            can_activate = true;
            log('ACCESS', 'No access groups', can_activate);
        } else {
            const user = await this.waitForUser();
            if (!user) return this.offlineAccess();
            can_activate = !!(
                user && groups.find((_) => user.groups.includes(_))
            );
            log('ACCESS', 'Checking access groups', can_activate);
        }
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return !!can_activate;
    }

    /** The active user, or null if the backend could not be reached in time */
    private async waitForUser() {
        const online = await resolvedWithin(
            waitForSignal(onlineState(), Boolean),
            OFFLINE_FALLBACK_DELAY,
        );
        if (!online) return null;
        let user: any = null;
        const loaded = await resolvedWithin(
            firstTruthyValueFrom(current_user).then((_) => (user = _)),
            OFFLINE_FALLBACK_DELAY,
        );
        return loaded ? user : null;
    }

    /**
     * Access decision for when the backend cannot be reached. Waiting forever
     * leaves a fixed device sitting on a loading screen with no way back, so a
     * device that has authenticated before is allowed through on its cached
     * session. Every API call it then makes is still checked by the server.
     */
    private offlineAccess() {
        if (hasCachedCredentials()) {
            log(
                'ACCESS',
                'Backend unreachable. Continuing with cached credentials.',
            );
            return true;
        }
        log(
            'ACCESS',
            'Backend unreachable and no cached credentials.',
            undefined,
            'warn',
        );
        this._router.navigate(['/unauthorised']);
        return false;
    }

    private async useGroupSubsystemAccess() {
        const value = authority()?.config?.['use_group_subsystem_access'];
        return value === true || value === 'true';
    }

    private checkSubsystemAccess(user: any) {
        if (!user) return false;
        // The subsystem groups grant permissions for doesn't always match the
        // app's deploy path, e.g. signage-manager runs on `signage`.
        const subsystem = `${
            this._settings.get('app.access_subsystem') || ''
        }`.trim();
        const app_name = (subsystem || `${this._settings.app_name || ''}`)
            .trim()
            .toLowerCase();
        if (!app_name) return false;
        return hasPermission(app_name, GroupPermission.Read);
    }
}
