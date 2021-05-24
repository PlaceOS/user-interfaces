import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, showBooking } from '@placeos/bookings';
import { BaseClass, currentUser } from '@placeos/common';
import { CalendarEvent, showEvent } from '@placeos/events';
import { isAfter } from 'date-fns';

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
                    <div class="flex-1 truncate">
                        {{ event.duration }} minutes
                    </div>
                </div>
                <div
                    class="flex items-center py-2 space-x-2 border-b border-gray-200 w-full"
                    *ngIf="event.asset_id"
                >
                    <div class="p-2 rounded-full bg-gray-300 mr-2">
                        <app-icon>menu_book</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.asset_id || '&lt;No Asset&gt;' }}
                    </div>
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
                            <span
                                >{{ space.display_name || space.name }} [{{
                                    space.level?.display_name ||
                                        space.level?.name
                                }}]</span
                            >

                            <button
                                mat-button
                                class="bg-transparent border-none underline"
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
                            {{ event.attendees.length || 0 }}
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
                            class="flex items-center h-12 pl-12 space-x-2"
                            *ngFor="let user of event.attendees"
                        >
                            <a-user-avatar
                                class="text-sm"
                                [user]="user"
                            ></a-user-avatar>
                            <span>{{ user.name || user.email }}</span>
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-center space-x-2 mt-4"
                    *ngIf="!has_ended"
                >
                    <button
                        mat-button
                        class="w-32"
                        [disabled]="loading"
                        (click)="editEvent()"
                        *ngIf="is_host"
                    >
                        Edit Event
                    </button>
                    <button
                        mat-button
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
export class ScheduleViewComponent extends BaseClass implements OnInit {
    public event: CalendarEvent | Booking;

    public get is_host() {
        return (
            this.event &&
            ((this.event as CalendarEvent).host ||
                (this.event as Booking).user_email) === currentUser().email
        );
    }

    public get has_ended() {
        return (
            this.event &&
            isAfter(new Date(), this.event.date + this.event.duration)
        );
    }

    constructor(private _route: ActivatedRoute, private _router: Router) {
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
}
