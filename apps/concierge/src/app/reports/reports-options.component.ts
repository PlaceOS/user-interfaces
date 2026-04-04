import {
    Component,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    Identity,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { endOfDay, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'reports-options',
    template: `
        <div
            class="border-base-200 bg-base-100 z-20 flex h-20 w-full items-center space-x-2 border-b p-4 print:hidden"
        >
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="zones()"
                    (ngModelChange)="setZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level.id) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                }
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <date-range-field [week_start]="week_start" [from]="0">
                <input
                    #startDate
                    [ngModel]="start()"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="end()"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <button
                btn
                matRipple
                [disabled]="!!loading()"
                (click)="generate.emit()"
            >
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
                @if (!loading()) {
                    <p>
                        {{ 'APP.CONCIERGE.REPORTS_GENERATE' | translate }}
                    </p>
                }
            </button>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
                (click)="print()"
            >
                <icon>print</icon>
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
                background-color: var(--neutral) !important;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        DateRangeFieldComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
        CommonModule,
        BuildingPipe,
    ],
})
export class ReportsOptionsComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public readonly loading = input<boolean>(false);
    public readonly has_data = input<boolean>(false);

    public readonly printing = output<boolean>();
    public readonly generate = output<void>();
    public readonly download = output<void>();
    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    public readonly start = signal(startOfDay(Date.now()).getTime());
    public readonly end = signal(endOfDay(Date.now()).getTime());

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public type_list: string[] = this.types.map((i) => `${i.id}`);
    public readonly levels = toSignal(
        combineLatest([
            this._org.active_building,
            this._org.active_region,
        ]).pipe(
            map(([bld, region]) =>
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld),
            ),
        ),
        { initialValue: [] },
    );

    public readonly setStartDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this.start.set(date);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { start: date },
            queryParamsHandling: 'merge',
        });
    };

    public readonly setEndDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        const end = endOfDay(date).valueOf();
        this.end.set(end);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { end },
            queryParamsHandling: 'merge',
        });
    };

    public readonly setZones = (zones) => {
        this.zones.set(zones);
        // Get current query params
        const q = { ...this._route.snapshot.queryParams };
        q.zone_ids = zones.join(',');

        // Delete the specific query param
        if (!q.zone_ids) delete q.zone_ids;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: q,
        });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get week_start() {
        return this._settings.get('app.week_start');
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
                            (bld) => bld.id === level.parent_id,
                        );
                        this.zones.set(zones);
                    }
                }
                if (params.has('start')) this.start.set(+params.get('start'));
                if (params.has('end')) this.end.set(+params.get('end'));
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
