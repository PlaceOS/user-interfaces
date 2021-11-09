import { Component, OnDestroy, OnInit } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { CalendarEvent } from '@placeos/events';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-upcoming',
    template: `
        <div class="py-2">
            <div class="flex items-center justify-between mb-2 sm:mb-4 px-4">
                <div class="sm:text-lg font-medium">Your Bookings</div>
                <a
                    button
                    mat-button
                    class="inverse hidden sm:block"
                    [routerLink]="['/your-bookings']"
                >
                    View All
                </a>
                <a
                    class="inverse block sm:hidden text-blue-500 underline relative top-8"
                    [routerLink]="['/your-bookings']"
                >
                    View All
                </a>
            </div>
            <div class="space-y-4 px-4">
                <ng-container
                    *ngIf="(upcoming_events | async)?.length; else empty_state"
                >
                    <ng-container
                        *ngFor="
                            let event of upcoming_events | async | slice: 0:3; trackBy: trackByFn
                        "
                    >
                        <ng-container [ngSwitch]="type(event)">
                            <event-card
                                *ngSwitchCase="'event'"
                                [event]="event"
                                [show_day]="true"
                            ></event-card>
                            <booking-card
                                *ngSwitchCase="'booking'"
                                [booking]="booking"
                                [show_day]="true"
                            ></booking-card>
                        </ng-container>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full p-8 flex flex-col items-center justify-center space-y-4"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">You have no upcoming bookings</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class LandingUpcomingComponent implements OnInit, OnDestroy {
    public readonly upcoming_events = this._state.upcoming_events;

    public type(event: CalendarEvent | Booking) {
        return event instanceof Booking ? 'booking' : 'event';
    }

    constructor(private _state: LandingStateService) {}

    public ngOnInit() {
        this._state.pollUpcomingEvents();
    }

    public ngOnDestroy() {
        this._state.stopPollingUpcomingEvents();
    }

    public trackByFn(index: number, item: any) {
        return item?.id;
    }
}
