import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {
    Building,
    BuildingLevel,
    Identity,
    OrganisationService,
    Region,
} from '@placeos/common';

import { TranslatePipe } from './translate.pipe';

/** Location that a kiosk shows, as picked on its setup screen */
export interface KioskLocation {
    building: Building | null;
    level: BuildingLevel;
    orientation: Identity | null;
    location: Identity | null;
}

/**
 * Save the kiosk location to local storage.
 * The building falls back to the parent of the level.
 * An unset orientation or location removes the saved value.
 */
export function saveKioskLocation(kiosk: KioskLocation) {
    const { building, level, orientation, location } = kiosk;
    localStorage.setItem('KIOSK.building', building?.id || level.parent_id);
    localStorage.setItem('KIOSK.level', level.id);
    if (orientation) {
        localStorage.setItem('KIOSK.orientation', `${orientation.id}`);
    } else localStorage.removeItem('KIOSK.orientation');
    if (location) localStorage.setItem('KIOSK.location', `${location.id}`);
    else localStorage.removeItem('KIOSK.location');
}

/** Remove the saved kiosk location from local storage */
export function clearKioskLocation() {
    localStorage.removeItem('KIOSK.building');
    localStorage.removeItem('KIOSK.level');
    localStorage.removeItem('KIOSK.orientation');
    localStorage.removeItem('KIOSK.location');
}

/** Whether local storage has a saved kiosk building and level */
export function hasKioskLocation() {
    return (
        !!localStorage.getItem('KIOSK.building') &&
        !!localStorage.getItem('KIOSK.level')
    );
}

/**
 * Region, building, level, orientation and location selects for the setup
 * screen of a kiosk. Emits `submitted` when the user finishes setup with a
 * level selected. Projected content shows below the level select.
 *
 * ```html
 * <kiosk-location-picker (submitted)="bootstrapKiosk($event)" />
 * ```
 */
@Component({
    selector: 'kiosk-location-picker',
    template: `
        <div class="flex flex-col space-y-2 px-4">
            @if (regions().length > 1) {
                <label id="bootstrap-region-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_REGION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-region-label"
                        #select
                        building
                        [ngModel]="active_region()"
                        (ngModelChange)="setRegion($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_REGION' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_region()?.display_name ||
                                            active_region()?.name
                                    }}
                                </div>
                                <div
                                    class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                >
                                    {{ active_region()?.id }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of regions(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (buildings().length) {
                <label id="bootstrap-building-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-building-label"
                        #select
                        building
                        [ngModel]="active_building()"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_BUILDING' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_building()?.display_name ||
                                            active_building()?.name
                                    }}
                                </div>
                                <div
                                    class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                >
                                    {{ active_building()?.id }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of buildings(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (levels().length && active_building()) {
                <div></div>
                <label id="bootstrap-level-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-level-label"
                        #select
                        level
                        [ngModel]="active_level()"
                        (ngModelChange)="setLevel($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_LEVEL' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_level()?.display_name ||
                                            active_level()?.name
                                    }}
                                </div>
                                <div
                                    class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                >
                                    {{ active_level()?.id }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of levels(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <ng-content />
            }
            @if (rotations().length) {
                <div></div>
                <label id="bootstrap-orientation-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-orientation-label"
                        #select
                        [(ngModel)]="active_rotation"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_ORIENTATION' | translate
                        "
                    >
                        @for (option of rotations(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (locations().length) {
                <div></div>
                <label id="bootstrap-location-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-location-label"
                        #select
                        [(ngModel)]="active_location"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_LOCATION' | translate
                        "
                    >
                        @for (option of locations(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
        <div
            class="border-base-300 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
        >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!active_level()"
                (click)="submit()"
            >
                {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
            </button>
        </div>
        <ng-template #option_item let-option>
            <div class="leading-tight">
                <div>{{ option.display_name || option.name }}</div>
                <div class="font-mono text-[0.625rem] opacity-70">
                    <span class="hidden">&nbsp;[</span>{{ option.id
                    }}<span class="hidden">]</span>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            mat-form-field {
                width: 100%;
            }

            label {
                padding-top: 1rem;
            }
        `,
    ],
    imports: [
        NgTemplateOutlet,
        FormsModule,
        MatFormFieldModule,
        MatRippleModule,
        MatSelectModule,
        TranslatePipe,
    ],
})
export class KioskLocationPickerComponent implements OnInit {
    private _org = inject(OrganisationService);

    /** Emits the picked location when the user finishes setup */
    public readonly submitted = output<KioskLocation>();

    /** Actively selected region */
    public readonly active_region = signal<Region | null>(null);
    /** Actively selected building */
    public readonly active_building = signal<Building | null>(null);
    /** Actively selected level */
    public readonly active_level = signal<BuildingLevel | null>(null);
    /** Actively selected orientation */
    public readonly active_rotation = signal<Identity | null>(null);
    /** Actively selected location */
    public readonly active_location = signal<Identity | null>(null);

    /** Orientations of the active building */
    public readonly rotations = signal<Identity[]>([]);

    public readonly regions = this._org.region_list;
    public readonly buildings = this._org.active_buildings;
    public readonly levels = this._org.active_levels;

    /** Fixed locations of the active level */
    public readonly locations = computed(
        (): readonly Identity[] => this.active_level()?.locations || [],
    );

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this.active_region.set(this._org.region);
    }

    public setRegion(region: Region) {
        this._org.region = region;
        this.active_region.set(region);
        this.active_building.set(null);
        this.active_level.set(null);
        this.active_location.set(null);
        this.updateRotations();
    }

    public setBuilding(building: Building) {
        this._org.building = building;
        this.active_building.set(building);
        this.active_level.set(null);
        this.active_location.set(null);
        this.updateRotations();
    }

    /** Select a level. A location from the old level is cleared. */
    public setLevel(level: BuildingLevel) {
        this.active_level.set(level);
        this.active_location.set(null);
    }

    /** List the orientations of the active building and select the first */
    public updateRotations() {
        const orientations = this.active_building()?.orientations || {};
        const rotations: Identity[] = [];
        for (const key in orientations) {
            if (orientations[key]) {
                rotations.push({
                    id: key,
                    name: `${key.split('_').join(' ')} (${
                        orientations[key] * 90
                    }°)`,
                    value: orientations[key],
                });
            }
        }
        this.rotations.set(rotations);
        this.active_rotation.set(rotations[0] || null);
    }

    /** Emit the picked location when a level is selected */
    public submit() {
        const level = this.active_level();
        if (!level) return;
        this.submitted.emit({
            building: this.active_building(),
            level,
            orientation: this.active_rotation(),
            location: this.active_location(),
        });
    }
}
