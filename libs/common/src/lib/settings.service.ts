import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { format, isSameDay } from 'date-fns';

import { log, getItemWithKeys } from './general';
import { DEFAULT_SETTINGS } from './settings';
import { HashMap } from './types';
import { BaseClass } from './base.class';

import { VERSION } from './version';

declare global {
    interface Window {
        debug: boolean;
    }
}

@Injectable({
    providedIn: 'root',
})
export class SettingsService extends BaseClass {
    /** Name of the application */
    private _app_name = 'PlaceOS';
    /** List of override settings in order of priority */
    private _overrides = new BehaviorSubject<HashMap[]>([]);
    /** Mapping of behaviour subjects */
    private _subjects: HashMap<BehaviorSubject<any>> = {};
    /** Mapping of observables */
    private _observables: HashMap<Observable<any>> = {};

    /**
     * @hidden
     */
    public set overrides(value: HashMap[]) {
        this._overrides.next(value);
    }

    /** Get observable for key */
    public listen<T = any>(name: string): Observable<T> {
        if (!this._observables[name]) {
            this._subjects[name] = new BehaviorSubject<T>(null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        return this._observables[name];
    }

    /** Update observable value for key */
    public post<T>(name: string, value: T): void {
        if (!this._observables[name]) {
            this._subjects[name] = new BehaviorSubject<T>(null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        this._subjects[name].next(value);
    }

    public value<T = any>(name: string): T {
        return !this._observables[name] ? null : this._subjects[name].getValue();
    }

    /** Page title */
    public get title() {
        return this._title.getTitle();
    }
    public set title(value: string) {
        this._title.setTitle(`${value} | ${this._app_name}`);
    }

    constructor(private _title: Title) {
        super();
        const now = new Date();
        const time = new Date(VERSION.time);
        const built = isSameDay(now, time)
            ? `Today at ${format(time, 'h:mma')}`
            : format(time, 'do MMM yyyy, h:mma');
        log('CORE', `${VERSION.semver}`, null, 'debug', true);
        log('APP', `${VERSION.hash} | Built: ${built}`, null, 'debug', true);
        this.init();
    }

    /**
     * Initialise the settings
     */
    public async init() {
        if (this.get('debug')) {
            window.debug = true;
        }
        if (this.get('app')?.name) {
            this._app_name = this.get('app').name;
        }
        log('Settings', 'Successfully loaded settings');
        this._initialised.next(true);
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name;
    }

    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public get(key: string): any {
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return getItemWithKeys(keys, DEFAULT_SETTINGS);
        }
        const override_settings = this._overrides.getValue();
        for (const override of override_settings) {
            const value = getItemWithKeys(keys.slice(1), override);
            if (value != null) { return value; }
        }
        return getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
}
