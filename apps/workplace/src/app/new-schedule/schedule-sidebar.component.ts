import { Component } from '@angular/core';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-neutral-700 border-r border-gray-300"
        >
            <schedule-calendar
                class="border-b border-gray-200"
                [ngModel]="date | async"
                (ngModelChange)="setDate($event)"
            ></schedule-calendar>
            <h3 class="mx-4 mt-4 font-medium">Filters</h3>
            <div class="p-4 space-y-4">
                <button
                    matRipple
                    class="flex items-center space-x-2 w-full text-left"
                    (click)="toggleType('event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
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
                    class="flex items-center space-x-2 w-full text-left"
                    (click)="toggleType('desk')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <img src="assets/icons/desk-outline.svg" class="w-6" />
                    </div>
                    <div class="flex-1">
                        <div class="">Desk</div>
                        <div class="text-sm opacity-60">Desk bookings</div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('desk')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    class="flex items-center space-x-2 w-full text-left"
                    (click)="toggleType('parking')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <app-icon>drive_eta</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">Parking</div>
                        <div class="text-sm opacity-60">Car, Bike, Van and ACC bookings</div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('parking')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    class="flex items-center space-x-2 w-full text-left"
                    (click)="toggleType('visitor')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <app-icon>people</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">Visitors</div>
                        <div class="text-sm opacity-60">Visitor invites</div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('visitor')
                        "
                    ></mat-checkbox>
                </button>
            </div>
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
export class ScheduleSidebarComponent {
    public readonly filters = this._state.filters;
    public readonly date = this._state.date;
    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly setDate = (d) => this._state.setDate(d);

    constructor(private _state: ScheduleStateService) {}
}
