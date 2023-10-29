import { Component, Input } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { isAfter } from 'date-fns';
import { BookingLike } from '../schedule/schedule-state.service';

@Component({
    selector: '[scheduled-item]',
    template: `
        <a
            btn
            matRipple
            class="rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-24 bg-base-100 hover:shadow p-0"
            [class.opacity-50]="has_ended"
            [routerLink]="['/schedule', 'view', item?.id, type]"
        >
            <div class="flex items-center border border-base-200 rounded-lg">
                <div
                    status
                    class="h-24 w-20 flex flex-col items-center justify-center text-white leading-tight"
                    [class.bg-success]="status === 'approved'"
                    [class.bg-warning]="status === 'tentative'"
                    [class.bg-error]="status === 'declined'"
                >
                    <app-icon class="text-2xl">{{ icon }}</app-icon>
                    <div class="font-normal">
                        {{
                            item?.all_day
                                ? 'All Day'
                                : (item?.date | date: 'shortTime')
                        }}
                    </div>
                    <div class="capitalize text-xs font-medium">
                        ({{ status }})
                    </div>
                </div>
                <div class="flex-1 flex flex-col text-left p-2">
                    <div class="text-xl pl-1">
                        {{ item?.title || 'Untitled Event' }}
                    </div>
                    <div
                        class="flex items-center font-normal leading-normal space-x-1"
                    >
                        <app-icon class="text-lg">today</app-icon>
                        <span class="text-sm">{{
                            item?.date | date: 'MMMM d'
                        }}</span>
                    </div>
                    <div
                        class="flex items-center font-normal leading-normal space-x-1"
                        *ngIf="item?.location || item?.description"
                    >
                        <app-icon class="text-lg">place</app-icon>
                        <span>
                            {{
                                item?.location || item?.description
                                    | slice: 0:255
                            }}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    `,
    styles: [],
})
export class DashboardScheduledItemComponent {
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
        if (this.status === 'declined') return 'cancel';
        if (this.item.asset_id) {
            switch ((this.item as Booking).booking_type) {
                case 'desk':
                    return 'view_quilt';
                case 'parking':
                    return 'local_parking';
            }
        }
        return 'event';
    }

    public get status() {
        if (!this.item || this.item.id === 'date') return 'declined';
        return this.item.status;
    }
}
