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
import { take } from 'rxjs/operators';

@Component({
    selector: `group-events-sidebar`,
    template: `
        <div class="flex flex-col bg-base-100 w-[18rem] h-full">
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
            <date-calendar
                [ngModel]="(options | async).date"
                (ngModelChange)="setPeriodFromDate($event)"
            ></date-calendar>
            <hr class="border-base-200 w-[calc(100%-1rem)] mx-auto" />
            <div class="flex flex-col flex-1 overflow-auto">
                <h2 class="text-lg font-medium p-4">Filters</h2>
                <div
                    class="flex flex-col space-y-2 px-4"
                    *ngIf="(tags | async)?.length"
                >
                    <h3>Tags</h3>
                    <button
                        matRipple
                        class="flex items-center rounded w-full text-left"
                        *ngFor="let tag of tags | async"
                        (click)="toggleTag(tag)"
                    >
                        <mat-checkbox
                            [ngModel]="(filters | async)?.tags?.includes(tag)"
                        >
                            {{ tag }}
                        </mat-checkbox>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class GroupEventsSidebarComponent extends AsyncHandler {
    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;
    public readonly options = this._state.options;
    public readonly filters = this._state.filters;
    public readonly tags = this._state.tags;

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

    public async toggleTag(tag: string) {
        const tags = (await this.filters.pipe(take(1)).toPromise())?.tags || [];
        if (tags.includes(tag)) {
            this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
        } else {
            this._state.setFilters({ tags: [...tags, tag] });
        }
    }

    public setPeriodFromDate(date: number) {
        for (const period of this.period_list) {
            if (date >= period.start && date <= period.end) {
                this.selected_range = period.id;
                this.setPeriod(period.id);
                return;
            }
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
