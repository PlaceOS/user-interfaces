import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, interval } from 'rxjs';
import { first, map, tap, throttleTime } from 'rxjs/operators';

const EVENTS_NAMES = ['keypress', 'mousemove', 'touchmove', 'scroll', 'wheel'];

@Injectable({
    providedIn: 'root',
})
export class UserIdleTimeService {
    private _last_action = new BehaviorSubject(Date.now());
    private _update = (e?) => this._onUserInteraction();
    private _event_names = EVENTS_NAMES;

    public readonly last_action = combineLatest([
        this._last_action,
        interval(1000),
    ]).pipe(
        throttleTime(300),
        map(([last_action]) => last_action)
    );

    public readonly idle_time = this.last_action.pipe(
        map((time) => Date.now() - time)
    );

    private _onUserInteraction() {
        this._last_action.next(Date.now());
    }

    public idleFor(time_ms: number) {
        const stop = this.startListening();
        return this.idle_time.pipe(
            first((t) => t >= time_ms),
            tap(() => stop())
        );
    }

    public startListening() {
        this._last_action.next(Date.now());
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
