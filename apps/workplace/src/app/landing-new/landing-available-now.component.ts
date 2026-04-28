import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    BookingType,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { BuildingPipe, IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { LandingStateService } from '../landing/landing-state.service';

@Component({
    selector: 'landing-available-now',
    template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">Available Now</h3>
            </div>
            @if (feature_count() > 0) {
                <div
                    class="bg-base-200 flex w-full items-center space-x-1 rounded p-1"
                >
                    @if (features().includes('desks')) {
                        <button
                            btn
                            matRipple
                            class="hover:bg-base-300 flex-1"
                            [class.clear]="active_tab() !== 'desks'"
                            (click)="
                                active_tab.set('desks'); setBookingType('desk')
                            "
                        >
                            Desks
                        </button>
                    }
                    @if (features().includes('spaces')) {
                        <button
                            btn
                            matRipple
                            class="hover:bg-base-300 flex-1"
                            [class.clear]="active_tab() !== 'rooms'"
                            (click)="active_tab.set('rooms')"
                        >
                            Rooms
                        </button>
                    }
                    @if (features().includes('lockers')) {
                        <button
                            btn
                            matRipple
                            class="hover:bg-base-300 flex-1"
                            [class.clear]="active_tab() !== 'lockers'"
                            (click)="
                                active_tab.set('lockers');
                                setBookingType('locker')
                            "
                        >
                            Lockers
                        </button>
                    }
                </div>
            }
            <div class="flex flex-col space-y-2 pt-2">
                @if (availability_loading()) {
                    <div
                        class="bg-base-200 flex min-h-40 flex-col items-center justify-center rounded-xl py-12 text-center"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <div class="mt-3 text-sm opacity-60">
                            Loading available
                            {{
                                active_tab() === 'rooms'
                                    ? 'rooms'
                                    : active_tab()
                            }}...
                        </div>
                    </div>
                } @else if (filtered_levels().length <= 0) {
                    <div
                        class="bg-base-200 flex flex-col items-center justify-center rounded-xl py-12 text-center"
                    >
                        <icon class="text-4xl opacity-30">{{
                            active_tab() === 'desks'
                                ? 'desk'
                                : active_tab() === 'lockers'
                                  ? 'lock'
                                  : 'meeting_room'
                        }}</icon>
                        <div class="mt-2 text-sm opacity-60">
                            No
                            {{
                                active_tab() === 'rooms'
                                    ? 'rooms'
                                    : active_tab()
                            }}
                            available at the moment
                        </div>
                    </div>
                }
                @if (!availability_loading()) {
                    @for (lvl of filtered_levels(); track lvl.id) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/explore']"
                            [queryParams]="{ zone: lvl.id }"
                            class="inverse h-14 w-full space-x-4 text-left"
                        >
                            <icon class="text-xl">{{
                                active_tab() === 'desks'
                                    ? 'desk'
                                    : active_tab() === 'lockers'
                                      ? 'lock'
                                      : 'meeting_room'
                            }}</icon>
                            <div class="flex-1">
                                @let bld = lvl.parent_id | building;
                                <div>{{ lvl.display_name || lvl.name }}</div>
                                @if (bld) {
                                    <div
                                        class="text-base-content text-xs opacity-50"
                                    >
                                        {{ bld.display_name || bld.name }}
                                    </div>
                                }
                            </div>
                            <div
                                class="bg-secondary text-secondary-content rounded px-2 py-1 text-xs"
                            >
                                {{
                                    active_tab() === 'rooms'
                                        ? spaces_by_level()[lvl.id] || 0
                                        : resources_by_level()[lvl.id] || 0
                                }}
                                free
                            </div>
                            <icon class="text-xl">chevron_right</icon>
                        </a>
                    }
                }
            </div>
            <a
                btn
                matRipple
                class="clear w-full underline"
                [routerLink]="['/explore']"
                >View Live Map</a
            >
        </div>
    `,
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        RouterLink,
        BuildingPipe,
        MatMenuModule,
        MatProgressSpinnerModule,
    ],
})
export class LandingAvailableNowComponent implements OnInit {
    private _state = inject(LandingStateService);
    private _booking_form = inject(BookingFormService);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);

    public readonly active_tab = signal('desks');
    public readonly active_filter = signal('nearest');
    public readonly levels_free = this._state.level_occupancy;
    public readonly features = settingSignal<string[]>('features', []);
    public readonly feature_count = computed(
        () =>
            (this.features().includes('desks') ? 1 : 0) +
            (this.features().includes('lockers') ? 1 : 0) +
            (this.features().includes('spaces') ? 1 : 0),
    );

    public readonly all_levels = toSignal(this.levels_free, {
        initialValue: [],
    });

    public readonly available_spaces = toSignal(
        this._event_form.available_spaces,
        { initialValue: [] },
    );
    public readonly booking_loading = toSignal(this._booking_form.loading, {
        initialValue: '',
    });
    public readonly room_loading = toSignal(this._event_form.loading$, {
        initialValue: '',
    });
    public readonly available_resources = toSignal(
        this._booking_form.available_resources,
        { initialValue: [] },
    );
    public readonly availability_loading = computed(() =>
        this.active_tab() === 'rooms'
            ? !!this.room_loading()
            : !!this.booking_loading(),
    );

    public readonly spaces_by_level = computed(() => {
        const spaces = this.available_spaces();
        const mapping: Record<string, number> = {};
        for (const space of spaces) {
            const lvl = this._org.levelWithID(space.zones);
            if (lvl) {
                if (!mapping[lvl.id]) mapping[lvl.id] = 0;
                mapping[lvl.id] += 1;
            }
        }
        return mapping;
    });

    public readonly resources_by_level = computed(() => {
        const items = this.available_resources();
        const mapping: Record<string, number> = {};
        for (const item of items) {
            const lvl = this._org.levelWithID([item.zone.id]);
            if (lvl) {
                if (!mapping[lvl.id]) mapping[lvl.id] = 0;
                mapping[lvl.id] += 1;
            }
        }
        return mapping;
    });

    public readonly filtered_levels = computed(() => {
        const levels = this.all_levels();
        const tab = this.active_tab();
        const spaces_map = this.spaces_by_level();
        const resources_map = this.resources_by_level();

        return levels.filter((lvl) => {
            const count =
                tab === 'rooms'
                    ? spaces_map[lvl.id] || 0
                    : resources_map[lvl.id] || 0;
            return count > 0;
        });
    });

    public ngOnInit() {
        this.setBookingType('desk');
        this.ensureBookingWindow();
        this.ensureRoomWindow();
    }

    public setBookingType(type: BookingType) {
        this._booking_form.setOptions({ type });
    }

    private ensureBookingWindow() {
        const { date, duration } = this._booking_form.form.getRawValue();
        if (date && duration) return;
        this._booking_form.form.patchValue({
            date: date || Date.now(),
            duration: duration || 60,
        });
    }

    private ensureRoomWindow() {
        const { date, duration } = this._event_form.form.getRawValue();
        if (date && duration) return;
        this._event_form.form.patchValue({
            date: date || Date.now(),
            duration: duration || 60,
        });
    }
}
