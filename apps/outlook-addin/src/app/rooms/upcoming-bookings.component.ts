import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingCardComponent } from '@placeos/bookings';
import { AsyncHandler, CalendarEvent, currentUser } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventCardComponent } from '@placeos/events';

import { ScheduleStateService } from 'apps/workplace/src/app/schedule/schedule-state.service';
import { startOfMinute } from 'date-fns';

@Component({
    selector: 'placeos-upcoming-bookings',
    template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-[40rem] max-w-full border-x border-base-300 bg-base-100 pt-2"
            >
                <header
                    class="sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
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
                    @if (event_list?.length) {
                        @for (item of event_list; track item.id) {
                            @if (isEvent(item)) {
                                <event-card [event]="item"></event-card>
                            } @else {
                                <booking-card [booking]="item"></booking-card>
                            }
                        }
                    } @else {
                        <div
                            empty
                            class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-2 p-8 text-center"
                        >
                            <p>
                                {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                            </p>
                        </div>
                    }
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
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        EventCardComponent,
        BookingCardComponent,
    ],
})
export class UpcomingBookingsComponent extends AsyncHandler implements OnInit {
    private _schedule = inject(ScheduleStateService);

    public user = currentUser();
    public readonly loading$ = this._schedule.loading;
    public readonly events$ = this._schedule.filtered_bookings;

    public get now() {
        return startOfMinute(Date.now());
    }

    public ngOnInit(): void {
        this._schedule.toggleType('parking', true);
        this.subscription('poll', this._schedule.startPolling());
    }

    public isEvent(item: any) {
        return item instanceof CalendarEvent;
    }
}
