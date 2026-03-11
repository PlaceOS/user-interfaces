import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    CalendarEvent,
    OrganisationService,
    SettingsService,
    getTimezoneDifferenceInHours,
    getTimezoneOffsetString,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    EventSummaryDialogComponent,
    EventSummaryData,
} from '../events/event-summary-dialog.component';
import { MOCK_APPROVAL_EVENTS } from '../events/event-approvals-mock.data';
import {
    addHours,
    differenceInMinutes,
    format,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, startWith } from 'rxjs/operators';
import { DateOptionsComponent } from '../ui/date-options.component';
import { EventsStateService } from './events-state.service';
import { RoomBookingSearchComponent } from './room-booking-search.component';

@Component({
    selector: 'room-bookings-timeline',
    template: `
        @if (timezone && tz) {
            <div
                class="bg-info text-info-content mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg p-2 text-center text-xs"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="border-base-200 relative z-20 flex items-center justify-center space-x-2 border-b p-2"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today | async) {
                <div
                    class="text-info absolute top-1/2 left-4 -translate-y-1/2 text-sm"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="absolute top-1/2 right-8 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="bg-base-100 sticky top-0 left-0 z-30 flex items-center justify-center"
            >
                <div class="text-xs opacity-60">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                ></div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-px w-2"
                ></div>
            </div>
            <div
                space-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex items-center border-b"
                [style.width]="(spaces | async)?.length * block_width + 'rem'"
            >
                @for (space of spaces | async; track space) {
                    <div
                        class="relative flex h-full w-56 items-center justify-center px-4"
                    >
                        <div class="truncate px-4">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="bg-base-300 absolute bottom-0 -left-px h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                hour-blocks
                class="border-base-300 bg-base-100 sticky left-0 z-10 overflow-visible border-r"
                [style.height]="block_range * block_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full"
                        [style.height]="block_height + 'rem'"
                    >
                        <div
                            class="bg-base-300 absolute -top-px right-0 h-px w-2"
                        ></div>
                        @if (i !== 0) {
                            <div
                                class="absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ formatHour(hour) }}
                            </div>
                        }
                    </div>
                }
                @if ((show_time | async) && timeToOffset(now) < 100) {
                    <div
                        class="bg-secondary absolute right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="border-base-200 relative w-full border-b"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces | async; track space; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces | async; track space.id; let i = $index) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event.id
                    ) {
                        @if (
                            !event.is_system_event ||
                            (ui_options | async).show_overflow
                        ) {
                            <button
                                event
                                matRipple
                                class="absolute w-52 text-left hover:opacity-90"
                                [style.left]="i * block_width + 0.25 + 'rem'"
                                [style.top]="timeToOffset(event.date) + '%'"
                                [style.height]="
                                    endToOffset(event.duration) + '%'
                                "
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                            >
                                <div
                                    class="bg-base-100 relative h-full w-full overflow-hidden rounded-lg border border-base-200 px-3 py-1 text-xs shadow-sm"
                                    [class.opacity-60]="event.state === 'done'"
                                >
                                    @if (event.is_system_event) {
                                        <div class="bg-secondary absolute inset-0 opacity-20"></div>
                                    } @else {
                                        <div
                                            [class]="'absolute inset-0 opacity-25 ' + statusBg(event)"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div class="relative">
                                            <p class="truncate font-medium text-base-content">
                                                {{
                                                    event.all_day
                                                        ? 'All Day'
                                                        : (event.date
                                                          | date: time_format : tz)
                                                }}
                                                &ndash;
                                                {{ event.title }}
                                            </p>
                                            <p class="truncate text-base-content opacity-70">
                                                {{
                                                    event.organiser?.name ||
                                                        event.host
                                                }}
                                            </p>
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time | async) {
                    <div
                        class="bg-secondary absolute inset-x-0 h-[2px]"
                        [style.top]="timeToOffset(now) + '%'"
                    ></div>
                }
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
    imports: [
        CommonModule,
        DateOptionsComponent,
        TranslatePipe,
        RoomBookingSearchComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class RoomBookingsTimelineComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(EventsStateService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

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
            return today && Date.now() >= start && Date.now() <= end;
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

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
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
            startOfDay(this._state.getDate()),
            this.block_start - offset,
        );
        const diff = differenceInMinutes(date, start_time);

        return +((Math.max(0, diff / 60) / this.block_range) * 100).toFixed(2);
    }

    public endToOffset(duration: number) {
        return +(
            (Math.min(this.block_range, duration / 60) / this.block_range) *
            100
        ).toFixed(2);
    }

    public statusBg(event: CalendarEvent): string {
        if (!event.extension_data?.shared_event) return 'bg-success';
        if (event.status === 'declined') return 'bg-error';
        if (event.status === 'tentative') return 'bg-warning';
        return 'bg-success';
    }

    public viewEvent(
        event: CalendarEvent,
        space_id: string,
        scroll_to = false,
    ) {
        if (event.is_system_event) return;
        const mock = MOCK_APPROVAL_EVENTS.find((e) => e.id === event.id);
        this._dialog.open(EventSummaryDialogComponent, {
            data: (mock
                ? { event: mock }
                : { calendar_event: event }) as EventSummaryData,
        });
    }

}
