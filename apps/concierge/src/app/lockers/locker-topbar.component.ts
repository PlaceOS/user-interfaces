import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import {
    AsyncHandler,
    firstTruthyValueFrom,
    nextValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { lastValueFrom, timer } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { LockerFilters, LockerStateService } from './locker-state.service';

@Component({
    selector: 'lockers-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (path() !== 'events'
                        ? 'APP.CONCIERGE.LOCKERS_HEADER'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="search()"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    (options()?.zones?.length
                        ? ''
                        : 'APP.CONCIERGE.LOCKERS_LEVEL_SELECT'
                    ) | translate
                "
            >
                @if (path() === 'manage') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newLockerBank()"
                        [disabled]="!options()?.zones?.length"
                    >
                        <div class="pl-4">
                            {{ 'APP.CONCIERGE.LOCKERS_BANK_ADD' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                }
            </div>
            @if (path() === 'events') {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newBooking()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [ngModel]="zones()"
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
            <div class="w-0 flex-1"></div>
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="border-error text-error mr-2 h-12 w-12 rounded-sm border"
                    (click)="releaseAllLockers()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_RELEASE_ALL' | translate
                    "
                >
                    <icon>open_in_new</icon>
                </button>
            }
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (path() === 'events' || path() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [
        CommonModule,
        DateOptionsComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SearchbarComponent,
        TranslatePipe,
        BuildingPipe,
    ],
})
export class LockersTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(LockerStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    private readonly _ready = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap);
    private readonly _current_url = toSignal(
        this._router.events.pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            map((event) => event.urlAfterRedirects),
            startWith(this._router.url),
        ),
        { initialValue: this._router.url },
    );

    public readonly path = computed(() => {
        const parts = this._current_url()?.split('/') || [''];
        return parts[parts.length - 1].split('?')[0];
    });
    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = toSignal(this._state.levels, { initialValue: [] });
    /** Options set for week view */
    public readonly options = toSignal(this._state.filters, {
        initialValue: {} as LockerFilters,
    });
    /** Search string */
    public readonly search = toSignal(this._state.search, { initialValue: '' });
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setFilters({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) => this._state.setSearch(str);
    public readonly newLockerBank = () => this._state.editLockerBank();
    public readonly releaseAllLockers = () =>
        this._state.releaseAllLockers(true);
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        if (!this._router.url.includes('lockers')) return;
        this.zones.set(z);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones: z });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    constructor() {
        super();
        effect(() => {
            if (!this._ready() || !this._router.url.includes('locker')) return;
            const params = this._query_params();
            if (!params?.has('zone_ids')) return;
            const zones = (params.get('zone_ids') || '')
                .split(',')
                .filter(Boolean);
            if (!zones.length) return;
            const level = this._org.levelWithID(zones);
            this.zones.set(zones);
            if (!level) return;
            this._org.building = this._org.buildings.find(
                (bld) => bld.id === level.parent_id,
            );
            this._state.setFilters({ zones });
        });
        effect(() => {
            if (!this._ready() || this.use_region) return;
            const levels = this.levels();
            if (!levels.length) return;
            const zones = this.zones().filter((zone) =>
                levels.find((lvl) => lvl.id === zone),
            );
            if (!zones.length) {
                zones.push(levels[0].id);
            }
            if (this._same_zones(zones, this.zones())) return;
            this.updateZones(zones);
        });
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        await lastValueFrom(timer(1000));
        this._ready.set(true);
    }

    public async newBooking() {
        const { date } = await nextValueFrom(this._state.filters);
        this._state.editBooking(undefined, {
            date: date || Date.now(),
            allow_time_changes: true,
        });
    }

    private _same_zones(left: string[], right: string[]) {
        return (
            left.length === right.length &&
            left.every((zone, index) => zone === right[index])
        );
    }
}
