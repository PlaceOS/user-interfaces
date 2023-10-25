import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { timePeriodsIntersect } from '@placeos/common';
import { addDays, endOfDay, startOfWeek } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'week-view-day',
    template: `
        <header
            class="flex items-center justify-center border-b border-base-200 bg-base-300 w-full py-3 text-white"
        >
            {{ date | async | date: 'EEE, MMM d, y' }}
        </header>
        <div class="flex-1 h-1/2 overflow-auto w-full">
            <ng-container *ngIf="(events | async)?.length; else empty_state">
                <week-view-event
                    *ngFor="let event of events | async"
                    [event]="event"
                ></week-view-event>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <p class="text-center p-2">No events</p>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
            }
        `,
    ],
})
export class WeekViewDayComponent implements OnChanges {
    @Input() public index: number;

    private _index = new BehaviorSubject<number>(0);

    public readonly date = this._state.date.pipe(
        map((date) => addDays(startOfWeek(date), this.index).valueOf())
    );

    public readonly events = combineLatest([
        this._state.filtered,
        this._state.date,
        this._index,
    ]).pipe(
        map(([events, date, index]) => {
            const start = addDays(startOfWeek(date), index).valueOf();
            const end = endOfDay(start).valueOf();
            return events.filter((bkn) =>
                timePeriodsIntersect(
                    start,
                    end,
                    bkn.date,
                    bkn.date + bkn.duration * 60 * 1000
                )
            );
        })
    );

    constructor(private _state: EventsStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.index) {
            this._index.next(this.index);
        }
    }
}
