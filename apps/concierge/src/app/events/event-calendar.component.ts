import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nextValueFrom, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addMonths, addWeeks, format } from 'date-fns';
import { map, shareReplay } from 'rxjs/operators';
import { EventMonthViewComponent } from './event-month-view.component';
import { EventStateService } from './event-state.service';
import { EventWeekViewComponent } from './event-week-view.component';

@Component({
    selector: 'event-calendar',
    template: `
        <div class="flex w-full items-center border-y border-base-200">
            <div class="flex-1 px-2 py-4">
                @if (is_today | async) {
                    <span class="text-xs text-info">{{
                        ((period | async) === 'week'
                            ? 'COMMON.WEEK_THIS'
                            : 'COMMON.MONTH_THIS'
                        ) | translate
                    }}</span>
                }
            </div>
            <div class="flex-2 flex items-center justify-center space-x-2">
                <div class="pl-4 font-medium">
                    {{ (options | async)?.date | date: 'MMM yyyy' }}
                </div>
                <button icon matRipple (click)="previousPeriod()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextPeriod()">
                    <icon>chevron_right</icon>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="setPeriod('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="setPeriod('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
        </div>
        <div class="h-4 w-full"></div>
        <div class="relative h-1/2 w-full flex-1 overflow-auto">
            @if ((period | async) !== 'month') {
                <event-week-view></event-week-view>
            } @else {
                <event-month-view></event-month-view>
            }
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
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        EventWeekViewComponent,
        EventMonthViewComponent,
        IconComponent,
    ],
})
export class EventCalendarComponent {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly period = this._state.options.pipe(map((_) => _.period));

    public readonly options = this._state.options;
    public readonly is_today = this.options.pipe(
        map((_) => _.date <= Date.now() && _.end > Date.now()),
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
        shareReplay(1),
    );

    public get time_format() {
        return this._settings.time_format;
    }

    public setPeriod(period: 'week' | 'month') {
        this._state.setOptions({ period });
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { period },
            queryParamsHandling: 'merge',
        });
    }

    public async nextPeriod() {
        const { date, period } = await nextValueFrom(this.options);
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
        const { date, period } = await nextValueFrom(this.options);
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
