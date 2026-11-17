import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, CalendarEvent, HashMap } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInMinutes, endOfDay } from 'date-fns';
import { ControlStateService } from '../control-state.service';
import { systemBinding } from '../system-binding';
import { PulseOnChangeDirective } from './pulse-on-change.directive';

/** Time between updates of the "starts in" label */
const TICK_MS = 30 * 1000;
/** Meetings that start within this many minutes show a countdown */
const COUNTDOWN_MINUTES = 60;

/**
 * Shows the current or next meeting booked in the room today.
 * Reads the room's Bookings module, which pushes changes to its bookings.
 * Used on the start screen. When the meeting has a supported meeting URL,
 * it offers a button that starts the room and joins the meeting.
 */
@Component({
    selector: 'next-meeting',
    template: `
        @if (meeting(); as event) {
            <div
                animate.enter="motion-fade-in"
                class="flex max-w-[32rem] flex-col items-center rounded-sm bg-black/30 px-6 py-4 text-center"
            >
                <div
                    class="text-sm uppercase opacity-80"
                    [pulseOnChange]="status()"
                >
                    @switch (status()) {
                        @case ('now') {
                            {{ 'APP.CONTROL.MEETING_NOW' | translate }}
                        }
                        @case ('soon') {
                            {{
                                'APP.CONTROL.MEETING_STARTS_IN'
                                    | translate: { count: minutes_until() }
                            }}
                        }
                        @default {
                            {{ 'APP.CONTROL.MEETING_NEXT' | translate }}
                        }
                    }
                </div>
                <div class="w-full truncate text-2xl">{{ event.title }}</div>
                <div class="text-sm opacity-80">
                    {{ event.date | date: 'shortTime' }} –
                    {{ event.date_end | date: 'shortTime' }}
                </div>
                @if (can_join()) {
                    <button
                        btn
                        matRipple
                        class="mt-4"
                        (touchend)="$event.stopPropagation()"
                        (click)="startAndJoin($event, event)"
                    >
                        {{ 'APP.CONTROL.MEETING_START_JOIN' | translate }}
                    </button>
                }
            </div>
        }
    `,
    imports: [DatePipe, MatRippleModule, PulseOnChangeDirective, TranslatePipe],
})
export class NextMeetingComponent extends AsyncHandler {
    private _state = inject(ControlStateService);

    private readonly _now = signal(Date.now());
    private readonly _current = this._booking('current_booking');
    private readonly _next = this._booking('next_booking');

    /** Meeting in progress, or the next meeting today */
    public readonly meeting = computed(() => {
        const now = this._now();
        const today_end = endOfDay(now).valueOf();
        // The driver updates each minute, so the current meeting can be
        // over before the next one replaces it
        return (
            [this._current(), this._next()].find(
                (_) =>
                    !!_ &&
                    _.type !== 'cancelled' &&
                    _.date_end > now &&
                    _.date <= today_end,
            ) ?? null
        );
    });
    public readonly minutes_until = computed(() =>
        Math.max(1, differenceInMinutes(this.meeting()?.date, this._now())),
    );
    public readonly status = computed<'now' | 'soon' | 'later'>(() => {
        const event = this.meeting();
        if (!event) return 'later';
        if (event.date <= this._now()) return 'now';
        return this.minutes_until() <= COUNTDOWN_MINUTES ? 'soon' : 'later';
    });
    /** Whether the room can join the meeting's video call */
    public readonly can_join = computed(() => {
        const url = this._state.system()?.meeting_url;
        return !!url && !!this.meeting()?.meeting_url?.startsWith(url);
    });

    constructor() {
        super();
        this.interval('tick', () => this._now.set(Date.now()), TICK_MS);
    }

    /** Booking status from the room's Bookings module as an event */
    private _booking(name: 'current_booking' | 'next_booking') {
        const raw = systemBinding<HashMap | null>(
            this._state.system_id,
            'Bookings',
            name,
            null,
        );
        return computed(() => (raw() ? new CalendarEvent(raw()) : null));
    }

    /** Power on the room and push the meeting to it */
    public startAndJoin(e: Event, event: CalendarEvent) {
        e.stopPropagation();
        this._state.powerOn();
        this._state.setEvent(event);
    }
}
