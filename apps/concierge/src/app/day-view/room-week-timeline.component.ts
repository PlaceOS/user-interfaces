import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    CalendarEvent,
    getTimezoneOffsetInMinutes,
    getTimezoneOffsetString,
    i18n,
    nextValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import {
    addDays,
    isSameDay,
    isSameWeek,
    setHours,
    startOfMinute,
    startOfWeek,
} from 'date-fns';
import { DateOptionsComponent } from '../ui/date-options.component';
import { EventsStateService } from './events-state.service';
import { RoomBookingSearchComponent } from './room-booking-search.component';
import { isActiveRoomTimelineEvent } from './room-timeline.utilities';

@Component({
    selector: 'room-week-bookings-timeline',
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
                [step]="7"
                display_mode="week"
                [week_start]="week_start"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (this_week()) {
                <div
                    class="text-info absolute top-1/2 left-10 -translate-y-1/2 text-sm"
                >
                    {{ 'COMMON.WEEK_THIS' | translate }}
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
                class="bg-base-100 min-w-items-center sticky top-0 left-0 z-30 flex justify-center"
            >
                <div class="m-auto text-xs opacity-30">
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
                day-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-3rem)] items-center border-b"
                [style.width]="days().length * 12 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' : tz }}
                        </div>
                        @if (isToday(date)) {
                            <div
                                class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-xs"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="bg-base-300 absolute bottom-0 -left-px h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                empty-block
                class="border-base-300 bg-base-100 sticky left-0 z-10 min-h-full border-r"
                [style.height]="
                    event_max_count() ? event_max_count() * 5.375 + 'rem' : ''
                "
            ></div>
            <div
                date-blocks
                class="relative flex min-w-[calc(100%-3rem)] overflow-hidden"
                [style.width]="days().length * 12 + 'rem'"
            >
                @for (date of days(); track date; let i = $index) {
                    <div
                        class="border-base-200 min-w-48 flex-1 overflow-hidden border-r p-2"
                    >
                        @for (event of events()[date] || []; track event) {
                            <button
                                matRipple
                                class="hover:bg-base-200 flex w-full space-x-2 rounded-sm p-2 text-left"
                                (click)="
                                    viewEvent(
                                        event,

                                        event.system?.id
                                    )
                                "
                            >
                                <div
                                    class="my-1.5 h-2 w-2 rounded-full"
                                    [style.background-color]="
                                        typeColor(event.type)
                                    "
                                ></div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="truncate text-sm"
                                        [class.line-through]="
                                            event.state === 'done'
                                        "
                                    >
                                        {{ event.title }}
                                    </div>
                                    <div class="flex-1 text-xs opacity-60">
                                        {{
                                            event.date | date: time_format : tz
                                        }}
                                        &ndash;
                                        {{
                                            event.date_end
                                                | date: time_format : tz
                                        }}
                                        @if (tz) {
                                            <span>{{
                                                event.date_end
                                                    | date: 'zzzz' : tz
                                            }}</span>
                                        }
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            (
                                                event.host
                                                | user: 'email-prefix'
                                                | async
                                            )?.name ||
                                                hostAttendeeName(event) ||
                                                event.host
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
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
                grid-template-columns: 5rem auto;
                grid-template-rows: 3.5rem auto;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        RoomBookingSearchComponent,
        DateOptionsComponent,
        TranslatePipe,
        UserPipe,
    ],
})
export class RoomWeekBookingsTimelineComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(EventsStateService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _building = this._org.active_building;
    private _filtered = this._state.filtered;
    private _zones = this._state.zones;

    public hours = Array.from({ length: 24 }, (_, i) => i);
    public readonly ui_options = this._state.options;
    public readonly date = this._state.date;

    public readonly remove = this._state.removeBooking;

    public readonly types = signal([
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ]);

    public readonly days = computed(() => {
        this._building();
        const date = this.date();
        return new Array(7)
            .fill(0)
            .map((_, idx) =>
                addDays(
                    setHours(
                        startOfWeek(date, { weekStartsOn: this._week_start }),
                        12 - Math.floor(this.timezone_offset / 60),
                    ),
                    idx,
                ).valueOf(),
            );
    });
    public readonly this_week = computed(() =>
        isSameWeek(this.date(), Date.now(), {
            weekStartsOn: this._week_start,
        }),
    );

    private _data_pipe = new DatePipe('en');

    public readonly events = computed(() => {
        const day_list = this.days();
        let events = this._filtered().filter(isActiveRoomTimelineEvent);
        const zones = this._zones();
        if (zones.length) {
            events = events.filter((event) =>
                event.system?.zones.find((zone) => zones.includes(zone)),
            );
        }

        const event_map: Record<string, CalendarEvent[]> = {};
        for (const date of day_list) {
            const date_value = this._data_pipe.transform(
                date,
                'yyyy-MM-dd',
                this.tz,
            );
            event_map[date] = events
                .filter((event) => {
                    const event_date_value = this._data_pipe.transform(
                        event.date,
                        'yyyy-MM-dd',
                        this.tz,
                    );
                    return (
                        date_value === event_date_value &&
                        !event.is_system_event
                    );
                })
                .sort((a, b) => a.date - b.date);
        }
        return event_map;
    });

    public readonly event_max_count = computed(() => {
        const events = this.events();
        let length = 0;
        for (const date in events) {
            if (events[date].length > length) length = events[date].length;
        }
        return length;
    });

    private get _week_start() {
        return this._settings.get('app.week_start');
    }

    public get week_start() {
        return this._week_start;
    }

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

    public get timezone_offset() {
        return getTimezoneOffsetInMinutes(
            this.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        );
    }

    public get now() {
        return startOfMinute(Date.now()).valueOf();
    }

    public isToday(date: number) {
        return isSameDay(date, Date.now());
    }

    public readonly edit = (e) => this._state.newBooking(e);
    public readonly setDate = (d) => this._state.setDate(d);

    public get time_format() {
        return this._settings.time_format;
    }

    public hostAttendeeName(event: CalendarEvent) {
        const host_email = event.host.toLowerCase();
        return (
            event.attendees?.find(
                ({ email }) => email.toLowerCase() === host_email,
            )?.name || ''
        );
    }

    public ngOnInit() {
        this.subscription('poll', this._state.poll());
        this.types.set([
            {
                id: 'internal',
                name: i18n('COMMON.TYPE_INTERNAL'),
                color: '#D81B60',
            },
            {
                id: 'external',
                name: i18n('COMMON.TYPE_EXTERNAL'),
                color: '#1E88E5',
            },
            {
                id: 'cancelled',
                name: i18n('COMMON.TYPE_CANCELLED'),
                color: '#eeeeee',
            },
        ]);
    }

    public typeColor(type: string) {
        return this.types().find((_) => _.id === type)?.color || '#EEE';
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
                remove_fn: (e) => this.remove(e),
            },
        });
        ref.componentInstance.hide_edit.set(
            !this._settings.get('app.events.allow_edit'),
        );
        this.subscription(
            'actions',
            ref.componentInstance.action.subscribe((action) => {
                if (!action.includes('breakdown')) return;
                const ref = this._dialog.open(SetupBreakdownModalComponent, {
                    data: event,
                });
                nextValueFrom(ref.afterClosed()).then((data) => {
                    if (data) this._state.replace(data);
                });
            }),
        );
    }
}
