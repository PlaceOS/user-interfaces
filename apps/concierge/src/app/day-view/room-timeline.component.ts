import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    SettingsService,
    getTimezoneDifferenceInHours,
    getTimezoneOffsetString,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    CalendarEvent,
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
    declineEvent,
} from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import {
    addHours,
    differenceInMinutes,
    format,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, startWith } from 'rxjs/operators';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'room-bookings-timeline',
    template: `
        @if (timezone && tz) {
            <div
                class="mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg bg-info p-2 text-center text-xs text-info-content"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="relative z-20 flex items-center justify-center space-x-2 border-b border-base-200 p-2"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today | async) {
                <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-info"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="absolute right-8 top-1/2 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="sticky left-0 top-0 z-30 flex items-center justify-center bg-base-100"
            >
                <div class="text-xs opacity-30">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="absolute bottom-0 right-0 h-2 w-px bg-base-300"
                ></div>
                <div
                    class="absolute bottom-0 right-0 h-px w-2 bg-base-300"
                ></div>
            </div>
            <div
                space-headers
                class="sticky top-0 z-20 flex items-center border-b border-base-300 bg-base-100"
                [style.width]="(spaces | async)?.length * block_width + 'rem'"
            >
                @for (space of spaces | async; track space) {
                    <div
                        class="relative flex h-full w-56 items-center justify-center"
                    >
                        <div class="truncate">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="absolute -left-px bottom-0 h-2 w-px bg-base-300"
                        ></div>
                    </div>
                }
            </div>
            <div
                hour-blocks
                class="sticky left-0 z-10 overflow-visible border-r border-base-300 bg-base-100"
                [style.height]="block_range * block_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full"
                        [style.height]="block_height + 'rem'"
                    >
                        <div
                            class="absolute -top-px right-0 h-px w-2 bg-base-300"
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
                        class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full border-b border-base-200"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces | async; track space; let i = $index) {
                    <div
                        class="absolute top-0 h-full w-px bg-base-200"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces | async; track space; let i = $index) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event
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
                                    class="relative h-full w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 px-3 py-1 text-xs shadow hover:bg-base-200"
                                    [class.opacity-60]="event.state === 'done'"
                                    [class.!rounded-none]="
                                        event.is_system_event
                                    "
                                    [class.!border-secondary]="
                                        event.is_system_event
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div
                                            class="absolute -inset-px bg-secondary opacity-30"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div
                                            class="absolute inset-y-0 left-0 w-1"
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
                                                event.organiser?.name ||
                                                    event.host
                                            }}
                                        </p>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time | async) {
                    <div
                        class="absolute inset-x-0 h-[2px] bg-secondary"
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
    standalone: false,
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

    public viewEvent(
        event: CalendarEvent,
        space_id: string,
        scroll_to = false,
    ) {
        if (event.is_system_event) return;
        const ref = this._dialog.open(EventDetailsModalComponent, {
            data: {
                event,
                edit_fn: (e) => this.edit(e),
                remove_fn: (e) => this.remove(e, space_id),
            },
        });
        ref.componentInstance.hide_edit = !this._settings.get(
            'app.events.allow_edit',
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
