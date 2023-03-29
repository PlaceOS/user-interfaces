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
            class="overflow-hidden relative border-b border-gray-300 dark:border-neutral-500 h-full pointer-events-none"
            [style.width]="width + 'px'"
        >
            <div
                class="absolute w-[120rem] h-full inset-y-0"
                [style.left]="-offset + 'px'"
            >
                <div
                    event
                    *ngFor="let event of availability"
                    class="absolute inset-y-0 bg-primary text-white p-2 overflow-hidden border border-white rounded"
                    [style.left]="event.start + '%'"
                    [style.width]="event.size + '%'"
                >
                    <div class="text-xs">Unavailable</div>
                    <div class="text-xs max-w-full">
                        {{ event.date | date: 'shortTime' }} -
                        {{
                            event.date.valueOf() + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class UserAvailabilityComponent {
    @Input() public user: User;
    @Input() public availability: AvailabilityBlock[] = [];
    @Input() public date: number = Date.now();
    @Input() public offset = 0;
    @Input() public width = 0;
}
