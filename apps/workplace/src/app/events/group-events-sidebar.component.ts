import { Component, inject, OnInit } from '@angular/core';
import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
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
        <div class="flex flex-col bg-base-100 sm:h-full sm:w-[18rem]">
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="period.next('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="period.next('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
            <div class="flex flex-col items-center space-y-2 px-2 pb-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                        placeholder="Select Period"
                    >
                        @for (range of period_list; track range) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <hr
                class="mx-auto hidden w-[calc(100%-1rem)] border-base-200 sm:block"
            />
            <div class="hidden flex-1 flex-col overflow-auto sm:flex">
                <date-calendar
                    [ngModel]="(options | async).date"
                    (ngModelChange)="setPeriodFromDate($event)"
                ></date-calendar>
                <hr class="mx-auto w-[calc(100%-1rem)] border-base-200" />
                <div class="flex flex-1 flex-col overflow-auto">
                    <h2 class="p-4 text-lg font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h2>
                    @if ((tags | async)?.length) {
                        <div class="flex flex-col space-y-2 px-4">
                            <h3>{{ 'COMMON.TAGS' | translate }}</h3>
                            @for (tag of tags | async; track tag) {
                                <button
                                    matRipple
                                    class="flex w-full items-center rounded text-left"
                                    (click)="toggleTag(tag)"
                                >
                                    <mat-checkbox
                                        [ngModel]="
                                            (filters | async)?.tags?.includes(
                                                tag
                                            )
                                        "
                                    >
                                        {{ tag }}
                                    </mat-checkbox>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class GroupEventsSidebarComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _state = inject(GroupEventsStateService);

    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;
    public readonly options = this._state.options;
    public readonly filters = this._state.filters;
    public readonly tags = this._state.tags;

    public ngOnInit(): void {
        this.subscription(
            'period',
            this.period.subscribe(() => {
                this._generatePeriods();
                if (this.period_list.length) {
                    this.setPeriod(this.period_list[0].id);
                    this.selected_range = this.period_list[0].id;
                }
            }),
        );
        this._generatePeriods();
        if (this.period_list.length) {
            this.setPeriod(this.period_list[0].id);
            this.selected_range = this.period_list[0].id;
        }
    }

    public async toggleTag(tag: string) {
        const tags = (await nextValueFrom(this.filters))?.tags || [];
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
                        'EEE, do MMM',
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
