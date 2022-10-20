import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filters',
    template: `
        <div
            class="hidden sm:block bg-white dark:bg-neutral-800 border border-gray-300 rounded p-2"
        >
            <h3 class="font-medium mb-2">Category Filters</h3>
            <div class="flex flex-wrap space-x-2">
                <div
                    class="flex items-center rounded-3xl border border-gray-300"
                    *ngIf="(filters | async)?.shown_types?.includes('event')"
                >
                    <div class=" px-2">Rooms</div>
                    <button mat-icon-button (click)="toggleType('event', true)">
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-gray-300"
                    *ngIf="(filters | async)?.shown_types?.includes('desk')"
                >
                    <div class="px-2">Desks</div>
                    <button mat-icon-button (click)="toggleType('desk', true)">
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-gray-300"
                    *ngIf="(filters | async)?.shown_types?.includes('parking')"
                >
                    <div class=" px-2">Car Spaces</div>
                    <button
                        mat-icon-button
                        (click)="toggleType('parking', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-gray-300"
                    *ngIf="(filters | async)?.shown_types?.includes('visitor')"
                >
                    <div class=" px-2">Visitors</div>
                    <button
                        mat-icon-button
                        (click)="toggleType('visitor', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="sm:hidden flex items-center space-x-2">
            <button mat-button class="w-24" (click)="openFilters()">
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl -mr-2">filter_list</app-icon>
                    <div class="mr-2">Filters</div>
                </div>
            </button>
            <div
                class="flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2"
                *ngIf="(filters | async)?.shown_types?.includes('event')"
            >
                <div>Rooms</div>
                <button mat-icon-button (click)="toggleType('event', true)">
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2"
                *ngIf="(filters | async)?.shown_types?.includes('desk')"
            >
                <div>Desks</div>
                <button mat-icon-button (click)="toggleType('desk', true)">
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2"
                *ngIf="(filters | async)?.shown_types?.includes('parking')"
            >
                <div>Car</div>
                <button mat-icon-button (click)="toggleType('parking', true)">
                    <app-icon>close</app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
})
export class ScheduleFiltersComponent {
    public readonly filters = this._state.filters;

    public readonly toggleType = (t, c = false) => this._state.toggleType(t, c);

    constructor(
        private _sheet: MatBottomSheet,
        private _state: ScheduleStateService
    ) {}

    public openFilters() {
        this._sheet.open(ScheduleFilterCardComponent);
    }
}
