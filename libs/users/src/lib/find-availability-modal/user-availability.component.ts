import { Component, input } from '@angular/core';

import { CommonModule } from '@angular/common';
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
            class="relative inset-y-0 h-32 w-[120rem] border-b border-base-200"
        >
            @for (event of availability(); track event) {
                <div
                    event
                    class="border-red-700 absolute inset-y-0 overflow-hidden rounded border bg-error p-2 text-white"
                    [style.left]="event.start + '%'"
                    [style.width]="event.size + '%'"
                >
                    <div class="max-w-full text-xs">
                        {{ event.date | date: 'shortTime' }} -
                        {{
                            event.date.valueOf() + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [CommonModule],
})
export class UserAvailabilityComponent {
    public readonly user = input<User>(undefined);
    public readonly availability = input<AvailabilityBlock[]>([]);
    public readonly date = input<number>(Date.now());
}
