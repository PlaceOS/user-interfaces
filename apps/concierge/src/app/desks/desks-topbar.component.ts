import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    untracked,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { showBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    csvToJson,
    Desk,
    loadTextFileFromInputEvent,
    notifyError,
    notifyInfo,
    OrganisationService,
    randomInt,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { DeskBookModalComponent } from './desk-book-modal.component';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desks-topbar',
    template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="
                        filters().zones?.length ? filters().zones[0] : 'All'
                    "
                    (ngModelChange)="updateZones([$event])"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @if (!is_map()) {
                        <mat-option value="All">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                    }
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (!manage()) {
                <button
                    btn
                    matRipple
                    class="mx-2 w-40"
                    matTooltip="New Desk Booking"
                    (click)="newDeskBooking()"
                >
                    {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                </button>
            }
            @if (manage()) {
                <button
                    icon
                    default
                    matRipple
                    (click)="newDesk()"
                    [matTooltip]="'APP.CONCIERGE.DESKS_NEW' | translate"
                >
                    <icon>add</icon>
                </button>
            }
            @if (manage()) {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate"
                >
                    <icon>cloud_upload</icon>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($any($event))"
                    />
                </button>
            }
            @if (manage()) {
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
            }
            @if (manage()) {
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
            <div class="w-2 flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="filters().search"
                (modelChange)="setFilters({ search: $event })"
            ></searchbar>
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [
        DateOptionsComponent,
        SearchbarComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        TranslatePipe,
        FormsModule,
    ],
})
export class DesksTopbarComponent extends AsyncHandler implements OnInit {
    private _desks = inject(DesksStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);

    /** List of levels for the active building */
    public readonly all_levels = this._org.active_levels;
    /** List of levels with bookable desk resources */
    public readonly bookable_levels = this._desks.levels;
    /** List of levels to show for the current view */
    public readonly levels = computed(() =>
        this.manage() ? this.all_levels() : this.bookable_levels(),
    );
    /** List of levels for the active building */
    public readonly filters = this._desks.filters;

    public manage = signal(false);
    public is_map = signal(false);
    /** Set filtered date */
    public readonly setDate = (date) => this._desks.setFilters({ date });
    public readonly setFilters = (o) => this._desks.setFilters(o);
    /** Update active zones for desks */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._desks.setFilters({ zones });
    };

    constructor() {
        super();
        // Snap the active zone selection to the available levels once the
        // organisation data has initialised.
        effect(() => {
            if (!this._org.initialised()) return;
            const levels = this._org.active_levels();
            untracked(() => {
                const filters = this.filters();
                const zones =
                    filters?.zones?.filter(
                        (zone) =>
                            levels.find((lvl) => lvl.id === zone) ||
                            zone === 'All',
                    ) || [];
                if (!zones.length && levels.length) zones.push('All');
                this.updateZones(zones);
            });
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        this.updateZones(zones);
                        const level = this._org.levelWithID(zones);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                    }
                }
                if (params.has('date')) {
                    this.setDate(new Date(+params.get('date')));
                }
                if (params.has('approve')) {
                    this.approve(params.get('approve'));
                } else if (params.has('reject')) {
                    this.reject(params.get('reject'));
                }
                this.manage.set(this._router.url?.includes('manage'));
                this.is_map.set(this._router.url?.includes('map'));
            }),
        );
        this.subscription(
            'router.events',
            this._router.events.subscribe(() => {
                this.manage.set(this._router.url?.includes('manage'));
                this.is_map.set(this._router.url?.includes('map'));
            }),
        );
        this.manage.set(this._router.url?.includes('manage'));
        this.is_map.set(this._router.url?.includes('map'));
    }

    public newDesk() {
        const desk = new Desk({ id: `desk-${randomInt(999_999)}` });
        desk.staff_name = `[NEW_DESK]`;
        this._desks.addDesks([desk]);
        notifyInfo('New desk added to local data.', undefined, () =>
            notifyInfo('Make sure to save the new desk before using it.'),
        );
    }

    public newDeskBooking() {
        this._dialog.open(DeskBookModalComponent, {});
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'desk' },
        });
    }

    public async loadCSVData(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._desks.addDesks(
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

    public downloadTemplate() {
        this._desks.downloadDesksCSV();
    }

    /**
     * Aprrove a desk booking
     * @param id Booking ID to approve
     */
    private async approve(id: string) {
        const booking = await showBooking(id);
        if (booking) {
            this._desks.approveDesk(booking);
        }
    }

    /**
     * Reject a desk booking
     * @param id Booking ID to reject
     */
    private async reject(id: string) {
        const booking = await showBooking(id);
        if (booking) {
            this._desks.rejectDesk(booking);
        }
    }
}
