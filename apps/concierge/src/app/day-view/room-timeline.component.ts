import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    differenceInMinutes,
    format,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { EventsStateService } from './events-state.service';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
    AsyncHandler,
    SettingsService,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import {
    CalendarEvent,
    EventDetailsModalComponent,
    SetupBreakdownModalComponent,
    declineEvent,
} from '@placeos/events';

@Component({
    selector: 'room-bookings-timeline',
    template: `
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
                    {{ date | async | date: 'z' }}
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
                class="sticky left-0 z-10 border-r border-base-300 bg-base-100"
                [style.height]="24 * block_height + 'rem'"
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
                    *ngIf="is_today | async"
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
                            [matTooltip]="
                                'Start:  ' +
                                    (event.all_day
                                        ? 'All Day'
                                        : (event.date | date: time_format)) +
                                    '
' +
                                    'Title:  ' +
                                    event.title +
                                    '
' +
                                    'Host:  ' +
                                    event.organiser?.name || event.host
                            "
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
                                                  | date: time_format)
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
                    *ngIf="is_today | async"
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
    public hours = Array.from({ length: 24 }, (_, i) => i);
    public readonly ui_options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly date = this._state.date;
    public readonly is_today = this.date.pipe(
        map((d) => isSameDay(d, Date.now())),
    );
    public readonly events = combineLatest([
        this._state.spaces,
        this._state.filtered,
    ]).pipe(
        map(([spaces, events]) => {
            const map = {};
            for (const space of spaces) {
                map[space.id] = events.filter(
                    (event) =>
                        event.resources.find(
                            (item) =>
                                item.id === space.id ||
                                item.email === space.email,
                        ) ||
                        event.system?.id === space.id ||
                        event.system?.email === space.email,
                );
            }
            return map;
        }),
        shareReplay(1),
    );

    public get now() {
        return startOfMinute(Date.now()).valueOf();
    }

    public readonly edit = (e) => this._state.newBooking(e);
    public readonly setDate = (d) => this._state.setDate(d);

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
    ) {
        super();
    }

    public formatHour(hour: number) {
        const date = setHours(Date.now(), hour);
        return this._settings.get('app.use_24_hour_time')
            ? format(date, 'HH:00')
            : format(date, 'h a');
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
    }

    public timeToOffset(date: number) {
        const diff = differenceInMinutes(date, startOfDay(date));
        return (Math.max(0, diff / 60) / 24) * 100;
    }

    public endToOffset(duration: number) {
        return (Math.min(24, duration / 60) / 24) * 100;
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
