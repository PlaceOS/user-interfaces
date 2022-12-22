import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { addMinutes, format, formatDuration, isSameDay } from 'date-fns';
import { BaseClass } from '@placeos/common';

import { CalendarEvent } from './event.class';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

@Component({
    selector: 'event-card',
    template: `
        <h4 class="mb-2 flex items-center" *ngIf="event" date>
            <span *ngIf="show_day" day>{{ day }}, </span>
            {{ event?.date | date: 'h:mm a' }}
            <span class="text-xs px-2">({{ event?.date | date: 'z' }})</span>
        </h4>
        <a
            matRippleColor
            details
            class="w-full"
            [routerLink]="['./']"
            [queryParams]="{ event: event?.id }"
            (click)="viewDetails()"
            *ngIf="event"
        >
            <div
                class="w-full bg-white dark:bg-[#1F2021] rounded-xl shadow py-4 relative"
            >
                <h4 class="px-4 text-lg">{{ event?.title }}</h4>
                <div class="flex mx-4 my-2">
                    <div
                        class="flex items-center bg-opacity-30 rounded-2xl p-1 text-base space-x-2 pr-2 font-medium"
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
                    class="flex flex-wrap flex-col sm:flex-row sm:divide-x divide-neutral-500 py-2 space-y-2 sm:space-y-0"
                >
                    <div class="flex items-center px-4">
                        <app-icon>meeting_room</app-icon>
                        <div class="mx-2 truncate">
                            {{ location }}
                        </div>
                    </div>
                    <div class="flex items-center px-4">
                        <app-icon>person_outline</app-icon>
                        <div class="mx-2">
                            {{
                                event?.organiser?.name ||
                                    event?.organiser?.email
                            }}
                        </div>
                    </div>
                    <div
                        class="flex items-center px-4"
                        *ngIf="event?.ext('catering')?.length"
                    >
                        <app-icon>restaurant</app-icon>
                        <div class="mx-2">Catered</div>
                    </div>
                    <div class="flex items-center px-4">
                        <app-icon>people</app-icon>
                        <div class="mx-2">
                            {{ event?.attendees?.length }}
                            {{
                                event?.attendees?.length === 1
                                    ? 'Person'
                                    : 'People'
                            }}
                        </div>
                    </div>
                </div>
                <app-icon
                    class="absolute top-1/2 right-1 text-4xl -translate-y-1/2"
                >
                    chevron_right
                </app-icon>
                <div
                    class="absolute bottom-2 right-2 sm:bottom-auto sm:top-2 text-sm sm:text-base flex items-center pr-4"
                    *ngIf="event?.attendees?.length"
                >
                    <div
                        class="h-10 w-6"
                        *ngFor="
                            let user of event?.attendees
                                | slice
                                    : 0
                                    : (event?.attendees?.length === 6 ? 6 : 5)
                        "
                    >
                        <a-user-avatar [user]="user"></a-user-avatar>
                    </div>
                    <div class="h-10 w-6" *ngIf="event?.attendees?.length > 6">
                        <div
                            class="bg-secondary rounded-full h-10 w-10 border-2 border-white flex items-center justify-center text-white"
                        >
                            +{{ event?.attendees?.length - 5 }}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
})
export class EventCardComponent extends BaseClass {
    @Input() public event: CalendarEvent;
    @Input() public show_day: boolean = false;
    @Output() public edit = new EventEmitter();
    @Output() public remove = new EventEmitter();

    constructor(
        private _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                params.has('event') && this.event?.id === params.get('event')
                    ? this.viewDetails()
                    : ''
            )
        );
    }

    public get day() {
        const date = this.event?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? 'Today' : format(date, 'EEEE')}`;
    }

    public get location() {
        const zone_list: string[] =
            this.event?.space?.zones ||
            (this.event?.system?.zones as any) ||
            [];
        const zone =
            this._org.levelWithID(zone_list) ||
            this._org.buildings.find((_) => zone_list.includes(_.id));
        return `${zone ? (zone.display_name || zone.name) + ', ' : ''} ${
            this.event.space?.display_name || this.event.space?.name
        }`;
    }

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

    public viewDetails() {
        if (!this.event) return;
        this.timeout('open', () => {
            const ref = this._dialog.open(EventDetailsModalComponent, {
                data: this.event,
            });
            this.subscription(
                'edit',
                ref.componentInstance.edit.subscribe(() => this.edit.emit())
            );
            this.subscription(
                'remove',
                ref.componentInstance.remove.subscribe(() => this.remove.emit())
            );
        });
    }
}
