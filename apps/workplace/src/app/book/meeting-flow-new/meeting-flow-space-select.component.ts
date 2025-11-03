import { CommonModule } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    flatten,
    OrganisationService,
    settingSignal,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    LevelPipe,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService, SpacesService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { combineLatest, map } from 'rxjs';

const FAV_SPACE_KEY = 'favourite_rooms';

@Component({
    selector: 'meeting-flow-space-select',
    template: `
        <div
            class="w-full overflow-hidden rounded-lg border border-base-300 bg-base-100"
        >
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
            >
                <icon>info</icon>
                <div>Select Meeting Room</div>
            </div>
            <div class="flex w-full space-x-2 p-2" [formGroup]="form()">
                <div class="sticky top-0 w-[20rem] max-w-[20rem]">
                    <div class="flex w-full items-center justify-between p-2">
                        <h3 class="px-2 text-xl font-medium">Filters</h3>
                        <button icon matRipple>
                            <icon>close</icon>
                        </button>
                    </div>
                    <div class="flex flex-col px-4">
                        <label for="location">Location</label>
                        @if (use_region() && (regions | async)?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="setRegion($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'CALENDAR_EVENT.SPACE_REGION_ANY'
                                            | translate
                                    "
                                >
                                    @for (reg of regions | async; track reg) {
                                        <mat-option [value]="reg">
                                            {{ reg.display_name || reg.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!use_region() && (buildings | async)?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building | async"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        (building | async)?.display_name ||
                                        (building | async)?.name
                                    "
                                >
                                    @for (bld of buildings | async; track bld) {
                                        <mat-option [value]="bld">
                                            {{ bld.display_name || bld.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate
                                "
                                [multiple]="true"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl?.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    lvl.display_name || lvl.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <label for="date">Date</label>
                        <date-field formControlName="date" />
                        <settings-toggle class="mb-2" formControlName="all_day"
                            >All Day</settings-toggle
                        >
                        @if (!field('all_day')) {
                            <label for="date">Time</label>
                            <div class="flex space-x-2">
                                <time-field
                                    class="flex-1"
                                    [ngModel]="field('date')"
                                    (ngModelChange)="
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [disabled]="form().controls.date.disabled"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                <duration-field
                                    class="w-1/3 flex-1"
                                    formControlName="duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            </div>
                        }
                        <settings-toggle class="mb-4" formControlName="all_day"
                            >Favourites Only</settings-toggle
                        >
                        <h2 class="text-lg font-medium">Facilities</h2>
                        <div class="mb-4 flex flex-col space-y-2">
                            @for (feat of features | async; track feat) {
                                @if (!hide_features().includes(feat)) {
                                    <settings-toggle
                                        class="w-full"
                                        [name]="feature_display()[feat] || feat"
                                        [ngModel]="
                                            (
                                                options | async
                                            )?.features?.includes(feat)
                                        "
                                        (ngModelChange)="
                                            toggleFeature(feat, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></settings-toggle>
                                }
                            }
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col">
                    <div
                        filters
                        class="mb-2 flex flex-wrap rounded-lg border border-base-300 bg-base-100 p-2"
                    >
                        @let feature_list = (options | async)?.features || [];
                        @let zones = (options | async)?.features || [];
                        @let capacity = (options | async)?.capacity || [];
                        @let event = form().getRawValue();
                        @let zone = (zones | level) || (zones | building);
                        @let location = zone?.display_name || zone?.name || '';
                        @if (feature_list.length > 1) {
                            <button
                                btn
                                matRipple
                                name="clear-space-filters"
                                class="mb-2 mr-2 min-h-[2rem]"
                                (click)="removeAllFeatures()"
                            >
                                {{ 'COMMON.FILTERS_CLEAR' | translate }}
                            </button>
                        }
                        @if (location) {
                            <div filter-item zone>
                                {{ location }}
                            </div>
                        }
                        <div filter-item date>
                            {{ event.date | date: 'mediumDate' }}
                        </div>
                        <div filter-item time>
                            @if (!event.all_day) {
                                {{ event.date | date: time_format }} &mdash;
                                {{ event.date_end | date: time_format }}
                            }
                            @if (event.all_day) {
                                {{ 'COMMON.ALL_DAY' | translate }}
                            }
                        </div>
                        <div filter-item count>
                            {{
                                'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                    | translate
                                        : {
                                              count: capacity || 2,
                                          }
                            }}
                        </div>
                        @for (feat of feature_list; track feat) {
                            <div filter-item>
                                <p class="truncate">{{ feat }}</p>
                                <button
                                    icon
                                    matRipple
                                    name="remove-space-filter"
                                    class="-mr-4"
                                    (click)="removeFeature(feat)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                    <div
                        class="flex flex-1 flex-col rounded-lg border border-base-300 bg-base-200 p-2"
                    >
                        @if (!(loading | async)) {
                            @if ((available_spaces | async)?.length) {
                                <ul class="list-style-none space-y-2">
                                    @for (
                                        space of available_spaces | async;
                                        track space
                                    ) {
                                        <li
                                            space
                                            matRipple
                                            [class.!border-info]="
                                                active() === space.id
                                            "
                                            class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow hover:border-info"
                                            [class.!bg-error-light]="
                                                (room_alerts | async)[space.id]
                                                    ? (room_alerts | async)[
                                                          space.id
                                                      ][0] === 'closed'
                                                    : false
                                            "
                                        >
                                            <button
                                                name="select-space"
                                                class="flex h-full w-full items-center rounded"
                                                (click)="selectSpace(space)"
                                                [class.pointer-events-none]="
                                                    (room_alerts | async)[
                                                        space.id
                                                    ]
                                                        ? (room_alerts | async)[
                                                              space.id
                                                          ][0] === 'closed'
                                                        : false
                                                "
                                            >
                                                <div
                                                    class="relative mr-4 flex h-20 w-20 min-w-[5rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                                >
                                                    @if (
                                                        selected().includes(
                                                            space.id
                                                        )
                                                    ) {
                                                        <div
                                                            class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                                        >
                                                            <icon>done</icon>
                                                        </div>
                                                    }
                                                    @if (space.images?.length) {
                                                        <img
                                                            auth
                                                            class="h-full object-cover"
                                                            [source]="
                                                                space.images[0]
                                                            "
                                                        />
                                                    } @else {
                                                        <img
                                                            class="m-auto"
                                                            src="assets/icons/room-placeholder.svg"
                                                        />
                                                    }
                                                    @if (
                                                        (room_alerts | async)[
                                                            space.id
                                                        ]
                                                    ) {
                                                        <div
                                                            class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                                            [matTooltip]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][1]
                                                            "
                                                            [class.bg-error]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] ===
                                                                'closed'
                                                            "
                                                            [class.bg-info]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] === 'info'
                                                            "
                                                            [class.bg-warning]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] === 'warn'
                                                            "
                                                            [class.text-error-content]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] ===
                                                                'closed'
                                                            "
                                                            [class.text-info-content]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] === 'info'
                                                            "
                                                            [class.text-warning-content]="
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] === 'warn'
                                                            "
                                                            (click)="
                                                                $event.stopPropagation()
                                                            "
                                                        >
                                                            <icon>{{
                                                                (room_alerts
                                                                    | async)[
                                                                    space.id
                                                                ][0] === 'warn'
                                                                    ? 'warning'
                                                                    : (room_alerts
                                                                            | async)[
                                                                            space
                                                                                .id
                                                                        ][0] ===
                                                                        'info'
                                                                      ? 'info'
                                                                      : 'close'
                                                            }}</icon>
                                                        </div>
                                                    }
                                                </div>
                                                <div class="max-w-48 space-y-2">
                                                    <div
                                                        class="mr-10 truncate text-left font-medium"
                                                    >
                                                        {{
                                                            space.display_name ||
                                                                space.name ||
                                                                'Meeting Space'
                                                        }}
                                                    </div>
                                                    <div
                                                        class="flex items-center space-x-2 text-sm"
                                                    >
                                                        <icon class="text-info"
                                                            >place</icon
                                                        >
                                                        <p class="truncate">
                                                            {{
                                                                space.location ||
                                                                    (
                                                                        space.zones
                                                                        | level
                                                                    )
                                                                        ?.display_name ||
                                                                    (
                                                                        space.zones
                                                                        | level
                                                                    )?.name
                                                            }}
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex items-center space-x-2 text-sm"
                                                    >
                                                        <icon class="text-info"
                                                            >people</icon
                                                        >
                                                        <p>
                                                            {{
                                                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                                                    | translate
                                                                        : {
                                                                              count:
                                                                                  space.capacity <
                                                                                  1
                                                                                      ? 2
                                                                                      : space.capacity,
                                                                          }
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                name="toggle-space-favourite"
                                                class="absolute right-1 top-1"
                                                [class.text-info]="
                                                    isFavourite(space.id)
                                                "
                                                (click)="toggleFav.emit(space)"
                                            >
                                                <icon
                                                    [className]="
                                                        isFavourite(space.id)
                                                            ? 'material-symbols-rounded'
                                                            : 'material-symbols-outlined'
                                                    "
                                                    >favorite</icon
                                                >
                                            </button>
                                            @if (space.approval) {
                                                <div
                                                    class="absolute bottom-1 right-1 w-14 rounded bg-warning px-2 py-1 text-center text-[0.625rem] font-medium leading-tight text-warning-content"
                                                >
                                                    {{
                                                        'COMMON.APPROVAL_REQUIRED'
                                                            | translate
                                                    }}
                                                </div>
                                            }
                                        </li>
                                    }
                                </ul>
                            } @else {
                                <div
                                    empty
                                    class="flex flex-col items-center justify-center space-y-2 p-16"
                                >
                                    <p class="text-center opacity-30">
                                        {{
                                            'CALENDAR_EVENT.SPACE_SELECT_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        } @else {
                            <div
                                loading
                                class="flex flex-col items-center justify-center space-y-2 p-16"
                            >
                                <mat-spinner [diameter]="32"></mat-spinner>
                                <p class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.SPACE_SELECT_LOADING'
                                            | translate
                                    }}
                                    <!-- <br />
                      {{ loading | async | json }} -->
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div class="h-4"></div>
        <div
            class="sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
        >
            <button btn matRipple class="inverse w-40" (click)="prev.emit()">
                Back
            </button>
            <button btn matRipple class="w-40" (click)="next.emit()">
                Continue
            </button>
        </div>
    `,
    styles: [
        `
            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
            [filter-item] {
                display: flex;
                align-items: center;
                padding: 0 1rem;
                min-height: 2rem;
                font-size: 0.875rem;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 1.25rem;
                margin: 0.25rem;
                max-width: 100%;
                text-align: center;
            }

            [filter-item]:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            [filter-item] > * + * {
                margin-left: 0.5rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        ReactiveFormsModule,
        FormsModule,
        SettingsToggleComponent,
        TranslatePipe,
        BuildingPipe,
        LevelPipe,
    ],
})
export class MeetingFlowSpaceSelectComponent {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _spaces = inject(SpacesService);

    public readonly prev = output();
    public readonly next = output();

    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly use_region = settingSignal('use_region', false);
    public readonly max_duration = settingSignal('events.max_duration', 8 * 60);
    public readonly feature_display = settingSignal<Record<string, string>>(
        'events.feature_decriptions',
        {},
    );
    public readonly hide_features = settingSignal<string[]>(
        'events.hide_features',
        [],
    );
    public readonly form = signal(this._event_form.form);

    public readonly options = this._event_form.options$;
    public readonly filters = this._event_form.filters$;

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;

    public readonly regions = this._org.region_list;

    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (region) => (this._org.region = region);
    public readonly setOptions = (o) => this._event_form.setOptions(o);
    public readonly setFilters = (f) => this._event_form.setFilters(f);
    public readonly loading = this._event_form.loading$;

    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;
    public readonly active = signal('');
    public readonly selected = signal('');
    public readonly favourites = settingSignal<string[]>(
        FAV_SPACE_KEY,
        [],
        true,
    );

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking'),
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
    );

    public readonly features = combineLatest([
        this._spaces.features,
        this._event_form.available_spaces,
    ]).pipe(
        map(([features, spaces]) =>
            unique(features.concat(flatten(spaces.map((_) => _.features)))),
        ),
    );

    public field(name: string) {
        return this.form()?.getRawValue()?.[name];
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = this._event_form.filters;
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this._event_form.setFilters({ features: new_list });
    }

    public isFavourite(space_id: string) {
        return this.favourites().includes(space_id);
    }
}
