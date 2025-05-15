import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsService } from '@placeos/common';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filters',
    template: `
        <div
            class="hidden rounded border border-base-200 bg-base-100 p-2 sm:block"
        >
            <h3 class="mb-2 font-medium">
                {{
                    'APP.WORKPLACE.SCHEDULE_FILTERS_DISPLAY_HEADER' | translate
                }}
            </h3>
            <div class="flex flex-wrap">
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('event') &&
                        hasFeature('spaces')
                    "
                >
                    <div class="px-2">{{ 'RESOURCE.ROOMS' | translate }}</div>
                    <button
                        icon
                        name="schedule-remove-event-filter"
                        (click)="toggleType('event', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('desk') &&
                        hasFeature('desks')
                    "
                >
                    <div class="px-2">{{ 'RESOURCE.DESKS' | translate }}</div>
                    <button
                        icon
                        name="schedule-remove-desk-filter"
                        (click)="toggleType('desk', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('parking') &&
                        hasFeature('parking')
                    "
                >
                    <div class="px-2">
                        {{ 'RESOURCE.PARKING' | translate }}
                    </div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-parking-filter"
                        (click)="toggleType('parking', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('visitor') &&
                        hasFeature('visitor-invite')
                    "
                >
                    <div class="px-2">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-visitor-filter"
                        (click)="toggleType('visitor', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes('locker') &&
                        hasFeature('lockers')
                    "
                >
                    <div class="px-2">
                        {{ 'RESOURCE.LOCKERS' | translate }}
                    </div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter"
                        (click)="toggleType('locker', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    class="m-1 flex items-center rounded-3xl border border-base-200"
                    *ngIf="
                        (filters | async)?.shown_types?.includes(
                            'group-event'
                        ) && hasFeature('group-events')
                    "
                >
                    <div class="px-2">{{ 'RESOURCE.EVENTS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter"
                        (click)="toggleType('group-event', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex items-center space-x-2 overflow-auto sm:hidden">
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="min-w-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                    <!-- <div class="mr-2">{{ "APP.WORKPLACE.FILTERS" | translate }}</div> -->
                </div>
            </button>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('event') &&
                    hasFeature('spaces')
                "
            >
                <div>{{ 'RESOURCE.ROOMS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-event-filter-mobile"
                    (click)="toggleType('event', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('desk') &&
                    hasFeature('desks')
                "
            >
                <div>{{ 'RESOURCE.DESKS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-desk-filter-mobile"
                    (click)="toggleType('desk', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('parking') &&
                    hasFeature('parking')
                "
            >
                <div>{{ 'RESOURCE.PARKING' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-parking-filter-mobile"
                    (click)="toggleType('parking', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('visitor') &&
                    hasFeature('visitor-invite')
                "
            >
                <div>{{ 'RESOURCE.VISITORS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-visitor-filter-mobile"
                    (click)="toggleType('visitor', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('locker') &&
                    hasFeature('lockers')
                "
            >
                <div>{{ 'RESOURCE.LOCKERS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-locker-filter-mobile"
                    (click)="toggleType('locker', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                *ngIf="
                    (filters | async)?.shown_types?.includes('group-event') &&
                    hasFeature('group-events')
                "
            >
                <div>{{ 'RESOURCE.EVENTS' | translate }}</div>
                <button
                    icon
                    name="schedule-remove-locker-filter-mobile"
                    (click)="toggleType('group-event', true)"
                >
                    <icon>close</icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
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
        private _settings: SettingsService,
    ) {}

    public openFilters() {
        this._sheet.open(ScheduleFilterCardComponent);
    }
}
