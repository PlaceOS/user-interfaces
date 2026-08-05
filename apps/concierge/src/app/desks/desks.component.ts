import {
    Component,
    computed,
    effect,
    inject,
    OnDestroy,
    OnInit,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import {
    AsyncHandler,
    BuildingLevel,
    csvToJson,
    Desk,
    downloadFile,
    jsonToCsv,
    loadTextFileFromInputEvent,
    notifyError,
    OrganisationService,
    randomInt,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { UserPipe } from '@placeos/users';
import { format } from 'date-fns';
import { DeskView } from './desks-state.service';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BuildingPipe,
    IconComponent,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';
import { showMetadata } from '@placeos/ts-client';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';
import { DeskBookModalComponent } from './desk-book-modal.component';
import { DeskQrCodeModalComponent } from './desk-qr-code-modal.component';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: '[app-desks]',
    template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex w-full items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{
                            (manage()
                                ? 'APP.CONCIERGE.DESKS_HEADER'
                                : 'APP.CONCIERGE.DESKS_BOOK_HEADER'
                            ) | translate
                        }}
                    </h2>
                    <div class="w-px flex-1"></div>
                    <searchbar
                        class="mr-2"
                        [model]="filters().search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    @if (path() !== 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="newDeskBooking()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                    @if (path() === 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="editDesk()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.DESKS_NEW' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                </div>
                <div class="mb-4 flex w-full items-center gap-2 px-8">
                    @if (!manage()) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="filters().zones"
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
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (manage()) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="
                                    filters().zones?.length
                                        ? filters().zones[0]
                                        : ''
                                "
                                (ngModelChange)="updateZones([$event])"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <div class="w-px flex-1"></div>
                    @if (path() === 'events') {
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REJECT_ALL' | translate
                            "
                            (click)="rejectAll()"
                            [disabled]="loading()"
                        >
                            <icon>event_busy</icon>
                        </button>
                        @if (hide_user_list_download()) {
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.DOWNLOAD_USER_LIST'
                                        | translate
                                "
                                [disabled]="downloading()"
                                (click)="downloadCsv()"
                            >
                                @if (downloading()) {
                                    <mat-spinner diameter="24"></mat-spinner>
                                } @else {
                                    <icon>download</icon>
                                }
                            </button>
                        }
                    }
                    @if (path() === 'manage') {
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST'
                                    | translate
                            "
                            (click)="viewQRCodes()"
                        >
                            <icon>qr_code</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate
                            "
                        >
                            <icon>cloud_upload</icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="loadCSVData($any($event))"
                            />
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="downloadTemplate()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="manageRestrictions()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_BOOKING_RULES' | translate
                            "
                        >
                            <icon>lock_open</icon>
                        </button>
                    }
                </div>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <router-outlet></router-outlet>
                </div>
                @if (loading() && path() === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
        @if (print_desk(); as desk) {
            <div class="desk-qr-print-preview print-only fixed top-0 left-0">
                <a
                    [href]="desk.qr_link | safe: 'url'"
                    target="_blank"
                    ref="noopener noreferrer"
                    class="border-base-200 bg-base-100 m-2 block rounded-lg border p-2"
                >
                    <img class="w-48" [src]="desk.qr_code" />
                </a>
                <div
                    class="bg-base-200 mx-2 mt-2 w-48 rounded-sm p-2 text-center font-mono text-sm"
                >
                    {{ desk.name || desk.id }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }
        `,
    ],
    providers: [UserPipe],
    imports: [
        MatProgressBarModule,
        MatProgressSpinnerModule,
        RouterModule,
        MatRippleModule,
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        DateOptionsComponent,
        MatFormFieldModule,
        MatSelectModule,
        ApplicationSidebarComponent,
        ApplicationTopbarComponent,
        SearchbarComponent,
        TranslatePipe,
        BuildingPipe,
        SafePipe,
    ],
})
export class DesksComponent extends AsyncHandler implements OnInit, OnDestroy {
    private _state = inject(DesksStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _user_pipe = inject(UserPipe);

    public readonly loading = this._state.loading;
    public readonly downloading = signal(false);
    public readonly path = signal('');
    public readonly manage = computed(() => this.path() === 'manage');
    public readonly print_desk = this._state.print_desk;
    /** Signal for filters */
    public readonly filters = this._state.filters;
    public readonly hide_user_list_download = settingSignal(
        'desks.hide_user_list_download',
    );
    /** All levels for the active building or region, parking-only levels last */
    private readonly _all_levels = computed(
        () =>
            (this._settings.get('app.use_region')
                ? this._org.levelsForRegion(this._org.active_region())
                : this._org.levelsForBuilding(this._org.active_building())
            ).sort(
                (a, b) =>
                    +!!a.tags?.includes('parking') -
                    +!!b.tags?.includes('parking'),
            ),
        {
            equal: (a, b) =>
                a.length === b.length &&
                a.every((level, index) => level.id === b[index]?.id),
        },
    );
    /** Levels that have desk metadata configured */
    private readonly _desk_levels = resource({
        params: () => this._all_levels(),
        defaultValue: [] as BuildingLevel[],
        loader: async ({ params: levels }) => {
            if (!levels.length) return [];
            const results = await Promise.all(
                levels.map(async (level) => {
                    const metadata = await showMetadata(
                        level.id,
                        'desks',
                    ).catch(() => null);
                    return metadata?.details instanceof Array &&
                        metadata.details.length
                        ? level
                        : null;
                }),
            );
            return results.filter((level): level is BuildingLevel => !!level);
        },
    });
    /** Signal for levels for the active building */
    public readonly levels = computed(() => {
        const resolved = this._desk_levels.status() === 'resolved';
        return this.manage() || !resolved
            ? this._all_levels()
            : this._desk_levels.value();
    });

    constructor() {
        super();
        // Keep the active zone selection in sync with the available levels.
        effect(() => {
            const levels = this._all_levels();
            untracked(() => this._syncZones(levels));
        });
        effect(() => {
            if (this._desk_levels.status() !== 'resolved') return;
            const levels = this._desk_levels.value();
            untracked(() => {
                if (!this.manage()) this._syncZones(levels);
            });
        });
    }
    public readonly setDate = (date) => this._state.setFilters({ date });
    public readonly setFilters = (o) => this._state.setFilters(o);
    public readonly refresh = () => this._state.refresh();
    public readonly rejectAll = () => this._state.rejectAllDesks();
    public readonly editDesk = () => this._state.editDesk();
    /** Update active zones for desks */
    public readonly updateZones = (zones: string[]) => {
        let clean_zones = (zones || []).filter((_) => !!_);
        // Manage view must always have a specific zone to write metadata
        // to — snap empty selections back to the first available level.
        if (this.manage() && !clean_zones.length) {
            const levels = this.levels();
            if (levels.length) clean_zones = [levels[0].id];
        }
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                zone_ids: clean_zones.length ? clean_zones.join(',') : null,
            },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones: clean_zones });
        persistZones(
            this.manage() ? 'desks-manage' : 'desks',
            this._persistScopeId(),
            clean_zones,
        );
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this._state.setFilters({ search: '' });
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path.set(
                        url_parts[url_parts.length - 1].split('?')[0],
                    );
                    this._updateView();
                }
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (!params.has('zone_ids')) return;
                const zones = (params.get('zone_ids') || '')
                    .split(',')
                    .filter(Boolean);
                if (!zones.length) return;
                const level = this._org.levelWithID(zones);
                this._state.setFilters({ zones });
                if (!level) return;
                this._org.building = this._org.buildings.find(
                    (bld) => bld.id === level.parent_id,
                );
            }),
        );
        const parts = this._router.url?.split('/') || [''];
        this.path.set(parts[parts.length - 1].split('?')[0]);
        this._updateView();
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    public viewQRCodes() {
        this._dialog.open(DeskQrCodeModalComponent);
    }

    public newDeskBooking() {
        const ref = this._dialog.open(DeskBookModalComponent, {});
        ref.afterClosed().subscribe((_) => {
            this._state.refresh();
        });
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'desk' },
        });
    }

    public downloadTemplate() {
        this._state.downloadDesksCSV();
    }

    public readonly downloadCsv = async () => {
        this.downloading.set(true);
        try {
            const bookings = this._state.bookings();
            const emails = new Set<string>();
            for (const booking of bookings) {
                if (booking.user_email) emails.add(booking.user_email);
                if (booking.booked_by_email)
                    emails.add(booking.booked_by_email);
            }
            const data = await Promise.all(
                Array.from(emails).map(async (email) => {
                    const user = await this._user_pipe.transform(email);
                    return {
                        name: user?.name || '',
                        email,
                    };
                }),
            );
            const date = format(
                this._state.filters().date || Date.now(),
                'yyyy-MM-dd',
            );
            downloadFile(`desk-bookings-${date}.csv`, jsonToCsv(data));
        } finally {
            this.downloading.set(false);
        }
    };

    public async loadCSVData(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._state.addDesks(
                list.map(
                    (_) =>
                        new Desk({
                            ..._,
                            id: _.id || `desk-${randomInt(999_999)}`,
                        }),
                ),
            );
        } catch (e) {
            console.error(e);
        }
    }

    private _getViewFromPath(): DeskView {
        if (this.path().includes('manage')) return 'manage';
        if (this.path().includes('map')) return 'map';
        return 'events';
    }

    private _updateView() {
        const view = this._getViewFromPath();
        const previous_view = this._state.filters().view;
        const view_changed = !!previous_view && previous_view !== view;
        this._state.setFilters(
            view_changed
                ? { view, search: '' }
                : { view },
        );
        this._syncZones(this.levels(), view_changed);
    }

    private _syncZones(levels: BuildingLevel[], restore = false) {
        const current_zones = this._state.filters().zones || [];
        const valid_zones = current_zones.filter((zone) =>
            levels.find((level) => level.id === zone),
        );
        let next_zones = restore
            ? []
            : this.manage()
              ? valid_zones.slice(0, 1)
              : valid_zones;
        if (!next_zones.length) {
            // Restore persisted selection for the current view when none is
            // active. Manage view then falls back to the first level if no
            // valid persisted zone exists — it can never be "all levels".
            const persisted = loadPersistedZones(
                this.manage() ? 'desks-manage' : 'desks',
                this._persistScopeId(),
            ).filter((zone) => levels.find((lvl) => lvl.id === zone));
            if (persisted.length) {
                next_zones = this.manage() ? persisted.slice(0, 1) : persisted;
            } else if (this.manage() && levels.length) {
                next_zones = [levels[0].id];
            }
        }
        if (this._sameZones(current_zones, next_zones)) return;
        this.updateZones(next_zones);
    }

    private _sameZones(
        current_zones: string[] = [],
        next_zones: string[] = [],
    ) {
        return (
            current_zones.length === next_zones.length &&
            current_zones.every((zone, index) => zone === next_zones[index])
        );
    }

    private _persistScopeId() {
        return this.use_region
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
    }
}
