import { Component, Input } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';
import { map, shareReplay, take } from 'rxjs/operators';
import { addMonths, addWeeks, format } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'event-calendar',
    template: `
        <div class="flex items-center border-y border-base-200 w-full">
            <div class="flex-1 px-2 py-4">
                <span *ngIf="is_today | async" class="text-info text-xs">{{
                    (period | async) === 'week' ? 'This Week' : 'This Month'
                }}</span>
            </div>
            <div class="flex-2 flex items-center justify-center space-x-2">
                <div class="font-medium pl-4">
                    {{ (options | async)?.date | date: 'MMM yyyy' }}
                </div>
                <button icon matRipple (click)="previousPeriod()">
                    <app-icon>chevron_left</app-icon>
                </button>
                <button icon matRipple (click)="nextPeriod()">
                    <app-icon>chevron_right</app-icon>
                </button>
            </div>
            <div class="flex-1 flex items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="setPeriod('week')"
                >
                    Week
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="setPeriod('month')"
                >
                    Month
                </button>
            </div>
        </div>
        <div class="w-full h-4"></div>
        <div class="relative flex-1 h-1/2 w-full overflow-auto">
            <event-week-view
                *ngIf="(period | async) !== 'month'; else month_calendar"
            ></event-week-view>
            <ng-template #month_calendar>
                <event-month-view></event-month-view>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class EventCalendarComponent {
    public readonly period = this._state.options.pipe(map((_) => _.period));

    public readonly options = this._state.options;
    public readonly is_today = this.options.pipe(
        map((_) => _.date <= Date.now() && _.end > Date.now())
    );
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
        private _state: EventStateService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}

    public setPeriod(period: 'week' | 'month') {
        this._state.setOptions({ period });
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { period },
            queryParamsHandling: 'merge',
        });
    }

    public async nextPeriod() {
        const { date, period } = await this.options.pipe(take(1)).toPromise();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                range:
                    period === 'week'
                        ? addWeeks(date, 1).valueOf()
                        : addMonths(date, 1).valueOf(),
            },
            queryParamsHandling: 'merge',
        });
    }

    public async previousPeriod() {
        const { date, period } = await this.options.pipe(take(1)).toPromise();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                range:
                    period === 'week'
                        ? addWeeks(date, -1).valueOf()
                        : addMonths(date, -1).valueOf(),
            },
            queryParamsHandling: 'merge',
        });
    }
}
