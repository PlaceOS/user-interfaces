import { CommonModule } from '@angular/common';
import { Component, computed, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { Booking, BOOKING_TYPE_COLORS, CalendarEvent } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    bookingTypeCounts,
    SCHEDULE_FILTER_TYPES,
    ScheduleStateService,
} from './schedule-state.service';

@Component({
    selector: 'schedule-filter-card',
    template: `
        <div
            class="border-base-200 mb-4 flex items-center space-x-2 border-b text-xl"
        >
            <button
                icon
                matRipple
                [attr.aria-label]="'COMMON.CLOSE' | translate"
                (click)="dismiss()"
            >
                <icon>chevron_left</icon>
            </button>
            <h2 class="w-1/2 flex-1 text-center">
                {{ 'COMMON.FILTERS' | translate }}
            </h2>
            <icon></icon>
        </div>
        <div class="border-base-200 mb-4 space-y-2 border-b px-4 pb-4">
            @for (item of feature_list; track item.type) {
                @if (hasFeature(item.feat)) {
                    <settings-toggle
                        [ngModel]="filters()?.shown_types?.includes(item.type)"
                        (click)="toggleType(item.type)"
                    >
                        <div class="-my-2 -ml-2 flex items-center space-x-2">
                            <div
                                class="bg-base-300 rounded-full p-1 text-2xl"
                                [style.background-color]="colors[item.type][0]"
                                [style.color]="colors[item.type][1]"
                            >
                                <icon>{{ item.icon }}</icon>
                            </div>
                            <div class="flex-1 font-medium">
                                {{ item.name | translate }}
                            </div>
                            <div class="font-mono text-xs">
                                {{ counts()[item.type] || 0 }}
                            </div>
                        </div>
                    </settings-toggle>
                }
            }
            <settings-toggle
                [ngModel]="filters()?.show_bookings_for_others"
                (click)="toggleBookingsForOthers()"
            >
                <div class="-my-2 -ml-2 flex items-center space-x-2">
                    <div class="bg-base-300 rounded-full p-1 text-2xl">
                        <icon>perm_contact_calendar</icon>
                    </div>
                    <div class="flex-1 font-medium">
                        {{
                            'APP.WORKPLACE.SCHEDULE_FILTER_BOOKINGS_FOR_OTHERS'
                                | translate
                        }}
                    </div>
                    <div class="font-mono text-xs">
                        {{ counts()['bookings-for-others'] || 0 }}
                    </div>
                </div>
            </settings-toggle>
        </div>
        <div class="px-4 pb-4">
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
        SettingsToggleComponent,
    ],
})
export class ScheduleFilterCardComponent {
    private _state = inject(ScheduleStateService);
    private _sheet_ref =
        inject<MatBottomSheetRef<ScheduleFilterCardComponent>>(
            MatBottomSheetRef,
        );

    public readonly filters = this._state.filters;
    public readonly colors = BOOKING_TYPE_COLORS;
    public readonly bookings = model<(Booking | CalendarEvent)[]>([]);

    /** The card labels meetings as rooms */
    public readonly feature_list = SCHEDULE_FILTER_TYPES.map((item) =>
        item.type === 'event' ? { ...item, name: 'RESOURCE.ROOMS' } : item,
    );

    public readonly counts = computed(() => bookingTypeCounts(this.bookings()));

    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly toggleBookingsForOthers = () =>
        this._state.toggleBookingsForOthers();
    public readonly hasFeature = (feature: string[]) =>
        this._state.hasFeature(feature);
    public readonly dismiss = () => this._sheet_ref.dismiss();
}
