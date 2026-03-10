import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    Building,
    BuildingLevel,
    firstTruthyValueFrom,
    Identity,
    isPublicMode,
    OrganisationService,
    Region,
    SettingsService,
    VERSION,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe, VirtualKeyboardComponent } from '@placeos/components';

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="bg-base-200 absolute inset-0 z-0">
            <div
                form
                class="border-base-300 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <div>{{ 'APP.VISITOR_KIOSK.APP' | translate }}</div>
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
                    <div class="flex flex-col space-y-2 px-4">
                        @if ((regions | async)?.length > 1) {
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    building
                                    [(ngModel)]="active_region"
                                    (ngModelChange)="setRegion($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_region()
                                                        ?.display_name ||
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
                                    @for (
                                        option of regions | async;
                                        track option
                                    ) {
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
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if ((buildings | async)?.length) {
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    building
                                    [(ngModel)]="active_building"
                                    (ngModelChange)="setBuilding($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_BUILDING'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
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
                                    @for (
                                        option of buildings | async;
                                        track option
                                    ) {
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
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if ((levels | async)?.length && active_building()) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    level
                                    [(ngModel)]="active_level"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LEVEL'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_level()
                                                        ?.display_name ||
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
                                    @for (
                                        option of levels | async;
                                        track option
                                    ) {
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
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (rotations && rotations.length) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG'
                                        | translate
                                }}
                                Please select an orientation from the dropdown
                                below
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    [(value)]="active_rotation"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_ORIENTATION'
                                            | translate
                                    "
                                >
                                    @for (option of rotations; track option) {
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
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (locations && locations.length) {
                            <div></div>
                            <label>
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG'
                                        | translate
                                }}
                                Please select an fixed location from the
                                dropdown below
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    #select
                                    [(value)]="active_location"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LOCATION'
                                            | translate
                                    "
                                >
                                    @for (option of locations; track option) {
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
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
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
                        class="border-base-300 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
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
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-40">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Setup is disabled while this kiosk is in public
                            mode.
                        </p>
                    </div>
                </div>
            }
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
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _startup_action = '';

    public get version() {
        return VERSION;
    }

    /** Loading state of the bootstrap */
    public readonly loading = signal('');
    /** Actively selected building */
    public readonly active_region = signal<Region>(undefined);
    /** Actively selected building */
    public readonly active_building = signal<Building>(undefined);
    /** Actively selected level */
    public readonly active_level = signal<BuildingLevel>(undefined);
    /** Actively selected level */
    public active_rotation: Identity;
    /** Actively selected location */
    public active_location: Identity;

    public rotations: Identity[] = [];

    public readonly regions = this._org.region_list;
    public readonly buildings = this._org.active_buildings;
    public readonly levels = this._org.active_levels;
    public readonly is_public_mode = isPublicMode;

    public setRegion(region: Region) {
        this._org.region = region;
        this.active_building.set(undefined);
        this.active_level.set(undefined);
        this.updateRotations();
    }

    public setBuilding(building: Building) {
        this._org.building = building;
        console.log('Set Building:', building, this.active_building());
        this.active_level.set(undefined);
        this.updateRotations();
    }

    /** List of available locations */
    public get locations(): readonly Identity[] {
        if (!this.active_level()) {
            return [];
        }
        return this.active_level().locations || [];
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.active_region.set(this._org.region);
        this._startup_action = this.getActionParamFromUrl();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('action')) {
                    this._startup_action =
                        params.get('action')?.trim().toLowerCase() || '';
                }
                if (params.has('osk')) {
                    const osk_enabled = params.get('osk') === 'true';
                    localStorage.setItem('OSK.enabled', `${osk_enabled}`);
                }
                if (params.has('clear') && params.get('clear') === 'true') {
                    localStorage.removeItem('KIOSK.building');
                    localStorage.removeItem('KIOSK.level');
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
        this.checkBootstrap();
    }

    public updateRotations() {
        this.rotations = [];
        if (!this.active_building()) return;
        const orientations = this.active_building().orientations;
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
        this.rotations = rotations;
        this.active_rotation = this.rotations[0];
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public bootstrapKiosk() {
        this.loading.set('Bootstrapping application...');
        if (this.active_level()) {
            if (localStorage) {
                localStorage.setItem(
                    'KIOSK.building',
                    this.active_building()?.id || this.active_level().parent_id,
                );
                localStorage.setItem('KIOSK.level', this.active_level().id);
                if (this.active_rotation) {
                    localStorage.setItem(
                        'KIOSK.orientation',
                        `${this.active_rotation.id}`,
                    );
                }
                if (this.active_location) {
                    localStorage.setItem(
                        'KIOSK.location',
                        `${this.active_location.id}`,
                    );
                }
            }
            this.navigateToStartupRoute();
        }
        this.loading.set('');
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading.set('Checking for existing parameters...');
        if (this._startup_action === 'preferences') {
            this.navigateToStartupRoute();
            this.loading.set('');
            return;
        }
        if (localStorage) {
            const building_id = localStorage.getItem('KIOSK.building');
            const level_id = localStorage.getItem('KIOSK.level');
            if (building_id && level_id) {
                this._router.navigate(this.getStartupRoute());
            }
        }

        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.loading.set('');
    }

    private getStartupRoute() {
        if (this._startup_action === 'preferences') {
            return ['/checkin', 'preferences'];
        }
        const path = this._settings.get('app.default_route') || 'welcome';
        const route = path.split('/');
        route[0] = `/${route[0]}`;
        return route;
    }

    private navigateToStartupRoute() {
        const route = this.getStartupRoute();
        if (route[0] === '/checkin' && route[1] === 'preferences') {
            this._router.navigate(route, {
                queryParams: this.getMergedQueryParamsFromUrl(),
            });
            return;
        }
        this._router.navigate(route);
    }

    private getActionParamFromUrl() {
        return (
            this.getMergedQueryParamsFromUrl().action?.trim().toLowerCase() ||
            ''
        );
    }

    private getMergedQueryParamsFromUrl() {
        const query_params: Record<string, string> = {};
        try {
            const parsed_url = new URL(
                window.location.href,
                window.location.origin,
            );
            parsed_url.searchParams.forEach((value, key) => {
                query_params[key] = value;
            });
            const hash_route = parsed_url.hash?.replace(/^#/, '') || '';
            const hash_query = hash_route.includes('?')
                ? hash_route.split('?')[1]
                : '';
            new URLSearchParams(hash_query).forEach((value, key) => {
                query_params[key] = value;
            });
        } catch {
            /* Ignore invalid URL and fallback to route params only */
        }
        this._route.snapshot.queryParamMap.keys.forEach((key) => {
            const value = this._route.snapshot.queryParamMap.get(key);
            if (value !== null) {
                query_params[key] = value;
            }
        });
        return query_params;
    }
}
