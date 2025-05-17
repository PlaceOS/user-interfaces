import { Component, OnInit } from '@angular/core';
import { AsyncHandler, currentUser } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

import { ScheduleStateService } from 'apps/workplace/src/app/schedule/schedule-state.service';

@Component({
    selector: 'placeos-upcoming-bookings',
    template: `
        <div class="z-0 flex h-full w-full flex-1 flex-col bg-base-200">
            <h3 class="flex items-center p-4 pl-6 text-xl font-bold">
                Your Bookings
            </h3>
            <div
                class="h-1/2 flex-1 space-y-4 overflow-auto px-4 pb-4"
                *ngIf="!(loading$ | async); else load_state"
            >
                <ng-container
                    *ngIf="(events$ | async)?.length; else empty_state"
                >
                    <ng-container
                        *ngFor="let item of events$ | async; trackBy: trackByFn"
                    >
                        <event-card
                            *ngIf="isEvent(item); else booking_card"
                            [event]="item"
                        ></event-card>
                        <ng-template #booking_card>
                            <booking-card [booking]="item"></booking-card>
                        </ng-template>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <ng-template #load_state>
            <div
                loading
                class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-4"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Retrieving bookings...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                empty
                class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-2 p-8 text-center"
            >
                <p>No bookings found</p>
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

    public trackByFn(_: number, item: any) {
        return item?.id;
    }
}
