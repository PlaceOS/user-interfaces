import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    debounced,
    effect,
    inject,
    Injector,
    input,
    OnInit,
    output,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    BookingAsset,
    BookingFormService,
    queryAllBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    InteractiveMapComponent,
    TranslatePipe,
} from '@placeos/components';
import { DEFAULT_COLOURS } from '@placeos/explore';
import { getUnixTime } from 'date-fns';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import {
    DeskInfoData,
    ExploreDeskInfoComponent,
} from 'libs/explore/src/lib/explore-desk-info.component';

@Component({
    selector: 'desk-flow-select-map',
    template: `
        @if (levels()?.length) {
            <div
                class="absolute top-2 right-2 left-2 z-10 rounded border border-base-300 bg-base-100 p-2 shadow"
            >
                <mat-form-field appearance="outline" class="no-subscript w-full">
                    <mat-select
                        name="location"
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl?.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>{{ lvl.display_name || lvl.name }}</div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="absolute inset-0 w-full flex-1">
            <interactive-map
                [src]="map_url()"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
        @if (selected_desk()) {
            <div
                class="absolute bottom-4 left-4 right-16 z-10 flex items-center rounded-lg border border-success bg-base-100 p-2 shadow-lg"
            >
                <div
                    class="relative mr-2 flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-lg bg-base-200"
                >
                    <icon
                        class="absolute left-0 top-0 rounded-full bg-base-200 text-success"
                        >task_alt</icon
                    >
                    @if (selected_desk().images?.length) {
                        <img
                            auth
                            class="h-full object-cover"
                            [source]="selected_desk().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto max-h-8 max-w-8"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    }
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">
                        {{
                            selected_desk().display_name ||
                                selected_desk().name ||
                                selected_desk().id
                        }}
                    </div>
                    <div class="flex items-center text-sm opacity-60">
                        <icon class="-ml-1 text-lg">place</icon>
                        <p class="truncate">
                            {{
                                selected_desk().location ||
                                    selected_desk().zone?.display_name ||
                                    selected_desk().zone?.name
                            }}
                        </p>
                    </div>
                </div>
                <div class="ml-2 text-xs font-medium text-success">
                    {{ 'COMMON.SELECTED' | translate }}
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
        BuildingPipe,
        AuthenticatedImageDirective,
    ],
})
export class DeskFlowSelectMapComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _injector = inject(Injector);
    private readonly _use_region = this._settings.signal('use_region', false);
    private readonly _show_users = this._settings.signal(
        'desks.show_users',
        true,
    );

    public readonly selected_items = input<string[]>([]);
    public readonly active = input<string>(undefined);
    public readonly is_displayed = input(false);
    public readonly item_selected = output<Space>();

    public readonly zoom = signal(1);
    public readonly center = signal({ x: 0.5, y: 0.5 });
    public readonly coordinates = signal(undefined);

    private _selectedItem = (s) => () => this.item_selected.emit(s);
    public readonly setOptions = (o) => this._booking_form.setOptions(o);
    public readonly level = signal<BuildingLevel>(null);
    public readonly available_resources = this._booking_form.available_resources;
    public readonly form_value = this._booking_form.model;

    // Keep the active desk visible even if it falls outside the current
    // availability result set while the form is loading or filters are updating.
    private readonly current_available = computed(() => {
        const available = this.available_resources();
        const form = this.form_value();
        const resources = form.resources || [];

        if (resources.length > 0) {
            const existing_ids = available.map((r) => r.id);
            const missing_resources = resources.filter(
                (r) => !existing_ids.includes(r.id),
            );

            if (missing_resources.length > 0) {
                return [...missing_resources, ...available];
            }
        }

        return available;
    });

    public readonly map_url = computed(() => this.level()?.map_id || '');
    public readonly resource_list = this._booking_form.resources;
    public readonly features = computed(() =>
        this.resource_list().map((space) => {
            const map_id = this._mapId(space);
            return {
                track_id: `desk:hover:${map_id}`,
                location: map_id,
                content: ExploreDeskInfoComponent,
                full_size: true,
                no_scale: true,
                data: {
                    id: space.id,
                    map_id,
                    name: space.display_name || space.name || space.id,
                    user: computed(
                        () => this._booked_users()[space.id]?.join(', ') || '',
                    ),
                    status: computed(() => this._deskStatus(space)),
                    bookings: signal([]),
                } satisfies DeskInfoData,
                z_index: 20,
            };
        }),
    );
    /** Level and time window used to find who booked each desk */
    private readonly _booking_query = computed(() => {
        const zone = this.level()?.id;
        const form = this.form_value();
        if (!this._show_users() || !zone || !(form?.date > 0)) return;
        const { start, end } = this._booking_form.bookingWindow(form);
        if (!(end > start)) return;
        return { zone, start, end };
    });
    /** Booking query, debounced to coalesce rapid form changes */
    private readonly _booking_query_debounced = debounced(
        this._booking_query,
        500,
        {
            equal: (a, b) =>
                a?.zone === b?.zone &&
                a?.start === b?.start &&
                a?.end === b?.end,
        },
    );
    /** Desk bookings on the active level within the search window */
    private readonly _level_bookings = resource({
        params: () => this._booking_query_debounced.value(),
        loader: ({ params: { zone, start, end } }) =>
            queryAllBookings({
                type: 'desk',
                zones: zone,
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                limit: 200,
            }),
    });
    /** Names of the people who booked each desk, mapped by desk ID */
    private readonly _booked_users = computed(() => {
        const users: Record<string, string[]> = {};
        const bookings: Booking[] = this._level_bookings.value() ?? [];
        for (const booking of bookings) {
            if (['cancelled', 'declined'].includes(booking.status)) continue;
            const name = booking.user_name || booking.booked_by_name;
            if (!name) continue;
            for (const id of booking.asset_ids) {
                users[id] ??= [];
                if (!users[id].includes(name)) users[id].push(name);
            }
        }
        return users;
    });
    public readonly use_region = this._use_region;
    public readonly levels = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const resources = this._booking_form.resources();
        const level_list = this.use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        const level_ids = new Set(
            resources
                .filter((resource) => resource.bookable !== false)
                .map((resource) => resource.zone?.id)
                .filter((_) => _),
        );
        return level_list
            .filter(
                (lvl) =>
                    !lvl.tags.includes('parking') && level_ids.has(lvl.id),
            )
            .sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
    });

    public readonly selected_desk = computed(() => {
        const selected_ids = this.selected_items();
        if (!selected_ids?.length) return null;
        const available = this.current_available();
        return available.find((desk) => selected_ids.includes(desk.id)) || null;
    });
    public readonly actions = computed(() =>
        this.current_available().map((space) => ({
            id: this._mapId(space),
            action: ['touchend', 'mouseup'],
            callback: this._selectedItem(space),
        })),
    );

    public readonly styles = computed(() => {
        const spaces = this.resource_list();
        return spaces.reduce((styles, space) => {
            const colours = this._settings.get('app.explore.colors') || {};
            const status = this._deskStatus(space);
            styles[`#${this._mapId(space)}`] = {
                fill:
                    colours[`space-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
            };
            return styles;
        }, {});
    });

    private _mapId(space: Pick<BookingAsset, 'id' | 'map_id'>) {
        return space.map_id || space.id;
    }

    private _deskStatus(space: Pick<BookingAsset, 'id'>) {
        return this.current_available().some((item) => item.id === space.id)
            ? this.selected_items().includes(space.id)
                ? 'pending'
                : 'free'
            : 'busy';
    }

    public ngOnInit() {
        const ref = effect(
            () => {
                const details = this._booking_form.options();
                const level = this._org.levelWithID(
                    (details as any).zones || [details.zone_id],
                );
                if (level) this.level.set(level);
            },
            { injector: this._injector },
        );
        this.subscription('levels_update', {
            unsubscribe: () => ref.destroy(),
        } as any);
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zones: [level?.id], zone_id: level?.id });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = (level.location || bld.location)
                .split(',')
                .map((_) => parseFloat(_));
            this.coordinates.set({ latitude, longitude });
        }
        this.level.set(level);
    }

    public setZoom(new_zoom: number) {
        this.zoom.set(Math.max(0.5, Math.min(10, new_zoom)));
    }

    public resetMap() {
        this.zoom.set(1);
        this.center.set({ x: 0.5, y: 0.5 });
    }
}
