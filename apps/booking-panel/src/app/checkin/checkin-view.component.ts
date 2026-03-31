import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, CalendarEvent } from '@placeos/common';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { getNextFreeTimeSlot } from '@placeos/events';
import { currentPeriod, nextPeriod } from '../new-panel/helpers';
import { PanelStateService } from '../panel-state.service';
import { CheckinTimetableComponent } from './checkin-timetable.component';

@Component({
    selector: 'checkin-view',
    template: `
        <div class="relative h-32 bg-black p-4 text-white">
            @if (room_image) {
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    [style.background-image]="'url(' + room_image + ')'"
                ></div>
            }
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                name
                class="absolute bottom-4 left-4 z-10 text-3xl font-medium"
            >
                {{
                    system()?.display_name ||
                        system()?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
        </div>
        <h3 class="px-4 pt-4 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.UPCOMING' | translate }}
        </h3>
        <div class="bg-base-100 space-y-2 p-2">
            <div
                class="border-base-300 flex items-center rounded-sm border p-2 shadow-sm"
            >
                <div
                    class="h-full min-h-12 w-2 rounded-sm"
                    [class.bg-error]="state() === 'busy'"
                    [class.bg-success]="state() === 'free'"
                    [class.bg-warning]="state() === 'pending'"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="text-lg font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NOW' | translate }}
                    </div>
                    <div class="">
                        @if (event_state()?.current?.length) {
                            @if (event_state()?.current[0]) {
                                @if (event_state()?.current[1] > 0) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: event_state()
                                                          ?.current[1],
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (event_state()?.current[1] <= 0) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_MINUTES'
                                            | translate
                                                : {
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    event_state()?.current[1] <= 0 &&
                                    event_state()?.current[2] <= 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                }
                            } @else {
                                @if (es?.current[1]) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: event_state()
                                                          ?.current[1],
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (!es?.current[1]) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_MINUTES'
                                            | translate
                                                : {
                                                      minute: event_state()
                                                          ?.current[2],
                                                  }
                                    }}
                                }
                                @if (
                                    !event_state()?.current[1] &&
                                    event_state()?.current[2] < 1
                                ) {
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                }
                            }
                        } @else {
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        }
                    </div>
                </div>
                @if (s === 'pending') {
                    <button
                        btn
                        matRipple
                        class="w-24"
                        (click)="checkInCurrent()"
                    >
                        {{ 'APP.BOOKING_PANEL.CHECKIN' | translate }}
                    </button>
                }
                @if (s === 'free') {
                    <button btn matRipple class="w-24" (click)="newBooking()">
                        {{ 'APP.BOOKING_PANEL.BOOK' | translate }}
                    </button>
                }
            </div>
            <div
                class="border-base-300 flex items-center rounded-sm border p-2 shadow-sm"
            >
                <div
                    class="bg-error h-full min-h-12 w-2 rounded-sm"
                    [class.bg-error]="event_state()?.next"
                    [class.bg-success]="!event_state()?.next"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="text-lg font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NEXT' | translate }}
                    </div>
                    <div class="">
                        {{ event_state()?.next || 'No upcoming event' }}
                    </div>
                </div>
                @if (!event_state()?.next) {
                    <button
                        btn
                        matRipple
                        class="w-24"
                        (click)="newBooking(start(), true)"
                    >
                        {{ 'APP.BOOKING_PANEL.BOOK' | translate }}
                    </button>
                }
            </div>
        </div>
        <h3 class="px-4 pt-4 pb-2 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.SCHEDULE' | translate }}
        </h3>
        <div
            class="border-base-300 mx-2 flex items-center overflow-auto rounded-sm border shadow-sm"
        >
            <checkin-timetable
                [events]="bookings()"
                (event)="newBooking($event)"
            ></checkin-timetable>
        </div>
        @if (false) {
            <h3 class="p-4 text-xl font-medium">
                {{ 'APP.BOOKING_PANEL.FEATURES' | translate }}
            </h3>
        }
        @if (false) {
            <div
                class="divide-base-200 bg-base-100 h-px flex-1 divide-y overflow-auto"
            >
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>lightbulb</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.LIGHTS_BLINDS' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>add_to_queue</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.TV' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>restaurant</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.CATERING' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
                <button btn matRipple class="flex w-full items-center p-4">
                    <div
                        class="bg-neutral rounded-full p-2 text-2xl text-black/40"
                    >
                        <icon>help</icon>
                    </div>
                    <div class="flex-1 px-4 text-left font-medium">
                        {{ 'APP.BOOKING_PANEL.HELP' | translate }}
                    </div>
                    <icon class="text-2xl opacity-40">chevron_right</icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                background-color: #f8f8fa;
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
        `,
    ],
    providers: [PanelStateService],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        CheckinTimetableComponent,
    ],
})
export class CheckinViewComponent extends AsyncHandler implements OnInit {
    private _state = inject(PanelStateService);
    private _route = inject(ActivatedRoute);

    public readonly state = toSignal(this._state.status, {
        initialValue: 'free',
    });
    public readonly system = toSignal(this._state.space);
    public readonly bookings = toSignal(this._state.bookings, {
        initialValue: [] as CalendarEvent[],
    });
    public start = signal<number>(Date.now());

    public readonly checkInCurrent = () => this._state.startMeeting();
    public readonly newBooking = (d = Date.now(), f = false) =>
        this._state.newBooking(d, this.has_user(), f, true);

    public has_user = signal<boolean>(true);

    public readonly event_state = toSignal(
        combineLatest([
            this._state.current,
            this._state.next,
            this._state.bookings,
        ]).pipe(
            map(([c, n, l]) => ({
                current: currentPeriod(l, c, n),
                next: nextPeriod(n),
            })),
        ),
        { initialValue: { current: [] as any, next: '' } },
    );

    private readonly _next_available$ = this._state.bookings.pipe(
        map((_) => getNextFreeTimeSlot(_).start),
    );

    public get room_image() {
        return this._state.setting('room_image');
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'next-available',
            this._next_available$.subscribe((_) => this.start.set(_)),
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                }
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.has_user.set(params.get('user') !== 'false');
            }),
        );
    }
}
