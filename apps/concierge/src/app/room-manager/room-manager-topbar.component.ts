import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    effect,
    inject,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import {
    RoomListOptions,
    RoomManagementService,
} from './room-management.service';

@Component({
    selector: 'room-manager-topbar',
    template: `
        <div class="flex items-center space-x-2 px-8 pt-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.ROOMS_HEADER' | translate }}
            </h2>
            <div class="w-2 flex-1"></div>
            <searchbar (modelChange)="setSearch($event)"></searchbar>
            <button btn (click)="newRoom()" class="w-40">
                {{ 'APP.CONCIERGE.ROOMS_ADD' | translate }}
            </button>
        </div>
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters()?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level) {
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
            <div class="w-2 flex-1"></div>
            <button
                icon
                default
                matRipple
                (click)="manageRestrictions()"
                [matTooltip]="'APP.CONCIERGE.ROOMS_BOOKING_RULES' | translate"
            >
                <icon>lock_open</icon>
            </button>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        BuildingPipe,
        SearchbarComponent,
        FormsModule,
        MatTooltipModule,
    ],
})
export class RoomManagerTopbarComponent extends AsyncHandler implements OnInit {
    private _manager = inject(RoomManagementService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private readonly _ready = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap);

    /** List of levels for the active building */
    public readonly levels = toSignal(
        combineLatest([
            toObservable(this._org.active_building),
            toObservable(this._org.active_region),
        ]).pipe(
            map(([bld, region]) =>
                this.use_region
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld),
            ),
        ),
        { initialValue: [] },
    );

    public readonly filters = toSignal(this._manager.options, {
        initialValue: {} as RoomListOptions,
    });
    /** Set filtered date */
    public readonly setFilters = (filters) => this._manager.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._manager.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zones) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
    };

    public readonly newRoom = () => this._manager.editRoom();

    public get building() {
        return this._org.building;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get root_zone() {
        return (
            (this.use_region ? this._org.region.id : '') ||
            this._org.building.id
        );
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'room' },
        });
    }

    constructor() {
        super();
        effect(() => {
            if (!this._ready()) return;
            const params = this._query_params();
            if (!params?.has('zone_ids')) return;
            const zones = (params.get('zone_ids') || '')
                .split(',')
                .filter(Boolean);
            this._manager.setFilters({ zones });
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this._ready.set(true);
        this.setSearch('');
    }
}
