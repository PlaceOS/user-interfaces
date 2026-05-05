import { Injectable, computed, signal } from '@angular/core';
import {
    PlaceAuthority,
    PublicEventQueryOptions,
    listPublicEvents,
    publicEventGuestToken,
    registerPublicEvent,
    setStorage,
    setToken,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { isSystemEvent } from './public-event.helpers';

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (
                key: string,
                options: { action: string },
            ) => Promise<string>;
        };
    }
}

export interface PublicEvent {
    id?: string;
    event_id?: string;
    calendar_event_id?: string;
    uid?: string;
    name?: string;
    title?: string;
    summary?: string;
    display_name?: string;
    description?: string;
    body?: string;
    details?: string;
    is_system_event?: boolean;
    location?: string;
    location_name?: string;
    space_name?: string;
    event_start?: string | number;
    date_start?: string | number;
    start?: string | number;
    starts_at?: string | number;
    event_end?: string | number;
    date_end?: string | number;
    end?: string | number;
    ends_at?: string | number;
    [name: string]: unknown;
}

export interface GuestDetails {
    name: string;
    email: string;
}

const GUEST_STORAGE_KEY = 'PLACEOS.public.guest';

@Injectable({ providedIn: 'root' })
export class PublicEventsService {
    public readonly authority = signal<PlaceAuthority | null>(null);
    public readonly loading = signal('');
    public readonly error = signal('');
    public readonly events = signal<PublicEvent[]>([]);
    public readonly guest = signal<GuestDetails | null>(
        this._storedGuestDetails(),
    );
    public readonly authenticated = computed(() => !!this.guest());
    public readonly logo_url = computed(() => {
        const config = this.authority()?.config || {};
        const public_config = this._configMap(config['public']);
        const events_config = this._configMap(config['public_events']);
        const app_config = this._configMap(config['app']);
        return `${
            events_config['logo'] ||
            events_config['logo_light'] ||
            public_config['logo'] ||
            public_config['logo_light'] ||
            app_config['logo_light'] ||
            app_config['logo'] ||
            config['logo_light'] ||
            config['logo'] ||
            'assets/logo-light.svg'
        }`;
    });
    public readonly default_system_id = computed(() => {
        const config = this.authority()?.config || {};
        const public_config = this._configMap(config['public']);
        const events_config = this._configMap(config['public_events']);
        return `${
            events_config['system_id'] ||
            events_config['default_system'] ||
            public_config['system_id'] ||
            public_config['default_system'] ||
            config['public_events_system_id'] ||
            config['default_public_events_system_id'] ||
            config['default_system'] ||
            config['system_id'] ||
            ''
        }`;
    });

    private readonly _recaptcha_key = computed(
        () => `${this.authority()?.config?.['recaptcha_key'] || ''}`,
    );

    constructor() {
        setStorage(this._rememberedGuestDetails() ? 'local' : 'session');
    }

    public async init() {
        if (this.authority()) return;
        const resp = await fetch('/auth/authority');
        if (!resp.ok) throw new Error('Unable to load PlaceOS authority.');
        this.authority.set((await resp.json()) as PlaceAuthority);
        this._addRecaptcha(this._recaptcha_key());
    }

    public async requestGuestAccess(
        system_id: string,
        details: GuestDetails,
        remember = false,
    ) {
        this.error.set('');
        this.loading.set('Checking guest access...');
        try {
            const captcha = await this._runRecaptcha('public_events');
            const token = await lastValueFrom(
                publicEventGuestToken(system_id, { ...details, captcha }),
            );
            if (!token) throw new Error('Guest access response was invalid.');
            setStorage(remember ? 'local' : 'session');
            setToken(token, Date.now() + 2 * 60 * 60 * 1000);
            this._storeGuestDetails(details, remember);
            this.guest.set(details);
        } catch (err) {
            this.error.set(this._message(err));
            throw err;
        } finally {
            this.loading.set('');
        }
    }

    public async loadEvents(system_id: string) {
        this.error.set('');
        this.loading.set('Loading public events...');
        try {
            const events = await lastValueFrom(
                listPublicEvents(system_id, {
                    limit: 100,
                } satisfies PublicEventQueryOptions),
            );
            this.events.set(
                (events || []).filter((event) => !isSystemEvent(event)),
            );
        } catch (err) {
            this.error.set(this._message(err));
        } finally {
            this.loading.set('');
        }
    }

    public async register(system_id: string, event_id: string) {
        const guest = this.guest();
        if (!guest) throw new Error('Guest details are required.');
        this.error.set('');
        this.loading.set('Registering for event...');
        try {
            return await lastValueFrom(
                registerPublicEvent(system_id, { event_id, ...guest }),
            );
        } catch (err) {
            this.error.set(this._message(err));
            throw err;
        } finally {
            this.loading.set('');
        }
    }

    private _addRecaptcha(key: string) {
        if (!key || document.getElementById('placeos-recaptcha')) return;
        const script = document.createElement('script');
        script.id = 'placeos-recaptcha';
        script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
        document.body.appendChild(script);
    }

    private _runRecaptcha(action: string): Promise<string> {
        const key = this._recaptcha_key();
        if (!key) return Promise.resolve('');
        return new Promise((resolve, reject) => {
            const attempt = (tries = 0) => {
                if (window.grecaptcha) {
                    const grecaptcha = window.grecaptcha;
                    window.grecaptcha.ready(() => {
                        grecaptcha.execute(key, { action }).then((token) => {
                            if (!token) {
                                reject(
                                    new Error(
                                        'Guest access check returned no response.',
                                    ),
                                );
                                return;
                            }
                            resolve(token);
                        }, reject);
                    });
                    return;
                }
                if (tries > 20) {
                    reject(new Error('Guest access check failed to load.'));
                    return;
                }
                setTimeout(() => attempt(tries + 1), 250);
            };
            attempt();
        });
    }

    private _message(err: unknown) {
        return err instanceof Error ? err.message : `${err}`;
    }

    private _configMap(value: unknown): Record<string, unknown> {
        return value && typeof value === 'object'
            ? (value as Record<string, unknown>)
            : {};
    }

    private _storedGuestDetails(): GuestDetails | null {
        return this._rememberedGuestDetails() || this._sessionGuestDetails();
    }

    private _rememberedGuestDetails(): GuestDetails | null {
        return this._parseGuestDetails(localStorage.getItem(GUEST_STORAGE_KEY));
    }

    private _sessionGuestDetails(): GuestDetails | null {
        return this._parseGuestDetails(
            sessionStorage.getItem(GUEST_STORAGE_KEY),
        );
    }

    private _storeGuestDetails(details: GuestDetails, remember: boolean) {
        const storage = remember ? localStorage : sessionStorage;
        const other_storage = remember ? sessionStorage : localStorage;
        storage.setItem(GUEST_STORAGE_KEY, JSON.stringify(details));
        other_storage.removeItem(GUEST_STORAGE_KEY);
    }

    private _parseGuestDetails(value: string | null): GuestDetails | null {
        try {
            return JSON.parse(value || 'null');
        } catch {
            return null;
        }
    }
}
