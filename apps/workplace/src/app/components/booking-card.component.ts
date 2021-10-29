import { Component, Input } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { addMinutes, format, formatDuration, isSameDay } from 'date-fns';

@Component({
    selector: 'booking-card',
    template: `
        <h4 class="mb-2 flex items-center" *ngIf="booking">
            <span *ngIf="show_day">{{ day }}, </span>
            {{ booking?.date | date: 'h:mm a' }}
            <span class="text-xs px-2">({{ booking?.date | date:'z' }})</span>
        </h4>
        <a
            matRippleColor
            class="w-full"
            [routerLink]="['/schedule', 'view', booking?.id, 'booking']"
            *ngIf="booking"
        >
            <div class="w-full bg-white rounded shadow py-2 relative">
                <h4 class="px-2">{{ booking?.title }}</h4>
                <div class="flex m-2">
                    <div
                        class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium"
                        [class.bg-success]="booking?.status === 'approved'"
                        [class.bg-pending]="booking?.status === 'tentative'"
                        [class.bg-error]="booking?.status === 'declined'"
                        [class.bg-gray-200]="!booking?.status"
                    >
                        <div
                            class="rounded-full h-5 w-5 flex items-center justify-center text-white"
                            [class.bg-success]="booking?.status === 'approved'"
                            [class.bg-pending]="booking?.status === 'tentative'"
                            [class.bg-error]="booking?.status === 'declined'"
                            [class.bg-gray-200]="!booking?.status"
                        >
                            <app-icon>
                                {{
                                    booking?.status === 'approved'
                                        ? 'done'
                                        : booking?.status === 'tentative'
                                        ? 'warning'
                                        : 'close'
                                }}
                            </app-icon>
                        </div>
                        <div class="pr-1">{{ period }}</div>
                    </div>
                </div>
                <div
                    class="flex flex-wrap flex-col sm:flex-row sm:divide-x divide-gray-200 py-2 space-y-2 sm:space-y-0"
                >
                    <div class="flex items-center px-2">
                        <app-icon *ngIf="type !== 'desk'; else desk_icon">{{ type }}</app-icon>
                        <div class="mx-2 truncate">
                            {{ booking?.description || booking?.asset_id }}
                        </div>
                    </div>
                    <div class="flex items-center px-2" *ngIf="location">
                        <app-icon>place</app-icon>
                        <div class="mx-2 truncate">{{ location }}</div>
                    </div>
                </div>
                <app-icon
                    class="absolute top-1/2 right-1 text-4xl -translate-y-1/2"
                >
                    chevron_right
                </app-icon>
            </div>
        </a>
        <ng-template #desk_icon>
            <img src="assets/icons/desk-outline.svg" class="w-5 h-5" />
        </ng-template>
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
export class BookingCardComponent {
    @Input() public booking: Booking;
    @Input() public show_day: boolean = false;

    public get type() {
        if (this.booking?.type === 'desk') return 'desk';
        if (this.booking?.type === 'parking') return 'drive_eta';
        return 'book';
    }

    public get day() {
        const date = this.booking?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? 'Today' : format(date, 'EEEE')}`;
    }

    public get location() {
        const level = this._org.levelWithID(this.booking?.zones || []);
        return `${level?.display_name || level?.name || ''}`;
    }

    public get period() {
        const start = this.booking?.date || Date.now();
        const duration = this.booking?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, 'h:mm a')} - ${format(end, 'h:mm a')} (${dur})`;
    }

    constructor(private _org: OrganisationService) {}
}
