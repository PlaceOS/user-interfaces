import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filter-card',
    template: `
        <div
            class="border-base-200 mb-4 flex items-center space-x-2 border-b text-xl"
        >
            <button icon matRipple (click)="dismiss()">
                <icon>chevron_left</icon>
            </button>
            <h2 class="w-1/2 flex-1 text-center">
                {{ 'COMMON.FILTERS' | translate }}
            </h2>
            <icon></icon>
        </div>
        <div class="border-base-200 mb-4 space-y-4 border-b px-2 pb-4">
            @if (hasFeature('spaces')) {
                <button
                    matRipple
                    name="schedule-toggle-event-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('event')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>place</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.ROOMS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('event')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('desks')) {
                <button
                    matRipple
                    name="schedule-toggle-desk-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('desk')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <img src="assets/icons/desk-outline.svg" class="w-6" />
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.DESKS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_DESKS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('desk')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('parking') || hasFeature('parking-requests')) {
                <button
                    matRipple
                    name="schedule-toggle-parking-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('parking')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>drive_eta</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.PARKING' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_PARKING'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('parking')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('visitor-invite')) {
                <button
                    matRipple
                    name="schedule-toggle-visitor-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('visitor')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>people</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_VISITORS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('visitor')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('lockers')) {
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('locker')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>door_back</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('locker')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('group-events')) {
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('group-event')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>door_back</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.EVENTS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_EVENTS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            filters().shown_types?.includes('group-event')
                        "
                    ></mat-checkbox>
                </button>
            }
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
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatCheckboxModule,
        FormsModule,
        MatRippleModule,
    ],
})
export class ScheduleFilterCardComponent {
    private _state = inject(ScheduleStateService);
    private _settings = inject(SettingsService);
    private _sheet_ref =
        inject<MatBottomSheetRef<ScheduleFilterCardComponent>>(
            MatBottomSheetRef,
        );

    public readonly filters = this._state.filters;

    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly dismiss = () => this._sheet_ref.dismiss();

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }
}
