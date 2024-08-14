import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AsyncHandler, Identity } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { PlaceSystem, querySystems, showMetadata } from '@placeos/ts-client';
import { of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

@Component({
    selector: '[bootstrap]',
    template: `
        <div class="absolute inset-0 bg-base-200">
            <div
                form
                class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-base-100 overflow-hidden flex flex-col items-center shadow rounded w-[30rem] max-w-[calc(100vw-2rem)]"
            >
                <header
                    class="px-4 py-3 bg-info text-info-content w-full text-lg font-medium mb-2"
                >
                    Signage Kiosk Setup
                </header>
                <main *ngIf="!loading; else load_state" class="px-4 py-2">
                    <label>Select a Building from the dropdown below</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            building
                            [ngModel]="(active_building | async)?.id"
                            (ngModelChange)="setBuilding($event)"
                            placeholder="Select Building"
                        >
                            <mat-option
                                *ngFor="let option of buildings | async"
                                [value]="option.id"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <label>Select a display from the dropdown below</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            building
                            [(ngModel)]="active_display"
                            placeholder="Select Display"
                            [disabled]="!(displays | async)?.length"
                        >
                            <mat-option
                                *ngFor="let option of displays | async"
                                [value]="option.id"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div>{{ option.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{
                                            building(option)?.display_name ||
                                                building(option)?.name ||
                                                'Unknown Building'
                                        }}
                                        -
                                        {{
                                            level(option)?.display_name ||
                                                level(option)?.name ||
                                                'Unknown Level'
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="mb-2 w-full"
                        [disabled]="!active_building || !active_display"
                        (click)="bootstrapKiosk()"
                    >
                        Finish Setup
                    </button>
                </main>
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

            [form] > div {
                padding: 0 1em;
            }
        `,
    ],
})
export class BootstrapComponent extends AsyncHandler implements OnInit {
    /** Loading state of the bootstrap */
    public loading: string = '';
    /** Actively selected building */
    public readonly active_building = this._org.active_building;
    /** Actively selected building */
    public active_display: any;

    public rotations: Identity[] = [];

    public readonly buildings = this._org.building_list;

    public readonly displays = this.active_building.pipe(
        filter((_) => !!_),
        switchMap((_) =>
            querySystems({
                zone_id: this._org.organisation?.id,
                limit: 500,
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

    constructor(
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear') === 'true') {
                    localStorage.removeItem('SIGNAGE.building');
                    localStorage.removeItem('SIGNAGE.display');
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
        this.loading = 'Bootstrapping application...';
        const bld = await this.active_building
            .pipe(first((_) => !!_))
            .toPromise();
        if (!bld?.id || !this.active_display || !localStorage) {
            this.loading = '';
            return;
        }
        localStorage.setItem('SIGNAGE.building', bld.id);
        localStorage.setItem('SIGNAGE.display', this.active_display);
        this._router.navigate(['/signage']);
        this.loading = '';
    }

    /**
     * Check for any existing bootstrapped values
     */
    private checkBootstrap() {
        this.loading = 'Checking for existing parameters...';
        const bld_id = localStorage?.getItem('SIGNAGE.building');
        const display_id = localStorage?.getItem('SIGNAGE.display');
        if (bld_id && display_id) {
            this._router.navigate(['/signage']);
        }
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.loading = '';
    }
}
