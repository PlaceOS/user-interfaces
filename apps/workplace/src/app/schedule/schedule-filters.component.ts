import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Booking, CalendarEvent } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import {
    bookingTypeCounts,
    SCHEDULE_FILTER_TYPES,
    ScheduleStateService,
} from './schedule-state.service';

@Component({
    selector: 'schedule-filters',
    template: `
        <div class="border-base-300 bg-base-100 hidden border-b p-1 sm:block">
            <div class="flex flex-wrap">
                @for (item of feature_list; track item.type) {
                    @if (
                        filters()?.shown_types?.includes(item.type) &&
                        hasFeature(item.feat)
                    ) {
                        <div
                            class="border-base-200 bg-base-100 m-0.5 flex items-center rounded-3xl border pl-2 text-sm"
                        >
                            <div class="px-2">{{ item.name | translate }}</div>
                            <div
                                class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                            >
                                {{ counts()[item.type] || 0 }}
                            </div>
                            <button
                                icon
                                matRipple
                                [name]="
                                    'schedule-remove-' +
                                    item.type +
                                    '-filter-mobile'
                                "
                                [attr.aria-label]="
                                    'CALENDAR_EVENT.FILTER_REMOVE'
                                        | translate
                                            : { name: item.name | translate }
                                "
                                (click)="toggleType(item.type, true)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                }
                @if (filters()?.show_bookings_for_others) {
                    <div
                        class="border-base-200 bg-base-100 m-0.5 flex items-center rounded-3xl border pl-2 text-sm"
                    >
                        <icon class="text-base-content/50 text-xl"
                            >perm_contact_calendar</icon
                        >
                        <div class="px-2">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_BOOKINGS_FOR_OTHERS'
                                    | translate
                            }}
                        </div>
                        <div
                            class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                        >
                            {{ counts()['bookings-for-others'] || 0 }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-bookings-for-others-filter"
                            [attr.aria-label]="
                                'CALENDAR_EVENT.FILTER_REMOVE'
                                    | translate
                                        : {
                                              name:
                                                  'APP.WORKPLACE.SCHEDULE_FILTER_BOOKINGS_FOR_OTHERS'
                                                  | translate,
                                          }
                            "
                            (click)="toggleBookingsForOthers()"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
        <div
            class="border-base-300 bg-base-100 flex items-center space-x-2 overflow-auto border-b p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                [attr.aria-label]="'COMMON.FILTERS' | translate"
                class="h-10 min-h-10 min-w-10 sm:min-h-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                </div>
            </button>
            @for (item of feature_list; track item.type) {
                @if (
                    filters()?.shown_types?.includes(item.type) &&
                    hasFeature(item.feat)
                ) {
                    <div
                        class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                    >
                        <div class="px-2">{{ item.name | translate }}</div>
                        <div
                            class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                        >
                            {{ counts()[item.type] || 0 }}
                        </div>
                        <button
                            icon
                            matRipple
                            [name]="
                                'schedule-remove-' +
                                item.type +
                                '-filter-mobile'
                            "
                            [attr.aria-label]="
                                'CALENDAR_EVENT.FILTER_REMOVE'
                                    | translate: { name: item.name | translate }
                            "
                            (click)="toggleType(item.type, true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            }
            @if (filters()?.show_bookings_for_others) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <icon class="text-base-content/50 text-xl"
                        >perm_contact_calendar</icon
                    >
                    <div class="px-2">
                        {{
                            'APP.WORKPLACE.SCHEDULE_FILTER_BOOKINGS_FOR_OTHERS'
                                | translate
                        }}
                    </div>
                    <div
                        class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                    >
                        {{ counts()['bookings-for-others'] || 0 }}
                    </div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-bookings-for-others-filter-mobile"
                        [attr.aria-label]="
                            'CALENDAR_EVENT.FILTER_REMOVE'
                                | translate
                                    : {
                                          name:
                                              'APP.WORKPLACE.SCHEDULE_FILTER_BOOKINGS_FOR_OTHERS'
                                              | translate,
                                      }
                        "
                        (click)="toggleBookingsForOthers()"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule],
})
export class ScheduleFiltersComponent {
    private _sheet = inject(MatBottomSheet);
    private _state = inject(ScheduleStateService);

    public readonly filters = this._state.filters;
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);

    public readonly counts = computed(() => bookingTypeCounts(this.bookings()));

    public readonly feature_list = SCHEDULE_FILTER_TYPES;

    public readonly toggleType = (t, c = false) => this._state.toggleType(t, c);
    public readonly toggleBookingsForOthers = () =>
        this._state.toggleBookingsForOthers();
    public readonly hasFeature = (feature: string[]) =>
        this._state.hasFeature(feature);

    public openFilters() {
        const ref = this._sheet.open(ScheduleFilterCardComponent);
        ref.instance.bookings.set(this.bookings());
    }
}
