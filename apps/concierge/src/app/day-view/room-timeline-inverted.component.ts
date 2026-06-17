import { CommonModule, DatePipe } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
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
    nextValueFrom,
    notifyError,
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
import { EventsStateService } from './events-state.service';
import { RoomBookingSearchComponent } from './room-booking-search.component';
import { isActiveRoomTimelineEvent } from './room-timeline.utilities';

@Component({
    selector: 'room-bookings-inverted-timeline',
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
        <div
            #timeline_el
            timeline
            class="z-0 grid h-1/2 w-full flex-1 overflow-auto"
        >
            <div
                timezone
                class="bg-base-100 sticky top-0 left-0 z-30 flex h-10 items-center justify-center"
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
                time-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex h-10 items-center border-b"
                [style.width]="block_range * block_width + 'rem'"
            >
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="relative flex h-full min-w-0 items-center justify-center"
                        [style.width]="block_width + 'rem'"
                    >
                        <div class="text-xs opacity-60">
                            {{ formatHour(hour) }}
                        </div>
                        @if (i !== 0) {
                            <div
                                class="bg-base-300 absolute top-0 left-0 h-2 w-px"
                            ></div>
                        }
                    </div>
                }
            </div>
            <div
                room-headers
                class="border-base-300 bg-base-100 sticky left-0 z-20 overflow-visible border-r"
                [style.height]="spaces().length * row_height + 'rem'"
            >
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="border-base-200 flex w-full items-center border-b px-2 transition-colors duration-150"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    >
                        <div class="truncate pr-2 text-xs">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="bg-base-200 text-base-content ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                        >
                            {{ (events()[space.id] || []).length }}
                        </div>
                    </div>
                }
            </div>
            <div
                timeline-grid
                class="relative z-0 overflow-hidden"
                [style.width]="block_range * block_width + 'rem'"
                [style.height]="spaces().length * row_height + 'rem'"
            >
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="i * block_width + 'rem'"
                    ></div>
                }
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="absolute left-0 w-full rounded-sm transition-colors duration-150"
                        [style.top]="i * row_height + 'rem'"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    ></div>
                    <div
                        class="border-base-200 absolute left-0 w-full border-b"
                        [style.top]="i * row_height + row_height + 'rem'"
                    ></div>
                    @for (event of events()[space.id] || []; track event.id) {
                        @if (
                            !event.is_system_event || ui_options().show_overflow
                        ) {
                            <button
                                event
                                matRipple
                                class="absolute z-10 text-left transition-all duration-150 hover:z-20 hover:scale-[1.01]"
                                [style.left]="timeToOffset(event.date) + '%'"
                                [style.top]="i * row_height + 0.15 + 'rem'"
                                [style.width]="
                                    endToOffset(event.duration) + '%'
                                "
                                [style.height]="row_height - 0.3 + 'rem'"
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                                (mouseenter)="hovered_row.set(i)"
                                (mouseleave)="clearHoveredRow(i)"
                            >
                                <div
                                    class="border-base-300 bg-base-100 hover:bg-base-200 relative h-full w-full overflow-hidden rounded-md border px-2 py-0.5 text-xs shadow-md ring-1 ring-black/5 transition-all duration-150 hover:shadow-lg"
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
                                            class="truncate font-medium"
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
                        class="bg-secondary absolute inset-y-0 w-0.5"
                        [style.left]="timeToOffset(now) + '%'"
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
                grid-template-columns: 13rem auto;
                grid-template-rows: 2.5rem auto;
            }

            .row-highlight {
                background-color: var(--info-light);
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
export class RoomBookingsInvertedTimelineComponent
    extends AsyncHandler
    implements OnInit, AfterViewInit
{
    private _state = inject(EventsStateService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _timeline_el = viewChild<ElementRef<HTMLElement>>('timeline_el');
    private _building = this._org.active_building;
    private _filtered = this._state.filtered;
    private _did_auto_scroll = false;
    public readonly hovered_row = signal(-1);

    public block_width = 7;
    public row_height = 2.75;
    public readonly ui_options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly date = this._state.date;

    constructor() {
        super();
        // Auto-scroll to the current time once the spaces for the day load.
        effect(() => {
            const spaces = this.spaces();
            const date = this.date();
            if (this._did_auto_scroll || !spaces.length) return;
            this.timeout(
                'auto_scroll',
                () => this._autoScrollToCurrentTime(date),
                100,
            );
        });
    }
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

    public ngAfterViewInit() {
        const date = this._state.getDate();
        requestAnimationFrame(() => this._autoScrollToCurrentTime(date));
    }

    public clearHoveredRow(index: number) {
        if (this.hovered_row() === index) this.hovered_row.set(-1);
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
                const data = await nextValueFrom(ref.afterClosed());
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
        resp.loading('Requesting booking cancellation...');
        this._state.remove(item);
        await declineEvent(item.id, {
            calendar: item.calendar || item.mailbox || item.host,
            system_id: space_id,
        }).catch((e) => {
            this._state.restore(item);
            notifyError(`Unable to cancel booking. ${e}`);
            resp.close();
            throw e;
        });
        notifySuccess('Successfully cancelled booking.');
        this._dialog.closeAll();
    }

    private _autoScrollToCurrentTime(date: number) {
        if (this._did_auto_scroll || !isSameDay(date, Date.now())) return;
        const timeline_el = this._timeline_el()?.nativeElement;
        if (!timeline_el) return;
        const percent = this.timeToOffset(this.now) / 100;
        const target =
            timeline_el.scrollWidth * percent - timeline_el.clientWidth / 2;
        timeline_el.scrollLeft = Math.max(0, target);
        this._did_auto_scroll = true;
    }
}
