import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';

@Component({
    selector: `group-event-details-modal`,
    template: `
        <div
            class="relative w-[48rem] max-w-[calc(100vw-1rem)] max-h-[80vh] overflow-hidden"
        >
            <div
                class="flex items-center justify-between h-52 w-full bg-base-200 overflow-hidden"
            >
                <img
                    *ngIf="booking.images?.length"
                    auth
                    [source]="event.images[0]"
                    class="object-cover"
                />
            </div>
            <div
                class="absolute top-0 left-0 rounded-br py-2 pl-2 pr-4 space-x-2 bg-info text-info-content flex items-center text-sm"
            >
                <app-icon class="text-base">star</app-icon>
                <div class="uppercase">Featured</div>
            </div>
            <button icon mat-dialog-close class="absolute top-1 right-1">
                <app-icon>close</app-icon>
            </button>
            <div
                class="flex items-center justify-between py-4 px-8 border-b border-base-200"
            >
                <h3 class="text-left text-xl">
                    {{ booking.title }}
                </h3>
                <div class="flex items-center space-x-2">
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content space-x-2"
                    >
                        <app-icon>star</app-icon>
                        <div class="pr-2">Interested</div>
                    </button>
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content space-x-2"
                    >
                        <app-icon>help</app-icon>
                        <div class="pr-2">Going</div>
                    </button>
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content w-[2.75rem]"
                    >
                        <app-icon class="text-2xl">more_horiz</app-icon>
                    </button>
                </div>
            </div>
            <div class="flex overflow-y-auto overflow-x-hidden p-8">
                <div class="flex flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>Event by {{ booking.user_name }}</div>
                    </div>
                    <h3 class="font-medium pt-4">When and where</h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>calendar_today</app-icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">Date and Time</div>
                            <div class="text-sm opacity-30">
                                {{ booking.date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ booking.date | date: time_format }} -
                                {{
                                    booking.date + booking.duration * 60 * 1000
                                        | date: time_format
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>place</app-icon>
                        </div>
                        <div class="text-sm">
                            {{ booking.location }}
                            <span *ngIf="!booking.location" class="opacity-30">
                                Remote Event
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 bg-base-200 rounded-full"
                        >
                            <app-icon>person</app-icon>
                        </div>
                        <div>
                            {{ attendance }} going,
                            {{ booking.attendees?.length - attendance }}
                            interested
                        </div>
                    </div>
                    <h3 class="font-medium pt-4">About this event</h3>
                    <div class="text-sm pb-4">
                        {{ booking.description }}
                        <span *ngIf="!booking.description" class="opacity-30">
                            No description
                        </span>
                    </div>
                </div>
                <div class="flex"></div>
            </div>
        </div>
    `,
    styles: [``],
})
export class GroupEventDetailsModalComponent {
    public booking: any = this._data;

    public get time_format() {
        return this._settings.time_format;
    }

    public get attendance() {
        return (
            this.booking.attendees?.filter((_) => _.status === 'accepted')
                ?.length || 0
        );
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: Booking,
        private _settings: SettingsService
    ) {}

    public ngOnInit(): void {}
}
