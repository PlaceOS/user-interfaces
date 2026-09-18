import { Injectable } from '@angular/core';
import { log } from './general';

declare global {
    interface Window {
        ga: any;
        gtag: any;
        dataLayer: any[];
        debug: boolean;
    }
}

@Injectable({
    providedIn: 'root',
})
export class GoogleAnalyticsService {
    /** Google Analytics API object */
    private service: any;
    /** Whether posting analytics events is enabled */
    public enabled = true;
    /** Name of the application */
    public app_name = 'GA_APP';
    /** Whether the tracking ID is a GA4 measurement ID (`G-...`) */
    private _ga4 = false;

    /** Store for timer ids */
    private timers: { [name: string]: number } = {};

    public init(tracking_id = '') {
        this._ga4 = !!tracking_id?.startsWith('G-');
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
                window.dataLayer.push(arguments);
            } as any;
            if (this._ga4) {
                window.gtag('js', new Date());
            } else {
                window.dataLayer.push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                });
            }
            const script = document.createElement('script') as any;
            script.async = true;
            script.src = this._ga4
                ? `https://www.googletagmanager.com/gtag/js?id=${tracking_id}`
                : `https://www.googletagmanager.com/gtm.js?id=${tracking_id}`;
            const first_script = document.getElementsByTagName('script')[0];
            if (first_script?.parentNode) {
                first_script.parentNode.insertBefore(script, first_script);
            } else {
                document.head.appendChild(script);
            }
            log('Analytics', 'Service', 'Injected Google Analytics into page');
        }
        this.service = window.gtag;
    }

    public push(obj: Record<string, any>) {
        window.dataLayer.push(obj);
    }

    /**
     * Initialise Google Analytics
     * @param tracking_id GA Tracking ID
     */
    public load(tracking_id: string) {
        if (!this.enabled) {
            throw new Error(
                'Google Analytics needs to be enabled before being initialised',
            );
        }
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        log('Analytics', 'Service', `Setup with tracking ID: ${tracking_id}`);
        if (this._ga4) {
            // The config command queues the initial page_view automatically
            this.service('config', tracking_id);
            return;
        }
        this.page('');
    }
    /**
     * Set User ID for the Google Analytics session
     * @param id Identifier of the User
     */
    public setUser(id: string) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (this.enabled) {
            this.timeout(
                `user|${id}`,
                () => {
                    log('Analytics', 'Service', `Set user ID: ${id}`);
                    if (this._ga4) {
                        this.service('set', { user_id: id });
                    } else {
                        this.service('set', 'userId', id);
                    }
                    this.event('authentication', 'user-id available');
                },
                100,
            );
        }
    }

    public send(type: string, value: Record<string, any>) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (this.enabled) {
            this.timeout(`end|${type}`, () => {
                if (this._ga4) {
                    this.service('event', type, value);
                    return;
                }
                this.push({
                    ...value,
                    event: 'event',
                });
            });
        }
    }

    /**
     * Post event to Google Analytics API
     * @param category Event Category
     * @param action Event Action
     * @param label Event Label
     * @param value Event Value
     */
    public event(
        category: string,
        action: string,
        label?: string,
        value?: string,
    ) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (this.enabled) {
            this.timeout(
                `event|${category}|${action}|${label}|${value}`,
                () => {
                    const l = label ? ', ' + label : '';
                    log(
                        'Analytics',
                        'Service',
                        `Event: ${category}, ${action}${l}${
                            value ? ', ' + value : ''
                        }`,
                    );
                    if (this._ga4) {
                        this.service('event', action, {
                            event_category: category,
                            event_label: label,
                            value,
                        });
                        return;
                    }
                    this.push({
                        event: 'event',
                        category: category,
                        action: action,
                        label: label,
                    });
                },
                100,
            );
        }
    }

    /**
     * Post screen change event to Google Analytics API
     * @param name
     * @param app_name
     */
    public screen(name: string, app_name?: string) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (name && this.enabled) {
            this.timeout(
                `event|${name}|${app_name || this.app_name}`,
                () => {
                    log(
                        'Analytics',
                        'Service',
                        `Screen: ${name}${app_name ? ', ' + app_name : ''}`,
                    );
                    if (this._ga4) {
                        this.service('event', 'screen_view', {
                            app_name: app_name || this.app_name,
                            screen_name: name,
                        });
                        return;
                    }
                    this.push({
                        event: 'screenview',
                        appName: app_name || this.app_name,
                        screenName: name,
                    });
                },
                100,
            );
        }
    }

    /**
     * Post routing event to Google Analytics API
     * @param route Activated route
     * @param origin Add origin to routh path
     */
    public page(route: string, origin = false) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (this.enabled) {
            this.timeout(
                `page|${route}`,
                () => {
                    log('Analytics', 'Service', `Page: ${route}`);
                    if (this._ga4) {
                        this.service('event', 'page_view', {
                            page_path: route || location.pathname,
                            page_location: origin
                                ? `${location.origin}${route}`
                                : location.href,
                        });
                        return;
                    }
                    this.push({
                        event: 'pageview',
                        url: `${origin ? location.origin : ''}${route}`,
                    });
                },
                100,
            );
        }
    }

    /**
     * Post timing event to Google Analytics API
     * @param category
     * @param variable
     * @param value
     * @param label
     */
    public timing(
        category: string,
        variable: string,
        value: string,
        label?: string,
    ) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page",
            );
        }
        if (this.enabled) {
            this.timeout(
                `page|${category}|${variable}|${value}|${label}`,
                () => {
                    log(
                        'Analytics',
                        'Service',
                        `Timing: ${category}, ${variable}, ${value}${
                            label ? ', ' + label : ''
                        }`,
                    );
                    if (this._ga4) {
                        this.service('event', 'timing_complete', {
                            event_category: category,
                            name: variable,
                            value: Number(value) || 0,
                            event_label: label,
                        });
                        return;
                    }
                    this.push({
                        event: 'timing',
                        category,
                        variable,
                        value,
                        label,
                    });
                },
                100,
            );
        }
    }

    /**
     * Creates a timeout for the given name used for preventing duplicate events in quick succession
     * @param name Name of timer
     * @param fn Timer callback
     * @param delay Timer delay
     */
    private timeout(name: string, fn: () => void, delay = 300) {
        if (this.timers[name]) {
            clearTimeout(this.timers[name]);
            delete this.timers[name];
        }
        this.timers[name] = <any>setTimeout(() => {
            if (fn instanceof Function) {
                fn();
            }
            delete this.timers[name];
        }, delay);
    }
}
