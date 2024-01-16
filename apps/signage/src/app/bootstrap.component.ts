import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AsyncHandler, Identity } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { of } from 'rxjs';
import { catchError, first, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
    selector: '[bootstrap]',
    template: `
        <div
            form
            class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-base-100 overflow-hidden flex flex-col items-center shadow rounded"
        >
            <header
                class="px-4 py-2 bg-primary text-white w-full text-lg font-medium mb-2"
            >
                Signage Kiosk Setup
            </header>
            <ng-container *ngIf="!loading; else load_state">
                <label>Select a Building from the dropdown below</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        #select
                        building
                        [ngModel]="(active_building | async)?.id"
                        (ngModelChange)="setBuilding($event)"
                        placeholder="Select building"
                    >
                        <mat-option
                            *ngFor="let option of buildings | async"
                            [value]="option"
                        >
                            {{ option.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <ng-container *ngIf="(displays | async)?.length">
                    <label>Select a display from the dropdown below</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            #select
                            building
                            [(ngModel)]="active_display"
                            placeholder="Select building"
                        >
                            <mat-option
                                *ngFor="let option of displays | async"
                                [value]="option"
                            >
                                {{ option.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </ng-container>
                <button
                    btn
                    matRipple
                    class="mb-2"
                    [disabled]="!active_building && !active_display"
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
        switchMap((_) =>
            showMetadata(_.id, 'signage-displays').pipe(
                catchError(() => of({ details: [] } as any))
            )
        ),
        map(({ details }) => (details instanceof Array ? details : [])),
        shareReplay(1)
    );

    constructor(
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router
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
                    const bld = this._org.buildings.find(
                        ({ id }) => id === params.get('building')
                    );
                    if (bld) {
                        this.setBuilding(bld);
                        this.bootstrapKiosk();
                    }
                }
            })
        );
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }

    public setBuilding(bld: Building) {
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
        if (!bld?.id || !this.active_display?.id || !localStorage) {
            this.loading = '';
            return;
        }
        localStorage.setItem('SIGNAGE.building', bld.id);
        localStorage.setItem('SIGNAGE.display', this.active_display.id);
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
