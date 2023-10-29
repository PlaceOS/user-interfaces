import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { startOfMinute } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { currentPeriod, nextPeriod } from '../new-panel/helpers';
import { PanelStateService } from '../panel-state.service';
import { getNextFreeTimeSlot } from '@placeos/events';

@Component({
    selector: 'checkin-view',
    template: `
        <div class="bg-black relative text-white p-4 h-32">
            <div
                class="bg-cover bg-center absolute inset-0"
                [style.background-image]="'url(' + room_image + ')'"
            ></div>
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                name
                class="absolute bottom-4 left-4 text-3xl font-medium z-10"
            >
                {{
                    (system | async)?.display_name ||
                        (system | async)?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">
            {{ 'PANEL.UPCOMING' | translate }}
        </h3>
        <div class="bg-base-100 divide-y divide-base-200">
            <div class="flex items-center p-2">
                <div
                    class="w-2 h-full min-h-[3rem] rounded"
                    [class.bg-error]="(state | async) === 'busy'"
                    [class.bg-success]="(state | async) === 'free'"
                    [class.bg-warning]="(state | async) === 'pending'"
                ></div>
                <div class="text-sm  flex-1 px-2">
                    <div class="font-medium uppercase">
                        {{ 'PANEL.NOW' | translate }}
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
                                        'PANEL.FREE_IN_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: (
                                                          event_state | async
                                                      )?.current[1],
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2]
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="
                                        (event_state | async)?.current[1] <= 0
                                    "
                                >
                                    {{
                                        'PANEL.FREE_IN_MINUTES'
                                            | translate
                                                : {
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2]
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
                                        'PANEL.FREE_IN_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                </ng-container>
                            </ng-container>
                            <ng-template #free_for_state>
                                <ng-container
                                    *ngIf="(event_state | async)?.current[1]"
                                >
                                    {{
                                        'PANEL.FREE_FOR_HOURS_AND_MINUTES'
                                            | translate
                                                : {
                                                      hour: (
                                                          event_state | async
                                                      )?.current[1],
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2]
                                                  }
                                    }}
                                </ng-container>
                                <ng-container
                                    *ngIf="!(event_state | async)?.current[1]"
                                >
                                    {{
                                        'PANEL.FREE_FOR_MINUTES'
                                            | translate
                                                : {
                                                      minute: (
                                                          event_state | async
                                                      )?.current[2]
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
                                        'PANEL.FREE_FOR_LESS_THAN_MINUTE'
                                            | translate
                                    }}
                                </ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-template #no_current_state>
                            {{ 'PANEL.NO_CURRENT' | translate }}
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
                    {{ 'PANEL.CHECKIN' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-24"
                    *ngIf="(state | async) === 'free'"
                    (click)="newBooking()"
                >
                    {{ 'PANEL.BOOK' | translate }}
                </button>
            </div>
            <div class="flex items-center p-2">
                <div
                    class="w-2 h-full min-h-[3rem] rounded bg-error"
                    [class.bg-error]="(event_state | async)?.next"
                    [class.bg-success]="!(event_state | async)?.next"
                ></div>
                <div class="text-sm flex-1 px-2">
                    <div class="font-medium uppercase">
                        {{ 'PANEL.NEXT' | translate }}
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
                    {{ 'PANEL.BOOK' | translate }}
                </button>
            </div>
        </div>
        <h3 class="p-4 text-xl font-medium">
            {{ 'PANEL.SCHEDULE' | translate }}
        </h3>
        <div class="bg-base-100 overflow-auto">
            <checkin-timetable
                [events]="bookings | async"
                (event)="newBooking($event)"
            ></checkin-timetable>
        </div>
        <h3 class="p-4 text-xl font-medium" *ngIf="false">
            {{ 'PANEL.FEATURES' | translate }}
        </h3>
        <div
            class="bg-base-100 overflow-auto flex-1 h-px divide-y divide-base-200"
            *ngIf="false"
        >
            <button btn matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-neutral rounded-full p-2 text-2xl">
                    <app-icon>lightbulb</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">
                    {{ 'PANEL.LIGHTS_BLINDS' | translate }}
                </div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button btn matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-neutral rounded-full p-2 text-2xl">
                    <app-icon>add_to_queue</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">
                    {{ 'PANEL.TV' | translate }}
                </div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button btn matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-neutral rounded-full p-2 text-2xl">
                    <app-icon>restaurant</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">
                    {{ 'PANEL.CATERING' | translate }}
                </div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
            </button>
            <button btn matRipple class="flex items-center p-4 w-full">
                <div class="text-black/40 bg-neutral rounded-full p-2 text-2xl">
                    <app-icon>help</app-icon>
                </div>
                <div class="flex-1 px-4 font-medium text-left">
                    {{ 'PANEL.HELP' | translate }}
                </div>
                <app-icon class="text-2xl opacity-40">chevron_right</app-icon>
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
        }))
    );

    public readonly next_available = this._state.bookings.pipe(
        map((_) => getNextFreeTimeSlot(_).start)
    );

    public get time() {
        return startOfMinute(Date.now());
    }

    public get room_image() {
        return this._state.setting('room_image');
    }

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'next-available',
            this.next_available.subscribe((_) => (this.start = _))
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                }
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('user')) {
                    this.has_user = true;
                }
            })
        );
    }
}
