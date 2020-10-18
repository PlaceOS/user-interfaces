import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { get } from '@placeos/ts-client';

import { BaseAPIService, HashMap, toQueryString } from '@user-interfaces/common';

import { User } from './user.class';

@Injectable({
    providedIn: 'root',
})
export class GroupsService extends BaseAPIService<User> {
    constructor(protected uhttp: HttpClient, protected location: Location) {
        super();
        this._name = 'Role User';
        this._api_route = 'groups';
    }

    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    public route(engine: boolean = false) {
        const endpoint = '/control/';
        return `${endpoint}${this._api_route}`;
    }

    /**
     * Query the API route for a sepecific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public show(id: string, query_params: HashMap = {}): Promise<any> {
        let engine = false;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
        }
        const query = toQueryString(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<User[]>((resolve, reject) => {
                const url = `${this.route(engine)}/${id}${query ? '?' + query : ''}`;
                let result: User[] = null;
                get(url).subscribe(
                    (d) => (result = d.map((i) => this.process(i))),
                    (e) => {
                        reject(e);
                        this._promises.new_item = null;
                    },
                    () => {
                        resolve(result);
                        this.timeout(key, () => (this._promises[key] = null), 1000);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Convert raw API data into a valid User Object
     * @param raw_item Raw API data
     */
    protected process(raw_data: any): User {
        return new User(raw_data);
    }
}
