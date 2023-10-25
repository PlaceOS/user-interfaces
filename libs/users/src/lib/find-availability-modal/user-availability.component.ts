import { Component, Input } from '@angular/core';

import { User } from '../user.class';

export interface AvailabilityBlock {
    date: number;
    duration: number;
    start: number;
    size: number;
}

@Component({
    selector: 'user-availability-list',
    template: `
        <div
            class="relative w-[120rem] h-32 inset-y-0 border-b border-base-200 "
        >
            <div
                event
                *ngFor="let event of availability"
                class="absolute inset-y-0 bg-error text-white p-2 overflow-hidden border border-red-700 rounded"
                [style.left]="event.start + '%'"
                [style.width]="event.size + '%'"
            >
                <div class="text-xs max-w-full">
                    {{ event.date | date: 'shortTime' }} -
                    {{
                        event.date.valueOf() + event.duration * 60 * 1000
                            | date: 'shortTime'
                    }}
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class UserAvailabilityComponent {
    @Input() public user: User;
    @Input() public availability: AvailabilityBlock[] = [];
    @Input() public date: number = Date.now();
}
