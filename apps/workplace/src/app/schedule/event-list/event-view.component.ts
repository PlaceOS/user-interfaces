import { Component, ElementRef, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { BaseClass, timePeriodsIntersect } from '@user-interfaces/common';
import { ScheduleStateService } from '../schedule-state.service';
import {
    addDays,
    endOfDay,
    format,
    isBefore,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'schedule-event-list',
    template: `
        <div
            class="flex p-2 items-center bg-white border-b border-gray-200 shadow space-x-2"
        >
            <mat-form-field appearance="outline" class="h-12">
                <mat-select
                    name="calendars"
                    [ngModel]="(options | async).calendar"
                    (ngModelChange)="setCalendar($event)"
                >
                    <mat-option
                        *ngFor="let cal of calendars | async"
                        [value]="cal.id"
                    >
                        {{ cal.summary }}
                    </mat-option>
                    <mat-option value="desks">Desks</mat-option>
                </mat-select>
            </mat-form-field>
            <div class="flex-1 w-0"></div>
            <button mat-button class="clear" [matMenuTriggerFor]="legend">
                Legend
            </button>
            <mat-menu #legend="matMenu">
                <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                    <div class="bg-success h-2 w-2 rounded-full mr-4"></div>
                    Approved
                </div>
                <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                    <div class="bg-pending h-2 w-2 rounded-full mr-4"></div>
                    Tentative
                </div>
                <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                    <div class="bg-error h-2 w-2 rounded-full mr-4"></div>
                    Declined
                </div>
            </mat-menu>
            <button mat-icon-button class="relative" #dateMenu>
                <app-icon
                    [icon]="{ class: 'material-icons', content: 'event' }"
                ></app-icon>
                <input
                    matInput
                    class="opacity-0 absolute inset-0"
                    [ngModel]="(options | async)?.date"
                    (ngModelChange)="setDate($event); scrollTo($event)"
                    [matDatepicker]="picker"
                    [min]="min_date"
                />

                <mat-datepicker-toggle
                    class="opacity-0 absolute inset-0"
                    matSuffix
                    [for]="picker"
                ></mat-datepicker-toggle>
            </button>
            <mat-datepicker #picker ></mat-datepicker>
        </div>
        <main class="w-full flex-1 h-1/2 flex flex-col">
            <div
                class="flex-1 w-full h-1/2 overflow-auto p-4"
                (scroll)="onScroll($event)"
            >
                <schedule-event-date-list
                    *ngFor="let details of events | async | keyvalue"
                    [attr.date]="details.key | date: 'yyyy-MM-dd'"
                    [date]="details.key"
                    [events]="details.value"
                ></schedule-event-date-list>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                *ngIf="loading | async"
            ></mat-progress-bar>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50%;
                flex: 1;
            }
        `,
    ],
})
export class ScheduleEventViewComponent extends BaseClass implements OnInit {
    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly calendars = this._state.calendars;

    public readonly events = combineLatest([
        this._state.filtered_events,
        this._state.options,
    ]).pipe(
        map(([events, options]) => {
            let start = startOfDay(new Date());
            const end_of_week = addDays(options.date || start, 12);
            const mapping = {};
            let count = 0;
            while (count < events.length || isBefore(start, end_of_week)) {
                const end = endOfDay(start);
                const list = events.filter((e) =>
                    timePeriodsIntersect(
                        start.valueOf(),
                        end.valueOf(),
                        e.date,
                        e.date + e.duration * 60 * 1000
                    )
                );
                count += list.length;
                mapping[start.valueOf()] = list;
                start = addDays(start, 1);
            }
            return mapping;
        })
    );

    public readonly min_date = startOfDay(new Date());
    public readonly setDate = (d) => this._state.setOptions({ date: d });
    public readonly setCalendar = (d) =>
        this._state.setOptions({ calendar: d });

    constructor(
        private _state: ScheduleStateService,
        private _el: ElementRef<HTMLElement>
    ) {
        super();
    }

    public ngOnInit(): void {
        this._state.startPolling();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this._state.stopPolling();
    }

    public onScroll(event): void {
        const day_lists = Array.prototype.slice.call(
            this._el?.nativeElement.querySelectorAll(
                'schedule-event-date-list'
            ) || []
        );
        if (!day_lists?.length) return;
        const scroll_top = event.target.scrollTop;
        let active_day: HTMLElement = null;
        for (const el of day_lists) {
            if (el.offsetTop - scroll_top > 0) {
                active_day = el;
                break;
            }
        }
        if (!active_day) return;
        const date = new Date(active_day.getAttribute('date'));
        if (!isSameDay(date, this._state.date)) {
            console.log('Date:', format(date, 'dd MMM yyyy'));
            this.setDate(date.valueOf());
        }
    }

    public scrollTo(date: number) {
        this.timeout(
            'scroll_to',
            () => {
                const el: HTMLElement = this._el?.nativeElement.querySelector(
                    `[date="${format(date, 'yyyy-MM-dd')}"]`
                );
                if (!el) return;
                el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            },
            1000
        );
    }
}
