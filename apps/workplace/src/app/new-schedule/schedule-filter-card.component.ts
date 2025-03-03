import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ScheduleStateService } from './schedule-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'schedule-filter-card',
    template: `
        <div
            class="mb-4 flex items-center space-x-2 border-b border-base-200 text-xl"
        >
            <button icon matRipple (click)="dismiss()">
                <app-icon>chevron_left</app-icon>
            </button>
            <h2 class="w-1/2 flex-1 text-center">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h2>
            <app-icon></app-icon>
        </div>
        <div class="mb-4 space-y-4 border-b border-base-200 px-2 pb-4">
            <button
                matRipple
                name="schedule-toggle-event-filter"
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('spaces')"
                (click)="toggleType('event')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <app-icon>place</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">{{ 'RESOURCE.ROOMS' | translate }}</div>
                    <div class="text-sm opacity-60">
                        {{ 'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS' | translate }}
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
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('desks')"
                (click)="toggleType('desk')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <img src="assets/icons/desk-outline.svg" class="w-6" />
                </div>
                <div class="flex-1">
                    <div class="">{{ 'RESOURCE.DESKS' | translate }}</div>
                    <div class="text-sm opacity-60">
                        {{ 'APP.WORKPLACE.SCHEDULE_FILTER_DESKS' | translate }}
                    </div>
                </div>
                <mat-checkbox
                    [ngModel]="(filters | async)?.shown_types?.includes('desk')"
                ></mat-checkbox>
            </button>
            <button
                matRipple
                name="schedule-toggle-parking-filter"
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('parking')"
                (click)="toggleType('parking')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <app-icon>drive_eta</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">{{ 'RESOURCE.PARKING' | translate }}</div>
                    <div class="text-sm opacity-60">
                        {{
                            'APP.WORKPLACE.SCHEDULE_FILTER_PARKING' | translate
                        }}
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
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('visitor-invite')"
                (click)="toggleType('visitor')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <app-icon>people</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </div>
                    <div class="text-sm opacity-60">
                        {{
                            'APP.WORKPLACE.SCHEDULE_FILTER_VISITORS' | translate
                        }}
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
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('lockers')"
                (click)="toggleType('locker')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <app-icon>door_back</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">
                        {{ 'RESOURCE.LOCKERS' | translate }}
                    </div>
                    <div class="text-sm opacity-60">
                        {{
                            'APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS' | translate
                        }}
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
                class="flex w-full items-center space-x-2 text-left"
                *ngIf="hasFeature('group-events')"
                (click)="toggleType('group-event')"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl"
                >
                    <app-icon>door_back</app-icon>
                </div>
                <div class="flex-1">
                    <div class="">
                        {{ 'RESOURCE.EVENTS' | translate }}
                    </div>
                    <div class="text-sm opacity-60">
                        {{ 'APP.WORKPLACE.SCHEDULE_FILTER_EVENTS' | translate }}
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
                {{ 'COMMON.APPLY' | translate }}
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
    standalone: false,
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
