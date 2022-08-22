import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Booking, BookingDetailsModalComponent } from '@placeos/bookings';
import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addMinutes, format, formatDuration, isSameDay } from 'date-fns';

@Component({
    selector: 'booking-card',
    template: `
        <h4 class="mb-2 flex items-center" *ngIf="booking">
            <span *ngIf="show_day" day>{{ day }}, </span>
            {{ booking?.date | date: 'h:mm a' }}
            <span class="text-xs px-2">({{ booking?.date | date: 'z' }})</span>
        </h4>
        <a
            matRippleColor
            details
            class="w-full"
            [routerLink]="['./']"
            [queryParams]="{ booking: booking?.id }"
            (click)="viewDetails()"
            *ngIf="booking"
        >
            <div
                class="w-full bg-white dark:bg-neutral-800 rounded-xl shadow py-4 relative"
            >
                <h4 class="px-4">{{ booking?.title }}</h4>
                <div class="flex mx-4 my-2">
                    <div
                        class="flex items-center bg-opacity-30 rounded-2xl p-1 text-sm space-x-2 pr-2 font-medium"
                        [class.bg-green-600]="
                            !booking.is_done && booking?.status === 'approved'
                        "
                        [class.bg-yellow-500]="
                            !booking.is_done && booking?.status === 'tentative'
                        "
                        [class.bg-red-600]="
                            !booking.is_done && booking?.status === 'declined'
                        "
                        [class.bg-gray-300]="booking.is_done"
                    >
                        <div
                            class="rounded-full h-5 w-5 flex items-center justify-center text-white"
                            [class.bg-success]="
                                !booking.is_done &&
                                booking?.status === 'approved'
                            "
                            [class.text-pending]="
                                !booking.is_done &&
                                booking?.status === 'tentative'
                            "
                            [class.bg-error]="
                                !booking.is_done &&
                                booking?.status === 'declined'
                            "
                            [class.text-neutral-600]="booking.is_done"
                        >
                            <app-icon>
                                {{
                                    booking.is_done
                                        ? 'not_interested'
                                        : booking?.status === 'approved'
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
                    class="flex flex-wrap flex-col sm:flex-row sm:divide-x divide-neutral-500 py-2 space-y-2 sm:space-y-0"
                >
                    <div class="flex items-center px-4">
                        <app-icon *ngIf="type !== 'desk'; else desk_icon">{{
                            type
                        }}</app-icon>
                        <div class="mx-2 truncate">
                            {{ booking?.description || booking?.asset_id }}
                        </div>
                    </div>
                    <div class="flex items-center px-4" *ngIf="location">
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
export class BookingCardComponent extends BaseClass {
    @Input() public booking: Booking;
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
                params.has('booking') &&
                this.booking?.id === params.get('event')
                    ? this.viewDetails()
                    : ''
            )
        );
    }

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

    public viewDetails() {
        if (!this.booking) return;
        this.timeout('open', () =>{
            const ref = this._dialog.open(BookingDetailsModalComponent, {
                data: this.booking,
            })
            this.subscription('edit', ref.componentInstance.edit.subscribe(() => this.edit.emit()));
            this.subscription('remove', ref.componentInstance.remove.subscribe(() => this.remove.emit()));
       } );
    }
}
