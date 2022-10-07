import { Component, Input, SimpleChanges } from '@angular/core';
import { endOfDay, startOfDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

import { User } from '../user.class';
import { queryEvents } from 'libs/events/src/lib/events.fn';

@Component({
    selector: 'user-availability-list',
    template: `
        <div class="overflow-hidden relative border-b border-gray-300 dark:border-neutral-500 h-full pointer-events-none" [style.width]="width + 'px'">
            <div class="w-[120rem] h-px"></div>
            <div
                event
                *ngFor="let event of availability | async"
                class="absolute inset-y-0 bg-primary rounded-lg text-white"
                [style.left]="event.start + '%'"
                [style.width]="event.size + '%'"
            >
                <div>Unavailable</div>
                <div>
                    {{ event.date | date:'shortTime' }} - 
                    {{ event.date + event.duration * 60 * 1000 | date:'shortTime' }}
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class UserAvailabilityComponent {
    @Input() public user: User;
    @Input() public date: number = Date.now();
    @Input() public offset = 0;
    @Input() public width = 0;

    private _user$ = new BehaviorSubject(null);

    public readonly availability = this._user$.pipe(
        filter((_) => _),
        switchMap((user) =>
            queryEvents({
                calendars: user.email,
                period_start: startOfDay(this.date).valueOf(),
                period_end: endOfDay(this.date).valueOf(),
            })
        ),
        map((_) =>
            _.map((i) => ({
                date: i.date,
                duration: i.duration,
                start:
                    (new Date(i.date).getHours() +
                        new Date(i.date).getMinutes() / 60) /
                    24,
                size: i.duration / 60 / 24,
            }))
        ),
        shareReplay(1)
    );

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.user && this.user) {
            this._user$.next(this.user);
        }
    }
}
