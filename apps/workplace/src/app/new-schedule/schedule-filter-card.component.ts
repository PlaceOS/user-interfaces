import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ScheduleStateService } from './schedule-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'schedule-filter-card',
    template: `
        <div
            class="flex items-center border-b border-base-200 space-x-2 mb-4 text-xl"
        >
            <button icon matRipple (click)="dismiss()">
                <app-icon>chevron_left</app-icon>
            </button>
            <h2 class="flex-1 w-1/2 text-center">
                {{ 'WPA.BOOKING_TYPES' | translate }}
            </h2>
            <app-icon></app-icon>
        </div>
        <div class="space-y-4 border-b border-base-200 mb-4 pb-4 px-2">
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
                    [ngModel]="(filters | async)?.shown_types?.includes('desk')"
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
                        (filters | async)?.shown_types?.includes('group-event')
                    "
                ></mat-checkbox>
            </button>
        </div>
        <div class="px-2 pb-2">
            <button
                btn
                matRipple
                name="schedule-apply-filter"
                class="w-full"
                (click)="dismiss()"
            >
                {{ 'WPA.FILTERS_APPLY' | translate }}
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

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    constructor(
        private _state: ScheduleStateService,
        private _settings: SettingsService,
        private _sheet_ref: MatBottomSheetRef<ScheduleFilterCardComponent>,
    ) {}
}
