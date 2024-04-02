import { Component } from '@angular/core';
import { GroupEventsStateService } from './group-events-state.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    addDays,
    addMonths,
    endOfDay,
    format,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: '[dashboard]',
    template: `
        <topbar></topbar>
        <main class="flex flex-col flex-1 h-1/2 bg-base-200">
            <div class="w-full bg-base-content text-base-100">
                <div
                    class="flex items-center space-x-2 w-[48rem] max-w-full mx-auto p-2"
                >
                    <mat-form-field
                        appearance="outline"
                        class="w-32 inverse no-subscript"
                    >
                        <mat-select
                            [ngModel]="period.value"
                            (ngModelChange)="period.next($event)"
                        >
                            <mat-option value="week">Week</mat-option>
                            <mat-option value="month">Month</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        class="w-64 inverse no-subscript"
                    >
                        <mat-select
                            [(ngModel)]="selected_range"
                            (ngModelChange)="setPeriod($event)"
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
            </div>
            <div class="h-1/2 flex-1 w-full overflow-auto p-4">
                <group-event-card
                    *ngIf="featured | async; else no_featured"
                    [event]="featured | async"
                    [featured]="true"
                    class="my-2 mx-auto"
                ></group-event-card>
                <ng-template #no_featured>
                    <div
                        class="flex items-center justify-center w-full h-48 bg-base-300 rounded-xl"
                        *ngIf="(event_list | async)?.length"
                    >
                        <div class="opacity-30">No featured event</div>
                    </div>
                </ng-template>
                <ng-template
                    *ngIf="(event_list | async)?.length; else no_events"
                >
                    <div
                        class="flex flex-wrap justify-center mt-2"
                        *ngFor="let day of event_date_list | async"
                    >
                        <h3 class="w-full text-xl text-center">
                            {{ day.date | date: 'mediumDate' }}
                        </h3>
                        <group-event-card
                            *ngFor="let event of day.events"
                            [event]="event"
                            class="m-2"
                        ></group-event-card>
                    </div>
                </ng-template>
                <ng-template #no_events>
                    <div class="flex items-center justify-center w-full h-48">
                        <div class="opacity-30">No upcoming events</div>
                    </div>
                </ng-template>
            </div>
        </main>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }

            .top {
                background-color: #007ac8;
            }
        `,
    ],
})
export class GroupEventsComponent extends AsyncHandler {
    public period = new BehaviorSubject<'week' | 'month'>('week');
    public period_list = [];
    public selected_range: number;
    public readonly event_list = this._state.events;
    public readonly featured = this.event_list.pipe(
        map((_) => _.find((_: any) => _.extension_data?.featured || _.featured))
    );

    public readonly event_date_list = combineLatest([this.event_list]).pipe(
        map(([list]) => {
            const range = this.period_list[this.selected_range];
            if (!range) return [];
            const days = [];
            let start = range.start;
            const end = range.end;
            while (start < end) {
                days.push({
                    date: start,
                    events: list.filter(
                        (_) =>
                            startOfDay(start).valueOf() ===
                            startOfDay(_.date).valueOf()
                    ),
                });
                start = addDays(start, 1).valueOf();
            }
            return days;
        })
    );

    constructor(
        private _state: GroupEventsStateService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
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
                const end = addDays(addMonths(date, 1), -1).valueOf();
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
