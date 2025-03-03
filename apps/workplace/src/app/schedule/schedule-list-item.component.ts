import { Component, Input } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { CalendarEvent } from '@placeos/events';
import { isAfter } from 'date-fns';
import { BookingLike } from './schedule-state.service';

@Component({
    selector: '[schedule-list-item]',
    template: `
        <ng-container *ngIf="item" [ngSwitch]="item?.id">
            <div date *ngSwitchCase="'date'">
                <div class="mx-4 flex h-12 w-full items-center text-xl">
                    {{ item.date | date: 'longDate' }} ({{ item.duration }})
                </div>
                <div
                    class="mx-4 h-10 w-full text-center text-lg font-normal opacity-60"
                    *ngIf="!item.duration"
                >
                    No events for {{ item.date | date: 'longDate' }}
                </div>
            </div>
            <a
                btn
                matRipple
                item
                *ngSwitchDefault
                class="mx-4 my-1 h-20 w-[calc(100%-2rem)] rounded-none bg-base-100 p-0 hover:shadow"
                [class.opacity-50]="has_ended"
                [routerLink]="[
                    '/schedule',
                    'view',
                    item?.id +
                        ((item?.system?.email | space | async)?.id
                            ? '|' + (item?.system?.email | space | async)?.id
                            : ''),
                    type,
                ]"
            >
                <div class="flex items-center border border-base-200">
                    <div
                        status
                        class="flex h-20 w-20 flex-col items-center justify-center leading-tight text-white"
                        [class.bg-success]="status === 'approved'"
                        [class.bg-warning]="status === 'tentative'"
                        [class.bg-error]="status === 'declined'"
                    >
                        <app-icon class="text-2xl" [icon]="icon"></app-icon>
                        <div class="font-normal">
                            {{
                                item?.all_day
                                    ? 'All Day'
                                    : (item?.date | date: 'shortTime')
                            }}
                        </div>
                        <div class="text-xs font-medium capitalize">
                            ({{ status }})
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col p-2 text-left">
                        <div class="pl-1 text-xl">
                            {{ item?.title || 'Untitled Event' }}
                        </div>
                        <div
                            class="flex items-center font-normal"
                            *ngIf="item?.location || item?.description"
                        >
                            <app-icon class="mr-1 text-lg">place</app-icon>
                            <span>
                                {{
                                    item?.location || item?.description
                                        | slice: 0 : 255
                                }}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </ng-container>
    `,
    standalone: false,
})
export class ScheduleListItemComponent {
    @Input() public item: BookingLike;

    public get type() {
        return this.item instanceof Booking ? 'booking' : 'event';
    }

    public get has_ended() {
        return (
            !this.item ||
            this.item.id === 'date' ||
            isAfter(new Date(), this.item.date + this.item.duration * 60 * 1000)
        );
    }

    public get icon() {
        if (this.status === 'declined') return 'event_busy';
        if (this.item.asset_id) {
            switch ((this.item as Booking).booking_type) {
                case 'room':
                    return { content: 'meeting_room' };
                case 'desk':
                    return { type: 'img', src: 'assets/img/desk.svg' };
                case 'parking':
                    return { content: 'local_parking' };
            }
        }
        return { content: 'event' };
    }

    public get status() {
        if (!this.item || this.item.id === 'date') return 'declined';
        return this.item.status;
    }
}
