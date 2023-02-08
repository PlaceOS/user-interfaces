import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

type VoidFn = () => void;

/**
 * Class for handling cleanup of async methods when components are destroyed.
 * Async methods include Subscriptions, Timeouts and Intervals
 */
@Injectable({
    providedIn: 'root',
})
export class AsyncHandler implements OnDestroy {
    /** Store for named timers */
    protected _timers: { [name: string]: number } = {};
    /** Store for named intervals */
    protected _intervals: { [name: string]: number } = {};
    /** Store for named subscription unsub callbacks */
    protected _subscriptions: {
        [name: string]: Subscription | VoidFn;
    } = {};
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();

    /** Whether the object has been initialised */
    public get is_initialised(): boolean {
        return this._initialised.getValue();
    }

    public ngOnDestroy(): void {
        this.destroy();
    }

    protected destroy() {
        for (const key in this._timers) {
            if (key in this._timers) {
                this.clearTimeout(key);
            }
        }
        for (const key in this._intervals) {
            if (key in this._intervals) {
                this.clearInterval(key);
            }
        }
        for (const key in this._subscriptions) {
            if (key in this._subscriptions) {
                this.unsub(key);
            }
        }
    }

    /**
     * Creates a named timer
     * @param name Name of the timer
     * @param fn Callback function for the timer
     * @param delay Callback delay
     */
    protected timeout(name: string, fn: () => void, delay: number = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = <any>setTimeout(() => {
                fn();
                delete this._timers[name];
            }, delay);
        } else {
            throw new Error(
                name
                    ? 'Cannot create named timeout without a name'
                    : 'Cannot create a timeout without a callback'
            );
        }
    }

    /**
     * Clears the named timer
     * @param name Timer name
     */
    protected clearTimeout(name: string) {
        if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            delete this._timers[name];
        }
    }

    /**
     * Creates a named interval
     * @param name Name of the interval
     * @param fn Callback function for the interval
     * @param delay Callback delay
     */
    protected interval(name: string, fn: () => void, delay: number = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = <any>setInterval(() => fn(), delay);
        } else {
            throw new Error(
                name
                    ? 'Cannot create named interval without a name'
                    : 'Cannot create a interval without a callback'
            );
        }
    }

    /**
     * Clears the named interval
     * @param name Timer name
     */
    protected clearInterval(name: string) {
        if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            delete this._intervals[name];
        }
    }

    /**
     * Store named subscription
     * @param name Name of the subscription
     * @param unsub Unsubscribe callback or Subscription object
     */
    protected subscription(name: string, unsub: Subscription | VoidFn) {
        this.unsub(name);
        this._subscriptions[name] = unsub;
    }

    protected hasSubscription(name: string) {
        return (
            this._subscriptions[name] instanceof Subscription ||
            !!this._subscriptions[name]
        );
    }

    /**
     * Call unsubscribe callback with the given name
     * @param name
     */
    protected unsub(name: string) {
        if (name in this._subscriptions) {
            if (this._subscriptions[name] instanceof Subscription) {
                (this._subscriptions[name] as any).unsubscribe();
            } else if (this._subscriptions[name]) {
                (this._subscriptions[name] as any)();
            }
            delete this._subscriptions[name];
        }
    }

    /** Unsubscribe to the items with names containing the given string */
    protected unsubWith(contains: string) {
        const subs = Object.keys(this._subscriptions).filter((k) =>
            k.includes(contains)
        );
        for (const key of subs) {
            this.unsub(key);
        }
    }
}
