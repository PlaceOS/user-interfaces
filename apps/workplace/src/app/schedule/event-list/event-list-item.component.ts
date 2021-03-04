import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { addMinutes, format, isAfter, isBefore } from 'date-fns';

import { Booking } from '@user-interfaces/bookings';
import { CalendarEvent } from '@user-interfaces/events';

@Component({
    selector: 'schedule-event-item',
    template: `
        <a
            matRipple
            [routerLink]="['/schedule', 'view', this.event.id]"
            [queryParams]="query"
            class="flex mb-1"
        >
            <div
                [class]="
                    'h-20 w-20 flex flex-col items-center justify-center ' +
                    status
                "
                [class.done]="is_done"
            >
                <div class="icon" [ngSwitch]="event.status">
                    <app-icon *ngSwitchCase="'cancelled'">cancel</app-icon>
                    <app-icon *ngSwitchDefault>forum</app-icon>
                </div>
                <div>{{ time }}</div>
                <label *ngIf="event.status === 'cancelled'">(Cancelled)</label>
            </div>
            <div
                class="flex flex-col h-20 flex-1 w-1/2 bg-white p-2 justify-center"
            >
                <div class="text-lg font-medium capitalize pl-1 truncate">
                    {{ event.title }}
                </div>
                <div class="flex items-center">
                    <app-icon
                        *ngIf="!!location"
                        [icon]="{
                            type: 'icon',
                            class: 'material-icons',
                            content: 'place'
                        }"
                    ></app-icon>
                    <div class="truncate pl-1">{{ location || 'No location' }}</div>
                </div>
            </div>
        </a>
    `,
    styles: [
        `
            .confirmed,
            .approved {
                background: #388e3c;
                color: #fff;
            }

            .tentative {
                background: #ffa000;
                color: #000;
            }

            .declined,
            .cancelled {
                background: #d32f2f;
                color: #fff;
            }

            .done {
                opacity: 0.35;
            }
        `,
    ],
})
export class ScheduleEventListItemComponent {
    /** Booking to display */
    @Input() public event: CalendarEvent | Booking;

    public get isFuture(): boolean {
        return isAfter(this.event.date, new Date());
    }

    public get status(): string {
        return this.event.status;
    }

    public get is_done(): boolean {
        return isBefore(
            addMinutes(this.event.date, this.event.duration),
            new Date()
        );
    }

    /** Display location of the booking event */
    public get location(): string {
        if (
            !this.event ||
            this.event.type === 'date' ||
            this.event.type === 'empty'
        ) {
            return 'No location';
        }
        return this.event.location;
    }

    /** Image name to display for the event */
    public get type_image(): string {
        if (
            !this.event ||
            this.event.type === 'date' ||
            this.event.type === 'empty'
        ) {
            return 'block';
        }
        if (this.event instanceof CalendarEvent && this.event.has_visitors) {
            return 'external';
        }
        return 'book_room';
    }

    public get time(): string {
        return this.event.all_day || this.event.duration > 23 * 60
            ? 'All Day'
            : format(this.event.date, 'h:mm a');
    }

    public get query() {
        return {
            calendar: (this.event as CalendarEvent).calendar,
            type: this.event.type,
        };
    }

    constructor(private _router: Router) {}
}
