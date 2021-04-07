import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseClass, Identity } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';

@Component({
    selector: '[bootstrap]',
    template: `
        <div
            form
            class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white overflow-hidden flex flex-col items-center shadow rounded"
        >
            <header
                class="px-4 py-2 bg-primary text-white w-full text-lg font-medium mb-2"
            >
                Map Kiosk Setup
            </header>
            <ng-container *ngIf="!loading; else load_state">
                <div *ngIf="buildings && buildings.length">
                    <label>Select a building from the dropdown below</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            [(value)]="active_building"
                            (valueChange)="updateRotations()"
                            placeholder="Select building"
                        >
                            <mat-option
                                *ngFor="let option of buildings"
                                [value]="option"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div *ngIf="levels && levels.length">
                    <label>Select a level from the dropdown below</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            [(value)]="active_level"
                            placeholder="Select level"
                        >
                            <mat-option
                                *ngFor="let option of levels"
                                [value]="option"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div *ngIf="rotations && rotations.length">
                    <label>
                        Please select an orientation from the dropdown below
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            [(value)]="active_rotation"
                            placeholder="Select orientation"
                        >
                            <mat-option
                                *ngFor="let option of rotations"
                                [value]="option"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div *ngIf="locations && locations.length">
                    <label>
                        Please select an fixed location from the dropdown below
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            [(value)]="active_location"
                            placeholder="Select location"
                        >
                            <mat-option
                                *ngFor="let option of locations"
                                [value]="option"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <button
                    mat-button
                    class="mb-2"
                    [disabled]="!active_building && !active_level"
                    (click)="bootstrapKiosk()"
                >
                    Finish Setup
                </button>
            </ng-container>
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
            :host > div {
                width: 24rem;
                max-width: calc(100vw - 2rem);
            }

            mat-form-field {
                width: 100%;
            }

            [form] > div {
                padding: 0 1em;
            }
        `,
    ],
})
export class BootstrapComponent extends BaseClass implements OnInit {
    /** Loading state of the bootstrap */
    public loading: string;
    /** Actively selected building */
    public active_building: Building;
    /** Actively selected level */
    public active_level: BuildingLevel;
    /** Actively selected level */
    public active_rotation: Identity;
    /** Actively selected location */
    public active_location: Identity;

    public rotations: Identity[] = [];

    /** List of available buildings */
    public get buildings(): Building[] {
        return this._org.buildings;
    }

    /** List of available levels */
    public get levels(): readonly BuildingLevel[] {
        if (!this.active_building) {
            return [];
        }
        return this._org.levelsForBuilding(this.active_building) || [];
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
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear') === 'true') {
                    localStorage.removeItem('KIOSK.building');
                    localStorage.removeItem('KIOSK.level');
                    localStorage.removeItem('KIOSK.orientation');
                }
            })
        );
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    public updateRotations() {
        const orientations = this.active_building.orientations;
        const rotations: Identity[] = [];
        for (const key in orientations) {
            if (orientations.hasOwnProperty(key)) {
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
        if (this.active_building && this.active_level) {
            if (localStorage) {
                localStorage.setItem('KIOSK.building', this.active_building.id);
                localStorage.setItem('KIOSK.level', this.active_level.id);
                if (this.active_rotation) {
                    localStorage.setItem(
                        'KIOSK.orientation',
                        this.active_rotation.value
                    );
                }
                if (this.active_location) {
                    localStorage.setItem(
                        'KIOSK.location',
                        `${this.active_location.id}`
                    );
                }
            }
            this._router.navigate(['/explore']);
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
                this._router.navigate(['/explore']);
            } else {
                this.checkForOldBootstrapParameters();
            }
        }
        this.loading = null;
    }

    private checkForOldBootstrapParameters() {
        const building_id = localStorage.getItem('KIOSK.bld');
        const level_id = localStorage.getItem('KIOSK.lvl');
        const orientation = localStorage.getItem('map_orientation');
        if (orientation) {
            switch (orientation) {
                case 'portrait':
                    localStorage.setItem('KIOSK.orientation', `1`);
                    break;
                case 'landscape_reverse':
                    localStorage.setItem('KIOSK.orientation', `2`);
                    break;
                case 'portrait_reverse':
                    localStorage.setItem('KIOSK.orientation', `3`);
                    break;
            }
        }
        if (building_id && level_id) {
            localStorage.setItem('KIOSK.building', building_id);
            localStorage.setItem('KIOSK.level', level_id);
            this._router.navigate(['/explore']);
        }
    }
}
