import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-[#1F2021] border-r border-gray-300 dark:border-neutral-800"
        >
            <schedule-calendar
                class="border-b border-gray-200 dark:border-neutral-800"
                [ngModel]="date | async"
                (ngModelChange)="setDate($event)"
            ></schedule-calendar>
            <h3 class="mx-4 mt-4 font-medium" i18n>Filters</h3>
            <div class="p-4 space-y-4">
                <button
                    matRipple
                    name="schedule-toggle-event-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('spaces')"
                    (click)="toggleType('event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <app-icon>place</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.ROOM' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_ROOM_FILTER' | translate }}
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
                    name="schedule-toggle-desk-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('desks')"
                    (click)="toggleType('desk')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <img src="assets/icons/desk-outline.svg" class="w-6" />
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.DESK' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_DESK_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('desk')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-parking-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('parking')"
                    (click)="toggleType('parking')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <app-icon>drive_eta</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.PARKING' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_PARKING_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('parking')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-visitor-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('visitor-invite')"
                    (click)="toggleType('visitor')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-800 text-2xl"
                    >
                        <app-icon>people</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.VISITORS' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}
                        </div>
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

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    constructor(
        private _state: ScheduleStateService,
        private _settings: SettingsService
    ) {}
}
