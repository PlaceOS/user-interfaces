import { computed, Injectable, signal } from '@angular/core';
import { AsyncHandler, i18n, notifySuccess } from '@placeos/common';

/** Lengths of a focus session that the user can select, in minutes */
export const FOCUS_DURATIONS = [15, 25, 45, 60];

/**
 * Countdown for a focus session.
 * The service is a singleton, so the countdown continues when the user
 * leaves the home page. A page reload stops the countdown.
 */
@Injectable({ providedIn: 'root' })
export class FocusTimerService extends AsyncHandler {
    private _duration = signal(25);
    private _remaining = signal(25 * 60);
    private _running = signal(false);
    /** Time at which the session ends, in milliseconds. Set while running */
    private _end = 0;

    /** Length of the session in minutes */
    public readonly duration = this._duration.asReadonly();
    /** Time that is left in the session, in seconds */
    public readonly remaining = this._remaining.asReadonly();
    public readonly running = this._running.asReadonly();
    /** Whether the session has used some of its time */
    public readonly started = computed(
        () => this._remaining() < this._duration() * 60,
    );

    /** Select the length of the session. This stops a session in progress */
    public setDuration(minutes: number) {
        this._duration.set(minutes);
        this.reset();
    }

    public start() {
        if (this._running()) return;
        this._end = Date.now() + this._remaining() * 1000;
        this._running.set(true);
        this.interval('tick', () => this._tick(), 1000);
    }

    public pause() {
        if (!this._running()) return;
        this._tick();
        this._stop();
    }

    /** Stop the session and put back its full time */
    public reset() {
        this._stop();
        this._remaining.set(this._duration() * 60);
    }

    private _stop() {
        this.clearInterval('tick');
        this._running.set(false);
    }

    /** Update the time left from the clock, and end the session at zero */
    private _tick() {
        const remaining = Math.ceil((this._end - Date.now()) / 1000);
        if (remaining > 0) {
            this._remaining.set(remaining);
            return;
        }
        this.reset();
        notifySuccess(i18n('APP.WORKPLACE.FOCUS_TIMER_DONE'));
    }
}
