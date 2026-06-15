import { computed, Injectable, signal } from '@angular/core';

const EVENTS_NAMES = ['keypress', 'mousemove', 'touchmove', 'scroll', 'wheel'];

@Injectable({
    providedIn: 'root',
})
export class UserIdleTimeService {
    private _last_action = signal(Date.now());
    private _now = signal(Date.now());
    private _interval: ReturnType<typeof setInterval>;
    private _update = (e?) => this._onUserInteraction();
    private _event_names = EVENTS_NAMES;

    public readonly last_action = this._last_action.asReadonly();

    public readonly idle_time = computed(
        () => this._now() - this._last_action(),
    );

    constructor() {
        this._interval = setInterval(() => this._now.set(Date.now()), 1000);
    }

    private _onUserInteraction() {
        this._last_action.set(Date.now());
    }

    public idleFor(time_ms: number) {
        const stop = this.startListening();
        return new Promise<void>((resolve) => {
            const interval = setInterval(() => {
                if (this.idle_time() < time_ms) return;
                clearInterval(interval);
                stop();
                resolve();
            }, 1000);
        });
    }

    public startListening() {
        this._last_action.set(Date.now());
        for (const name of this._event_names) {
            document.body.addEventListener(name, this._update);
        }
        return () => this.stopListening();
    }

    public stopListening() {
        for (const name of this._event_names) {
            document.body.removeEventListener(name, this._update);
        }
    }
}
