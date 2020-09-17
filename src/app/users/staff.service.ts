import { Injectable } from '@angular/core';
import { onlineState, show } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { StaffUser } from './user.class';
import { BaseAPIService } from '../common/base.service';
import { HashMap } from '../common/types';

@Injectable({
    providedIn: 'root',
})
export class StaffService extends BaseAPIService<StaffUser> {
    /** Currently logged in user */
    private _active_user: StaffUser;

    /** Currently logged in user */
    public get current(): StaffUser {
        return this._active_user;
    }

    constructor() {
        super();
        this._name = 'Staff';
        this._api_route = 'people';
        this._active_user = new StaffUser({ name: 'Local User' });
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => {
                this.timeout('init', () => this.init());
            });
    }

    /** Load current user */
    public async load() {
        const user = await show('current', {}, this.format, 'users').toPromise();
        if (user) {
            this._active_user = new StaffUser({ ...user, is_logged_in: true });
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
