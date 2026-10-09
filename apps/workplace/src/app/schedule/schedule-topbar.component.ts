import { CommonModule } from '@angular/common';
import { Component, computed, inject, model } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateRangeCalendarComponent } from '@placeos/form-fields';
import { addDays, isSameDay, subDays } from 'date-fns';

@Component({
    selector: `schedule-topbar`,
    template: `
        <div
            class="border-base-300 bg-base-100 flex w-full flex-col items-center justify-between space-y-2 border-b p-2 sm:flex-row sm:space-y-0 sm:space-x-2"
        >
            <div date class="flex w-full items-center space-x-2 sm:w-auto">
                <button
                    btn
                    matRipple
                    class="inverse min-h-11"
                    (click)="resetDate()"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </button>
                @if (view() !== 'list') {
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="previousDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="nextDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </button>
                } @else {
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0 sm:hidden"
                        [matMenuTriggerFor]="date_range_menu"
                    >
                        <icon class="text-2xl">calendar_month</icon>
                    </button>
                    <mat-menu
                        #date_range_menu="matMenu"
                        class="schedule-date-menu"
                    >
                        <div
                            (click)="$event.stopPropagation()"
                            class="w-72 space-y-2 p-2"
                        >
                            <date-range-calendar
                                [from]="null"
                                [start]="date()?.valueOf()"
                                [end]="end_date()?.valueOf()"
                                [offset_weekday]="offset_weekday"
                                (startChange)="setStartDate($event)"
                                (endChange)="end_date.set($event)"
                            ></date-range-calendar>
                            <div
                                class="bg-info text-info-content rounded p-2 text-center text-xs"
                            >
                                Pick a date range selecting the start then end
                                date.
                            </div>
                        </div>
                    </mat-menu>
                }
                @if (has_date_range()) {
                    <div>
                        {{ date() | date: 'dd MMM' }} -
                        {{ end_date() | date: 'dd MMM yyyy' }}
                    </div>
                } @else {
                    <div>{{ date() | date: 'EEE, dd MMM' }}</div>
                }
                <div
                    class="border-base-300 rounded-lg border px-2 py-1 text-xs"
                >
                    {{ date() | date: 'z' }}
                </div>
            </div>
            <div
                view
                class="border-base-300 bg-base-200 flex w-full space-x-1 rounded-xl border p-1 sm:w-auto"
            >
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'day'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'day' }"
                    (click)="view.set('day')"
                >
                    {{ 'COMMON.DAY' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'week'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'week' }"
                    (click)="view.set('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'list'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'list' }"
                    (click)="view.set('list')"
                >
                    {{ 'COMMON.LIST' | translate }}
                </a>
            </div>
        </div>
    `,
    styles: [
        `
            ::ng-deep .schedule-date-menu.mat-mdc-menu-panel {
                max-width: none;
            }
            ::ng-deep .schedule-date-menu .mat-mdc-menu-content {
                padding: 0;
                overflow: hidden;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        RouterModule,
        MatMenuModule,
        DateRangeCalendarComponent,
    ],
})
export class ScheduleTopbarComponent {
    private _settings = inject(SettingsService);
    public readonly view = model<'day' | 'week' | 'list'>('list');
    public readonly date = model(Date.now());
    public readonly end_date = model<number | null>(null);

    public get offset_weekday() {
        return this._settings.get('app.week_start') || 0;
    }

    public readonly setStartDate = (d: number) => {
        this.date.set(d);
        this.end_date.set(null);
    };

    public readonly has_date_range = computed(() => {
        const end = this.end_date();
        const start = this.date();
        return this.view() === 'list' && end !== null && !isSameDay(start, end);
    });

    public readonly resetDate = () => {
        this.date.set(Date.now());
        this.end_date.set(null);
    };
    public readonly previousDate = () =>
        this.date.set(
            subDays(this.date(), this.view() === 'week' ? 7 : 1).valueOf(),
        );
    public readonly nextDate = () =>
        this.date.set(
            addDays(this.date(), this.view() === 'week' ? 7 : 1).valueOf(),
        );
}
