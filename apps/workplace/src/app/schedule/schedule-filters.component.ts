import { Component, inject } from '@angular/core';
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
                @if (
                    (filters | async)?.shown_types?.includes('event') &&
                    hasFeature('spaces')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.ROOMS' | translate }}
                        </div>
                        <button
                            icon
                            name="schedule-remove-event-filter"
                            (click)="toggleType('event', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    (filters | async)?.shown_types?.includes('desk') &&
                    hasFeature('desks')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.DESKS' | translate }}
                        </div>
                        <button
                            icon
                            name="schedule-remove-desk-filter"
                            (click)="toggleType('desk', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    (filters | async)?.shown_types?.includes('parking') &&
                    hasFeature('parking')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
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
                }
                @if (
                    (filters | async)?.shown_types?.includes('visitor') &&
                    hasFeature('visitor-invite')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
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
                }
                @if (
                    (filters | async)?.shown_types?.includes('locker') &&
                    hasFeature('lockers')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
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
                }
                @if (
                    (filters | async)?.shown_types?.includes('group-event') &&
                    hasFeature('group-events')
                ) {
                    <div
                        class="m-1 flex items-center rounded-3xl border border-base-200"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.EVENTS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-locker-filter"
                            (click)="toggleType('group-event', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
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
            @if (
                (filters | async)?.shown_types?.includes('event') &&
                hasFeature('spaces')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
            @if (
                (filters | async)?.shown_types?.includes('desk') &&
                hasFeature('desks')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
            @if (
                (filters | async)?.shown_types?.includes('parking') &&
                hasFeature('parking')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
            @if (
                (filters | async)?.shown_types?.includes('visitor') &&
                hasFeature('visitor-invite')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
            @if (
                (filters | async)?.shown_types?.includes('locker') &&
                hasFeature('lockers')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
            @if (
                (filters | async)?.shown_types?.includes('group-event') &&
                hasFeature('group-events')
            ) {
                <div
                    class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
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
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ScheduleFiltersComponent {
    private _sheet = inject(MatBottomSheet);
    private _state = inject(ScheduleStateService);
    private _settings = inject(SettingsService);

    public readonly filters = this._state.filters;

    public readonly toggleType = (t, c = false) => this._state.toggleType(t, c);

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    public openFilters() {
        this._sheet.open(ScheduleFilterCardComponent);
    }
}
