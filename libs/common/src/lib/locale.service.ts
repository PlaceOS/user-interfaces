import { Injectable } from '@angular/core';

import * as DEFAULT_LOCALE from 'shared/assets/locale/en-AU.json';

import { log } from './general';
import { showMetadata } from '@placeos/ts-client';

let _service: LocaleService;

export function setTranslationService(service: LocaleService) {
    _service = service;
}

export function i18n(key: string, args: Record<string, any> = {}) {
    if (!_service) return key;
    return _service.get(key, args);
}

interface LocaleStore {
    expiry: number;
    locale: string;
    mappings: Record<string, string>;
}

function removeNesting(value: any, path = ''): Record<string, string> {
    let out_object: Record<string, string> = {};
    for (const key in value) {
        const out_key = path ? [path, key].join('.') : key;
        if (value[key] instanceof Object) {
            out_object = {
                ...out_object,
                ...removeNesting(value[key], out_key),
            };
        } else {
            out_object[out_key] = `${value[key]}`;
        }
    }
    return out_object;
}

/**
 * Removes all localStorage items whose key includes the given substring.
 *
 * @param substring - The substring to search for in the keys.
 */
function removeLocalStorageKeysWithSubstring(substring: string): void {
    // Iterate backward to avoid issues if items are removed during iteration
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.includes(substring)) {
            localStorage.removeItem(key);
        }
    }
}

const STORE_KEY = 'APP.locale';

@Injectable({
    providedIn: 'root',
})
export class LocaleService {
    private _default_locale = 'en-AU';
    private _current_locale = this._default_locale;
    private _current_locale_short = this._current_locale.split('-')[0];
    private _cache_time = 7 * 24 * 60 * 60 * 1000;
    private _load_promises: Record<string, Promise<void>> = {};

    private _default_mappings: Record<string, string> =
        removeNesting(DEFAULT_LOCALE);
    private _locale_mappings: Record<string, Record<string, string>> = {};

    public locale_folder = 'assets/locale';
    public zone_id: string;

    public init() {
        this.setLocale(
            localStorage.getItem(`${STORE_KEY}`) || this._default_locale,
        );
        if (window.debug) {
            (window as any).clearLocaleDataStore = () => {
                removeLocalStorageKeysWithSubstring(STORE_KEY);
                location.reload();
            };
        }
    }

    public get(key: string, args: Record<string, any> = {}) {
        let value =
            (this._locale_mappings[this._current_locale] || {})[key] ||
            (this._locale_mappings[this._current_locale_short] || {})[key] ||
            this._default_mappings[key] ||
            key;
        for (const id in args) {
            value = value.replace(`{{ ${id} }}`, args[id]);
        }
        return value;
    }

    public get default_locale() {
        return this._default_locale;
    }

    public get locale(): string {
        return this._current_locale;
    }

    public getLocaleShort(): string {
        return this._current_locale_short;
    }

    public setLocale(locale: string) {
        this._current_locale = locale;
        this._current_locale_short = this._current_locale.split('-')[0];
        if (!this._locale_mappings[locale] && !this._load_promises[locale]) {
            this._load_promises[locale] = this._loadLocale(locale);
        }
        localStorage.setItem(`${STORE_KEY}`, locale);
        log('LOCALE', `Locale set to "${locale}"`);
    }

    private async _loadLocale(locale: string) {
        const existing: LocaleStore = JSON.parse(
            localStorage.getItem(`${STORE_KEY}.${locale}`) || '{}',
        );
        if (!existing.expiry || existing.expiry < Date.now()) {
            localStorage.removeItem(`${STORE_KEY}.${locale}`);
            const resp = await fetch(`${this.locale_folder}/${locale}.json`);
            if (!resp.ok) {
                delete this._load_promises[locale];
                return console.error(
                    `Failed to loaded locale file for "${locale}".`,
                    resp,
                );
            }
            const locale_data = await resp.json();
            console.log('Zone ID:', this.zone_id);
            const locale_override_data = this.zone_id
                ? await showMetadata(
                      this.zone_id,
                      `locale_${locale}`,
                  ).toPromise()
                : { details: {} };
            const base_locale_values = removeNesting(locale_data);
            const override_locale_values = removeNesting(
                locale_override_data.details,
            );
            this._locale_mappings[locale] = {
                ...base_locale_values,
                ...override_locale_values,
            };
            const store = {
                expiry: Date.now() + this._cache_time,
                locale,
                mappings: this._locale_mappings[locale],
            };
            localStorage.setItem(
                `${STORE_KEY}.${locale}`,
                JSON.stringify(store),
            );
        } else {
            this._locale_mappings[locale] = existing.mappings;
        }
        delete this._load_promises[locale];
    }
}
