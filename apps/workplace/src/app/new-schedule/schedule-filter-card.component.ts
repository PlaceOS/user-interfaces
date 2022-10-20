import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filter-card',
    template: `
        <div
            class="flex items-center border-b border-gray-300 dark:bg-neutral-700 space-x-2 mb-4"
        >
            <button mat-icon-button (click)="dismiss()">
                <app-icon>chevron_left</app-icon>
            </button>
            <h2 class="flex-1 w-1/2 text-center font-medium">Booking Types</h2>
            <app-icon></app-icon>
        </div>
        <div
            class="space-y-4 border-b border-gray-300 mb-4 pb-4 dark:bg-neutral-700"
        >
            <button
                matRipple
                class="flex items-center space-x-2 w-full text-left pr-2"
                (click)="toggleType('event')"
            >
                <div
                    class="h-10 w-10 rounded-full flex items-center justify-center text-2xl"
                >
                    <app-icon>meeting_room</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">Room</div>
                    <div class="text-sm opacity-60">
                        Room and meeting invites
                    </div>
                </div>
                <mat-checkbox
                    [ngModel]="
                        (filters | async)?.shown_types?.includes('event')
                    "
                ></mat-checkbox>
            </button>
            <button
                matRipple
                class="flex items-center space-x-2 w-full text-left pr-2"
                (click)="toggleType('desk')"
            >
                <div
                    class="h-10 w-10 rounded-full flex items-center justify-center text-2xl"
                >
                    <img src="assets/icons/desk-outline.svg" class="w-6" />
                </div>
                <div class="flex-1">
                    <div class="">Desk</div>
                    <div class="text-sm opacity-60">Desk bookings</div>
                </div>
                <mat-checkbox
                    [ngModel]="(filters | async)?.shown_types?.includes('desk')"
                ></mat-checkbox>
            </button>
            <button
                matRipple
                class="flex items-center space-x-2 w-full text-left pr-2"
                (click)="toggleType('parking')"
            >
                <div
                    class="h-10 w-10 rounded-full flex items-center justify-center text-2xl"
                >
                    <app-icon>drive_eta</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">Parking</div>
                    <div class="text-sm opacity-60">Car space bookings</div>
                </div>
                <mat-checkbox
                    [ngModel]="
                        (filters | async)?.shown_types?.includes('parking')
                    "
                ></mat-checkbox>
            </button>
            <button
                matRipple
                class="flex items-center space-x-2 w-full text-left pr-2"
                (click)="toggleType('visitor')"
            >
                <div
                    class="h-10 w-10 rounded-full flex items-center justify-center text-2xl"
                >
                    <app-icon>people</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">Visitor</div>
                    <div class="text-sm opacity-60">Visitor bookings</div>
                </div>
                <mat-checkbox
                    [ngModel]="
                        (filters | async)?.shown_types?.includes('visitor')
                    "
                ></mat-checkbox>
            </button>
        </div>
        <div class="px-2 pb-2">
            <button mat-button class="w-full" (click)="dismiss()">
                Apply Filters
            </button>
        </div>
    `,
    styles: [
        `
            mat-checkbox {
                pointer-events: none;
            }
        `,
    ],
})
export class ScheduleFilterCardComponent {
    public readonly filters = this._state.filters;

    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly dismiss = () => this._sheet_ref.dismiss();

    constructor(
        private _state: ScheduleStateService,
        private _sheet_ref: MatBottomSheetRef<ScheduleFilterCardComponent>
    ) {}
}
