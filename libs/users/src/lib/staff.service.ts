import { Injectable } from '@angular/core';
import { currentUser, onlineState } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { BaseClass } from '@user-interfaces/common';
import { locateStaff, searchStaff, showStaff } from './staff.fn';
import { StaffUser } from './user.class';

import * as Sentry from '@sentry/browser';

@Injectable({
    providedIn: 'root',
})
export class StaffService extends BaseClass {
    /** Currently logged in user */
    private _active_user = new BehaviorSubject<StaffUser>(null);
    /** Observable for the active user */
    public readonly active_user = this._active_user.asObservable();

    /**
     * Search staff members
     * @param q Search string for filtering staff
     */
    public readonly search = (q: string) => searchStaff(q);

    /**
     * Get user details
     * @param id User ID or email
     */
    public readonly show = (id: string) => showStaff(id);

    /**
     * Get user with their location details
     * @param email User email
     */
    public readonly locate = (email: string) => locateStaff(email);

    /** Currently logged in user */
    public get current(): StaffUser {
        return this._active_user.getValue();
    }

    constructor() {
        super();
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => this.timeout('init', () => this.load()));
    }

    /** Load current user */
    public async load() {
        const user = await currentUser().toPromise();
        if (user) {
            this._active_user.next(
                new StaffUser({ ...user, is_logged_in: true } as any)
            );
            Sentry.configureScope((scope) =>
                scope.setUser({ email: user.email })
            );
        }
        if (window.debug) {
            if (!window.application) window.application = {};
            window.application.user = this.current;
        }
        this._initialised.next(true);
    }
}
