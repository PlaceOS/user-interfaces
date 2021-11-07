import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { format, isSameDay } from 'date-fns';

import { log, getItemWithKeys, setAppName } from './general';
import { DEFAULT_SETTINGS } from './settings';
import { HashMap } from './types';
import { BaseClass } from './base.class';

import { VERSION } from './version';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { currentUser } from './user-state';
import { current_user } from '..';
import { first } from 'rxjs/operators';

declare global {
    interface Window {
        debug: boolean;
        application: HashMap;
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
    /** User's personal settings */
    private _user_settings = new BehaviorSubject<HashMap>({});
    /** Mapping of behaviour subjects */
    private _subjects: HashMap<BehaviorSubject<any>> = {};
    /** Mapping of observables */
    private _observables: HashMap<Observable<any>> = {};
    /** Mapping of pending settings */
    private _pending_settings: HashMap = {};

    /**
     * @hidden
     */
    public set overrides(value: HashMap[]) {
        this._overrides.next(value);
        this._applyCssVariables();
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
        return !this._observables[name]
            ? null
            : this._subjects[name].getValue();
    }

    /** Page title */
    public get title() {
        return this._title.getTitle();
    }
    public set title(value: string) {
        this._title.setTitle(
            `${value} | ${this.get('app.name') || this._app_name}`
        );
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
        if (this.get('debug')) window.debug = true;
        if (this.get('app')?.name) {
            this._app_name = this.get('app').name;
        }
        this._app_name =
            location.pathname.replace('/', '').trim() || this._app_name;
        setAppName(this._app_name.split('-').join('_').toUpperCase());
        log('Settings', 'Successfully loaded settings');
        this._initialised.next(true);
        if (window.debug) {
            if (!window.application) window.application = {};
            window.application.settings = this;
        }
        this.subscription(
            'user_settings',
            this._user_settings.subscribe((_) => this._applyUserSettings(_))
        );
        const user = await current_user.pipe(first((_) => !!_)).toPromise();
        console.log('User:', user);
        const data = await showMetadata(user.id, 'settings').toPromise();
        console.log('Data:', data);
        this._user_settings.next(data.details || {});
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name;
    }

    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public get<T = any>(key: string): T {
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return (
                getItemWithKeys(keys, this._pending_settings) ??
                getItemWithKeys(keys, this._user_settings.getValue()) ??
                getItemWithKeys(keys, DEFAULT_SETTINGS)
            );
        }
        const override_settings = [...this._overrides.getValue()];
        for (const override of override_settings) {
            const value = getItemWithKeys(keys.slice(1), override);
            if (value != null) {
                return value;
            }
        }
        return getItemWithKeys(keys, DEFAULT_SETTINGS);
    }

    public saveUserSetting<T>(name: string, value: T) {
        this._pending_settings[name] = value;
        this.timeout('save_settings', () => this._savePendingChanges(), 5000);
    }

    private _applyCssVariables() {
        const variable_map = this.get('app.css_variables') || {};
        let css_string = 'body { ';
        for (const key in variable_map) {
            css_string += `--${key}: ${variable_map[key]}; `;
        }
        css_string += '}';
        let element = document.getElementById('css-var-overrides');
        if (!element) {
            element = document.createElement('style');
            element.id = 'css-var-overrides';
            document.head.appendChild(element);
        }
        element.innerText = css_string;
    }

    private async _savePendingChanges() {
        const user = currentUser();
        if (!user || !Object.keys(this._pending_settings).length) return;
        await updateMetadata(user.id, {
            name: 'settings',
            description: '',
            details: {
                ...this._user_settings.getValue(),
                ...this._pending_settings,
            },
        });
    }

    private async _applyUserSettings(settings: HashMap) {
        if (settings.dark_mode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        if (settings.font_size) {
            document.body.style.fontSize = `${settings.font_size}px`;
        }
    }
}
