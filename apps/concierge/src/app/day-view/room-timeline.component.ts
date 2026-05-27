import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    notifyError,
    notifyInfo,
    notifySuccess,
} from '@placeos/common';
import { TranslatePipe, openConfirmModal } from '@placeos/components';
import {
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
    declineEvent,
} from '@placeos/events';
import {
    addHours,
    differenceInMinutes,
    format,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { DateOptionsComponent } from '../ui/date-options.component';
import { BookingUIOptions, EventsStateService } from './events-state.service';
import { RoomBookingSearchComponent } from './room-booking-search.component';
import { isActiveRoomTimelineEvent } from './room-timeline.utilities';

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
                [date]="date()"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today()) {
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
                <div class="text-xs opacity-30">
                    {{ date() | date: 'zzzz' : tz }}
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
                [style.width]="spaces().length * block_width + 'rem'"
            >
                @for (space of spaces(); track space) {
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
                @for (hour of hours(); track hour; let i = $index) {
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
                @if (show_time() && timeToOffset(now) < 100) {
                    <div
                        class="bg-secondary absolute right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="border-base-200 relative w-full border-b"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces(); track space.id; let i = $index) {
                    @for (event of events()[space.id] || []; track event.id) {
                        @if (
                            !event.is_system_event || ui_options().show_overflow
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
                                    class="border-base-200 bg-base-100 hover:bg-base-200 relative h-full w-full overflow-hidden rounded-lg border px-3 py-1 text-xs shadow-sm"
                                    [class.opacity-60]="event.state === 'done'"
                                    [class.rounded-none!]="
                                        event.is_system_event
                                    "
                                    [class.border-secondary!]="
                                        event.is_system_event
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div
                                            class="bg-secondary absolute -inset-px opacity-30"
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
                @if (show_time()) {
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
    private _building = toSignal(this._org.active_building, {
        initialValue: this._org.building,
    });
    private _filtered = toSignal(this._state.filtered, { initialValue: [] });

    public block_width = 14;
    public readonly ui_options = toSignal(this._state.options, {
        initialValue: {} as BookingUIOptions,
    });
    public readonly spaces = toSignal(this._state.spaces, { initialValue: [] });
    public readonly date = toSignal(this._state.date, {
        initialValue: this._state.getDate(),
    });
    public readonly is_today = computed(() =>
        isSameDay(this.date(), Date.now()),
    );
    public readonly show_time = computed(() => {
        this._building();
        const date = this.date();
        const today = isSameDay(date, Date.now());
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
    });
    public readonly events = computed(() => {
        const spaces = this.spaces();
        const events = this._filtered().filter(isActiveRoomTimelineEvent);
        const date = this.date();
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
                    (event) => event.date_end >= start && event.date <= end,
                );
        }
        return event_map;
    });

    private _hour_list = Array.from({ length: 24 }, (_, i) => i);
    public readonly hours = computed(() =>
        this._hour_list.filter(
            (hour) => hour >= this.block_start && hour < this.block_end,
        ),
    );

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
        ref.componentInstance.hide_edit.set(
            !this._settings.get('app.events.allow_edit'),
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
        const content = `Cancel the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Cancel booking`, content, icon: { content: 'delete' } },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        if (item.status === 'declined') {
            return notifyInfo('Booking has already been cancelled');
        }
        resp.loading('Requesting booking cancellation...');
        this._state.remove(item);
        await declineEvent(item.id, {
            calendar: item.calendar || item.mailbox || item.host,
            system_id: space_id,
        })
            .toPromise()
            .catch((e) => {
                this._state.restore(item);
                notifyError(`Unable to cancel booking. ${e}`);
                resp.close();
                throw e;
            });
        notifySuccess('Successfully cancelled booking.');
        this._dialog.closeAll();
    }
}
