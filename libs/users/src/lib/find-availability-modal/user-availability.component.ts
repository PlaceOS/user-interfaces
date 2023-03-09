import { Component, Input, SimpleChanges } from '@angular/core';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

import { User } from '../user.class';
import { queryUserFreeBusy } from 'libs/calendar/src/lib/calendar.fn';
import { Calendar } from 'libs/calendar/src/lib/calendar.class';

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
            <div class="w-[120rem] h-px"></div>
            <div
                event
                *ngFor="let event of availability"
                class="absolute inset-y-0 bg-primary rounded-lg text-white"
                [style.left]="event.start + '%'"
                [style.width]="event.size + '%'"
            >
                <div>Unavailable</div>
                <div>
                    {{ event.date | date: 'shortTime' }} -
                    {{
                        event.date + event.duration * 60 * 1000
                            | date: 'shortTime'
                    }}
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
