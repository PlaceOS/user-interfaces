import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass, Identity } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { ReportsStateService } from './reports-state.service';

@Component({
    selector: 'reports-options',
    template: `
        <mat-form-field appearance="outline" class="w-48">
            <mat-select
                multiple
                [ngModel]="(options | async)?.zones"
                (ngModelChange)="setZones($event)"
                placeholder="Select Levels..."
            >
                <mat-option value="All">All Levels</mat-option>
                <mat-option
                    *ngFor="let level of levels | async"
                    [value]="level.id"
                >
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-64">
            <mat-date-range-input [rangePicker]="picker">
                <input
                    matStartDate
                    [ngModel]="(options | async)?.start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                    placeholder="Start date"
                />
                <input
                    matEndDate
                    [ngModel]="(options | async)?.end"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                    placeholder="End date"
                />
            </mat-date-range-input>
            <mat-datepicker-toggle
                matSuffix
                [for]="picker"
            ></mat-datepicker-toggle>
            <mat-date-range-picker #picker></mat-date-range-picker>
        </mat-form-field>
        <button
            mat-button
            class="ml-4"
            [disabled]="!!(loading | async)"
            (click)="generateReport()"
        >
            <mat-spinner *ngIf="loading | async" [diameter]="32"></mat-spinner>
            <p *ngIf="!(loading | async)">Generate Report</p>
        </button>
        <button
            mat-button
            class="ml-4"
            [disabled]="!(bookings | async)?.length"
            (click)="downloadReport()"
        >
            <p>Download Report</p>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 1em;
            }

            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                margin-left: 1em;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em;
            }
        `,
    ],
})
export class ReportsOptionsComponent extends BaseClass {
    /** List of selected levels */
    public zones: string[] = [];

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public type_list: string[] = this.types.map((i) => `${i.id}`);
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    public readonly loading = this._state.loading;

    public readonly bookings = this._state.bookings;

    public readonly options = this._state.options;

    public readonly generateReport = () => this._state.generateReport();

    public readonly downloadReport = () => this._state.downloadReport();

    public readonly setStartDate = (date) =>
        this._state.setOptions({ start: new Date(date) });

    public readonly setEndDate = (date) =>
        this._state.setOptions({ end: new Date(date) });

    public readonly setZones = (zones) => this._state.setOptions({ zones });

    constructor(
        private _state: ReportsStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) {
                            return;
                        }
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id
                        );
                        this.setZones(zones);
                    }
                }
            })
        );
    }
}
