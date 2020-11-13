import { Component } from '@angular/core';
import { CalendarEvent } from '@user-interfaces/events';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitor-listings',
    template: `
        <div class="w-full flex-1 text-sm">
            <div
                class="w-full flex items-center bg-white border-b border-gray-500 p-2 font-medium"
            >
                <div class="w-12 p-2"></div>
                <div class="w-24 p-2">Time</div>
                <div class="w-48 p-2">Host</div>
                <div flex class="p-2 flex-1">Title</div>
                <div class="w-64 p-2">Location</div>
                <div class="w-32 p-2">Actions</div>
                <div class="w-16 p-2"></div>
            </div>
            <div class="w-full flex-1 overflow-auto">
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <visitor-event
                        *ngFor="let event of bookings | async; trackBy: trackByFn"
                        [event]="event"
                    ></visitor-event>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="h-full w-full flex items-center justify-center">
                <p class="p-8">
                    There are no visitors for the currently selected date.
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class VisitorListingsComponent {
    public readonly bookings = this._state.filtered_events;

    constructor(private _state: VisitorsStateService) { }

    /* istanbul ignore next */
    public trackByFn(index: number, event: CalendarEvent) {
        return event ? event.id : undefined;
    }
}
