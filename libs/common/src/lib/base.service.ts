
import { Injectable } from '@angular/core';
import { get, post, put, patch, del } from '@placeos/ts-client';
import { BehaviorSubject, Observable, Subscriber, Subject } from 'rxjs';

import { BaseDataClass } from './base-api.class';
import { BaseClass } from './base.class';
import { HashMap } from './types';
import { toQueryString } from './api';

export interface IEngineResponse {
    results: HashMap[];
    total: number;
}

@Injectable()
export class BaseAPIService<T extends {} = BaseDataClass> extends BaseClass {
    /** Display name of the service */
    protected _name: string;
    /** API Route of the service */
    protected _api_route: string;

    protected _api_url: string;
    /** Map of state variables for Service */
    protected _subjects: { [key: string]: BehaviorSubject<any> | Subject<any> } = {};
    /** Map of observables for state variables */
    protected _observers: { [key: string]: Observable<any> } = {};
    /** Map of poll subscribers for API endpoints */
    protected _subscribers: { [key: string]: Subscriber<any> } = {};
    /** Map of promises for Service */
    protected _promises: { [key: string]: Promise<any> } = {};
    /** Comparison function for service items */
    protected _compare: (a: T, b: T) => boolean = (a, b) =>
        a === b || (a as any).id === (b as any).id;
    /** Default filter function for list method */
    protected _list_filter: (a: T) => boolean = (a) => !!a;

    constructor() {
        super();
        this._name = 'Base';
        this._api_route = 'base';
        this._api_url = '/api/engine/v2';
        this.set('list', []);
    }

    /**
     * Initailise service
     */
    public init() {
        this.load().then(
            (_) => this._initialised.next(true),
            (err) => {
                this.timeout('init', () => this.init(), 1000);
            }
        );
    }

    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    public route() {
        return `/api/staff/v1/${this._api_route}`;
    }
    /** API Route of the service */
    public get api_route() {
        return this._api_route;
    }

    /**
     * Get the current value of the named property
     * @param name Property name
     */
    public get<U = any>(name: string): U {
        if (!this._observers[name]) {
            this.set<U>(name, null);
        }

        return (this._subjects[name] as BehaviorSubject<U>).getValue();
    }

    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    public listen<U = any>(name: string): Observable<U> {
        if (!this._observers[name]) {
            this.set<U>(name, null);
        }
        return this._observers[name];
    }

    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    protected set<U = any>(name: string, value: U): void {
        if (!this._subjects[name]) {
            this._subjects[name] = new BehaviorSubject<U>(value);
            this._observers[name] = this._subjects[name].asObservable();
        } else {
            this._subjects[name].next(value);
        }
    }

    /**
     * Get list of loaded items
     * @param filterFn Function for filtering the list
     */
    public list(filterFn: (a: T) => boolean = this._list_filter): T[] {
        const list = this.get('list') || [];
        return list.reduce((a, i) => {
            if (filterFn(i)) {
                a.push(i);
            }
            return a;
        }, []);
    }

    /**
     * Get item with the given id from the loaded items
     * @param id ID of the item
     */
    public item(id: string): T {
        const list = this.get('list') || [];
        return list.find((i) => i.id === id || i.email === id);
    }

    /**
     * Query the index of the API route associated with this service
     * @param query_params Map of query paramaters to add to the request URL
     */
    public query(query_params: HashMap = { update_list: true }): Promise<T[]> {
        let cache = 1000;
        let subroute = '';
        if (query_params) {
            cache = query_params.cache || 1000;
            delete query_params.cache;
            subroute = query_params.subroute;
            delete query_params.subroute;
        }
        const query = toQueryString(query_params);
        const key = `query|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}${subroute ? '/' + subroute : ''}${
                    query ? '?' + query : ''
                }`;
                let result: T[] | HashMap[] = [];
                get(url).subscribe(
                    (d: IEngineResponse | HashMap[]) => {
                        result =
                            d && d instanceof Array
                                ? d.map((i) => this.process(i))
                                : d && !(d instanceof Array) && d.results
                                ? (d.results as HashMap[])
                                : [];
                    },
                    (e) => {
                        reject(e);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result);
                        this.timeout(key, () => (this._promises[key] = null), cache);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Query the API route for a specific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public show(id: string, query_params: HashMap = {}): Promise<T> {
        const query = toQueryString(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<T>((resolve, reject) => {
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result: T = null;
                get(url).subscribe(
                    (d) => (result = this.process(d)),
                    (e) => {
                        reject(e);
                        this._promises[key] = null;
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
     * Make post request for a new item to the service
     * @param form_data Data to post to the server
     * @param query_params Map of query paramaters to add to the request URL
     */
    public add(form_data: HashMap, query_params: HashMap = {}): Promise<T> {
        if (!this._promises.new_item) {
            this._promises.new_item = new Promise<T>((resolve, reject) => {
                const query = toQueryString(query_params);
                const url = `${this.route()}${query ? '?' + query : ''}`;
                let result: T = null;
                post(url, form_data).subscribe(
                    (d) => (result = this.process(d)),
                    (e) => {
                        reject(e);
                        this._promises.new_item = null;
                    },
                    () => {
                        resolve(result);
                        this._promises.new_item = null;
                    }
                );
            });
        }
        return this._promises.new_item;
    }

    /**
     * Save changes to item. Create a new item if it doesn't exist
     * @param data Updated state of the item
     * @param q Query parameters to pass to request
     */
    public save(data: HashMap, q: HashMap = {}) {
        return data.id ? this.update(data.id, data, q) : this.add(data, q);
    }

    /**
     * Perform API task for the given item ID
     * @param id ID of the item
     * @param task_name Name of the task
     * @param form_data Map of data to pass to the API
     * @param method Verb to use for request
     * @param query_params Query Params
     */
    public task<U = any>(
        id: string,
        task_name: string,
        form_data: HashMap = {},
        method: 'post' | 'get' = 'post',
        query_params: HashMap = {}
    ): Promise<U> {
        const query = toQueryString(form_data);
        const _query = toQueryString(query_params);
        const key = `task|${id}|${task_name}|${query}`;
        /* istanbul ignore else */
        if (!this._promises[key]) {
            this._promises[key] = new Promise<U>((resolve, reject) => {
                const post_data = { ...form_data, id, _task: task_name };
                const url = `${this.route()}/${id}/${task_name}${_query ? '?' + _query : ''}`;
                let result: any;
                const request =
                    method === 'post'
                        ? post(url, post_data)
                        : get(`${url}${query ? '?' + query : ''}`);
                request.subscribe(
                    (d) => (result = d),
                    (e) => {
                        reject(e);
                        delete this._promises[key];
                    },
                    () => {
                        resolve(result as U);
                        this.timeout(key, () => delete this._promises[key], 1000);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Make put request for changes to the item with the given id
     * @param id ID of the item being updated
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public update(id: string, form_data: HashMap, query_params: HashMap = {}): Promise<T> {
        const key = `update|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<T>((resolve, reject) => {
                const query = toQueryString(query_params);
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result: T = null;
                put(url, form_data).subscribe(
                    (d) => (result = this.process(d)),
                    (e) => {
                        reject(e);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result);
                        this._promises[key] = null;
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Make patch request for changes to the item with the given id
     * @param id ID of the item being patched
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public patch(id: string, form_data: HashMap, query_params: HashMap = {}): Promise<T> {
        const key = `patch|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<T>((resolve, reject) => {
                const query = toQueryString(query_params);
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result: T = null;
                patch(url, form_data).subscribe(
                    (d) => (result = this.process(d)),
                    (e) => {
                        reject(e);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result);
                        this._promises[key] = null;
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Make delete request for the given item
     * @param id ID of item
     */
    public delete(id: string, query_params: HashMap = {}): Promise<void> {
        const key = `delete|${id}`;
        const query = toQueryString(query_params);
        if (!this._promises[key]) {
            this._promises[key] = new Promise<void>((resolve, reject) => {
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                del(url).subscribe(
                    (_) => null,
                    (e) => reject(e),
                    () => {
                        resolve();
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Load initial data for the service
     */
    protected async load(): Promise<void> {}

    /**
     * Convert raw API data into a valid API Object
     * @param raw_item Raw API data
     */
    protected process(raw_item: HashMap): T {
        return raw_item as T;
    }
}
