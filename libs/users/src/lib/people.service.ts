import { Injectable } from '@angular/core';
import { BaseAPIService } from '@user-interfaces/common';

import { User } from './user.class';


@Injectable({
    providedIn: 'root',
})
export class PeopleService extends BaseAPIService<User> {
    constructor() {
        super();
        this._name = 'People';
        this._api_route = 'people';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
    }

    public async search(search: string) {
        return this.query({ q: search });
    }

    public locate(email: string) {
        return this.show(email);
    }
}
