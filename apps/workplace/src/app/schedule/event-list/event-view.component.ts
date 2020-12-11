import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { map } from 'rxjs/operators';

import { BaseClass, timePeriodsIntersect } from '@user-interfaces/common';
import { ScheduleStateService } from '../schedule-state.service';
import { addDays, endOfDay, format, isAfter, isBefore, isSameDay, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';

export interface EventPair {
    id: string;
    date: number;
}

@Component({
    selector: 'schedule-event-list',
    template: `
        <div class="flex p-2 items-center bg-white border-b border-gray-200 shadow space-x-2">
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
                <div class="legend" *ngFor="let item of legend_list">
                    <div
                        class="color"
                        [style.background-color]="item.color"
                    ></div>
                    {{ item.name }}
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
                    (ngModelChange)="setDate($event)"
                    [matDatepicker]="picker"
                />

                <mat-datepicker-toggle
                    class="opacity-0 absolute inset-0"
                    matSuffix
                    [for]="picker"
                ></mat-datepicker-toggle>
            </button>
            <mat-datepicker #picker></mat-datepicker>
        </div>
        <main class="w-full flex-1 h-1/2 flex flex-col">
            <div class="flex-1 w-full h-1/2 overflow-auto p-4" (scroll)="onScroll($event)">
                <schedule-event-date-list
                    *ngFor="let details of ((events | async) | keyvalue)"
                    [attr.date]="details.key | date:'yyyy-MM-dd'"
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
            }
        `,
    ],
})
export class ScheduleEventViewComponent extends BaseClass implements OnInit {
    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly calendars = this._state.calendars;
    public readonly legend_list = [];

    public readonly events = combineLatest([this._state.filtered_events, this._state.options]).pipe(
        map(([events, options]) => {
            let start = startOfDay(new Date());
            const end_of_week = addDays(options.date || start, 12);
            const mapping = {};
            let count = 0;
            while (count < events.length || isBefore(start, end_of_week)) {
                const end = endOfDay(start);
                const list = events.filter(e => timePeriodsIntersect(start.valueOf(), end.valueOf(), e.date, e.date + e.duration * 60 * 1000));
                count += list.length;
                mapping[start.valueOf()] = list;
                start = addDays(start, 1);
            }
            return mapping;
        })
    );

    public readonly setDate = (d) => this._state.setOptions({ date: d });
    public readonly setCalendar = (d) => this._state.setOptions({ calendar: d });

    constructor(private _state: ScheduleStateService, private _el: ElementRef<HTMLElement>) {
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
        const day_lists = Array.prototype.slice.call(this._el?.nativeElement.querySelectorAll('schedule-event-date-list') || []);
        if (!day_lists?.length) return;
        const scroll_top = event.target.scrollTop;
        let active_day: HTMLElement = null;
        for (const el of day_lists){
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
}
