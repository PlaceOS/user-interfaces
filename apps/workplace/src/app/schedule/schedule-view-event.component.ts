import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import {
    CalendarEvent,
    EventFormService,
    newCalendarEventFromBooking,
    removeEvent,
    showEvent,
} from '@placeos/events';
import { Space, SpacesService } from '@placeos/spaces';
import { formatDuration } from 'date-fns';
import { MapLocateModalComponent } from '@placeos/components';
import { removeBooking, showBooking } from '@placeos/bookings';
import { map } from 'rxjs/operators';
import { CateringItem } from '@placeos/catering';

@Component({
    selector: 'schedule-view-event',
    template: `
        <div topbar class="">
            <a
                class="clear h-[2.75rem] text-white"
                btn
                matRipple
                [routerLink]="['/schedule']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
        <div
            class="flex-1 w-full flex flex-col items-center bg-base-200 p-4 overflow-auto"
        >
            <div
                class="max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200"
                *ngIf="event; else load_state"
            >
                <h2 class="text-xl uppercase font-medium w-full my-4">
                    {{ event.title }}
                </h2>
                <div
                    class="flex items-center py-2 space-x-2 w-full !border-none"
                >
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>event</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.date | date: 'longDate' }}
                        <span *ngIf="!event.all_day"
                            >at {{ event.date | date: 'shortTime' }} ~
                            {{
                                event.date + event.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}</span
                        >
                    </div>
                </div>
                <div class="flex items-center py-2 space-x-2 w-full">
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>schedule</app-icon>
                    </div>
                    <div class="flex-1 truncate">{{ duration }}</div>
                </div>
                <div class="w-full">
                    <div class="flex items-center py-2 space-x-2 ">
                        <div class="p-2 rounded-full bg-base-200 mr-2">
                            <app-icon>place</app-icon>
                        </div>
                        <div class="flex-1 truncate">
                            {{ event.resources?.length }} Space(s)
                        </div>
                        <button
                            matRipple
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
                                [class.bg-warning]="
                                    space.response_status === 'tentative'
                                "
                                [class.bg-error]="
                                    space.response_status === 'declined'
                                "
                            ></span>
                            <button
                                matRipple
                                locate
                                class="bg-transparent border-none underline text-black"
                                (click)="viewLocation(space)"
                                *ngIf="can_view_location"
                            >
                                Map
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex items-center py-2 space-x-2 ">
                        <div class="p-2 rounded-full bg-base-200 mr-2">
                            <app-icon>group</app-icon>
                        </div>
                        <div class="flex-1 truncate">
                            {{ event.attendees?.length || 0 }}
                            Attendee(s)
                        </div>
                        <button
                            matRipple
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
                                [class.bg-warning]="
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
                    class="w-full"
                    *ngIf="event.extension_data.catering?.length"
                >
                    <div class="border-b border-base-200 w-full">
                        <div class="flex items-center py-2 space-x-2 ">
                            <div class="p-2 rounded-full bg-base-200 mr-2">
                                <app-icon>group</app-icon>
                            </div>
                            <div class="flex-1 truncate">
                                {{
                                    event.extension_data.catering[0]
                                        ?.item_count || 0
                                }}
                                Catering Item(s)
                            </div>
                            <button
                                matRipple
                                class="clear bg-transparent border-none underline"
                                (click)="show_catering = !show_catering"
                            >
                                {{ show_people ? 'Hide' : 'Show' }}
                            </button>
                        </div>
                        <div
                            list
                            [style.height]="
                                !show_catering
                                    ? '0'
                                    : event.extension_data.catering[0]?.items
                                          .length *
                                          3 +
                                      'rem'
                            "
                            class="overflow-hidden"
                        >
                            <div
                                class="flex items-center h-12 pl-12 space-x-2"
                                *ngFor="
                                    let item of event.extension_data.catering[0]
                                        ?.items
                                "
                            >
                                <div class="flex-1 w-1/2">
                                    <div class="flex-1 w-1/2">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="text-xs underline"
                                        *ngIf="item.options.length"
                                        [matTooltip]="optionsFor(item)"
                                    >
                                        {{ item.options.length }} option{{
                                            item.options.length === 1 ? '' : 's'
                                        }}
                                        selected
                                    </div>
                                </div>
                                <div
                                    class="bg-primary text-xs rounded px-4 py-2 mx-2 text-white font-medium"
                                >
                                    {{ item.total_cost / 100 | currency }}
                                </div>
                                <div
                                    class="m-2 bg-neutral-500 text-white h-8 w-8 rounded-full flex items-center justify-center text-sm"
                                >
                                    {{ item.quantity }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div
                        class="flex items-center py-2 space-x-2 w-full"
                        *ngIf="event.body"
                    >
                        <div class="p-2 rounded-full bg-base-200 mr-2">
                            <app-icon>event_note</app-icon>
                        </div>
                        <div
                            class="flex-1 w-1/2 overflow-auto"
                            notes
                            [innerHTML]="event.body | sanitize"
                        ></div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-center space-x-2 mt-4 !border-none"
                    *ngIf="event.state !== 'done'"
                >
                    <button
                        matRipple
                        edit
                        class="w-32"
                        [disabled]="loading"
                        (click)="editEvent()"
                        *ngIf="is_host"
                    >
                        Edit Event
                    </button>
                    <button
                        matRipple
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
export class ScheduleViewEventComponent extends AsyncHandler {
    @Input() public event: CalendarEvent;

    public get is_host() {
        return this.event?.host;
    }

    public get can_view_location() {
        return !this._settings.get('app.no_maps');
    }

    public get duration() {
        return this.event.all_day
            ? 'All Day'
            : formatDuration({
                  hours: Math.floor(this.event?.duration / 60),
                  minutes: this.event?.duration % 60,
              });
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _events: EventFormService,
        private _spaces: SpacesService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    const parts = params.get('id').split('|');
                    this.event = this._settings.get('app.events.use_bookings')
                        ? await showBooking(parts[0])
                              .pipe(map((_) => newCalendarEventFromBooking(_)))
                              .toPromise()
                        : await showEvent(parts[0], {
                              system_id: parts[1],
                          }).toPromise();
                }
            })
        );
        this.timeout(
            'return',
            () => (!this.event ? this._router.navigate(['/schedule']) : ''),
            8 * 1000
        );
    }

    public optionsFor(item: CateringItem) {
        return item.options.map((i) => i.name).join('\n');
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
        await (this._settings.get('app.events.use_bookings')
            ? removeBooking
            : removeEvent)(this.event.id)
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
