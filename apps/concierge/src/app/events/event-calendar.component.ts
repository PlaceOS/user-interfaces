import { Component, Input } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';
import { map, shareReplay } from 'rxjs/operators';
import { format } from 'date-fns';

@Component({
    selector: 'event-calendar',
    template: `
        <event-week-view
            *ngIf="period !== 'month'; else month_calendar"
        ></event-week-view>
        <ng-template #month_calendar>
            <event-month-view></event-month-view>
        </ng-template>
    `,
    styles: [``],
})
export class EventCalendarComponent {
    @Input() public period: 'week' | 'month' = 'week';
    public readonly event_list = this._state.event_list;
    public readonly event_day_map = this.event_list.pipe(
        map((list) => {
            const map = {};
            for (const event of list) {
                const date = format(event.date, 'yyyy-MM-dd');
                if (!map[date]) map[date] = [];
                map[date].push(event);
            }
            return map;
        }),
        shareReplay(1)
    );

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _settings: SettingsService,
        private _state: EventStateService
    ) {}
}
