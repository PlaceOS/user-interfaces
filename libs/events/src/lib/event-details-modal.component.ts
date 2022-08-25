import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addMinutes, format, formatDuration } from 'date-fns';

import { CalendarEvent } from './event.class';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

@Component({
    selector: 'event-details-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-auto sm:w-[24rem] sm:max-h-[80vh] bg-white dark:bg-neutral-600 sm:rounded overflow-hidden"
        >
            <div
                class="w-full h-full overflow-auto space-y-2 pb-4 max-h-screen sm:max-h-[80vh]"
            >
                <image-carousel
                    [images]="event?.system?.images"
                    class="w-full h-64 bg-black/20 dark:bg-white/20"
                ></image-carousel>
                <h3 title class="px-3 mt-2 text-xl font-medium">
                    {{ event.title }}
                </h3>
                <div class="flex m-2">
                    <div
                        class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium"
                        [class.bg-green-600]="
                            event.state !== 'done' &&
                            event?.status === 'approved'
                        "
                        [class.bg-yellow-500]="
                            event.state !== 'done' &&
                            event?.status === 'tentative'
                        "
                        [class.bg-red-600]="
                            event.state !== 'done' &&
                            event?.status === 'declined'
                        "
                        [class.bg-gray-300]="event.state === 'done'"
                    >
                        <div
                            class="rounded-full h-5 w-5 flex items-center justify-center text-white"
                            [class.bg-success]="
                                event.state !== 'done' &&
                                event?.status === 'approved'
                            "
                            [class.text-pending]="
                                event.state !== 'done' &&
                                event?.status === 'tentative'
                            "
                            [class.bg-error]="
                                event.state !== 'done' &&
                                event?.status === 'declined'
                            "
                            [class.text-neutral-600]="event.state === 'done'"
                        >
                            <app-icon>
                                {{
                                    event.state === 'done'
                                        ? 'not_interested'
                                        : event?.status === 'approved'
                                        ? 'done'
                                        : event?.status === 'tentative'
                                        ? 'warning'
                                        : 'close'
                                }}
                            </app-icon>
                        </div>
                        <div class="pr-1">{{ period }}</div>
                    </div>
                </div>
                <div
                    actions
                    class="flex items-center space-x-2 px-2"
                    *ngIf="event.state !== 'done'"
                >
                    <button mat-button class="flex-1 h-10">
                        <div class="flex items-center space-x-2 justify-center">
                            <app-icon>arrow_back</app-icon>
                            <div class="mr-2">Checked in</div>
                        </div>
                    </button>
                    <button
                        mat-icon-button
                        [matMenuTriggerFor]="menu"
                        class="bg-primary rounded text-white h-10 w-10"
                    >
                        <app-icon>more_horiz</app-icon>
                    </button>
                </div>
                <h3 class="px-3 mt-2 text-lg font-medium">Details</h3>
                <div class="flex items-center px-2 space-x-2">
                    <app-icon>event</app-icon>
                    <div>{{ event.date | date: 'EEEE, dd LLLL y' }}</div>
                </div>
                <div class="flex items-center px-2 space-x-2">
                    <app-icon>schedule</app-icon>
                    <div>{{ period }}</div>
                </div>
                <div class="flex items-center px-2 space-x-2">
                    <app-icon>map</app-icon>
                    <div>
                        {{ level?.display_name || level?.name }},
                        {{ event?.system?.display_name || event?.system?.name }}
                    </div>
                </div>
                <div class="flex items-center px-2 space-x-2">
                    <app-icon>place</app-icon>
                    <div>
                        {{ building?.display_name || building?.name }},
                        {{ building?.address }}
                    </div>
                </div>
                <div
                    class="mx-3 mt-2 pt-2 border-t border-gray-300 dark:border-neutral-500 flex items-center justify-between"
                >
                    <h3 class="text-lg font-medium">Attendees</h3>
                    <button
                        mat-button
                        show-attendees
                        class="clear text-xs underline"
                        (click)="show_attendees = true"
                    >
                        See All
                    </button>
                </div>
                <div class="flex items-center p-1">
                    <div
                        class="flex flex-col flex-1 items-center justify-center space-y-1"
                    >
                        <div class="text-lg">{{ 0 }}</div>
                        <div class="text-sm uppercase">Yes</div>
                    </div>
                    <div
                        class="flex flex-col flex-1 items-center justify-center space-y-1"
                    >
                        <div class="text-lg">{{ 0 }}</div>
                        <div class="text-sm uppercase">No</div>
                    </div>
                    <div
                        class="flex flex-col flex-1 items-center justify-center space-y-1"
                    >
                        <div class="text-lg">{{ 0 }}</div>
                        <div class="text-sm uppercase">Pending</div>
                    </div>
                </div>
                <h3
                    class="mx-3 mt-2 pt-2 text-lg font-medium border-t border-gray-300 dark:border-neutral-500"
                >
                    Host
                </h3>
                <div class="px-2 flex items-center space-x-2" host>
                    <a-user-avatar [user]="event.organiser"></a-user-avatar>
                    <div class="text-sm">
                        <div>{{ event.organiser?.name }}</div>
                        <div class="opacity-60">{{ event.host }}</div>
                    </div>
                </div>
                <div
                    map
                    class="mx-4 h-64 sm:h-48 relative border border-gray-200 overflow-hidden rounded"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="level?.map_id"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </div>
                <h3
                    class="mx-3 mt-2 pt-2 text-lg font-medium border-t border-gray-300 dark:border-neutral-500"
                    *ngIf="event.body"
                >
                    Notes
                </h3>
                <div
                    notes
                    class="mx-4"
                    *ngIf="event.body"
                    [innerHTML]="event.body | sanitize"
                ></div>
                <button
                    mat-icon-button
                    mat-dialog-close
                    class="absolute top-2 left-2 bg-black/30 text-white"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div class="absolute inset-0 z-50" *ngIf="show_attendees">
                <attendee-list
                    [list]="event.attendees"
                    [host]="event.host"
                    (click)="show_attendees = false"
                ></attendee-list>
            </div>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            <button
                mat-menu-item
                mat-dialog-close
                class="flex items-center space-x-2 text-base"
                (click)="edit.emit()"
            >
                <app-icon>edit</app-icon>
                <div>Edit event</div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2 text-base"
                (click)="remove.emit()"
            >
                <app-icon>delete</app-icon>
                <div>Delete event</div>
            </button>
        </mat-menu>
    `,
    styles: [``],
})
export class EventDetailsModalComponent {
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();
    public show_attendees: boolean = false;
    public readonly event = this._event;
    public readonly features = [
        {
            location: this.event?.system?.map_id,
            content: MapPinComponent,
        },
    ];

    public get level() {
        return this._org.levelWithID((this.event?.system?.zones || []) as any);
    }

    public get building() {
        return this._org.buildings.find((bld) =>
            (this.event?.system?.zones || []).includes(bld.id)
        );
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _org: OrganisationService
    ) {}

    public get period() {
        const start = this.event?.date || Date.now();
        const duration = this.event?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, 'h:mm a')} - ${format(end, 'h:mm a')} (${dur})`;
    }
}
