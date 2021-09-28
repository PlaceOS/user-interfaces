import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, removeBooking, showBooking } from '@placeos/bookings';
import {
    BaseClass,
    currentUser,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import {
    CalendarEvent,
    EventFormService,
    removeEvent,
    showEvent,
} from '@placeos/events';
import { Space } from '@placeos/spaces';
import { addMinutes, formatDuration, isAfter } from 'date-fns';
import { MapLocateModalComponent } from '../overlays/map-locate-modal.component';

@Component({
    selector: 'schedule-view',
    template: `
        <div topbar class="">
            <a
                button
                class="clear h-[2.75rem] text-white"
                mat-button
                [routerLink]="['/schedule']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
        <div
            class="flex-1 w-full flex flex-col items-center bg-gray-200 p-4 overflow-auto"
        >
            <div
                class="max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4"
                *ngIf="event; else load_state"
            >
                <h2 class="text-xl uppercase font-medium w-full my-4">
                    {{ event.title }}
                </h2>
                <div
                    class="flex items-center py-2 space-x-2 border-b border-gray-200 w-full"
                >
                    <div class="p-2 rounded-full bg-gray-300 mr-2">
                        <app-icon>event</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.date | date: 'longDate' }} at
                        {{ event.date | date: 'shortTime' }} ~
                        {{
                            event.date + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
                <div
                    class="flex items-center py-2 space-x-2 border-b border-gray-200 w-full"
                >
                    <div class="p-2 rounded-full bg-gray-300 mr-2">
                        <app-icon>schedule</app-icon>
                    </div>
                    <div class="flex-1 truncate">{{ duration }}</div>
                </div>
                <div
                    class="flex items-center py-2 space-x-2 border-b border-gray-200 w-full"
                    *ngIf="event.asset_id"
                >
                    <div class="p-2 rounded-full bg-gray-300 mr-2">
                        <app-icon>menu_book</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.description || '&lt;No Asset&gt;' }}
                    </div>
                    <button
                        mat-button
                        locate
                        *ngIf="event.extension_data.map_id"
                        class="bg-transparent border-none underline text-black"
                        (click)="
                            viewLocation({
                                id: event.asset_id,
                                map_id: event.extension_data.map_id,
                                name: event.description,
                                zones: event.zones
                            })
                        "
                    >
                        Map
                    </button>
                </div>
                <div
                    class="border-b border-gray-200 w-full"
                    *ngIf="!event.asset_id"
                >
                    <div class="flex items-center py-2 space-x-2 ">
                        <div class="p-2 rounded-full bg-gray-300 mr-2">
                            <app-icon>place</app-icon>
                        </div>
                        <div class="flex-1 truncate">
                            {{ event.resources?.length }} Space(s)
                        </div>
                        <button
                            mat-button
                            [disabled]="!event.resources?.length"
                            class="clear bg-transparent border-none underline"
                            (click)="show_spaces = !show_spaces"
                        >
                            {{ show_spaces ? 'Hide' : 'Show' }}
                        </button>
                    </div>
                    <div
                        list
                        [style.height]="
                            !show_spaces
                                ? '0'
                                : event.resources?.length * 2.5 + 'rem'
                        "
                        class="overflow-hidden"
                    >
                        <div
                            class="flex items-center h-10 pl-12"
                            *ngFor="let space of event.resources"
                        >
                            <span class="flex-1 truncate">
                                {{ space.display_name || space.name }} [{{
                                    space.level?.display_name ||
                                        space.level?.name
                                }}]
                            </span>
                            <span
                                class="h-2 w-2 rounded mr-2"
                                [class.bg-success]="
                                    space.response_status === 'accepted'
                                "
                                [class.bg-pending]="
                                    space.response_status === 'tentative'
                                "
                                [class.bg-error]="
                                    space.response_status === 'declined'
                                "
                            ></span>
                            <button
                                mat-button
                                locate
                                class="bg-transparent border-none underline text-black"
                                (click)="viewLocation(space)"
                            >
                                Map
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="border-b border-gray-200 w-full"
                    *ngIf="!event.asset_id"
                >
                    <div class="flex items-center py-2 space-x-2 ">
                        <div class="p-2 rounded-full bg-gray-300 mr-2">
                            <app-icon>group</app-icon>
                        </div>
                        <div class="flex-1 truncate">
                            {{ event.attendees?.length || 0 }}
                            Attendee(s)
                        </div>
                        <button
                            mat-button
                            [disabled]="!event.attendees?.length"
                            class="clear bg-transparent border-none underline"
                            (click)="show_people = !show_people"
                        >
                            {{ show_people ? 'Hide' : 'Show' }}
                        </button>
                    </div>
                    <div
                        list
                        [style.height]="
                            !show_people
                                ? '0'
                                : event.attendees.length * 3 + 'rem'
                        "
                        class="overflow-hidden"
                    >
                        <div
                            class="flex items-center h-12 pl-12 pr-2 space-x-2"
                            *ngFor="let user of event.attendees"
                        >
                            <a-user-avatar
                                class="text-sm"
                                [user]="user"
                            ></a-user-avatar>
                            <span class="flex-1 truncate">{{
                                user.name || user.email
                            }}</span>
                            <span
                                class="h-2 w-2 rounded mr-4"
                                [class.bg-success]="
                                    user.response_status === 'accepted'
                                "
                                [class.bg-pending]="
                                    user.response_status === 'tentative'
                                "
                                [class.bg-error]="
                                    user.response_status === 'declined'
                                "
                            ></span>
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-center space-x-2 mt-4"
                    *ngIf="!has_ended"
                >
                    <button
                        mat-button
                        edit
                        class="w-32"
                        [disabled]="loading"
                        (click)="editEvent()"
                        *ngIf="is_host && !event.asset_id"
                    >
                        Edit Event
                    </button>
                    <button
                        mat-button
                        remove
                        class="w-32 error inverse"
                        [disabled]="loading"
                        *ngIf="is_host"
                        (click)="confirmDelete()"
                    >
                        {{ is_host ? 'Delete' : 'Decline' }} Event
                    </button>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Loading event data...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }

            [list] {
                transition: height 200ms;
            }
        `,
    ],
})
export class ScheduleViewComponent extends BaseClass implements OnInit {
    public event: CalendarEvent | Booking;

    public get is_host() {
        return (
            this.event &&
            ((this.event as CalendarEvent).host ||
                (this.event as Booking).user_email) === currentUser()?.email
        );
    }

    public get duration() {
        return formatDuration({
            hours: Math.floor(this.event?.duration / 60),
            minutes: this.event?.duration % 60,
        });
    }

    public get has_ended() {
        return (
            this.event &&
            isAfter(
                new Date(),
                addMinutes(this.event.date, this.event.duration)
            )
        );
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _events: EventFormService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    try {
                        this.event = await showEvent(
                            params.get('id')
                        ).toPromise();
                    } catch {
                        this.event = await showBooking(params.get('id'))
                            .toPromise()
                            .catch(() => null);
                    }
                }
            })
        );
        this.timeout(
            'return',
            () => (!this.event ? this._router.navigate(['/schedule']) : ''),
            8 * 1000
        );
    }

    public viewLocation(space: Space) {
        this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { item: space },
        });
    }

    public editEvent() {
        if ('event_start' in this.event) {
            this._events.newForm(this.event);
            this._router.navigate(['/book', 'spaces', 'form']);
        }
    }

    public async confirmDelete() {
        const details = await openConfirmModal(
            {
                title: `${this.is_host ? 'Delete' : 'Decline'} event`,
                content: `Are you sure you wish to ${
                    this.is_host ? 'delete' : 'decline'
                } this event?`,
                icon: { content: this.is_host ? 'delete' : 'event_busy' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.loading('Removing event...');
        const fn = this.event instanceof Booking ? removeBooking : removeEvent;
        await fn(this.event.id)
            .toPromise()
            .catch((e) => {
                details.loading('');
                notifyError(`Error removing event. ${e}`);
                throw e;
            });
        notifySuccess('Successfully removed event.');
        this._router.navigate(['/schedule']);
        details.close();
    }
}
