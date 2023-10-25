import { Component } from '@angular/core';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-event-details',
    template: `
        <div
            class="bg-base-100 p-4 mx-auto my-4 border border-base-200 shadow w-[480px] max-w-[calc(100vw-2rem)] rounded space-y-4"
        >
            <h3 class="text-center text-xl font-medium">Meeting Details</h3>
            <div>
                <label>Host:</label>
                <div>{{ (event | async)?.host || 'No host' }}</div>
            </div>
            <div>
                <label>Date:</label>
                <div>
                    {{ (event | async)?.date || 0 | date: 'mediumDate' }} at
                    {{ (event | async)?.date || 0 | date: 'shortTime' }}
                </div>
            </div>
            <div>
                <label>Location:</label>
                <div>{{ (event | async)?.location || 'No Location' }}</div>
            </div>
        </div>
    `,
    styles: [``],
})
export class EnrolmentEventDetailsComponent {
    public readonly event = this._state.event;

    constructor(private _state: EnrolmentStateService) {}
}
