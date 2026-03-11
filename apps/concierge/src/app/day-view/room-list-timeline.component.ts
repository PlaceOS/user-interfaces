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
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'room-list-timeline',
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
        <div
            list-grid
            class="z-0 grid h-1/2 w-full flex-1 overflow-auto"
        >
            <!-- Top-left corner: timezone -->
            <div
                class="bg-base-100 sticky top-0 left-0 z-30 flex items-center justify-center border-r border-b border-base-300"
            >
                <div class="text-xs opacity-60">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
            </div>
            <!-- Hour headers (top row, scrolls horizontally) -->
            <div
                hour-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex items-center border-b"
                [style.width]="hours.length * hour_col_width + 'rem'"
            >
                @for (hour of hours; track hour) {
                    <div
                        class="relative flex h-full items-end justify-center border-l border-base-200 pb-1"
                        [style.width]="hour_col_width + 'rem'"
                    >
                        <span class="text-xs opacity-60">{{
                            formatHour(hour)
                        }}</span>
                    </div>
                }
            </div>
            <!-- Space names (left column, scrolls vertically) -->
            <div
                space-names
                class="border-base-300 bg-base-100 sticky left-0 z-10 border-r"
            >
                @for (space of spaces | async; track space.id) {
                    <div
                        class="flex items-center border-b border-base-200 px-3"
                        [style.height]="row_height + 'rem'"
                        [matTooltip]="
                            space.display_name || space.name
                        "
                    >
                        <span class="block w-full truncate text-xs font-medium">
                            {{
                                space.display_name || space.name
                            }}
                        </span>
                    </div>
                }
            </div>
            <!-- Event grid (main area) -->
            <div
                event-grid
                class="relative"
                [style.width]="hours.length * hour_col_width + 'rem'"
            >
                <!-- Row backgrounds + horizontal lines -->
                @for (
                    space of spaces | async;
                    track space.id;
                    let i = $index
                ) {
                    <div
                        class="border-b border-base-200"
                        [ngClass]="i % 2 === 1 ? 'bg-base-200/30' : ''"
                        [style.height]="row_height + 'rem'"
                    ></div>
                }
                <!-- Vertical hour lines -->
                @for (hour of hours; track hour; let j = $index) {
                    <div
                        class="absolute top-0 h-full border-l border-base-200"
                        [style.left]="j * hour_col_width + 'rem'"
                    ></div>
                }
                <!-- Events positioned by space row and hour offset -->
                @for (
                    space of spaces | async;
                    track space.id;
                    let i = $index
                ) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event.id
                    ) {
                        @if (
                            !event.is_system_event ||
                            (ui_options | async).show_overflow
                        ) {
                            <button
                                matRipple
                                class="absolute overflow-hidden text-left hover:opacity-90"
                                [style.top]="
                                    i * row_height + 0.125 + 'rem'
                                "
                                [style.height]="
                                    row_height - 0.25 + 'rem'
                                "
                                [style.left]="
                                    timeToHorizontalOffset(event.date) + '%'
                                "
                                [style.width]="
                                    durationToWidth(event.duration) + '%'
                                "
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                            >
                                <div
                                    class="bg-base-100 relative h-full w-full overflow-hidden rounded border border-base-200 px-2 py-0.5 text-[11px] shadow-sm"
                                    [class.opacity-60]="
                                        event.state === 'done'
                                    "
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
                                            <p class="truncate pl-1 font-medium text-base-content">
                                                {{
                                                    event.all_day
                                                        ? 'All Day'
                                                        : (event.date
                                                          | date
                                                              : time_format
                                                              : tz)
                                                }}
                                                &ndash; {{ event.title }}
                                            </p>
                                            <p class="truncate pl-1 text-base-content opacity-70">
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
                <!-- Current time indicator -->
                @if (show_time | async) {
                    <div
                        class="bg-secondary absolute top-0 h-full w-[2px]"
                        [style.left]="
                            timeToHorizontalOffset(now) + '%'
                        "
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

            [list-grid] {
                grid-template-columns: 12rem auto;
                grid-template-rows: 2.5rem auto;
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
export class RoomListTimelineComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(EventsStateService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly hour_col_width = 7;
    public readonly row_height = 3;
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
            const event_map = {};
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
                event_map[space.id] = events
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
                        (event) =>
                            event.date_end >= start && event.date <= end,
                    );
            }
            return event_map;
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
        return `Start: ${event.all_day ? 'All Day' : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling('list'));
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
    }

    /** Horizontal offset as percentage of the total grid width */
    public timeToHorizontalOffset(date: number) {
        const current_tz =
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = !this.timezone
            ? 0
            : getTimezoneDifferenceInHours(this.timezone, current_tz);
        const start_time = setHours(
            startOfDay(this._state.getDate()),
            this.block_start - offset,
        );
        const diff = differenceInMinutes(date, start_time);
        return +(
            (Math.max(0, diff / 60) / this.block_range) *
            100
        ).toFixed(2);
    }

    /** Width as percentage of total grid width based on duration */
    public durationToWidth(duration: number) {
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
        _scroll_to = false,
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
