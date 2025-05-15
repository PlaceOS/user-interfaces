import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { startOfMinute } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { getNextFreeTimeSlot } from 'libs/events/src/lib/helpers';
import { currentPeriod, nextPeriod } from '../new-panel/helpers';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'checkin-view',
    template: `
        <div class="relative h-32 bg-black p-4 text-white">
            <div
                class="absolute inset-0 bg-cover bg-center"
                *ngIf="room_image"
                [style.background-image]="'url(' + room_image + ')'"
            ></div>
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                name
                class="absolute bottom-4 left-4 z-10 text-3xl font-medium"
            >
                {{
                    (system | async)?.display_name ||
                        (system | async)?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.UPCOMING' | translate }}
        </h3>
        <div class="divide-y divide-base-200 bg-base-100">
            <div class="flex items-center p-2">
                <div
                    class="h-full min-h-[3rem] w-2 rounded"
                    [class.bg-error]="(state | async) === 'busy'"
                    [class.bg-success]="(state | async) === 'free'"
                    [class.bg-warning]="(state | async) === 'pending'"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NOW' | translate }}
                    </div>
                    <div class="">
                        <ng-container
                            *ngIf="
                                (event_state | async)?.current?.length;
                                else no_current_state
                            "
                        >
                            <ng-container
                                *ngIf="
                                    (event_state | async)?.current[0];
                                    else free_for_state
                                "
                            >
                                <ng-container
                                    *ngIf="
                                        (event_state | async)?.current[1] > 0
                                    "
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: (
                                                          event_state | async
                                                      )?.current[1],
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2],
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="
                                        (event_state | async)?.current[1] <= 0
                                    "
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_MINUTES'
                                            | translate
                                                : {
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2],
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="
                                        (event_state | async)?.current[1] <=
                                            0 &&
                                        (event_state | async)?.current[2] <= 1
                                    "
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_IN_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                </ng-container>
                            </ng-container>
                            <ng-template #free_for_state>
                                <ng-container
                                    *ngIf="(event_state | async)?.current[1]"
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: (
                                                          event_state | async
                                                      )?.current[1],
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2],
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="!(event_state | async)?.current[1]"
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_MINUTES'
                                            | translate
                                                : {
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2],
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="
                                        !(event_state | async)?.current[1] &&
                                        (event_state | async)?.current[2] < 1
                                    "
                                >
                                    {{
                                        'APP.BOOKING_PANEL.FREE_FOR_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                </ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-template #no_current_state>
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        </ng-template>
                    </div>
                </div>
                <button
                    btn
                    matRipple
                    class="w-24"
                    *ngIf="(state | async) === 'pending'"
                    (click)="checkInCurrent()"
                >
                    {{ 'APP.BOOKING_PANEL.CHECKIN' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-24"
                    *ngIf="(state | async) === 'free'"
                    (click)="newBooking()"
                >
                    {{ 'APP.BOOKING_PANEL.BOOK' | translate }}
                </button>
            </div>
            <div class="flex items-center p-2">
                <div
                    class="h-full min-h-[3rem] w-2 rounded bg-error"
                    [class.bg-error]="(event_state | async)?.next"
                    [class.bg-success]="!(event_state | async)?.next"
                ></div>
                <div class="flex-1 px-2 text-sm">
                    <div class="font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NEXT' | translate }}
                    </div>
                    <div class="">
                        {{ (event_state | async)?.next || 'No upcoming event' }}
                    </div>
                </div>
                <button
                    btn
                    matRipple
                    class="w-24"
                    *ngIf="!(event_state | async)?.next"
                    (click)="newBooking(start, true)"
                >
                    {{ 'APP.BOOKING_PANEL.BOOK' | translate }}
                </button>
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">
            {{ 'APP.BOOKING_PANEL.SCHEDULE' | translate }}
        </h3>
        <div class="overflow-auto bg-base-100">
            <checkin-timetable
                [events]="bookings | async"
                (event)="newBooking($event)"
            ></checkin-timetable>
        </div>
        <h3 class="p-4 text-xl font-medium" *ngIf="false">
            {{ 'APP.BOOKING_PANEL.FEATURES' | translate }}
        </h3>
        <div
            class="h-px flex-1 divide-y divide-base-200 overflow-auto bg-base-100"
            *ngIf="false"
        >
            <button btn matRipple class="flex w-full items-center p-4">
                <div class="rounded-full bg-neutral p-2 text-2xl text-black/40">
                    <icon>lightbulb</icon>
                </div>
                <div class="flex-1 px-4 text-left font-medium">
                    {{ 'APP.BOOKING_PANEL.LIGHTS_BLINDS' | translate }}
                </div>
                <icon class="text-2xl opacity-40">chevron_right</icon>
            </button>
            <button btn matRipple class="flex w-full items-center p-4">
                <div class="rounded-full bg-neutral p-2 text-2xl text-black/40">
                    <icon>add_to_queue</icon>
                </div>
                <div class="flex-1 px-4 text-left font-medium">
                    {{ 'APP.BOOKING_PANEL.TV' | translate }}
                </div>
                <icon class="text-2xl opacity-40">chevron_right</icon>
            </button>
            <button btn matRipple class="flex w-full items-center p-4">
                <div class="rounded-full bg-neutral p-2 text-2xl text-black/40">
                    <icon>restaurant</icon>
                </div>
                <div class="flex-1 px-4 text-left font-medium">
                    {{ 'APP.BOOKING_PANEL.CATERING' | translate }}
                </div>
                <icon class="text-2xl opacity-40">chevron_right</icon>
            </button>
            <button btn matRipple class="flex w-full items-center p-4">
                <div class="rounded-full bg-neutral p-2 text-2xl text-black/40">
                    <icon>help</icon>
                </div>
                <div class="flex-1 px-4 text-left font-medium">
                    {{ 'APP.BOOKING_PANEL.HELP' | translate }}
                </div>
                <icon class="text-2xl opacity-40">chevron_right</icon>
            </button>
        </div>
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
    standalone: false,
})
export class CheckinViewComponent extends AsyncHandler implements OnInit {
    public readonly state = this._state.status;
    public readonly system = this._state.space;
    public readonly bookings = this._state.bookings;
    public start = Date.now();

    public readonly checkInCurrent = () => this._state.startMeeting();
    public readonly newBooking = (d = Date.now(), f = false) =>
        this._state.newBooking(d, this.has_user, f, true);

    public has_user = false;

    public readonly event_state = combineLatest([
        this._state.current,
        this._state.next,
        this._state.bookings,
    ]).pipe(
        map(([c, n, l]) => ({
            current: currentPeriod(l, c, n),
            next: nextPeriod(n),
        })),
    );

    public readonly next_available = this._state.bookings.pipe(
        map((_) => getNextFreeTimeSlot(_).start),
    );

    public get time() {
        return startOfMinute(Date.now());
    }

    public get room_image() {
        return this._state.setting('room_image');
    }

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'next-available',
            this.next_available.subscribe((_) => (this.start = _)),
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
                if (params.has('user')) {
                    this.has_user = true;
                }
            }),
        );
    }
}
