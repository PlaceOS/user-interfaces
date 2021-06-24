import { Component, Input } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { isAfter } from 'date-fns';
import { BookingLike } from './schedule-state.service';

@Component({
    selector: '[schedule-list-item]',
    template: `
        <ng-container [ngSwitch]="item?.id">
            <div *ngSwitchCase="'date'">
                <div class="mx-4 w-full h-12 text-xl flex items-center">
                    {{ item.date | date: 'longDate' }} ({{ item.duration }})
                </div>
                <div
                    class="mx-4 w-full h-10 text-lg text-center font-normal opacity-60"
                    *ngIf="!item.duration"
                >
                    No events for {{ item.date | date: 'longDate' }}
                </div>
            </div>
            <a
                mat-button
                *ngSwitchDefault
                class="rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white border border-gray-200 hover:shadow p-0"
                [class.opacity-50]="has_ended"
                [routerLink]="['/schedule', 'view', item?.id]"
            >
                <div class=" flex items-center">
                    <div
                        status
                        class="h-20 w-20 flex flex-col items-center justify-center text-white leading-tight"
                        [class.bg-success]="status === 'approved'"
                        [class.bg-pending]="status === 'tentative'"
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
                        <div class="capitalize text-xs font-medium">({{ status }})</div>
                    </div>
                    <div class="flex-1 flex flex-col text-left p-2">
                        <div class="text-xl pl-1">
                            {{ item?.title || 'Untitled Event' }}
                        </div>
                        <div class="flex items-center font-normal">
                            <app-icon class="text-lg mr-1">place</app-icon>
                            <span>{{ item?.location }}</span>
                        </div>
                    </div>
                </div>
            </a>
        </ng-container>
    `,
})
export class ScheduleListItemComponent {
    @Input() public item: BookingLike;

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
            switch ((this.item as Booking).type) {
                case 'desk':
                    return 'menu_book'
                case 'parking':
                    return 'local_parking'
            }
        }
        return 'event';
    }

    public get status() {
        if (!this.item || this.item.id === 'date') return 'declined';
        return this.item.status;
    }
}
