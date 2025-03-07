import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AsyncHandler, Identity, SettingsService } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    Region,
} from '@placeos/organisation';
import { first } from 'rxjs/operators';

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="absolute inset-0 z-0 bg-base-200"></div>
        <div
            form
            class="relative z-10 mx-auto my-8 w-[28rem] max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow"
        >
            <header
                class="flex w-full items-center justify-between bg-secondary px-4 py-3 text-xl font-medium text-secondary-content"
            >
                <div>{{ 'APP.VISITOR_KIOSK.APP' | translate }}</div>
                <div class="relative overflow-hidden rounded px-2 py-1">
                    <div
                        class="absolute inset-0 z-0 bg-base-100 opacity-10"
                    ></div>
                    <div class="relative z-10 font-mono text-sm uppercase">
                        {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                    </div>
                </div>
            </header>
            <div
                class="flex flex-col space-y-2 px-4"
                *ngIf="!loading; else load_state"
            >
                <ng-container *ngIf="(regions | async)?.length > 1">
                    <label>
                        {{ 'APP.VISITOR_KIOSK.SELECT_REGION_MSG' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
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
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1 truncate">
                                        {{
                                            active_region?.display_name ||
                                                active_region?.name
                                        }}
                                    </div>
                                    <div
                                        class="!mr-4 rounded bg-base-200 px-1.5 font-mono text-[0.625rem]"
                                    >
                                        {{ active_region?.id }}
                                    </div>
                                </div>
                            </mat-select-trigger>
                            <mat-option
                                *ngFor="let option of regions | async"
                                [value]="option"
                            >
                                <div class="leading-tight">
                                    <div>
                                        {{ option.display_name || option.name }}
                                    </div>
                                    <div
                                        class="font-mono text-[0.625rem] opacity-30"
                                    >
                                        <span class="hidden">&nbsp;[</span
                                        >{{ option.id
                                        }}<span class="hidden">]</span>
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
                <ng-container *ngIf="(buildings | async)?.length">
                    <label>
                        {{
                            'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG' | translate
                        }}
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            building
                            [(ngModel)]="active_building"
                            (ngModelChange)="setBuilding($event)"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.SELECT_BUILDING' | translate
                            "
                        >
                            <mat-select-trigger>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1 truncate">
                                        {{
                                            active_building?.display_name ||
                                                active_building?.name
                                        }}
                                    </div>
                                    <div
                                        class="!mr-4 rounded bg-base-200 px-1.5 font-mono text-[0.625rem]"
                                    >
                                        {{ active_building?.id }}
                                    </div>
                                </div>
                            </mat-select-trigger>
                            <mat-option
                                *ngFor="let option of buildings | async"
                                [value]="option"
                            >
                                <div class="leading-tight">
                                    <div>
                                        {{ option.display_name || option.name }}
                                    </div>
                                    <div
                                        class="font-mono text-[0.625rem] opacity-60"
                                    >
                                        <span class="hidden">&nbsp;[</span
                                        >{{ option.id
                                        }}<span class="hidden">]</span>
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
                <ng-container
                    *ngIf="(levels | async)?.length && active_building"
                >
                    <div></div>
                    <label>
                        {{ 'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            level
                            [(ngModel)]="active_level"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.SELECT_LEVEL' | translate
                            "
                        >
                            <mat-select-trigger>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1 truncate">
                                        {{
                                            active_level?.display_name ||
                                                active_level?.name
                                        }}
                                    </div>
                                    <div
                                        class="!mr-4 rounded bg-base-200 px-1.5 font-mono text-[0.625rem]"
                                    >
                                        {{ active_level?.id }}
                                    </div>
                                </div>
                            </mat-select-trigger>
                            <mat-option
                                *ngFor="let option of levels | async"
                                [value]="option"
                            >
                                <div class="leading-tight">
                                    <div>
                                        {{ option.display_name || option.name }}
                                    </div>
                                    <div
                                        class="font-mono text-[0.625rem] opacity-30"
                                    >
                                        <span class="hidden">&nbsp;[</span
                                        >{{ option.id
                                        }}<span class="hidden">]</span>
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
                <ng-container *ngIf="rotations && rotations.length">
                    <div></div>
                    <label>
                        {{
                            'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG'
                                | translate
                        }}
                        Please select an orientation from the dropdown below
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            [(value)]="active_rotation"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.SELECT_ORIENTATION'
                                    | translate
                            "
                        >
                            <mat-option
                                *ngFor="let option of rotations"
                                [value]="option"
                            >
                                <div class="leading-tight">
                                    <div>
                                        {{ option.display_name || option.name }}
                                    </div>
                                    <div
                                        class="font-mono text-[0.625rem] opacity-30"
                                    >
                                        <span class="hidden">&nbsp;[</span
                                        >{{ option.id
                                        }}<span class="hidden">]</span>
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
                <ng-container *ngIf="locations && locations.length">
                    <div></div>
                    <label>
                        {{
                            'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG' | translate
                        }}
                        Please select an fixed location from the dropdown below
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            [(value)]="active_location"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.SELECT_LOCATION' | translate
                            "
                        >
                            <mat-option
                                *ngFor="let option of locations"
                                [value]="option"
                            >
                                <div class="leading-tight">
                                    <div>
                                        {{ option.display_name || option.name }}
                                    </div>
                                    <div
                                        class="font-mono text-[0.625rem] opacity-30"
                                    >
                                        <span class="hidden">&nbsp;[</span
                                        >{{ option.id
                                        }}<span class="hidden">]</span>
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
            </div>
            <div
                class="!mt-4 flex w-full items-center justify-end border-t border-base-300 px-4 py-2"
                *ngIf="!loading"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!active_building && !active_level"
                    (click)="bootstrapKiosk()"
                >
                    Finish Setup
                </button>
            </div>
        </div>
        <ng-template #load_state>
            <div class="m-auto flex flex-col items-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
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
    standalone: false,
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    /** Loading state of the bootstrap */
    public loading: string;
    /** Actively selected building */
    public active_region: Region;
    /** Actively selected building */
    public active_building: Building;
    /** Actively selected level */
    public active_level: BuildingLevel;
    /** Actively selected level */
    public active_rotation: Identity;
    /** Actively selected location */
    public active_location: Identity;

    public rotations: Identity[] = [];

    public readonly regions = this._org.region_list;
    public readonly buildings = this._org.active_buildings;
    public readonly levels = this._org.active_levels;

    public setRegion(region: Region) {
        this._org.region = region;
        this.active_building = undefined;
        this.active_level = undefined;
        this.updateRotations();
    }

    public setBuilding(building: Building) {
        this._org.building = building;
        this.active_level = undefined;
        this.updateRotations();
    }

    /** List of available locations */
    public get locations(): readonly Identity[] {
        if (!this.active_level) {
            return [];
        }
        return this.active_level.locations || [];
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.active_region = this._org.region;
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
                    localStorage.removeItem('KIOSK.orientation');
                }
                if (params.has('level')) {
                    const level = this._org.levelWithID([params.get('level')]);
                    if (level) {
                        this.active_level = level;
                        this.bootstrapKiosk();
                    }
                }
            }),
        );
        this.checkBootstrap();
    }

    public updateRotations() {
        this.rotations = [];
        if (!this.active_building) return;
        const orientations = this.active_building.orientations;
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
        this.loading = 'Bootstrapping application...';
        if (this.active_level) {
            if (localStorage) {
                localStorage.setItem(
                    'KIOSK.building',
                    this.active_building?.id || this.active_level.parent_id,
                );
                localStorage.setItem('KIOSK.level', this.active_level.id);
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
            const path = this._settings.get('app.default_route') || 'welcome';
            const route = path.split('/');
            route[0] = `/${route[0]}`;
            this._router.navigate(route);
        }
        this.loading = null;
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading = 'Checking for existing parameters...';
        if (localStorage) {
            const building_id = localStorage.getItem('KIOSK.building');
            const level_id = localStorage.getItem('KIOSK.level');
            if (building_id && level_id) {
                const path =
                    this._settings.get('app.default_route') || 'welcome';
                const route = path.split('/');
                route[0] = `/${route[0]}`;
                this._router.navigate(route);
            }
        }

        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.loading = null;
    }
}
