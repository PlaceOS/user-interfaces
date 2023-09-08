import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    addDays,
    differenceInMinutes,
    format,
    isSameDay,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { EventsStateService } from './events-state.service';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
    AsyncHandler,
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
            class="relative flex items-center justify-center p-2 space-x-2 border-b border-gray-200"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
            ></date-options>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-4 text-blue-500 text-sm"
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
                    {{ date | date: 'z' }}
                </div>
                <div
                    spaces
                    class="relative flex-1 h-full overflow-hidden border-r border-gray-200"
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
                    class="relative w-16 h-full overflow-y-hidden overflow-x-visible border-r border-gray-200"
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
                                class="absolute top-0 right-0 w-2 h-px bg-gray-200"
                            ></div>
                            <div
                                class="absolute top-0 right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ value % 12 ? value % 12 : '12'
                                }}{{ value >= 12 ? 'PM' : 'AM' }}
                            </div>
                        </div>
                        <div
                            class="absolute bg-primary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full z-30"
                            [style.top]="timeToOffset(now) + 'px'"
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
                            class="w-56 h-full border-r border-gray-200"
                        ></div>
                    </div>
                    <div
                        class="absolute left-0 w-full pointer-events-none"
                        [style.top]="-(offset_y % 48) + 'px'"
                    >
                        <div
                            *ngFor="let _ of h_slots"
                            class="h-12 w-full border-t border-gray-200"
                        ></div>
                        <div
                            *ngIf="is_today"
                            class="absolute inset-x-0 -translate-y-px h-0.5 bg-primary z-30"
                            [style.top]="
                                timeToOffset(now) -
                                offset_y -
                                (48 - (offset_y % 48)) +
                                48 +
                                'px'
                            "
                        >
                            <div
                                class="absolute bg-primary top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
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
                                <div
                                    event
                                    *ngFor="
                                        let event of (events | async)[
                                            space.id
                                        ] || []
                                    "
                                    class="absolute w-[13.625rem] hover:opacity-90"
                                    [style.left]="i * 14 + 0.125 + 'rem'"
                                    [style.top]="
                                        timeToOffset(event.date) + 'px'
                                    "
                                    [style.height]="
                                        endToOffset(event.duration) + 'px'
                                    "
                                    (click)="viewEvent(event, space.id)"
                                >
                                    <div
                                        class="absolute bg-pink-600/50 border border-pink-600 rounded-lg w-full"
                                        [style.height]="
                                            endToOffset(
                                                event.duration +
                                                    (event.ext('setup') || 0) +
                                                    (event.ext('breakdown') ||
                                                        0)
                                            ) + 'px'
                                        "
                                        [style.top]="
                                            -(
                                                ((event.ext('setup') || 0) /
                                                    60) *
                                                48
                                            ) + 'px'
                                        "
                                        *ngIf="
                                            (ui_options | async)
                                                ?.show_overflow &&
                                            (event.ext('setup') ||
                                                event.ext('breakdown')) &&
                                            endToOffset(
                                                event.duration +
                                                    (event.ext('setup') || 0) +
                                                    (event.ext('breakdown') ||
                                                        0)
                                            )
                                        "
                                    ></div>
                                    <div
                                        class="relative w-full h-full shadow bg-gray-100 hover:bg-gray-200 rounded-lg overflow-hidden px-3 py-1 text-xs"
                                        [class.opacity-60]="
                                            event.state === 'done'
                                        "
                                    >
                                        <div
                                            class="absolute left-0 inset-y-0 w-1 "
                                            [class.bg-pink-600]="
                                                event.status !== 'cancelled'
                                            "
                                            [class.bg-red-600]="
                                                event.status === 'cancelled'
                                            "
                                        ></div>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{ event.date | date: 'shortTime' }}
                                            &ndash;
                                            {{
                                                event.organiser?.name ||
                                                    event.hjost
                                            }}
                                        </p>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{ event.title }}
                                        </p>
                                    </div>
                                </div>
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
                map[space.id] = events.filter((event) =>
                    event.resources.find(
                        (item) =>
                            item.id === space.id || item.email === space.email
                    )
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

    constructor(
        private _state: EventsStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
        const date = Date.now();
        this.onResize();
    }

    public timeToOffset(date: number) {
        const diff = differenceInMinutes(date, startOfDay(date));
        return (diff / 60) * 48;
    }

    public endToOffset(duration: number) {
        return (duration / 60) * 48;
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
        const ref = this._dialog.open(EventDetailsModalComponent, {
            data: event,
        });
        ref.componentInstance.hide_edit = true;
        this.subscription(
            'remove',
            ref.componentInstance.remove.subscribe(() =>
                this.remove(event, space_id)
            )
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
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name = item.space?.display_name;
        const content = `Delete the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Delete booking`, content, icon: { content: 'delete' } },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Requesting booking deletion...');
        await declineEvent(item.id, {
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
