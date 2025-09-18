import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    firstTruthyValueFrom,
    i18n,
    Identity,
    OrganisationService,
} from '@placeos/common';
import { PlaceSystem, querySystems } from '@placeos/ts-client';
import { of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { VirtualKeyboardComponent } from '@placeos/components';

const STORE_PREFIX = 'PlaceOS.SIGNAGE';
const STORE_DISPLAY_KEY = `${STORE_PREFIX}.display`;
const STORE_BUILDING_KEY = `${STORE_PREFIX}.building`;

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="absolute inset-0 bg-base-300">
            <div
                form
                class="absolute left-1/2 top-2 flex w-[30rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 transform flex-col items-center overflow-hidden rounded bg-base-100 shadow"
            >
                <header
                    class="mb-2 w-full bg-secondary px-4 py-3 text-lg font-medium text-secondary-content"
                >
                    {{ 'APP.SIGNAGE.BOOTSTRAP_TITLE' | translate }}
                </header>
                @if (!loading) {
                    <main class="px-4 py-2">
                        <!-- <label for="building">{{'APP.SIGNAGE.BOOTSTRAP_BUILDING' | translate}}</label>
                            <mat-form-field appearance="outline">
                            <mat-select
                                #select
                                name="building"
                                [ngModel]="(active_building | async)?.id"
                                (ngModelChange)="setBuilding($event)"
                                [placeholder]="'APP.SIGNAGE.BOOTSTRAP_BUILDING_SELECT' | translate"
                                >
                                <mat-option
                                *ngFor="let option of buildings | async"
                                [value]="option.id"
                                >
                                {{ option.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field> -->
                        <label for="display">
                            {{ 'APP.SIGNAGE.BOOTSTRAP_DISPLAY' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                #select
                                name="display"
                                [(ngModel)]="active_display"
                                [placeholder]="
                                    'APP.SIGNAGE.BOOTSTRAP_DISPLAY_SELECT'
                                        | translate
                                "
                                [disabled]="!(displays | async)?.length"
                            >
                                @for (
                                    option of displays | async;
                                    track option
                                ) {
                                    <mat-option [value]="option.id">
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ option.name }}</div>
                                            <div class="text-xs opacity-30">
                                                {{
                                                    building(option)
                                                        ?.display_name ||
                                                        building(option)
                                                            ?.name ||
                                                        'Unknown Building'
                                                }}
                                                -
                                                {{
                                                    level(option)
                                                        ?.display_name ||
                                                        level(option)?.name ||
                                                        'Unknown Level'
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <button
                            btn
                            matRipple
                            class="mb-2 w-full"
                            [disabled]="!active_building || !active_display"
                            (click)="bootstrapKiosk()"
                        >
                            {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
                        </button>
                    </main>
                } @else {
                    <div class="m-auto flex flex-col items-center p-8">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ loading }}</p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }

            [form] > div {
                padding: 0 1em;
            }
        `,
    ],
    standalone: false,
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    /** Loading state of the bootstrap */
    public loading = '';
    /** Actively selected building */
    public readonly active_building = this._org.active_building;
    /** Actively selected display */
    public active_display: any;

    public rotations: Identity[] = [];

    public readonly buildings = this._org.building_list;

    public readonly displays = this.active_building.pipe(
        filter((_) => !!_),
        switchMap((_) =>
            querySystems({
                zone_id: this._org.organisation?.id,
                limit: 500,
                fields: ['id', 'name', 'display_name', 'email'].join(','),
                signage: true,
            }).pipe(catchError(() => of({ data: [] }))),
        ),
        map((r) =>
            r.data.sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            ),
        ),
        shareReplay(1),
    );

    public level(system: PlaceSystem) {
        return this._org.levelWithID(system.zones as any);
    }

    public building(system: PlaceSystem) {
        return this._org.buildings.find(({ id }) => system.zones.includes(id));
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear') === 'true') {
                    localStorage.removeItem(STORE_DISPLAY_KEY);
                    localStorage.removeItem(STORE_BUILDING_KEY);
                }
                if (params.has('building')) {
                    this.setBuilding(params.get('building'));
                }
                if (params.has('display')) {
                    this.active_display = params.get('display');
                    this.bootstrapKiosk();
                }
            }),
        );
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    public setBuilding(bld_id: string) {
        const bld = this._org.buildings.find(({ id }) => id === bld_id);
        if (!bld) return;
        this._org.building = bld;
    }

    /**
     * Store bootstrapped values and navigate to the main page
     */
    public async bootstrapKiosk() {
        this.loading = i18n('APP.SIGNAGE.BOOTSTRAP_LOADING');
        const bld = await firstTruthyValueFrom(this.active_building);
        if (!bld?.id || !this.active_display || !localStorage) {
            this.loading = '';
            return;
        }
        localStorage.setItem(STORE_BUILDING_KEY, bld.id);
        localStorage.setItem(STORE_DISPLAY_KEY, this.active_display);
        this._router.navigate(['/signage', this.active_display]);
        this.loading = '';
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading = i18n('APP.SIGNAGE.BOOTSTRAP_LOADING_CHECK');
        const bld_id = localStorage?.getItem(STORE_BUILDING_KEY);
        const display_id = localStorage?.getItem(STORE_DISPLAY_KEY);

        if (bld_id && display_id) {
            this._router.navigate(['/signage', display_id]);
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.loading = '';
    }
}
