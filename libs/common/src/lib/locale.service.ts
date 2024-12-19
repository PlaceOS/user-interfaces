import { Injectable } from '@angular/core';

import * as DEFAULT_LOCALE from 'shared/assets/locale/en-AU.json';

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

@Injectable({
    providedIn: 'root',
})
export class LocaleService {
    private _default_locale = 'en-AU';
    private _current_locale = this._default_locale;
    private _current_locale_short = this._current_locale.split('-')[0];
    private _cache_time = 7 * 24 * 60 * 60 * 1000;

    private _default_mappings: Record<string, string> =
        removeNesting(DEFAULT_LOCALE);
    private _locale_mappings: Record<string, Record<string, string>> = {};

    public locale_folder = 'assets/locale';

    constructor() {
        this.setLocale(
            localStorage.getItem('APP.locale') || this._default_locale,
        );
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
        if (!this._locale_mappings[locale]) this._loadLocale(locale);
        localStorage.setItem('APP.locale', locale);
    }

    private async _loadLocale(locale: string) {
        const existing: LocaleStore = JSON.parse(
            localStorage.getItem(`APP.locale.${locale}`) || '{}',
        );
        if (!existing.expiry || existing.expiry < Date.now()) {
            localStorage.removeItem(`APP.locale.${locale}`);
            const resp = await fetch(`${this.locale_folder}/${locale}.json`);
            if (!resp.ok)
                return console.error(
                    `Failed to loaded locale file for "${locale}".`,
                    resp,
                );
            const locale_data = await resp.json();
            this._locale_mappings[locale] = removeNesting(locale_data);
            const store = {
                expiry: Date.now() + this._cache_time,
                locale,
                mappings: this._locale_mappings[locale],
            };
            localStorage.setItem(`APP.locale.${locale}`, JSON.stringify(store));
        } else {
            this._locale_mappings[locale] = existing.mappings;
        }
    }
}
