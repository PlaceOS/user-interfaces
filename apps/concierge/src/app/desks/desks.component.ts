import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import {
    AsyncHandler,
    Desk,
    OrganisationService,
    SettingsService,
    csvToJson,
    downloadFile,
    jsonToCsv,
    loadTextFileFromInputEvent,
    notifyError,
    randomInt,
} from '@placeos/common';
import { DeskView } from './desks-state.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
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
                            (manage
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
                    @if (path !== 'manage') {
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
                    @if (path === 'manage') {
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
                <div class="mb-4 flex w-full items-center space-x-2 px-8">
                    @if (!manage) {
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
                    @if (manage) {
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
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
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
                    @if (path === 'events') {
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="'COMMON.REFRESH' | translate"
                            class="ml-2 rounded border border-base-200"
                            (click)="refresh()"
                            [disabled]="loading()"
                        >
                            <icon>refresh</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REJECT_ALL' | translate
                            "
                            class="ml-2 rounded border border-base-200"
                            (click)="rejectAll()"
                            [disabled]="loading()"
                        >
                            <icon>event_busy</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST'
                                    | translate
                            "
                            (click)="viewQRCodes()"
                        >
                            <icon>qr_code</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate
                            "
                        >
                            <icon>cloud_upload</icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="loadCSVData($event)"
                            />
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            (click)="downloadTemplate()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
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
                @if (loading() && path === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
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
    imports: [
        MatProgressBarModule,
        RouterModule,
        MatRippleModule,
        CommonModule,
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
    ],
})
export class DesksComponent extends AsyncHandler implements OnInit, OnDestroy {
    private _state = inject(DesksStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly loading = this._state.loading;
    public path: string;
    public manage = false;
    /** Signal for filters */
    public readonly filters = this._state.filters;
    /** Signal for levels for the active building */
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
    public readonly setDate = (date) => this._state.setFilters({ date });
    public readonly setFilters = (o) => this._state.setFilters(o);
    public readonly refresh = () => this._state.refresh();
    public readonly rejectAll = () => this._state.rejectAllDesks();
    public readonly editDesk = () => this._state.editDesk();
    /** Update active zones for desks */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path = url_parts[url_parts.length - 1].split('?')[0];
                    this._updateView();
                }
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (!zones.length) return;
                    const level = this._org.levelWithID(zones);
                    this._state.setFilters({ zones });
                    if (!level) return;
                    this._org.building = this._org.buildings.find(
                        (bld) => bld.id === level.parent_id,
                    );
                }
            }),
        );
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
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
        const desk: any = new Desk({
            id: 'desk-123',
            name: 'Test Desk',
            bookable: true,
            groups: ['test-desk-group', 'desk-bookers'],
            features: ['Standing Desk', 'Dual Monitor'],
        }).toJSON();
        delete desk.images;
        const data = jsonToCsv([desk]);
        downloadFile('desk-template.csv', data);
    }

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
        if (this.path.includes('manage')) return 'manage';
        if (this.path.includes('map')) return 'map';
        return 'events';
    }

    private _updateView() {
        const view = this._getViewFromPath();
        this.manage = view === 'manage';
        this._state.setFilters({ view });

        if (this.manage) {
            this.subscription(
                'zone-changes',
                this._org.active_levels.subscribe(async (lvls) => {
                    if (!lvls.length) return;
                    const { zones } = this._state.filters();
                    const levels_in_zones =
                        zones?.length &&
                        zones.some((z) => lvls.find((lvl) => lvl.id === z));
                    if (!levels_in_zones) this.updateZones([lvls[0].id]);
                }),
            );
        } else {
            this.unsub('zone-changes');
        }
    }
}
