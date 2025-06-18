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
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedAdminGuard {
    private _router = inject(Router);

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
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user = await current_user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && user.groups.includes('placeos_admin');
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
