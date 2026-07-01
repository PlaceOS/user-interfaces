import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import {
    Booking,
    CalendarEvent,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleStateService } from './schedule-state.service';

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
                                (click)="toggleType(item.type, true)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
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
                            (click)="toggleType(item.type, true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            }
        </div>
    `,
    styles: [``],
    imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule],
})
export class ScheduleFiltersComponent {
    private _sheet = inject(MatBottomSheet);
    private _state = inject(ScheduleStateService);
    private _settings = inject(SettingsService);

    public readonly filters = this._state.filters;
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);
    public readonly features = settingSignal<string[]>('features', []);

    public readonly counts = computed(() => {
        const mapping: Record<string, number> = {};
        const bkn_list = this.bookings() || [];
        for (const bkn of bkn_list) {
            if (bkn instanceof CalendarEvent) {
                const type = bkn.extension_data?.shared_event
                    ? 'group-event'
                    : 'event';
                mapping[type] = (mapping[type] || 0) + 1;
            } else {
                const type = bkn.booking_type;
                mapping[type] = (mapping[type] || 0) + 1;
            }
        }
        return mapping;
    });

    public readonly feature_list = [
        { type: 'desk', feat: 'desks', name: 'RESOURCE.DESKS' },
        { type: 'event', feat: 'spaces', name: 'RESOURCE.MEETINGS' },
        {
            type: 'parking',
            feat: ['parking', 'parking-requests'],
            name: 'RESOURCE.PARKING',
        },
        { type: 'visitor', feat: 'visitor-invite', name: 'RESOURCE.VISITORS' },
        { type: 'locker', feat: 'lockers', name: 'RESOURCE.LOCKERS' },
        { type: 'group-event', feat: 'group-events', name: 'RESOURCE.EVENTS' },
        {
            type: 'vip-visitor',
            feat: 'vip-visitor-invite',
            name: 'RESOURCE.VIP_VISITORS',
        },
    ];

    public readonly toggleType = (t, c = false) => this._state.toggleType(t, c);

    public hasFeature(feature: string | string[]) {
        const features = this.features() || [];
        if (Array.isArray(feature)) {
            return feature.some((f) => features.includes(f));
        }
        return features.includes(feature);
    }

    public openFilters() {
        const ref = this._sheet.open(ScheduleFilterCardComponent);
        ref.instance.bookings.set(this.bookings());
    }
}
