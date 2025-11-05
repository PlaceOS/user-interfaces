import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Booking, CalendarEvent, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ScheduleFilterCardComponent } from './schedule-filter-card.component';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'schedule-filters',
    template: `
        <div class="hidden border-b border-base-300 bg-base-100 p-1 sm:block">
            <div class="flex flex-wrap">
                @for (item of feature_list; track item.type) {
                    @if (
                        (filters | async)?.shown_types?.includes(item.type) &&
                        hasFeature(item.feat)
                    ) {
                        <div
                            class="m-1 flex h-8 items-center rounded-full border border-base-200 text-sm"
                        >
                            <div class="px-2">{{ item.name | translate }}</div>
                            <button
                                icon
                                matRipple
                                [name]="
                                    'schedule-remove-' + item.type + '-filter'
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
            class="flex items-center space-x-2 overflow-auto border-b border-base-300 bg-base-100 p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="min-w-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                </div>
            </button>
            @for (item of feature_list; track item.type) {
                @if (
                    (filters | async)?.shown_types?.includes(item.type) &&
                    hasFeature(item.feat)
                ) {
                    <div
                        class="flex items-center rounded-3xl border border-base-200 bg-base-100 pl-2 text-sm"
                    >
                        <div>{{ item.name | translate }}</div>
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

    public readonly feature_list = [
        { type: 'event', feat: 'spaces', name: 'RESOURCE.ROOMS' },
        { type: 'desk', feat: 'desks', name: 'RESOURCE.DESKS' },
        { type: 'parking', feat: 'parking', name: 'RESOURCE.PARKING' },
        { type: 'visitor', feat: 'visitor-invite', name: 'RESOURCE.VISITORS' },
        { type: 'locker', feat: 'lockers', name: 'RESOURCE.LOCKERS' },
        { type: 'group-event', feat: 'group-events', name: 'RESOURCE.EVENTS' },
    ];

    public readonly toggleType = (t, c = false) => this._state.toggleType(t, c);

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    public openFilters() {
        const ref = this._sheet.open(ScheduleFilterCardComponent);
        ref.instance.bookings.set(this.bookings());
    }
}
