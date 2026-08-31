import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    output,
    resource,
    signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    queryDeskAssetsForZones,
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
    queryParkingSpacesForZones,
} from '@placeos/assets';
import {
    AsyncHandler,
    BuildingLevel,
    Identity,
    nextValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { requestSpacesForZone } from '@placeos/events';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { listChildMetadata } from '@placeos/ts-client';
import { endOfDay, startOfDay } from 'date-fns';
import { ReportOptions } from './reports-state.service';

type ReportResourceType = ReportOptions['type'];

const RESOURCE_LEVEL_CACHE_PREFIX = 'concierge:reports:resource-level:';
const resource_level_cache = new Map<string, Promise<Set<string>>>();

@Component({
    selector: 'reports-options',
    template: `
        <div
            class="border-base-200 bg-base-100 z-20 flex h-20 w-full items-center space-x-2 border-b p-4 print:hidden"
        >
            @if (!hide_level_selector()) {
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
            }
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
    public readonly resource_type = input<ReportResourceType>();
    public readonly hide_level_selector = input<boolean>(false);

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
    private readonly _levels = resource({
        params: () => ({
            bld: this._org.active_building(),
            region: this._org.active_region(),
            resource_type: this.resource_type(),
        }),
        defaultValue: [] as BuildingLevel[],
        loader: async ({ params }) => {
            const { bld, region, resource_type } = params;
            const use_region = this._settings.get('app.use_region');
            const scope_id = use_region ? region?.id : bld?.id;
            const levels = use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            return this._levelsWithResources(levels, resource_type, scope_id);
        },
    });
    public readonly levels = computed(() => {
        if (this.resource_type() !== 'parking' || !this._levels.isLoading()) {
            return this._levels.value();
        }
        const use_region = this._settings.get('app.use_region');
        const levels = use_region
            ? this._org.levelsForRegion(this._org.active_region())
            : this._org.levelsForBuilding(this._org.active_building());
        return this._parkingLevels(levels);
    });

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

    private async _levelsWithResources(
        levels: BuildingLevel[],
        resource_type: ReportResourceType,
        scope_id: string,
    ): Promise<BuildingLevel[]> {
        if (!resource_type) return levels;
        if (resource_type === 'parking') {
            levels = this._parkingLevels(levels);
        }
        if (!levels.length || !scope_id) return [];
        const resource_zones = await this._levelResourceZones(
            levels,
            resource_type,
            scope_id,
        );
        const filtered_levels = levels.filter((level) =>
            resource_zones.has(level.id),
        );
        return resource_type === 'parking' && !filtered_levels.length
            ? levels
            : filtered_levels;
    }

    private _parkingLevels(levels: BuildingLevel[]) {
        return levels.filter((level) => level.tags?.includes('parking'));
    }

    private _levelResourceZones(
        levels: BuildingLevel[],
        resource_type: ReportResourceType,
        scope_id: string,
    ): Promise<Set<string>> {
        const desk_store = this._settings.get('app.desks.use_assets')
            ? 'assets'
            : 'metadata';
        const key = `${RESOURCE_LEVEL_CACHE_PREFIX}${resource_type}:${scope_id}:${desk_store}`;
        const cached = sessionStorage.getItem(key);
        if (cached !== null) {
            return Promise.resolve(new Set<string>(JSON.parse(cached)));
        }
        if (!resource_level_cache.has(key)) {
            resource_level_cache.set(
                key,
                this._requestResourceZones(levels, resource_type, scope_id)
                    .then((zones) => {
                        sessionStorage.setItem(key, JSON.stringify([...zones]));
                        return zones;
                    })
                    .catch(() => new Set<string>()),
            );
        }
        return resource_level_cache.get(key);
    }

    private async _requestResourceZones(
        levels: BuildingLevel[],
        resource_type: ReportResourceType,
        scope_id: string,
    ): Promise<Set<string>> {
        switch (resource_type) {
            case 'desks': {
                if (this._settings.get('app.desks.use_assets')) {
                    const desks = await queryDeskAssetsForZones([scope_id]);
                    return this._zonesForResources(
                        desks.filter((desk) => desk.bookable),
                    );
                }
                const list = await listChildMetadata(scope_id, {
                    name: 'desks',
                });
                const zones = new Set<string>();
                for (const meta of list) {
                    const details = meta.metadata?.desks?.details;
                    if (
                        details instanceof Array &&
                        details.some((desk) => desk.bookable)
                    ) {
                        if (meta.zone?.id) zones.add(meta.zone.id);
                    }
                }
                return zones;
            }
            case 'events':
            case 'catering': {
                const spaces = await nextValueFrom(
                    requestSpacesForZone(scope_id),
                );
                return this._zonesForResources(spaces);
            }
            case 'parking': {
                const spaces = await queryParkingSpacesForZones([scope_id]);
                return this._zonesForResources(spaces);
            }
            case 'lockers': {
                const [banks, lockers] = await Promise.all([
                    queryLockerBankAssetsForZones([scope_id]),
                    queryLockerAssetsForZones([scope_id]),
                ]);
                const zones = new Set<string>();
                const bookable_bank_ids = new Set(
                    lockers
                        .filter((locker) => locker.bookable !== false)
                        .map((locker) => (locker as any).parent_id),
                );
                banks
                    .filter((bank) => bookable_bank_ids.has(bank.id))
                    .forEach((bank) =>
                        (bank.zones || []).forEach((zone) => zones.add(zone)),
                    );
                return zones;
            }
            default:
                return new Set(levels.map((level) => level.id));
        }
    }

    private _zonesForResources(resources: any[]) {
        const zones = new Set<string>();
        for (const resource of resources || []) {
            for (const zone of resource.zones || []) zones.add(zone);
        }
        return zones;
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
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
