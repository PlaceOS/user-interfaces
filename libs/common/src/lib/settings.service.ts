import {
    Injectable,
    type WritableSignal,
    computed,
    inject,
    signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { showMetadata, updateMetadata, updateUser } from '@placeos/ts-client';
import { format, isSameDay } from 'date-fns';

import { AsyncHandler } from './async-handler.class';
import { getItemWithKeys, log, setAppName } from './general';
import { DEFAULT_SETTINGS } from './settings';
import { HashMap } from './types';

import { GoogleAnalyticsService } from './google-analytics.service';
import { currentUser, reloadUserData } from './user-state';
import { VERSION } from './version';

declare global {
    interface Window {
        debug: boolean;
        app: HashMap;
        setting: (string) => any;
    }
}

let _service: SettingsService;
const _setting_signals: Record<string, WritableSignal<any>> = {};

const DEBUG_OVERRIDES_KEY = 'PLACEOS.setting_overrides';

function loadDebugOverrides(): HashMap {
    try {
        const overrides = JSON.parse(
            localStorage.getItem(DEBUG_OVERRIDES_KEY) || '{}',
        );
        for (const key in overrides) {
            if (!key.startsWith('app.')) delete overrides[key];
        }
        return overrides;
    } catch {
        return {};
    }
}

export function setting<T = any>(key: string): T | undefined {
    return _service ? _service.get(key) : undefined;
}

export function settingSignal<T = any>(
    key: string,
    default_value: T = undefined,
    root = false,
): WritableSignal<T | undefined> {
    const full_key = root ? key : `app.${key}`;
    if (!_setting_signals[full_key]) {
        _setting_signals[full_key] = signal<T>(
            setting(full_key) ?? default_value,
        );
    }
    return _setting_signals[full_key];
}

@Injectable({
    providedIn: 'root',
})
export class SettingsService extends AsyncHandler {
    private _title = inject(Title);
    private _analytics = inject(GoogleAnalyticsService, { optional: true });

    /** Name of the application */
    private _app_name = 'PlaceOS';
    /** List of override settings in order of priority */
    private _overrides = signal<HashMap[]>([]);
    /** Signal that emits when overrides change (e.g. after a building switch) */
    public readonly overrides = this._overrides.asReadonly();
    /** User's personal settings */
    private _user_settings = signal<HashMap>({});
    /** Local debug overrides, highest priority. Flat dot-notation keys. */
    private _debug_overrides = signal<HashMap>(loadDebugOverrides());
    public readonly debug_overrides = this._debug_overrides.asReadonly();
    /** Mapping of setting signals */
    private _subjects: HashMap<WritableSignal<any>> = {};
    /** Mapping of pending settings */
    private _pending_settings: HashMap = {};

    /**
     * @hidden
     */
    public setOverrides(value: HashMap[]) {
        this._overrides.set(value);
        this._refreshSettings();
    }

    /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
    public setDebugOverride(key: string, value: any) {
        if (!key.startsWith('app.')) return;
        const overrides = { ...this._debug_overrides() };
        if (value === undefined) delete overrides[key];
        else overrides[key] = value;
        this._debug_overrides.set(overrides);
        if (Object.keys(overrides).length) {
            localStorage.setItem(
                DEBUG_OVERRIDES_KEY,
                JSON.stringify(overrides),
            );
        } else localStorage.removeItem(DEBUG_OVERRIDES_KEY);
        this._refreshSettings();
    }

    public clearDebugOverrides() {
        this._debug_overrides.set({});
        localStorage.removeItem(DEBUG_OVERRIDES_KEY);
        this._refreshSettings();
    }

    private _refreshSettings() {
        this._applyCssVariables();
        this._updateSignals();
        this._applyTheme();
        this._setFontSize();
        this._setPrintFontSize();
    }

    public get theme() {
        const allow_dark_mode = this.get('app.allow_dark_mode');
        return allow_dark_mode ? this.get('theme') : 'light';
    }

    public readonly theme_signal = computed(() => {
        const allow_dark_mode = this.signal('allow_dark_mode', true)();
        return allow_dark_mode
            ? this.signal('theme', 'light', true)()
            : 'light';
    });

    public readonly time_format_signal = computed(() =>
        this.signal('use_24_hour_time', false)() ? 'HH:mm' : 'h:mm a',
    );

    /** Get signal for key */
    public listen<T = any>(name: string): WritableSignal<T> {
        if (!this._subjects[name]) this._subjects[name] = signal<T>(null);
        return this._subjects[name];
    }

    /** Update observable value for key */
    public post<T>(name: string, value: T): void {
        if (!this._subjects[name]) this._subjects[name] = signal<T>(null);
        this._subjects[name].set(value);
    }

    public value<T = any>(name: string): T {
        return !this._subjects[name] ? null : this._subjects[name]();
    }

    public signal<T = any>(
        name: string,
        default_value?: T,
        root?: boolean,
    ): WritableSignal<T> {
        return settingSignal<T>(name, default_value, root);
    }

    /** Page title */
    public get title() {
        return this._title.getTitle();
    }
    public set title(value: string) {
        this._title.setTitle(
            `${value} | ${this.get('app.name') || this._app_name}`,
        );
        const tracking_id = this.get('app.analytics.tracking_id');
        if (!tracking_id) return;
        this._analytics?.send('pagename', { title: value });
    }

    constructor() {
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
            location.pathname.replace(/[\\/]/g, '').trim() || this._app_name;
        setAppName(this._app_name.split('-').join('_').toUpperCase());
        log('Settings', 'Successfully loaded settings');
        this._initialised.next(true);
        if (window.debug) {
            if (!window.app) window.app = {};
            window.app.settings = this;
            window.setting = (key) => this.get(key);
        }
        const user = await this._currentUser();
        const data = await showMetadata(user.id, 'settings');
        this._user_settings.set(data.details || {});
        this.timeout(
            'init',
            () => {
                this._initDarkMode();
                this._applyTheme();
                this._setFontSize();
                this._setPrintFontSize();
            },
            1000,
        );
        _service = this as any;
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name.replace(/ /g, '-');
    }

    public get time_format(): string {
        return this.get('app.use_24_hour_time') ? 'HH:mm' : 'h:mm a';
    }

    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public get<T = any>(key: string): T {
        const debug_overrides = this._debug_overrides();
        // ponytail: exact-key match only — override `app.a` won't affect get('app.a.b')
        if (key in debug_overrides) return debug_overrides[key];
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return (
                getItemWithKeys(keys, this._pending_settings) ??
                getItemWithKeys(keys, this._user_settings()) ??
                getItemWithKeys(keys, DEFAULT_SETTINGS)
            );
        }
        const override_settings = [...this._overrides()];
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
        this._updateSignals();
        if (name === 'dark_mode') this.setTheme(value ? 'dark' : '');
        if (name === 'font_size') this._setFontSize();
        this.timeout('save_settings', () => this._savePendingChanges(), 2400);
    }

    public async updateLocatable(locatable: boolean) {
        await updateUser(currentUser().id, { locatable }, 'patch');
        reloadUserData();
    }

    public overrideCssVariable(key: string, value: string, important = false) {
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
        const current_theme = this.theme;
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
        this._updateSignals();
        await updateMetadata(user.id, {
            name: 'settings',
            description: '',
            details: {
                ...this._user_settings(),
                ...this._pending_settings,
            },
        });
        this._user_settings.set({
            ...this._user_settings(),
            ...this._pending_settings,
        });
        this._pending_settings = {};
    }

    private _setFontSize() {
        if (!this.get('font_size')) return;
        this.overrideCssVariable('font-size', `${this.get('font_size')}px`);
    }

    private _applyTheme() {
        const allow_dark_mode = this.get('app.allow_dark_mode');
        this._clearTheme();
        if (!allow_dark_mode) return;
        document.body.classList.add(`theme-${this.theme}`);
    }

    private _clearTheme() {
        const class_list = document.body.classList.value.split(' ');
        for (const item of class_list) {
            if (item.startsWith('theme-')) {
                document.body.classList.remove(item);
            }
        }
    }

    private _setPrintFontSize() {
        let print_style_el = document.getElementById('placeos-print-block');
        if (!print_style_el) {
            print_style_el = document.createElement('style');
            print_style_el.id = 'placeos-print-block';
            document.head.appendChild(print_style_el);
        }
        print_style_el.innerText = `@media print { html, body { font-size: ${this.get('app.print_font_size') || '4mm'}; } }`;
    }

    private _initDarkMode() {
        if (this.theme) return;
        const os_dark = window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            : false;
        this.setTheme(os_dark ? 'dark' : '');
    }

    private _updateSignals() {
        for (const key in _setting_signals) {
            _setting_signals[key].update((old) => this.get(key) ?? old);
        }
    }

    private _currentUser() {
        return new Promise<ReturnType<typeof currentUser>>((resolve) => {
            const check = () => {
                const user = currentUser();
                if (user?.id) return resolve(user);
                this.timeout('current_user', check, 100);
            };
            check();
        });
    }
}
