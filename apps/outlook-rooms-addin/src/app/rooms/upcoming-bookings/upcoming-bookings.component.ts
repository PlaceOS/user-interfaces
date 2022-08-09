import { Component, OnInit } from '@angular/core';
import { BaseClass, currentUser } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

import { ScheduleStateService } from 'apps/workplace/src/app/new-schedule/schedule-state.service';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent extends BaseClass implements OnInit {
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
