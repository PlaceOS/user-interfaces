import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { isMock } from '@placeos/ts-client';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    addDays,
    addMonths,
    addWeeks,
    endOfDay,
    format,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { EventApprovalsComponent } from './event-approvals.component';
import { EventListingComponent } from './event-listing.component';
import { EventQuotesComponent } from './event-quotes.component';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'app-event-list',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EVENTS_HEADER' | translate }}
                </h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.EVENTS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">chevron_right</icon>
                </a>
            </div>
            <div filters class="flex items-center space-x-2 px-8 pb-4">
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period | async"
                        (ngModelChange)="setPeriodType($event)"
                    >
                        <mat-option value="week">{{
                            'COMMON.WEEK' | translate
                        }}</mat-option>
                        <mat-option value="month">{{
                            'COMMON.MONTH' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-64">
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                    >
                        @for (range of period_list; track range.id) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-1 px-8 pb-4">
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'list'"
                    [class.text-primary-content]="view === 'list'"
                    [class.bg-base-200]="view !== 'list'"
                    (click)="view = 'list'"
                >
                    List
                </button>
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'approvals'"
                    [class.text-primary-content]="view === 'approvals'"
                    [class.bg-base-200]="view !== 'approvals'"
                    (click)="view = 'approvals'"
                >
                    Approvals
                </button>
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'quotes'"
                    [class.text-primary-content]="view === 'quotes'"
                    [class.bg-base-200]="view !== 'quotes'"
                    (click)="view = 'quotes'"
                >
                    Quotes &amp; Invoices
                </button>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
                @if (view === 'approvals') {
                    <event-approvals></event-approvals>
                }
                @if (view === 'list') {
                    <div class="min-h-full w-full overflow-x-auto">
                        <event-listing class="block"></event-listing>
                    </div>
                }
                @if (view === 'quotes') {
                    <event-quotes></event-quotes>
                }
            </div>
        </div>
        @if (!has_calendar) {
            <div class="absolute inset-0 z-50 flex items-center justify-center">
                <div class="bg-base-100 absolute inset-0 opacity-80"></div>
                <p class="max-w-lg text-lg opacity-60">
                    {{ 'APP.CONCIERGE.EVENTS_CONFIG_ERROR' | translate }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        EventApprovalsComponent,
        EventListingComponent,
        EventQuotesComponent,
        MatRippleModule,
        RouterModule,
        FormsModule,
    ],
})
export class EventsListComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly period = this._state.options.pipe(
        map((_) => _.period),
        distinctUntilChanged(),
    );

    public period_list = [];
    public selected_range: number;
    public view: 'list' | 'approvals' | 'quotes' = 'list';

    public get has_calendar() {
        return isMock() || this._settings.get('app.group_events_calendar');
    }

    public ngOnInit() {
        this.subscription('poll_events', this._state.startPolling());
        this.subscription(
            'period',
            this.period.subscribe(() => {
                this._generatePeriods();
                this._initPeriod();
            }),
        );
        this._generatePeriods();
        this._initPeriod();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((q) => {
                if (q.has('period') && q.get('period') !== this._state.period) {
                    this.setPeriodType(
                        q.get('period') as 'week' | 'month',
                        false,
                    );
                }
                this._generatePeriods();

                if (q.has('range')) {
                    this.timeout('update', () => {
                        const id = parseInt(q.get('range'), 10);
                        const item = this.period_list.find(
                            (_) => id >= _.start && id < _.end,
                        ) ||
                            this.period_list[0] || {
                                start: id,
                                end:
                                    this._state.period === 'week'
                                        ? addWeeks(id, 1).valueOf()
                                        : addMonths(id, 1).valueOf(),
                            };
                        this.selected_range = item.id || id;
                        this._state.setOptions({
                            date: item.start,
                            end: item.end,
                        });
                        this.setPeriod(this.selected_range);
                    });
                }
            }),
        );
    }

    public setPeriodType(type: 'week' | 'month', set_route = true) {
        this._state.setOptions({ period: type });
        if (set_route) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { period: type },
                queryParamsHandling: 'merge',
            });
        }
    }

    public setPeriod(id: number) {
        this.timeout('set_period', () => {
            const item =
                this.period_list.find((_) => id >= _.start && id < _.end) ||
                this.period_list[0];
            if (!item) return;
            this.selected_range = item.id;
            const { start, end } = item;
            this._state.setOptions({ date: start, end });
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { range: id },
                queryParamsHandling: 'merge',
            });
        });
    }

    private _generatePeriods() {
        this.timeout('generate_periods', async () => {
            const periods = [];
            const period_type = await nextValueFrom(this.period);
            let date = subMonths(Date.now(), 6).valueOf();
            const end_date = addMonths(Date.now(), 6).valueOf();
            const week_offset = this._settings.get('app.week_start') || 0;
            if (period_type === 'month') {
                date = startOfMonth(date).valueOf();
            } else if (period_type === 'week') {
                date = startOfWeek(date, {
                    weekStartsOn: week_offset,
                }).valueOf();
            }
            while (date < end_date) {
                if (period_type === 'week') {
                    const end = endOfDay(addDays(date, 6)).valueOf();
                    periods.push({
                        id: date,
                        start: date,
                        end,
                        display: `${format(date, 'EEE, do MMM')} – ${format(
                            end,
                            'do MMM',
                        )}`,
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
        });
    }

    private _initPeriod() {
        this.timeout(
            'update',
            () => {
                if (this.period_list.length) {
                    let index = this.period_list.findIndex(
                        (_) => _.start <= Date.now() && _.end >= Date.now(),
                    );
                    if (index < 0) index = 0;
                    this.setPeriod(this.period_list[index].id);
                    this.selected_range = this.period_list[index].id;
                }
            },
            350,
        );
    }
}
