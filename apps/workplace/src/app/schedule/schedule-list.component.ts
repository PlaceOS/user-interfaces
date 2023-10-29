import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { currentUser } from '@placeos/common';
import { addDays, addMonths, isSameDay } from 'date-fns';
import { map, take } from 'rxjs/operators';
import { BookingLike, ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-list',
    template: `
        <div
            class="w-full h-16 flex items-center justify-between bg-base-100 border-b border-base-200 shadow p-2"
        >
            <mat-form-field appearance="outline" class="h-[3.25rem]">
                <mat-select
                    [ngModel]="(options | async)?.calendar"
                    (ngModelChange)="setOptions({ calendar: $event })"
                    [placeholder]="user?.name"
                >
                    <mat-option
                        *ngFor="let cal of calendars | async"
                        [value]="cal.id"
                        >{{
                            (cal.id | user | async)?.name || cal.id
                        }}</mat-option
                    >
                </mat-select>
            </mat-form-field>
            <div class="flex items-center space-x-2">
                <button
                    matRipple
                    class="clear underline"
                    [matMenuTriggerFor]="legend"
                >
                    Legend
                </button>
                <button icon class="relative" #dateMenu>
                    <app-icon>event</app-icon>
                    <input
                        matInput
                        class="opacity-0 absolute inset-0"
                        [ngModel]="date | async"
                        (ngModelChange)="scrollTo($event)"
                        [matDatepicker]="picker"
                        [min]="today"
                        [max]="max_date"
                    />

                    <mat-datepicker-toggle
                        class="opacity-0 absolute inset-0"
                        matSuffix
                        [for]="picker"
                    ></mat-datepicker-toggle>
                </button>
                <mat-datepicker #picker></mat-datepicker>
            </div>
        </div>
        <div class="w-full flex-1 overflow-hidden bg-base-200">
            <cdk-virtual-scroll-viewport
                itemSize="88"
                class="h-full w-full"
                (scrolledIndexChange)="updateDate($event)"
            >
                <div
                    schedule-list-item
                    *cdkVirtualFor="
                        let item of event_list | async;
                        trackBy: trackByFn
                    "
                    [item]="item"
                ></div>
            </cdk-virtual-scroll-viewport>
        </div>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            *ngIf="loading | async"
        ></mat-progress-bar>
        <mat-menu #legend="matMenu" xPosition="before">
            <div class="flex items-center px-4 py-2 hover:bg-neutral">
                <div class="bg-success h-2 w-2 rounded-full mr-4"></div>
                Approved
            </div>
            <div class="flex items-center px-4 py-2 hover:bg-neutral">
                <div class="bg-warning h-2 w-2 rounded-full mr-4"></div>
                Tentative
            </div>
            <div class="flex items-center px-4 py-2 hover:bg-neutral">
                <div class="bg-error h-2 w-2 rounded-full mr-4"></div>
                Declined
            </div>
        </mat-menu>
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
})
export class ScheduleListComponent implements OnInit, OnDestroy {
    public readonly today = new Date();
    public readonly max_date = addMonths(this.today, 4);
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly calendars = this._state.calendars;

    public readonly date = this.options.pipe(map((_) => new Date(_.start)));

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly event_list = this._state.events.pipe(
        map((list) => {
            let items = [];
            let start = new Date(this.today);
            while (start < this.max_date) {
                const found = list.filter((_) => isSameDay(start, _.date));
                items = found.length
                    ? [
                          ...items,
                          {
                              id: 'date',
                              date: start.valueOf(),
                              duration: found.length,
                          },
                          ...found,
                      ]
                    : [
                          ...items,
                          { id: 'date', date: start.valueOf(), duration: 0 },
                      ];
                start = addDays(start, 1);
            }
            return items;
        })
    );

    public get user() {
        return currentUser();
    }

    @ViewChild(CdkVirtualScrollViewport, { static: true })
    private _viewport: CdkVirtualScrollViewport;

    constructor(private _state: ScheduleStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }

    public setDate(date: Date) {
        this._state.setOptions({ start: date.valueOf() });
    }

    public async updateDate(index) {
        const events = (await this.event_list.pipe(take(1)).toPromise()) || [];
        const event = events[index] || {};
        if (event) this.setDate(event.date);
    }

    public async scrollTo(date: Date) {
        const events = await this.event_list.pipe(take(1)).toPromise();
        const index = events.findIndex(
            (_) => _.id === 'date' && isSameDay(_.date, date)
        );
        if (index >= 0 && this._viewport) {
            let position = 0;
            for (let i = 0; i < events.length && i < index; i++) {
                if (events[i].id === 'date' && events[i].duration > 0)
                    position += 88 / 88;
                else position += 1;
            }
            this._viewport.scrollTo({
                top: Math.round(position * 88),
                behavior: 'smooth',
            });
        }
        this.setDate(date);
    }

    /* istanbul ignore next */
    public trackByFn(idx: number, event: BookingLike) {
        return event ? `${event.id}|${event.date}` : undefined;
    }
}
