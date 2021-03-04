import { Component, Input } from '@angular/core';

import { Booking } from '@user-interfaces/bookings';
import { CalendarEvent } from '@user-interfaces/events';

@Component({
    selector: 'schedule-event-date-list',
    template: `
        <div class="text-xl mb-4">
            {{ date | date: 'fullDate' }}
        </div>
        <ng-container *ngIf="events?.length; else empty_state">
            <schedule-event-item
                id="{{ i }}"
                *ngFor="let item of events; let i = index"
                [event]="item"
            ></schedule-event-item>
        </ng-container>
        <ng-template #empty_state>
            <div class="p-8">No events for {{ date | date }}</div>
        </ng-template>
        <div class="mb-4"></div>
    `,
    styles: [`
    `],
})
export class ScheduleEventListComponent {
    @Input() public date: number;
    @Input() public events: (CalendarEvent | Booking)[];
}
