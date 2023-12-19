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
            class="relative flex items-center justify-center p-2 space-x-2 border-b border-base-200"
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
        </div>
        <div
            class="flex flex-col w-full flex-1 overflow-hidden"
            (window:resize)="onResize()"
        >
            <div header class="flex items-center w-full h-16">
                <div
                    times
                    class="w-16 h-full flex flex-col items-center justify-end text-xs pb-2 opacity-60"
                >
                    {{ date | async | date: 'z' }}
                </div>
                <div
                    spaces
                    class="relative flex-1 h-full overflow-hidden border-r border-base-200"
                >
                    <div
                        class="flex absolute inset-y-0"
                        [style.left]="-offset_x + 'px'"
                    >
                        <div
                            class="flex flex-col items-center justify-center h-full w-56"
                            *ngFor="let space of spaces | async"
                        >
                            {{ space.display_name || space.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div content class="flex w-full flex-1 h-px">
                <div
                    times
                    class="relative w-16 h-full overflow-y-hidden overflow-x-visible border-r border-base-200"
                >
                    <div
                        class="absolute inset-x-0"
                        [style.top]="-offset_y + 'px'"
                    >
                        <div
                            class="relative block h-12"
                            *ngFor="let value of hours"
                        >
                            <div
                                class="absolute top-0 right-0 w-2 h-px bg-base-200"
                            ></div>
                            <div
                                class="absolute top-0 right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ formatHour(value) }}
                            </div>
                        </div>
                        <div
                            class="absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full z-30"
                            [style.top]="timeToOffset(now) + 'px'"
                            *ngIf="is_today | async"
                        ></div>
                    </div>
                </div>
                <div spaces class="relative flex-1 h-full overflow-hidden w-px">
                    <div
                        class="absolute top-0 flex h-full pointer-events-none"
                        [style.left]="-(offset_x % 224) + 'px'"
                    >
                        <div
                            *ngFor="let _ of w_slots"
                            class="w-56 h-full border-r border-base-200"
                        ></div>
                    </div>
                    <div
                        class="absolute left-0 w-full pointer-events-none"
                        [style.top]="-(offset_y % 48) + 'px'"
                    >
                        <div
                            *ngFor="let _ of h_slots"
                            class="h-12 w-full border-t border-base-200"
                        ></div>
                        <div
                            *ngIf="is_today | async"
                            class="absolute inset-x-0 -translate-y-px h-0.5 bg-secondary z-30"
                            [style.top]="
                                timeToOffset(now) -
                                offset_y -
                                (48 - (offset_y % 48)) +
                                48 +
                                'px'
                            "
                        >
                            <div
                                class="absolute bg-secondary top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
                            ></div>
                        </div>
                    </div>
                    <div
                        #scroll_container
                        class="relative w-full h-full overflow-auto z-10"
                        (scroll)="onScroll()"
                    >
                        <div
                            class="overflow-hidden relative"
                            [style.height]="24 * 3 + 'rem'"
                            [style.width]="
                                (spaces | async)?.length * 14 + 'rem'
                            "
                        >
                            <ng-container
                                *ngFor="
                                    let space of spaces | async;
                                    let i = index
                                "
                            >
                                <ng-container
                                    *ngFor="
                                        let event of (events | async)[
                                            space.id
                                        ] || []
                                    "
                                >
                                    <div
                                        event
                                        *ngIf="
                                            !event.is_system_event ||
                                            (ui_options | async)?.show_overflow
                                        "
                                        class="absolute w-[13.625rem] hover:opacity-90"
                                        [style.left]="i * 14 + 0.125 + 'rem'"
                                        [style.top]="
                                            timeToOffset(event.date) + 'px'
                                        "
                                        [style.height]="
                                            endToOffset(event.duration) + 'px'
                                        "
                                        [class.pointer-events-none]="
                                            event.is_system_event
                                        "
                                        (click)="viewEvent(event, space.id)"
                                    >
                                        <div
                                            class="relative w-full h-full shadow bg-base-100 border border-base-200 hover:bg-base-200 rounded-lg overflow-hidden px-3 py-1 text-xs"
                                            [class.opacity-60]="
                                                event.state === 'done'
                                            "
                                            [class.!rounded-none]="
                                                event.is_system_event
                                            "
                                            [class.!border-secondary]="
                                                event.is_system_event
                                            "
                                        >
                                            <ng-container
                                                *ngIf="event.is_system_event"
                                            >
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-50"
                                                ></div>
                                            </ng-container>
                                            <ng-container
                                                *ngIf="!event.is_system_event"
                                            >
                                                <div
                                                    class="absolute left-0 inset-y-0 w-1 "
                                                    [class.bg-secondary]="
                                                        event.status !==
                                                        'cancelled'
                                                    "
                                                    [class.bg-error]="
                                                        event.status ===
                                                        'cancelled'
                                                    "
                                                ></div>
                                                <p
                                                    class="truncate"
                                                    [class.opacity-60]="
                                                        event.status ===
                                                        'cancelled'
                                                    "
                                                >
                                                    {{
                                                        event.all_day
                                                            ? 'All Day'
                                                            : (event.date
                                                              | date
                                                                  : time_format)
                                                    }}
                                                    &ndash;
                                                    {{
                                                        event.organiser?.name ||
                                                            event.hjost
                                                    }}
                                                </p>
                                                <p
                                                    class="truncate"
                                                    [class.opacity-60]="
                                                        event.status ===
                                                        'cancelled'
                                                    "
                                                >
                                                    {{ event.title }}
                                                </p>
                                            </ng-container>
                                        </div>
                                    </div>
                                </ng-container>
                            </ng-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
})
export class RoomBookingsTimelineComponent extends AsyncHandler {
    public offset_x = 0;
    public offset_y = 0;
    public w_slots = [];
    public h_slots = [];
    public hours = Array.from({ length: 24 }, (_, i) => i);
    public readonly ui_options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly date = this._state.date;
    public readonly is_today = this.date.pipe(
        map((d) => isSameDay(d, Date.now()))
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
                                item.email === space.email
                        ) ||
                        event.system?.id === space.id ||
                        event.system?.email === space.email
                );
            }
            return map;
        }),
        shareReplay(1)
    );

    public get now() {
        return startOfMinute(Date.now()).valueOf();
    }

    public readonly edit = (e) => this._state.newBooking(e);
    public readonly setDate = (d) => this._state.setDate(d);

    @ViewChild('scroll_container', { static: true })
    private _scroll_container: ElementRef<HTMLDivElement>;

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: EventsStateService,
        private _dialog: MatDialog,
        private _settings: SettingsService
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
        this.interval('scroll', () => this.onScroll(), 1000);
        const date = Date.now();
        this.onResize();
    }

    public timeToOffset(date: number) {
        const diff = differenceInMinutes(date, startOfDay(date));
        return Math.max(0, diff / 60) * 48;
    }

    public endToOffset(duration: number) {
        return Math.min(24, duration / 60) * 48;
    }

    public onResize() {
        const w_slots = Math.floor(window.innerWidth / 224) + 1;
        const h_slots = Math.floor(window.innerHeight / 48);
        this.w_slots = Array.from({ length: w_slots }, (_, i) => i);
        this.h_slots = Array.from({ length: h_slots }, (_, i) => i);
    }

    public onScroll() {
        this.offset_x = this._scroll_container.nativeElement.scrollLeft;
        this.offset_y = this._scroll_container.nativeElement.scrollTop;
    }

    public viewEvent(event: CalendarEvent, space_id: string) {
        if (event.is_system_event) return;
        const ref = this._dialog.open(EventDetailsModalComponent, {
            data: event,
        });
        ref.componentInstance.hide_edit = !this._settings.get(
            'app.events.allow_edit'
        );
        this.subscription(
            'remove',
            ref.componentInstance.remove.subscribe(() =>
                this.remove(event, space_id)
            )
        );
        this.subscription(
            'edit',
            ref.componentInstance.edit.subscribe(() => this.edit(event))
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
            })
        );
    }

    public async remove(item: CalendarEvent, space_id: string) {
        const time = `${format(item.date, 'dd MMM yyyy ' + this.time_format)}`;
        const resource_name = item.space?.display_name;
        const content = `Delete the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Delete booking`, content, icon: { content: 'delete' } },
            this._dialog
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
