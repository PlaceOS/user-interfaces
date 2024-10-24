import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

import { AsyncHandler, Identity, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { ReportsStateService } from './reports-state.service';
import { combineLatest } from 'rxjs';
import { endOfDay, startOfDay } from 'date-fns';

@Component({
    selector: 'reports-options',
    template: `
        <div
            class="bg-base-100 h-20 w-full flex items-center space-x-2 p-4 z-20 border-b border-base-200 print:hidden"
        >
            <mat-form-field appearance="outline" class="w-60 no-subscript">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="setZones($event)"
                    placeholder="All Levels"
                    multiple
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="text-xs opacity-30" *ngIf="use_region">
                                {{ (level.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>{{ level.display_name || level.name }}</div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="end"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <button
                btn
                matRipple
                [disabled]="!!loading"
                (click)="generate.emit()"
            >
                <mat-spinner *ngIf="loading" [diameter]="32"></mat-spinner>
                <p *ngIf="!loading">Generate Report</p>
            </button>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [disabled]="!has_data"
                matTooltip="Download Report Data"
                (click)="download.emit()"
            >
                <app-icon>download</app-icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [disabled]="!has_data"
                matTooltip="Print Report"
                (click)="print()"
            >
                <app-icon>print</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            button[icon][disabled] {
                background-color: var(--n) !important;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em;
            }
        `,
    ],
})
export class ReportsOptionsComponent extends AsyncHandler {
    @Input() public loading: boolean = false;
    @Input() public has_data: boolean = false;

    @Output() public printing = new EventEmitter<boolean>();
    @Output() public generate = new EventEmitter<void>();
    @Output() public download = new EventEmitter<void>();
    /** List of selected levels */
    public zones: string[] = [];
    public start: number = startOfDay(Date.now()).getTime();
    public end: number = endOfDay(Date.now()).getTime();

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public type_list: string[] = this.types.map((i) => `${i.id}`);
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );

    public page = '';

    public readonly setStartDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { start: date },
            queryParamsHandling: 'merge',
        });
    };

    public readonly setEndDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { end: endOfDay(date).valueOf() },
            queryParamsHandling: 'merge',
        });
    };

    public readonly setZones = (zones) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get week_start() {
        return this._settings.get('app.week_start');
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
        this.page = this._router.url;
        this.subscription(
            'routing',
            this._router.events.subscribe(() => {
                this.page = this._router.url;
            }),
        );
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
                            (bld) => bld.id === level.parent_id,
                        );
                        this.zones = zones;
                    }
                }
                if (params.has('start')) this.start = +params.get('start');
                if (params.has('end')) this.end = +params.get('end');
            }),
        );
    }

    public print() {
        this.printing.emit(true);
        setTimeout(() => {
            window.print();
            this.printing.emit(false);
        }, 300);
    }
}
