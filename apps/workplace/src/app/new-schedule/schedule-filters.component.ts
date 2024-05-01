import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsService } from '@placeos/common';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filters',
    template: `
        <div
            class="hidden sm:block bg-base-100 border border-base-200 rounded p-2"
        >
            <h3 class="font-medium mb-2">
                {{ 'WPA.SCHEDULE_CAT_FILTERS' | translate }}
            </h3>
            <div class="flex flex-wrap space-x-2">
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="(filters | async)?.shown_types?.includes('event')"
                >
                    <div class=" px-2">{{ 'WPA.ROOMS' | translate }}</div>
                    <button
                        icon
                        name="schedule-remove-event-filter"
                        (click)="toggleType('event', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('desk') &&
                        hasFeature('desks')
                    "
                >
                    <div class="px-2">{{ 'WPA.DESKS' | translate }}</div>
                    <button
                        icon
                        name="schedule-remove-desk-filter"
                        (click)="toggleType('desk', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('parking') &&
                        hasFeature('parking')
                    "
                >
                    <div class=" px-2">{{ 'WPA.PARKING' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-parking-filter"
                        (click)="toggleType('parking', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('visitor') &&
                        hasFeature('visitor-invite')
                    "
                >
                    <div class=" px-2">{{ 'WPA.VISITORS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-visitor-filter"
                        (click)="toggleType('visitor', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('locker') &&
                        hasFeature('lockers')
                    "
                >
                    <div class=" px-2">{{ 'WPA.LOCKERS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter"
                        (click)="toggleType('locker', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    class="flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes(
                            'group-evnet'
                        ) && hasFeature('group-events')
                    "
                >
                    <div class=" px-2">{{ 'WPA.GROUP_EVENT' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter"
                        (click)="toggleType('group-event', true)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="sm:hidden flex items-center space-x-2">
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="min-w-0 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <app-icon class="text-xl">filter_list</app-icon>
                    <!-- <div class="mr-2">{{ "WPA.FILTERS" | translate }}</div> -->
                </div>
            </button>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="(filters | async)?.shown_types?.includes('event')"
            >
                <div>{{ 'WPA.ROOMS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-event-filter-mobile"
                    (click)="toggleType('event', true)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="
                    (filters | async)?.shown_types?.includes('desk') &&
                    hasFeature('desks')
                "
            >
                <div>{{ 'WPA.DESKS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-desk-filter-mobile"
                    (click)="toggleType('desk', true)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="
                    (filters | async)?.shown_types?.includes('parking') &&
                    hasFeature('parking')
                "
            >
                <div>{{ 'WPA.PARKING' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-parking-filter-mobile"
                    (click)="toggleType('parking', true)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="
                    (filters | async)?.shown_types?.includes('visitor') &&
                    hasFeature('visitor-invite')
                "
            >
                <div>{{ 'WPA.VISITORS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-visitor-filter-mobile"
                    (click)="toggleType('visitor', true)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="
                    (filters | async)?.shown_types?.includes('locker') &&
                    hasFeature('lockers')
                "
            >
                <div>{{ 'WPA.LOCKERS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-locker-filter-mobile"
                    (click)="toggleType('locker', true)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2"
                *ngIf="
                    (filters | async)?.shown_types?.includes('group-event') &&
                    hasFeature('group-events')
                "
            >
                <div>{{ 'WPA.GROUP_EVENTS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-locker-filter-mobile"
                    (click)="toggleType('group-event', true)"
                >
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

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    constructor(
        private _sheet: MatBottomSheet,
        private _state: ScheduleStateService,
        private _settings: SettingsService
    ) {}

    public openFilters() {
        this._sheet.open(ScheduleFilterCardComponent);
    }
}
