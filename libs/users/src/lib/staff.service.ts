import { Injectable } from '@angular/core';
import { currentUser, onlineState } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { BaseAPIService, HashMap } from '@user-interfaces/common';

import { StaffUser } from './user.class';

@Injectable({
    providedIn: 'root',
})
export class StaffService extends BaseAPIService<StaffUser> {
    /** Currently logged in user */
    private _active_user = new BehaviorSubject<StaffUser>(null);
    /** Observable for the active user */
    public readonly active_user = this._active_user.asObservable();

    /** Currently logged in user */
    public get current(): StaffUser {
        return this._active_user.getValue();
    }

    constructor() {
        super();
        this._name = 'Staff';
        this._api_route = 'people';
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => {
                this.timeout('init', () => this.init());
            });
    }

    /** Load current user */
    public async load() {
        const user = await currentUser().toPromise();
        if (user) {
            this._active_user.next(new StaffUser({ ...user, is_logged_in: true } as any));
        }
    }

    public format(item) {
        return item;
    }

    public process(raw_data: HashMap) {
        return new StaffUser(raw_data);
    }

    /**
     * Get location of a staff member
     * @param id Email address of the staff member
     */
    public locate(id: string): Promise<StaffUser> {
        return this.show(id);
    }
}
