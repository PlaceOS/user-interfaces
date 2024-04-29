import { Component, Input } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';
import { map, shareReplay } from 'rxjs/operators';
import { format } from 'date-fns';

@Component({
    selector: 'event-calendar',
    template: `
        <ng-container
            *ngIf="period === 'week'; else month_calendar"
        ></ng-container>
        <ng-template #month_calendar> </ng-template>
    `,
    styles: [``],
})
export class EventCalendarComponent {
    @Input() public readonly period: 'week' | 'month' = 'week';
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
