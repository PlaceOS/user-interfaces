import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex flex-col w-[18rem] h-full overflow-hidden bg-base-100[#1F2021] border-r border-base-200"
        >
            <date-calendar
                class="border-b border-base-200"
                [ngModel]="date | async"
                (ngModelChange)="setDate($event)"
            ></date-calendar>
            <h3 class="mx-4 mt-4 font-medium" i18n>Filters</h3>
            <div class="p-4 space-y-4 flex-1 h-1/2 overflow-auto">
                <button
                    matRipple
                    name="schedule-toggle-event-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('spaces')"
                    (click)="toggleType('event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
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
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
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
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
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
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
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
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('lockers')"
                    (click)="toggleType('locker')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>door_back</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.LOCKERS' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('locker')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('group-events')"
                    (click)="toggleType('group-event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>door_back</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.GROUP_EVENT' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes(
                                'group-event'
                            )
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
