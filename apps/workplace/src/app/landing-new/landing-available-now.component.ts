import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
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
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'landing-available-now',
    template: `
        <div
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">Available Now</h3>
                <button matRipple class="flex items-center justify-center rounded-md px-2 py-1 border border-base-300 w-32" [matMenuTriggerFor]="menu">
                    <div class="ml-2 text-sm underline capitalize">{{ active_filter() }}</div>
                    <icon>keyboard_arrow_down</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="active_filter.set('nearest')">
                        <div class="flex space-x-2 items-center">
                            <div class="flex-1 min-w-32">Nearest</div>
                            @if (active_filter() === "nearest") {
                                <icon class="text-2xl">done</icon>
                            }
                        </div>
                    </button>
                    <button mat-menu-item (click)="active_filter.set('quiet')">
                        <div class="flex space-x-2  items-center">
                            <div class="flex-1">Quiet</div>
                            @if (active_filter() === "quiet") {
                                <icon class="text-2xl">done</icon>
                            }
                        </div>
                    </button>
                    <button mat-menu-item (click)="active_filter.set('equipment')">
                        <div class="flex space-x-2  items-center">
                            <div class="flex-1">Equipment</div>
                            @if (active_filter() === "equipment") {
                                <icon class="text-2xl">done</icon>
                            }
                        </div>
                    </button>
                    <button mat-menu-item (click)="active_filter.set('accessible')">
                        <div class="flex space-x-2  items-center">
                            <div class="flex-1">Accessible</div>
                            @if (active_filter() === "accessible") {
                                <icon class="text-2xl">done</icon>
                            }
                        </div>
                    </button>
                </mat-menu>
            </div>
            @if (feature_count() > 0) {
                <div
                    class="flex w-full items-center space-x-1 rounded bg-base-200 p-1"
                >
                    @if (features().includes('desks')) {
                        <button
                            btn
                            matRipple
                            class="flex-1 hover:bg-base-300"
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
                            class="flex-1 hover:bg-base-300"
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
                            class="flex-1 hover:bg-base-300"
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
                @for (lvl of levels_free | async; track lvl) {
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
                                <div class="text-xs opacity-60">
                                    {{ bld.display_name || bld.name }}
                                </div>
                            }
                        </div>
                        <div
                            class="rounded bg-secondary px-2 py-1 text-xs text-secondary-content"
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
    ],
})
export class LandingAvailableNowComponent {
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

    public readonly available_spaces = toSignal(
        this._event_form.available_spaces,
        { initialValue: [] },
    );
    public readonly available_resources = toSignal(
        this._booking_form.available_resources,
        { initialValue: [] },
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

    public setBookingType(type: BookingType) {
        this._booking_form.setOptions({ type });
    }
}
