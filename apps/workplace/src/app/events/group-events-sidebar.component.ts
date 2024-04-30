import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    addDays,
    addMonths,
    endOfDay,
    format,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { GroupEventsStateService } from './group-events-state.service';

@Component({
    selector: `group-events-sidebar`,
    template: `
        <div class="bg-base-100 w-[18rem] h-full">
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1 rounded-3xl"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="period.next('week')"
                >
                    Week
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 rounded-3xl"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="period.next('month')"
                >
                    Month
                </button>
            </div>
            <div class="flex flex-col items-center space-y-2 pb-2 px-2">
                <mat-form-field
                    appearance="outline"
                    class="w-full no-subscript"
                >
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                        placeholder="Select Period"
                    >
                        <mat-option
                            [value]="range.id"
                            *ngFor="let range of period_list"
                        >
                            {{ range.display }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <hr class="border-base-200 w-[calc(100%-1rem)] mx-auto" />
            <date-calendar></date-calendar>
            <hr class="border-base-200 w-[calc(100%-1rem)] mx-auto" />
        </div>
    `,
    styles: [``],
})
export class GroupEventsSidebarComponent extends AsyncHandler {
    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;

    constructor(
        private _settings: SettingsService,
        private _state: GroupEventsStateService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'period',
            this.period.subscribe(() => {
                this._generatePeriods();
                if (this.period_list.length) {
                    this.setPeriod(this.period_list[0].id);
                    this.selected_range = this.period_list[0].id;
                }
            })
        );
        this._generatePeriods();
        if (this.period_list.length) {
            this.setPeriod(this.period_list[0].id);
            this.selected_range = this.period_list[0].id;
        }
    }

    public setPeriod(id: string) {
        const { start, end } = this.period_list.find((_) => _.id === id);
        this._state.setOptions({ date: start, end });
    }

    private _generatePeriods() {
        const periods = [];
        const period_type = this.period.value;
        let date = Date.now();
        const end_date = addDays(date, 12 * 30).valueOf();
        const week_offset = this._settings.get('app.week_start') || 0;
        if (period_type === 'month') {
            date = startOfMonth(date).valueOf();
        } else if (period_type === 'week') {
            date = startOfWeek(date, { weekStartsOn: week_offset }).valueOf();
        }
        while (date < end_date) {
            if (period_type === 'week') {
                const end = endOfDay(addDays(date, 6)).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(
                        Math.max(Date.now(), date),
                        'EEE, do MMM'
                    )} – ${format(end, 'do MMM')}`,
                });
                date = addDays(date, 7).valueOf();
            } else if (period_type === 'month') {
                const end = endOfDay(addDays(addMonths(date, 1), -1)).valueOf();
                periods.push({
                    id: date,
                    start: date,
                    end,
                    display: `${format(date, 'MMMM yyyy')}`,
                });
                date = addMonths(date, 1).valueOf();
            } else break;
        }
        this.period_list = periods;
    }
}
