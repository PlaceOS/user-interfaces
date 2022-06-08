import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BaseClass,
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
import { Space, SpacesService } from '@placeos/spaces';
import { formatDuration } from 'date-fns';
import { MapLocateModalComponent } from '@placeos/components';

@Component({
    selector: 'schedule-view-event',
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
                        {{ event.date | date: 'longDate' }} <span *ngIf="!event.all_day">at
                        {{ event.date | date: 'shortTime' }} ~
                        {{
                            event.date + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}</span>
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
                <div class="border-b border-gray-200 w-full">
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
                <div class="border-b border-gray-200 w-full">
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
                <div
                    class="flex items-center py-2 space-x-2 border-b border-gray-200 w-full"
                    *ngIf="event.body"
                >
                    <div class="p-2 rounded-full bg-gray-300 mr-2">
                        <app-icon>event_note</app-icon>
                    </div>
                    <div class="flex-1 w-1/2 overflow-auto" notes [innerHTML]="event.body | sanitize">

                    </div>
                </div>
                </div>
                <div
                    class="flex items-center justify-center space-x-2 mt-4"
                    *ngIf="event.state !== 'done'"
                >
                    <button
                        mat-button
                        edit
                        class="w-32"
                        [disabled]="loading"
                        (click)="editEvent()"
                        *ngIf="is_host"
                    >
                        Edit Event
                    </button>
                    <button
                        mat-button
                        remove
                        class="w-32 error inverse"
                        [disabled]="loading"
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
export class ScheduleViewEventComponent extends BaseClass {
    @Input() public event: CalendarEvent;

    public get is_host() {
        return this.event?.host;
    }

    public get duration() {
        return this.event.all_day ? 'All Day' : formatDuration({
            hours: Math.floor(this.event?.duration / 60),
            minutes: this.event?.duration % 60,
        });
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _events: EventFormService,
        private _spaces: SpacesService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    this.event = await showEvent(params.get('id')).toPromise();
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
        space = this._spaces.find(space.id || space.email) || space;
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
        await removeEvent(this.event.id)
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
