import { Component } from '@angular/core';
import {
    addDays,
    isSameDay,
    isSameWeek,
    startOfMinute,
    startOfWeek,
    format,
} from 'date-fns';
import { EventsStateService } from './events-state.service';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    getTimezoneOffsetString,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import { map, shareReplay } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import {
    CalendarEvent,
    declineEvent,
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
} from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'room-week-bookings-timeline',
    template: `
        <div
            class="mx-2 mt-2 p-2 w-[calc(100%-1rem)] bg-info text-info-content rounded-lg text-center text-xs"
            *ngIf="timezone && tz"
        >
            Timezone of the building is displayed and is different from your
            local timezone.
        </div>
        <div
            class="relative flex items-center justify-center p-2 space-x-2 border-b border-base-200 z-20"
        >
            <date-options
                [date]="date | async"
                [step]="7"
                (dateChange)="setDate($event)"
                [is_new]="true"
            ></date-options>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm"
                *ngIf="this_week | async"
            >
                This Week
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
                day-headers
                class="sticky top-0 z-20 border-b border-base-300 flex items-center bg-base-100 min-w-[calc(100%-3rem)]"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                <div
                    *ngFor="let date of days | async"
                    class="relative flex-1 h-full min-w-48 flex flex-col items-center justify-center leading-tight"
                >
                    <div class="truncate">
                        {{ date | date: 'EEE, MMM d' : tz }}
                    </div>
                    <div
                        class="text-info text-xs absolute bottom-1 left-1/2 -translate-x-1/2"
                        *ngIf="isToday(date)"
                    >
                        Today
                    </div>
                    <div
                        class="absolute h-2 w-px -left-px bottom-0 bg-base-300"
                    ></div>
                </div>
            </div>
            <div
                empty-block
                class="sticky left-0 z-10 border-r border-base-300 bg-base-100 min-h-full"
                [style.height]="
                    (event_max_count | async)
                        ? (event_max_count | async) * 5.375 + 'rem'
                        : ''
                "
            ></div>
            <div
                date-blocks
                class="relative overflow-hidden min-w-[calc(100%-3rem)] flex"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                <div
                    class="flex-1 min-w-48 overflow-hidden p-2 border-r border-base-200"
                    *ngFor="let date of days | async; let i = index"
                >
                    <button
                        matRipple
                        *ngFor="let event of (events | async)[date] || []"
                        class="flex p-2 w-full space-x-2 hover:bg-base-200 rounded text-left"
                        (click)="viewEvent(event)"
                    >
                        <div
                            class="h-2 w-2 rounded-full my-1.5"
                            [style.background-color]="typeColor(event.type)"
                        ></div>
                        <div class="flex-1 w-1/2">
                            <div
                                class="text-sm truncate"
                                [class.line-through]="event.state === 'done'"
                            >
                                {{ event.title }}
                            </div>
                            <div class="text-xs opacity-60 flex-1">
                                {{ event.date | date: time_format : tz }}
                                &ndash;
                                {{ event.date_end | date: time_format : tz }}
                                <span *ngIf="tz">{{
                                    event.date_end | date: 'z' : tz
                                }}</span>
                            </div>
                            <div class="text-xs truncate opacity-30">
                                {{ event.system?.display_name }}
                            </div>
                            <div class="text-xs truncate opacity-30">
                                {{ (event.host | user)?.name || event.host }}
                            </div>
                        </div>
                    </button>
                </div>
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
export class RoomWeekBookingsTimelineComponent extends AsyncHandler {
    public hours = Array.from({ length: 24 }, (_, i) => i);
    public readonly ui_options = this._state.options;
    public readonly date = this._state.date;

    public readonly types: any[] = [
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ];

    public readonly days = this.date.pipe(
        map((d) =>
            new Array(7)
                .fill(0)
                .map((_, idx) => addDays(startOfWeek(d), idx).valueOf()),
        ),
    );
    public readonly this_week = this.date.pipe(
        map((d) => isSameWeek(d, Date.now())),
    );

    private _data_pipe = new DatePipe('en');

    public readonly events = combineLatest([
        this.days,
        this._state.filtered,
        this._state.zones,
    ]).pipe(
        map(([day_list, events, zones]) => {
            if (zones.length) {
                events = events.filter((_) =>
                    _.system?.zones.find((_) => zones.includes(_)),
                );
            }

            const map: Record<string, CalendarEvent[]> = {};
            for (const date of day_list) {
                const date_value = this._data_pipe.transform(
                    date,
                    'yyyy-MM-dd',
                    this.tz,
                );
                map[date] = events.filter((event) => {
                    const event_date_value = this._data_pipe.transform(
                        event.date,
                        'yyyy-MM-dd',
                        this.tz,
                    );
                    return (
                        date_value === event_date_value &&
                        !event.is_system_event
                    );
                });
            }
            return map;
        }),
        shareReplay(1),
    );

    public readonly event_max_count = this.events.pipe(
        map((e) => {
            let length = 0;
            for (const date in e) {
                if (e[date].length > length) length = e[date].length;
            }
            return length;
        }),
    );

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

    constructor(
        private _state: EventsStateService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription('poll', this._state.poll());
    }

    public typeColor(type: string) {
        return this.types.find((_) => _.id === type)?.color || '#EEE';
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
