import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-event-details',
    template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-4 w-120 max-w-[calc(100vw-2rem)] space-y-4 rounded-sm border p-4 shadow-sm"
        >
            <h3 class="text-center text-xl font-medium">Meeting Details</h3>
            <div>
                <label>Host:</label>
                <div>{{ event()?.host || 'No host' }}</div>
            </div>
            <div>
                <label>Date:</label>
                <div>
                    {{ event()?.date || 0 | date: 'mediumDate' }} at
                    {{ event()?.date || 0 | date: 'shortTime' }}
                </div>
            </div>
            <div>
                <label>Location:</label>
                <div>{{ event()?.location || 'No Location' }}</div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [CommonModule],
})
export class EnrolmentEventDetailsComponent {
    private _state = inject(EnrolmentStateService);

    public readonly event = this._state.event;
}
