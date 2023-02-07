import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    /** Application prefix to add to event categories */
    public app_prefix: string;
    /** Whether posting analytics events is enabled */
    public enabled = true;
    /** Name of the application */
    public app_name = 'GA_APP';

    /** Last route posted to the API */
    private last_route: string;
    /** Store for timer ids */
    private timers: { [name: string]: number } = {};

    constructor(private title: Title) {}

    public init(tracking_id: string = '') {
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s) as any,
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', tracking_id);
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
                'Google Analytics needs to be enabled before being initialised'
            );
        }
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
            );
        }
        log('Analytics', 'Service', `Setup with tracking ID: ${tracking_id}`);
        this.page('');
    }
    /**
     * Set User ID for the Google Analytics session
     * @param id Identifier of the User
     */
    public setUser(id: string) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
            );
        }
        if (this.enabled) {
            this.timeout(
                `user|${id}`,
                () => {
                    log('Analytics', 'Service', `Set user ID: ${id}`);
                    this.service('set', 'userId', id);
                    this.event('authentication', 'user-id available');
                },
                100
            );
        }
    }

    public send(type: string, value: Record<string, any>) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
            );
        }
        if (this.enabled) {
            this.timeout(`end|${type}`, () => {
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
        value?: string
    ) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
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
                        }`
                    );
                    const prefix = this.app_prefix ? this.app_prefix + '_' : '';
                    this.push({
                        event: 'event',
                        category: category,
                        action: action,
                        label: label,
                    });
                },
                100
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
                "Google Analytics hasn't been installed on this page"
            );
        }
        if (name && this.enabled) {
            this.timeout(
                `event|${name}|${app_name || this.app_name}`,
                () => {
                    log(
                        'Analytics',
                        'Service',
                        `Screen: ${name}${app_name ? ', ' + app_name : ''}`
                    );
                    this.push({
                        event: 'screenview',
                        appName: app_name || this.app_name,
                        screenName: name,
                    });
                },
                100
            );
        }
    }

    /**
     * Post routing event to Google Analytics API
     * @param route Activated route
     * @param origin Add origin to routh path
     */
    public page(route: string, origin: boolean = false) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
            );
        }
        if (this.enabled) {
            this.last_route = route || '/';
            this.timeout(
                `page|${route}`,
                () => {
                    log('Analytics', 'Service', `Page: ${route}`);
                    this.push({
                        event: 'pageview',
                        url: `${origin ? location.origin : ''}${route}`,
                    });
                },
                100
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
        label?: string
    ) {
        if (!this.service) {
            throw new Error(
                "Google Analytics hasn't been installed on this page"
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
                        }`
                    );
                    this.push({
                        event: 'timing',
                        category,
                        variable,
                        value,
                        label,
                    });
                },
                100
            );
        }
    }

    /**
     * Creates a timeout for the given name used for preventing duplicate events in quick succession
     * @param name Name of timer
     * @param fn Timer callback
     * @param delay Timer delay
     */
    private timeout(name: string, fn: () => void, delay: number = 300) {
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
