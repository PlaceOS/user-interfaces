import { Component, OnInit } from '@angular/core';
import { AsyncHandler, currentUser } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

import { ScheduleStateService } from 'apps/workplace/src/app/schedule/schedule-state.service';
import { startOfMinute } from 'date-fns';

@Component({
    selector: 'placeos-upcoming-bookings',
    template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-[40rem] max-w-full border-x border-base-300 bg-base-100"
            >
                <header
                    class="sticky top-2 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{ 'APP.WORKPLACE.UPCOMING' | translate }}
                    </h2>
                </header>
                <h3 class="px-4 pt-4 text-lg font-medium">
                    {{ now | date: 'EEE dd LLL yyyy' }}
                </h3>
                <div
                    class="h-1/2 flex-1 space-y-4 p-4"
                    [class.hidden]="loading$ | async"
                >
                    @let event_list = events$ | async;
                    <ng-container *ngIf="event_list?.length; else empty_state">
                        @for (item of event_list; track item.id) {
                            <event-card
                                *ngIf="isEvent(item); else booking_card"
                                [event]="item"
                            ></event-card>
                            <ng-template #booking_card>
                                <booking-card [booking]="item"></booking-card>
                            </ng-template>
                        }
                    </ng-container>
                </div>
                <div
                    loading
                    [class.hidden]="!(loading$ | async)"
                    class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>Retrieving bookings...</p>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                empty
                class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-2 p-8 text-center"
            >
                <p>{{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class UpcomingBookingsComponent extends AsyncHandler implements OnInit {
    public user = currentUser();
    public readonly loading$ = this._schedule.loading;
    public readonly events$ = this._schedule.filtered_bookings;

    public get now() {
        return startOfMinute(Date.now());
    }

    constructor(private _schedule: ScheduleStateService) {
        super();
    }

    public ngOnInit(): void {
        this._schedule.toggleType('desk', true);
        this._schedule.toggleType('parking', true);
        this.subscription('poll', this._schedule.startPolling());
    }

    public isEvent(item: any) {
        return item instanceof CalendarEvent;
    }
}
