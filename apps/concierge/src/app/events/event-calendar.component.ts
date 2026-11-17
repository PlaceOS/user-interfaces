import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addMonths, addWeeks } from 'date-fns';
import { queryParamsWriter } from '../ui/page-transitions';
import { EventMonthViewComponent } from './event-month-view.component';
import { EventStateService } from './event-state.service';
import { EventWeekViewComponent } from './event-week-view.component';

@Component({
    selector: 'event-calendar',
    template: `
        <div class="border-base-200 flex w-full items-center border-y">
            <div class="flex-1 px-2 py-4">
                @if (is_today()) {
                    <span class="text-info text-xs">{{
                        (period() === 'week'
                            ? 'COMMON.WEEK_THIS'
                            : 'COMMON.MONTH_THIS'
                        ) | translate
                    }}</span>
                }
            </div>
            <div class="flex flex-2 items-center justify-center space-x-2">
                <div class="pl-4 font-medium" aria-live="polite">
                    {{ options().date | date: 'MMM yyyy' }}
                    @if (period() === 'week') {
                        <span class="sr-only"
                            >, {{ options().date | date: 'd MMMM' }} &ndash;
                            {{ options().end | date: 'd MMMM' }}</span
                        >
                    }
                </div>
                <button
                    icon
                    matRipple
                    (click)="previousPeriod()"
                    [attr.aria-label]="'COMMON.PREVIOUS' | translate"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    (click)="nextPeriod()"
                    [attr.aria-label]="'COMMON.NEXT' | translate"
                >
                    <icon>chevron_right</icon>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'week'"
                    [attr.aria-pressed]="period() === 'week'"
                    (click)="setPeriod('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'month'"
                    [attr.aria-pressed]="period() === 'month'"
                    (click)="setPeriod('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
        </div>
        <div class="h-4 w-full"></div>
        <div class="relative h-1/2 w-full flex-1 overflow-auto">
            @if (period() !== 'month') {
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
    private _state = inject(EventStateService);
    /** Writes filters to the URL after the page transition */
    private readonly _setQueryParams = queryParamsWriter();

    public readonly options = computed(() => ({
        date: Date.now(),
        end: Date.now(),
        ...this._state.options(),
    }));
    public readonly period = computed(() => this.options().period);
    public readonly is_today = computed(
        () =>
            this.options().date <= Date.now() &&
            this.options().end > Date.now(),
    );

    /** Change the period type. The range is cleared, so the current period shows. */
    public setPeriod(period: 'week' | 'month') {
        this._state.setOptions({ period });
        this._setQueryParams({ period, range: null });
    }

    public nextPeriod() {
        const { date, period } = this.options();
        this._setQueryParams({
            range:
                period === 'week'
                    ? addWeeks(date, 1).valueOf()
                    : addMonths(date, 1).valueOf(),
        });
    }

    public previousPeriod() {
        const { date, period } = this.options();
        this._setQueryParams({
            range:
                period === 'week'
                    ? addWeeks(date, -1).valueOf()
                    : addMonths(date, -1).valueOf(),
        });
    }
}
