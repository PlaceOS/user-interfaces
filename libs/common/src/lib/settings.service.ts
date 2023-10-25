import { Injectable, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { format, isSameDay } from 'date-fns';
import { first } from 'rxjs/operators';

import { log, getItemWithKeys, setAppName } from './general';
import { DEFAULT_SETTINGS } from './settings';
import { HashMap } from './types';
import { AsyncHandler } from './async-handler.class';

import { VERSION } from './version';
import { currentUser, current_user } from './user-state';
import { GoogleAnalyticsService } from './google-analytics.service';

declare global {
    interface Window {
        debug: boolean;
        application: HashMap;
    }
}

@Injectable({
    providedIn: 'root',
})
export class SettingsService extends AsyncHandler {
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
        const tracking_id = this.get('app.analytics.tracking_id');
        if (!tracking_id) return;
        this._analytics?.send('pagename', { title: value });
    }

    constructor(
        private _title: Title,
        @Optional() private _analytics: GoogleAnalyticsService
    ) {
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
            location.pathname.replace(/[\\\/]/g, '').trim() || this._app_name;
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
        const data = await showMetadata(user.id, 'settings').toPromise();
        this._user_settings.next(data.details || {});
        this._initDarkMode();
        this._applyTheme();
        this._setFontSize();
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name;
    }

    public get time_format(): string {
        return this.get('app.use_24_hour_time') ? 'HH:mm' : 'h:mm a';
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
        if (name === 'dark_mode') this.setTheme(value ? 'dark' : '');
        if (name === 'font_size') this._setFontSize();
        this.timeout('save_settings', () => this._savePendingChanges(), 5000);
    }

    public overrideCssVariable(
        key: string,
        value: string,
        important: boolean = false
    ) {
        let element = document.getElementById(`css-var-overrides+${key}`);
        if (!element) {
            element = document.createElement('style');
            element.id = `css-var-overrides+${key}`;
            document.head.appendChild(element);
        }
        element.innerText = `html, body { --${key}: ${value} ${
            important ? '!important' : ''
        }}`;
    }

    public setTheme(theme: string) {
        const current_theme = this.get('theme');
        if (current_theme === theme) return;
        this.saveUserSetting('theme', theme);
        this._applyTheme();
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
        if (!user?.id || !Object.keys(this._pending_settings).length) return;
        await updateMetadata(user.id, {
            name: 'settings',
            description: '',
            details: {
                ...this._user_settings.getValue(),
                ...this._pending_settings,
            },
        }).toPromise();
        this._user_settings.next({
            ...this._user_settings.getValue(),
            ...this._pending_settings,
        });
        this._pending_settings = {};
    }

    private async _applyUserSettings(settings: HashMap) {
        if (settings.font_size) {
        }
    }

    private _setFontSize() {
        if (!this.get('font_size')) return;
        this.overrideCssVariable('font-size', `${this.get('font_size')}px`);
    }

    private _applyTheme() {
        const theme = this.get('theme');
        const class_list = document.body.classList.value.split(' ');
        for (const item of class_list) {
            if (item.startsWith('theme-')) {
                document.body.classList.remove(item);
            }
        }
        if (theme) {
            document.body.classList.add(`theme-${theme}`);
        } else {
            document.body.classList.remove(`theme-${theme}`);
        }
    }

    private _initDarkMode() {
        if (this.get('theme') || true) return;
        const os_dark = window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            : false;
        this.setTheme(os_dark ? 'dark' : '');
    }
}
