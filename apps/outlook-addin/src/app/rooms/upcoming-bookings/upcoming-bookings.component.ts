import { Component, OnInit } from '@angular/core';
import { AsyncHandler, currentUser } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

import { ScheduleStateService } from 'apps/workplace/src/app/new-schedule/schedule-state.service';

@Component({
    selector: 'placeos-upcoming-bookings',
    template: `
        <div class="w-full h-full flex flex-1 flex-col z-0 bg-base-200">
            <h3 class="flex items-center text-xl font-bold p-4 pl-6">
                Your Bookings
            </h3>
            <div
                class="px-4 pb-4 flex-1 h-1/2 overflow-auto space-y-4"
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
                class="h-3/4 w-full flex-1 flex flex-col items-center justify-center space-y-4 my-6"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Retrieving bookings...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                empty
                class="h-3/4 w-full flex-1 flex flex-col items-center justify-center space-y-2 p-8 text-center my-6"
            >
                <p>No bookings found</p>
            </div>
        </ng-template>
    `,
    styles: [``],
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
