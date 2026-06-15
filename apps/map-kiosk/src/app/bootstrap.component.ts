import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    Building,
    BuildingLevel,
    Identity,
    OrganisationService,
    Region,
    VERSION,
} from '@placeos/common';
import {
    SettingsToggleComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { first } from 'rxjs/operators';

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="bg-base-200 absolute inset-0 z-0"></div>
        <div
            form
            class="border-base-200 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
        >
            <header
                class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
            >
                <div>
                    {{ 'COMMON.MAP_KIOSK' | translate }}
                </div>
                <div class="relative overflow-hidden rounded-sm px-2 py-1">
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-10"
                    ></div>
                    <div class="relative z-10 font-mono text-sm uppercase">
                        {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                    </div>
                </div>
            </header>
            @if (!loading()) {
                <div class="flex flex-col px-4">
                    @if (regions().length > 1) {
                        <label>Select a region from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                building
                                [ngModel]="active_region()"
                                (ngModelChange)="setRegion($event)"
                                placeholder="Select region"
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
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (buildings().length) {
                        <label>Select a building from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                building
                                [ngModel]="active_building()"
                                (ngModelChange)="setBuilding($event)"
                                placeholder="Select building"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                active_building()
                                                    ?.display_name ||
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
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-60"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (levels().length && active_building()) {
                        <div></div>
                        <label>Select a level from the dropdown below</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                level
                                [ngModel]="active_level()"
                                (ngModelChange)="active_level.set($event)"
                                placeholder="Select level"
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
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        @if (active_level()?.tags.includes('parking')) {
                            <settings-toggle
                                [ngModel]="parking()"
                                (ngModelChange)="parking.set($event)"
                                class="mt-2"
                                >Show as fixed parking display</settings-toggle
                            >
                        }
                    }
                    @if (rotations().length) {
                        <div></div>
                        <label>
                            Please select an orientation from the dropdown below
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                [ngModel]="active_rotation()"
                                (ngModelChange)="active_rotation.set($event)"
                                placeholder="Select orientation"
                            >
                                @for (option of rotations(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (locations().length) {
                        <div></div>
                        <label>
                            Please select an fixed location from the dropdown
                            below
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                #select
                                [ngModel]="active_location()"
                                (ngModelChange)="active_location.set($event)"
                                placeholder="Select location"
                            >
                                @for (option of locations(); track option) {
                                    <mat-option [value]="option">
                                        <div class="leading-tight">
                                            <div>
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="font-mono text-[0.625rem] opacity-30"
                                            >
                                                <span class="hidden"
                                                    >&nbsp;[</span
                                                >{{ option.id
                                                }}<span class="hidden">]</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </div>
            } @else {
                <div class="m-auto flex flex-col items-center p-8">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            }
            @if (!loading()) {
                <div
                    class="border-base-200 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="!active_building() && !active_level()"
                        (click)="bootstrapKiosk()"
                    >
                        Finish Setup
                    </button>
                </div>
            }
        </div>
        <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
            <div class="text-xs opacity-40">
                {{ 'COMMON.CONTROLS_VERSION' | translate }}: {{ version.hash }}
            </div>
            <div class="text-xs opacity-40">
                {{ version.time | date: 'longDate' }}
                ({{ version.time | date: 'shortTime' }})
            </div>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }

            label {
                padding-top: 1rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        SettingsToggleComponent,
        CommonModule,
        FormsModule,
        TranslatePipe,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public get version() {
        return VERSION;
    }

    /** Loading state of the bootstrap */
    public readonly loading = signal<string | null>(null);
    /** Actively selected building */
    public readonly active_region = signal<Region | null>(null);
    /** Actively selected building */
    public readonly active_building = signal<Building | null>(null);
    /** Actively selected level */
    public readonly active_level = signal<BuildingLevel | null>(null);
    /** Actively selected level */
    public readonly active_rotation = signal<Identity | null>(null);
    /** Actively selected location */
    public readonly active_location = signal<Identity | null>(null);
    /** Whether to show the map as a parking view */
    public readonly parking = signal(false);

    public readonly rotations = signal<Identity[]>([]);

    public readonly regions = toSignal(this._org.region_list, {
        initialValue: [],
    });
    public readonly buildings = toSignal(this._org.active_buildings, {
        initialValue: [],
    });
    public readonly levels = toSignal(this._org.active_levels, {
        initialValue: [],
    });

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

    /** List of available locations */
    public readonly locations = computed((): readonly Identity[] => {
        const active_level = this.active_level();
        if (!active_level) {
            return [];
        }
        return active_level.locations || [];
    });

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.active_region.set(this._org.region);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('osk')) {
                    const osk_enabled = params.get('osk') === 'true';
                    localStorage.setItem('OSK.enabled', `${osk_enabled}`);
                }
                if (params.has('clear') && params.get('clear') === 'true') {
                    localStorage.removeItem('KIOSK.building');
                    localStorage.removeItem('KIOSK.level');
                    localStorage.removeItem('KIOSK.parking');
                    localStorage.removeItem('KIOSK.orientation');
                }
                if (params.has('level')) {
                    const level = this._org.levelWithID([params.get('level')]);
                    if (level) {
                        this.active_level.set(level);
                        this.bootstrapKiosk();
                    }
                }
            }),
        );
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    public updateRotations() {
        this.rotations.set([]);
        const active_building = this.active_building();
        if (!active_building) {
            this.active_rotation.set(null);
            return;
        }
        const orientations = active_building.orientations;
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

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public bootstrapKiosk() {
        this.loading.set('Bootstrapping application...');
        const active_level = this.active_level();
        const active_building = this.active_building();
        const active_rotation = this.active_rotation();
        const active_location = this.active_location();
        const parking = this.parking();
        if (active_level) {
            if (localStorage) {
                localStorage.setItem(
                    'KIOSK.building',
                    active_building?.id || active_level.parent_id,
                );
                localStorage.setItem('KIOSK.level', active_level.id);
                if (parking) localStorage.setItem('KIOSK.parking', `true`);
                if (active_rotation) {
                    localStorage.setItem(
                        'KIOSK.orientation',
                        `${active_rotation.id}`,
                    );
                }
                if (active_location) {
                    localStorage.setItem(
                        'KIOSK.location',
                        `${active_location.id}`,
                    );
                }
            }
            this._router.navigate([parking ? '/parking' : '/explore']);
        }
        this.loading.set(null);
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading.set('Checking for existing parameters...');
        const building_id = localStorage?.getItem('KIOSK.building');
        const level_id = localStorage?.getItem('KIOSK.level');
        const parking = localStorage?.getItem('KIOSK.parking');
        if (building_id && level_id) {
            this._router.navigate([parking ? '/parking' : '/explore']);
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.loading.set(null);
    }
}
