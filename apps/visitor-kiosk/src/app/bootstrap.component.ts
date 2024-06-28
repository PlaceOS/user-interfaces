import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
        <div class="absolute inset-0 bg-base-200 z-0"></div>
        <div
            form
            class="relative my-8 mx-auto bg-base-100 overflow-hidden shadow rounded-lg border border-base-300 w-[28rem] max-w-[calc(100%-2rem)] z-10"
        >
            <header
                class="px-4 py-3 bg-secondary text-secondary-content w-full text-xl font-medium flex items-center justify-between"
            >
                <div>Visitor Kiosk</div>
                <div class="px-2 py-1 rounded text-sm font-mono">SETUP</div>
            </header>
            <div
                class="px-4 flex flex-col space-y-2"
                *ngIf="!loading; else load_state"
            >
                <ng-container *ngIf="(regions | async)?.length > 1">
                    <label>Select a region from the dropdown below</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            building
                            [(ngModel)]="active_region"
                            (ngModelChange)="setRegion($event)"
                            placeholder="Select region"
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
                                        class="text-[0.625rem] font-mono !mr-4 bg-base-200 rounded px-1.5"
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
                                        class="text-[0.625rem] opacity-30 font-mono"
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
                    <label>Select a building from the dropdown below</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            building
                            [(ngModel)]="active_building"
                            (ngModelChange)="setBuilding($event)"
                            placeholder="Select building"
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
                                        class="text-[0.625rem] font-mono !mr-4 bg-base-200 rounded px-1.5"
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
                                        class="text-[0.625rem] opacity-60 font-mono"
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
                    <label>Select a level from the dropdown below</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            level
                            [(ngModel)]="active_level"
                            placeholder="Select level"
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
                                        class="text-[0.625rem] font-mono !mr-4 bg-base-200 rounded px-1.5"
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
                                        class="text-[0.625rem] opacity-30 font-mono"
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
                        Please select an orientation from the dropdown below
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            [(value)]="active_rotation"
                            placeholder="Select orientation"
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
                                        class="text-[0.625rem] opacity-30 font-mono"
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
                        Please select an fixed location from the dropdown below
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            #select
                            [(value)]="active_location"
                            placeholder="Select location"
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
                                        class="text-[0.625rem] opacity-30 font-mono"
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
                class="w-full px-4 py-2 !mt-4 flex items-center justify-end border-t border-base-300"
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
            <div class="flex flex-col items-center p-8 m-auto">
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
        private _router: Router
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
            })
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
                    this.active_building?.id || this.active_level.parent_id
                );
                localStorage.setItem('KIOSK.level', this.active_level.id);
                if (this.active_rotation) {
                    localStorage.setItem(
                        'KIOSK.orientation',
                        `${this.active_rotation.id}`
                    );
                }
                if (this.active_location) {
                    localStorage.setItem(
                        'KIOSK.location',
                        `${this.active_location.id}`
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
