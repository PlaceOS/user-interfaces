import {
    Component,
    computed,
    inject,
    resource,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import {
    BookingAsset,
    bookedResourceList,
    BookingFormService,
    loadLockerResources,
} from '@placeos/bookings';
import {
    BookingRuleset,
    currentUser,
    OrganisationService,
    rulesForResource,
    settingSignal,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { showMetadata } from '@placeos/ts-client';
import { addMinutes, getUnixTime } from 'date-fns';
import { LandingStateService } from '../landing/landing-state.service';
import {
    AvailableTab,
    availableNowTabs,
    landingFeatures,
} from './landing-features';

/** Length in minutes of the time from now that a resource must be free */
const AVAILABLE_WINDOW = 60;

/** Display details of each tab. `type` is set for tabs with a booking query */
const TAB_DETAILS: Record<
    AvailableTab,
    {
        name: string;
        icon: string;
        empty: string;
        loading: string;
        type?: 'desk' | 'locker';
    }
> = {
    desks: {
        name: 'RESOURCE.DESKS',
        icon: 'desk',
        empty: 'APP.WORKPLACE.AVAILABLE_NOW_DESKS_EMPTY',
        loading: 'BOOKINGS.DESKS_LOADING',
        type: 'desk',
    },
    rooms: {
        name: 'RESOURCE.ROOMS',
        icon: 'meeting_room',
        empty: 'APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY',
        loading: '',
    },
    lockers: {
        name: 'RESOURCE.LOCKERS',
        icon: 'lock',
        empty: 'APP.WORKPLACE.AVAILABLE_NOW_LOCKERS_EMPTY',
        loading: 'BOOKINGS.LOCKERS_LOADING',
        type: 'locker',
    },
};

@Component({
    selector: 'landing-available-now',
    template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
                </h3>
            </div>
            @if (tabs().length > 0) {
                <div
                    class="bg-base-200 flex w-full items-center space-x-1 rounded p-1"
                >
                    @for (tab of tabs(); track tab) {
                        <button
                            btn
                            matRipple
                            [attr.name]="'tab-' + tab"
                            class="hover:bg-base-300 flex-1"
                            [class.clear]="active_tab() !== tab"
                            (click)="selected_tab.set(tab)"
                        >
                            {{ tab_details[tab].name | translate }}
                        </button>
                    }
                </div>
            }
            @if (active_tab(); as tab) {
                <div class="flex flex-col space-y-2 pt-2">
                    @if (loading()) {
                        <div
                            class="bg-base-200 flex min-h-40 flex-col items-center justify-center rounded-xl py-12 text-center"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <div class="mt-3 text-sm opacity-60">
                                {{ tab_details[tab].loading | translate }}
                            </div>
                        </div>
                    } @else {
                        @for (lvl of filtered_levels(); track lvl.id) {
                            <a
                                btn
                                matRipple
                                name="available-level"
                                [routerLink]="has_explore() ? ['/explore'] : null"
                                [queryParams]="{ zone: lvl.id }"
                                class="inverse h-14 w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">{{
                                    tab_details[tab].icon
                                }}</icon>
                                <div class="flex-1">
                                    @let bld = lvl.parent_id | building;
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                    @if (bld) {
                                        <div
                                            class="text-base-content text-xs opacity-50"
                                        >
                                            {{ bld.display_name || bld.name }}
                                        </div>
                                    }
                                </div>
                                <div
                                    count
                                    class="bg-secondary text-secondary-content rounded px-2 py-1 text-xs"
                                >
                                    {{
                                        'APP.WORKPLACE.AVAILABLE_NOW_FREE'
                                            | translate
                                                : {
                                                      count: free_by_level()[
                                                          lvl.id
                                                      ],
                                                  }
                                    }}
                                </div>
                                @if (has_explore()) {
                                    <icon class="text-xl">chevron_right</icon>
                                }
                            </a>
                        } @empty {
                            <div
                                empty
                                class="bg-base-200 flex flex-col items-center justify-center rounded-xl py-12 text-center"
                            >
                                <icon class="text-4xl opacity-30">{{
                                    tab_details[tab].icon
                                }}</icon>
                                <div class="mt-2 text-sm opacity-60">
                                    {{ tab_details[tab].empty | translate }}
                                </div>
                            </div>
                        }
                    }
                </div>
            }
            @if (has_explore()) {
                <a
                    btn
                    matRipple
                    name="view-map"
                    class="clear w-full underline"
                    [routerLink]="['/explore']"
                    >{{ 'APP.WORKPLACE.AVAILABLE_NOW_VIEW_MAP' | translate }}</a
                >
            }
        </div>
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        RouterLink,
        BuildingPipe,
        TranslatePipe,
        MatProgressSpinnerModule,
    ],
})
export class LandingAvailableNowComponent {
    private _state = inject(LandingStateService);
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);

    public readonly tab_details = TAB_DETAILS;
    public readonly features = landingFeatures();
    public readonly hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    public readonly hide_rooms = settingSignal<boolean>('hide_landing_rooms');
    public readonly has_explore = computed(() =>
        this.features().includes('explore'),
    );

    /** Tabs that the features and the landing settings allow */
    public readonly tabs = computed(() =>
        availableNowTabs(
            this.features(),
            !!this.hide_spaces(),
            !!this.hide_rooms(),
        ),
    );
    /** Tab that the user selected. Null until the user selects one */
    public readonly selected_tab = signal<AvailableTab | null>(null);
    /** Selected tab, or the first tab that is enabled */
    public readonly active_tab = computed<AvailableTab | null>(() => {
        const tabs = this.tabs();
        const selected = this.selected_tab();
        return tabs.includes(selected) ? selected : (tabs[0] ?? null);
    });

    public readonly levels = this._state.level_occupancy;
    /** Rooms with a live status of free. No request is made for these */
    public readonly free_spaces = this._state.free_space_list;

    /**
     * Desks or lockers that are free now for the active tab. This query does
     * not use the booking form state, so it loads on a first visit and does
     * not show the time of a booking that the user started earlier. It loads
     * again only when the tab or the building changes.
     */
    private readonly _available = resource({
        params: () => {
            const type = this.tab_details[this.active_tab()]?.type;
            const building_id = this._org.active_building()?.id;
            return type && building_id ? { type, building_id } : undefined;
        },
        loader: ({ params: { type, building_id } }) =>
            this._loadAvailable(type, building_id).catch(
                () => [] as BookingAsset[],
            ),
    });
    public readonly available_resources = computed(
        () => this._available.value() ?? ([] as BookingAsset[]),
    );
    public readonly loading = computed(() => this._available.isLoading());

    /** Number of free resources of the active tab on each level */
    public readonly free_by_level = computed(() => {
        const zone_lists =
            this.active_tab() === 'rooms'
                ? this.free_spaces().map((space) => space.zones)
                : this.available_resources().map((item) => [item.zone?.id]);
        const mapping: Record<string, number> = {};
        for (const zones of zone_lists) {
            const lvl = this._org.levelWithID(zones);
            if (lvl) mapping[lvl.id] = (mapping[lvl.id] || 0) + 1;
        }
        return mapping;
    });

    public readonly filtered_levels = computed(() => {
        const counts = this.free_by_level();
        return this.levels().filter((lvl) => counts[lvl.id] > 0);
    });

    /**
     * List the desks or lockers of the building that are free for
     * `AVAILABLE_WINDOW` minutes from now.
     * Requests: the resource list, then the booking rules and the booked
     * resources of the building. The count does not grow with the number of
     * desks or levels.
     */
    private async _loadAvailable(
        type: 'desk' | 'locker',
        building_id: string,
    ): Promise<BookingAsset[]> {
        const date = Date.now();
        const resources =
            type === 'desk'
                ? await this._booking_form.loadResourceList('desks')
                : ((await loadLockerResources(
                      this._org,
                      building_id,
                  )) as BookingAsset[]);
        if (!resources.length) return [];
        const [rules, booked_ids] = await Promise.all([
            showMetadata(building_id, `${type}_booking_rules`)
                .then((metadata): BookingRuleset[] =>
                    metadata.details instanceof Array ? metadata.details : [],
                )
                .catch((): BookingRuleset[] => []),
            bookedResourceList(
                {
                    period_start: getUnixTime(date),
                    period_end: getUnixTime(addMinutes(date, AVAILABLE_WINDOW)),
                    type,
                    zones: building_id,
                },
                resources.length,
            ),
        ]);
        const host = currentUser();
        const groups = host?.groups || [];
        return resources.filter(
            (asset) =>
                asset.bookable !== false &&
                !booked_ids.includes(asset.id) &&
                (!asset.groups?.length ||
                    asset.groups.some((group) => groups.includes(group))) &&
                !rulesForResource(
                    { date, duration: AVAILABLE_WINDOW, resource: asset, host },
                    rules,
                ).hidden,
        );
    }
}
