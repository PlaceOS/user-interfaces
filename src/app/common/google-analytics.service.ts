import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare global {
    interface Window {
        ga: any;
        debug: boolean;
    }
}

@Injectable({
    providedIn: 'root'
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

    constructor(private title: Title) {
        if (!window.ga) {
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                (i[r] =
                    i[r] ||
                    function() { (i[r].q = i[r].q || []).push(arguments); }), (i[r].l = 1 * (new Date() as any));
                (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            console.log('Service', 'Injected Google Analytics into page');
        }
        this.service = window.ga;
    }

    /**
     * Initialise Google Analytics
     * @param tracking_id GA Tracking ID
     */
    public load(tracking_id: string) {
        if (!this.enabled) { throw new Error('Google Analytics needs to be enabled before being initialised') }
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        console.log('Service', `Setup with tracking ID: ${tracking_id}`);
        this.service('create', tracking_id, 'auto');
        this.service('send', 'pageview');
    }
    /**
     * Set User ID for the Google Analytics session
     * @param id Identifier of the User
     */
    public setUser(id: string) {
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        if (this.enabled) {
            this.timeout(`user|${id}`, () => {
                console.log('Service', `Set user ID: ${id}`);
                this.service('set', 'userId', id);
                this.event('authentication', 'user-id available');
            }, 100);
        }
    }

    /**
     * Post event to Google Analytics API
     * @param category Event Category
     * @param action Event Action
     * @param label Event Label
     * @param value Event Value
     */
    public event(category: string, action: string, label?: string, value?: string) {
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        if (this.enabled) {
            this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
                const l = label ? ', ' + label : '';
                console.log('Service', `Event: ${category}, ${action}${l}${value ? ', ' + value : ''}`);
                const prefix = this.app_prefix ? this.app_prefix + '_' : ''
                this.service('send', 'event', `${prefix}${category}`, action, label, value);
            }, 100);
        }
    }

    /**
     * Post screen change event to Google Analytics API
     * @param name
     * @param app_name
     */
    public screen(name: string, app_name?: string) {
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        if (name && this.enabled) {
            this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
                console.log('Service', `Screen: ${name}${app_name ? ', ' + app_name : ''}`);
                this.service('send', 'screenview', {
                    appName: app_name || this.app_name,
                    screenName: name
                });
            }, 100);
        }
    }

    /**
     * Post routing event to Google Analytics API
     * @param route Activated route
     * @param origin Add origin to routh path
     */
    public page(route: string, origin: boolean = false) {
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        if (this.enabled) {
            this.last_route = route || '/';
            this.timeout(`page|${route}`, () => {
                console.log('Service', `Page: ${route}`);
                this.service('send', 'pageview', `${origin ? location.origin : ''}${route}`);
            }, 100);
        }
    }

    /**
     * Post timing event to Google Analytics API
     * @param category
     * @param variable
     * @param value
     * @param label
     */
    public timing(category: string, variable: string, value: string, label?: string) {
        if (!this.service) { throw new Error('Google Analytics hasn\'t been installed on this page'); }
        if (this.enabled) {
            this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
                console.log('Service', `Timing: ${category}, ${variable}, ${value}${label ? ', ' + label : ''}`);
                this.service('send', 'timing', category, variable, value, label);
            }, 100);
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
            this.timers[name] = null;
        }
        this.timers[name] = <any>setTimeout(() => {
            if (fn instanceof Function) { fn(); }
            this.timers[name] = null;
        }, delay);
    }
}
