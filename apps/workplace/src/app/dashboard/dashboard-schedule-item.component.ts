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
            class="mx-4 my-1 h-24 w-[calc(100%-2rem)] rounded-none bg-base-100 p-0 hover:shadow"
            [class.opacity-50]="has_ended"
            [routerLink]="['/schedule', 'view', item?.id, type]"
        >
            <div class="flex items-center rounded-lg border border-base-200">
                <div
                    status
                    class="flex h-24 w-20 flex-col items-center justify-center leading-tight text-white"
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
                    <div class="text-xs font-medium capitalize">
                        ({{ status }})
                    </div>
                </div>
                <div class="flex flex-1 flex-col p-2 text-left">
                    <div class="pl-1 text-xl">
                        {{ item?.title || 'Untitled Event' }}
                    </div>
                    <div
                        class="flex items-center space-x-1 font-normal leading-normal"
                    >
                        <app-icon class="text-lg">today</app-icon>
                        <span class="text-sm">{{
                            item?.date | date: 'MMMM d'
                        }}</span>
                    </div>
                    <div
                        class="flex items-center space-x-1 font-normal leading-normal"
                        *ngIf="item?.location || item?.description"
                    >
                        <app-icon class="text-lg">place</app-icon>
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
    `,
    styles: [],
    standalone: false,
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
