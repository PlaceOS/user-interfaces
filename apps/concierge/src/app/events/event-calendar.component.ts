import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addMonths, addWeeks } from 'date-fns';
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
                <div class="pl-4 font-medium">
                    {{ options().date | date: 'MMM yyyy' }}
                </div>
                <button icon matRipple (click)="previousPeriod()" aria-label="Previous period">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextPeriod()" aria-label="Next period">
                    <icon>chevron_right</icon>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'week'"
                    (click)="setPeriod('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'month'"
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
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly options = toSignal(this._state.options, {
        initialValue: {
            period: this._state.period,
            date: Date.now(),
            end: Date.now(),
        },
    });
    public readonly period = computed(() => this.options().period);
    public readonly is_today = computed(
        () =>
            this.options().date <= Date.now() &&
            this.options().end > Date.now(),
    );

    public setPeriod(period: 'week' | 'month') {
        this._state.setOptions({ period });
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { period },
            queryParamsHandling: 'merge',
        });
    }

    public nextPeriod() {
        const { date, period } = this.options();
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

    public previousPeriod() {
        const { date, period } = this.options();
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
