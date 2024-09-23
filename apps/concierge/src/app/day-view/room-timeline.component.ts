import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    addHours,
    differenceInMinutes,
    format,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { EventsStateService } from './events-state.service';
import { combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, startWith } from 'rxjs/operators';
import {
    AsyncHandler,
    SettingsService,
    getTimezoneDifferenceInHours,
    getTimezoneOffsetInMinutes,
    notifyError,
    notifySuccess,
    openConfirmModal,
    padString,
} from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import {
    CalendarEvent,
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
    declineEvent,
} from '@placeos/events';
import { DatePipe } from '@angular/common';
import { OrganisationService } from '@placeos/organisation';
import { padLength } from 'libs/components/src/lib/media-duration.pipe';

@Component({
    selector: 'room-bookings-timeline',
    template: `
        <div
            class="mx-2 mt-2 p-2 w-[calc(100%-1rem)] bg-info text-info-content rounded-lg text-center text-xs"
            *ngIf="diff_tz"
        >
            Timezone of the building is displayed and is different from your
            local timezone.
        </div>
        <div
            class="relative flex items-center justify-center p-2 space-x-2 border-b border-base-200 z-20"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
            ></date-options>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm"
                *ngIf="is_today | async"
            >
                Today
            </div>
            <div class="absolute top-1/2 -translate-y-1/2 right-8">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="grid overflow-auto w-full h-1/2 flex-1 z-0">
            <div
                timezone
                class="sticky top-0 left-0 z-30 bg-base-100 flex items-center justify-center"
            >
                <div class="text-xs opacity-30">
                    {{ date | async | date: 'z' : tz }}
                </div>
                <div
                    class="absolute h-2 w-px right-0 bottom-0 bg-base-300"
                ></div>
                <div
                    class="absolute w-2 h-px right-0 bottom-0 bg-base-300"
                ></div>
            </div>
            <div
                space-headers
                class="sticky top-0 z-20 border-b border-base-300 flex items-center bg-base-100"
                [style.width]="(spaces | async)?.length * block_width + 'rem'"
            >
                <div
                    *ngFor="let space of spaces | async"
                    class="relative h-full w-56 flex items-center justify-center"
                >
                    <div class="truncate">
                        {{ space.display_name || space.name }}
                    </div>
                    <div
                        class="absolute h-2 w-px -left-px bottom-0 bg-base-300"
                    ></div>
                </div>
            </div>
            <div
                hour-blocks
                class="sticky left-0 z-10 border-r border-base-300 bg-base-100 overflow-visible"
                [style.height]="block_range * block_height + 'rem'"
            >
                <div
                    *ngFor="let hour of hours; let i = index"
                    class="relative w-full"
                    [style.height]="block_height + 'rem'"
                >
                    <div
                        class="absolute -top-px right-0 w-2 h-px bg-base-300"
                    ></div>
                    <div
                        class="absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60"
                        *ngIf="i !== 0"
                    >
                        {{ formatHour(hour) }}
                    </div>
                </div>
                <div
                    class="absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
                    *ngIf="(show_time | async) && timeToOffset(now) < 100"
                    [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                ></div>
            </div>
            <div space-blocks class="relative overflow-hidden">
                <div
                    *ngFor="let hour of hours; let i = index"
                    class="relative w-full border-b border-base-200"
                    [style.height]="block_height + 'rem'"
                ></div>
                <div
                    *ngFor="let space of spaces | async; let i = index"
                    class="absolute w-px h-full bg-base-200 top-0"
                    [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                ></div>

                <ng-container
                    *ngFor="let space of spaces | async; let i = index"
                >
                    <ng-container
                        *ngFor="let event of (events | async)[space.id] || []"
                    >
                        <button
                            event
                            matRipple
                            class="absolute w-52 hover:opacity-90 text-left"
                            [style.left]="i * block_width + 0.25 + 'rem'"
                            [style.top]="timeToOffset(event.date) + '%'"
                            [style.height]="endToOffset(event.duration) + '%'"
                            [class.pointer-events-none]="event.state === 'done'"
                            (click)="viewEvent(event, space.id)"
                            [matTooltip]="eventTooltip(event)"
                            *ngIf="
                                !event.is_system_event ||
                                (ui_options | async).show_overflow
                            "
                        >
                            <div
                                class="relative w-full h-full shadow bg-base-100 border border-base-200 hover:bg-base-200 rounded-lg overflow-hidden px-3 py-1 text-xs"
                                [class.opacity-60]="event.state === 'done'"
                                [class.!rounded-none]="event.is_system_event"
                                [class.!border-secondary]="
                                    event.is_system_event
                                "
                            >
                                <ng-container *ngIf="event.is_system_event">
                                    <div
                                        class="absolute -inset-px bg-secondary opacity-30"
                                    ></div>
                                </ng-container>
                                <ng-container *ngIf="!event.is_system_event">
                                    <div
                                        class="absolute left-0 inset-y-0 w-1 "
                                        [class.bg-secondary]="
                                            event.status !== 'cancelled'
                                        "
                                        [class.bg-error]="
                                            event.status === 'cancelled'
                                        "
                                    ></div>
                                    <p
                                        class="truncate"
                                        [class.opacity-60]="
                                            event.status === 'cancelled'
                                        "
                                    >
                                        {{
                                            event.all_day
                                                ? 'All Day'
                                                : (event.date
                                                  | date: time_format : tz)
                                        }}
                                        &ndash;
                                        {{ event.title }}
                                    </p>
                                    <p
                                        class="truncate"
                                        [class.opacity-60]="
                                            event.status === 'cancelled'
                                        "
                                    >
                                        {{
                                            event.organiser?.name || event.host
                                        }}
                                    </p>
                                </ng-container>
                            </div>
                        </button>
                    </ng-container>
                </ng-container>
                <div
                    *ngIf="show_time | async"
                    class="absolute inset-x-0 h-[2px] bg-secondary"
                    [style.top]="timeToOffset(now) + '%'"
                ></div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                max-width: 100%;
            }

            [timeline] {
                grid-template-columns: 4rem auto;
                grid-template-rows: 3.5rem auto;
            }
        `,
    ],
})
export class RoomBookingsTimelineComponent extends AsyncHandler {
    public block_width = 14;
    public readonly ui_options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly date = this._state.date;
    public readonly is_today = this.date.pipe(
        map((d) => isSameDay(d, Date.now())),
    );
    public readonly show_time = combineLatest([
        this.date,
        this._org.active_building,
    ]).pipe(
        map(([d]) => {
            const today = isSameDay(d, Date.now());
            const offset = this.timezone
                ? getTimezoneDifferenceInHours(this.timezone)
                : 0;
            const start = addHours(
                setHours(startOfDay(Date.now()), this.block_start),
                -offset,
            ).valueOf();
            const end = addHours(
                setHours(startOfDay(Date.now()), this.block_end),
                -offset,
            ).valueOf();
            return today && d >= start && d <= end;
        }),
    );
    public readonly events = combineLatest([
        this._state.spaces,
        this._state.filtered,
        this.date,
    ]).pipe(
        debounceTime(300),
        map(([spaces, events, date]) => {
            const map = {};
            const offset = this.timezone
                ? getTimezoneDifferenceInHours(this.timezone)
                : 0;
            const start = addHours(
                setHours(startOfDay(date), this.block_start),
                -offset,
            ).valueOf();
            const end = addHours(
                setHours(startOfDay(date), this.block_end),
                -offset,
            ).valueOf();
            for (const space of spaces) {
                map[space.id] = events
                    .filter(
                        (event) =>
                            event.resources.find(
                                (item) =>
                                    item.id === space.id ||
                                    item.email === space.email,
                            ) ||
                            event.system?.id === space.id ||
                            event.system?.email === space.email,
                    )
                    .filter(
                        (event) => event.date_end >= start && event.date <= end,
                    );
            }
            return map;
        }),
        startWith({}),
        shareReplay(1),
    );

    private _hour_list = Array.from({ length: 24 }, (_, i) => i);
    public hours: number[] = [];

    public get now() {
        return startOfMinute(Date.now()).valueOf();
    }

    public readonly edit = (e) => this._state.newBooking(e);
    public readonly setDate = (d) => this._state.setDate(d);

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        // Get Timezone as +/-HHMM
        const tz = this.timezone;
        if (!tz) return '';
        const offset = getTimezoneOffsetInMinutes(tz);
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        return `${offset > 0 ? '+' : '-'}${padLength(hours, 2)}${padLength(minutes, 2)}`;
    }

    public get diff_tz() {
        const tz = this.timezone;
        if (!tz) return false;
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz !== current_tz;
    }

    public get block_start() {
        return +this._settings.get('app.events.block_start') || 0;
    }

    public get block_end() {
        return +this._settings.get('app.events.block_end') || 24;
    }

    public get block_range() {
        return Math.min(24, Math.max(this.block_end - this.block_start, 1));
    }

    public get block_height() {
        return +this._settings.get('app.events.block_height') || 3;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: EventsStateService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public formatHour(hour: number) {
        const date = setHours(Date.now(), hour);
        return this._settings.get('app.use_24_hour_time')
            ? format(date, 'HH:00')
            : format(date, 'h a');
    }

    private _date_pipe = new DatePipe('en');

    public eventTooltip(event: CalendarEvent) {
        const tooltip = `Start: ${event.all_day ? 'All Day' : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
        return tooltip;
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
        this.subscription(
            'hour_list',
            this._org.active_building.subscribe(() => {
                this.hours = this._hour_list.filter(
                    (h) => h >= this.block_start && h < this.block_end,
                );
            }),
        );
        this.hours = this._hour_list.filter(
            (h) => h >= this.block_start && h < this.block_end,
        );
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = !this.timezone
            ? 0
            : getTimezoneDifferenceInHours(current_tz, this.timezone);
    }

    public timeToOffset(date: number) {
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = !this.timezone
            ? 0
            : getTimezoneDifferenceInHours(this.timezone, current_tz);
        const start_time = setHours(
            startOfDay(date),
            this.block_start - offset,
        );
        const diff = differenceInMinutes(date, start_time);

        return (Math.max(0, diff / 60) / this.block_range) * 100;
    }

    public endToOffset(duration: number) {
        return (
            (Math.min(this.block_range, duration / 60) / this.block_range) * 100
        );
    }

    public viewEvent(
        event: CalendarEvent,
        space_id: string,
        scroll_to: boolean = false,
    ) {
        if (event.is_system_event) return;
        const ref = this._dialog.open(EventDetailsModalComponent, {
            data: event,
        });
        ref.componentInstance.hide_edit = !this._settings.get(
            'app.events.allow_edit',
        );
        this.subscription(
            'remove',
            ref.componentInstance.remove.subscribe(() =>
                this.remove(event, space_id),
            ),
        );
        this.subscription(
            'edit',
            ref.componentInstance.edit.subscribe(() => this.edit(event)),
        );
        this.subscription(
            'actions',
            ref.componentInstance.action.subscribe(async (action) => {
                if (!action.includes('breakdown')) return;
                const ref = this._dialog.open(SetupBreakdownModalComponent, {
                    data: event,
                });
                const data = await ref.afterClosed().toPromise();
                if (data) this._state.replace(data);
            }),
        );
    }

    public async remove(item: CalendarEvent, space_id: string) {
        const time = `${format(item.date, 'dd MMM yyyy ' + this.time_format)}`;
        const resource_name = item.space?.display_name;
        const content = `Delete the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Delete booking`, content, icon: { content: 'delete' } },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading('Requesting booking deletion...');
        await declineEvent(item.id, {
            calendar: item.calendar || item.mailbox || item.host,
            system_id: space_id,
        })
            .toPromise()
            .catch((e) => {
                notifyError(`Unable to delete booking. ${e}`);
                resp.close();
                throw e;
            });
        notifySuccess('Successfully deleted booking.');
        this._dialog.closeAll();
    }
}
