import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { queryParkingSpaces } from '@placeos/assets';
import {
    approveBooking,
    queryBookings,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BuildingLevel,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    TranslatePipe,
} from '@placeos/components';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';
import { PlaceAsset } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { ExploreParkingInfoComponent } from 'libs/explore/src/lib/explore-parking-info.component';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
    selector: 'parking-assign-space-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.PARKING_ASSIGN_SPACE_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] max-w-[calc(100vw-2rem)] min-w-[80vw] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg">
                <interactive-map
                    [src]="map_url | async"
                    [styles]="map_styles | async"
                    [features]="map_features | async"
                    [actions]="map_actions"
                    [options]="{ controls: true }"
                    [focus]="focus"
                ></interactive-map>
            </div>
            <div
                class="border-base-300 relative flex h-full w-[20rem] flex-col rounded-lg border"
            >
                <div class="border-base-200 flex flex-col border-b p-2">
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [ngModel]="selected_level | async"
                            (ngModelChange)="selectLevel($event)"
                        >
                            @for (lvl of levels; track lvl.id) {
                                <mat-option [value]="lvl">
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="bg-base-100 sticky top-0 z-10 w-full px-1 py-3 text-sm"
                    >
                        {{ (available_spaces | async)?.length || 0 }}
                        {{
                            'APP.CONCIERGE.PARKING_TAB_SPACES'
                                | translate
                                | lowercase
                        }}
                    </div>
                    @if ((available_spaces | async)?.length) {
                        @for (
                            space of available_spaces | async;
                            track space.id
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
                                [class.bg-primary!]="
                                    space.id === selected_space()?.id
                                "
                                [class.text-primary-content!]="
                                    space.id === selected_space()?.id
                                "
                                (click)="selectSpace(space)"
                            >
                                <div
                                    class="flex w-full flex-col font-mono text-sm"
                                >
                                    <div>{{ space_label(space) }}</div>
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full flex-1 flex-col items-center justify-center space-y-4"
                        >
                            <img
                                src="assets/icons/no-results.svg"
                                class="w-36"
                            />
                            <div class="text-center opacity-30">
                                {{
                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY'
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div class="border-base-200 border-t p-2">
                    @if (loading()) {
                        <div class="flex w-full items-center justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    } @else {
                        <button
                            btn
                            matRipple
                            [disabled]="!selected_space()"
                            class="w-full"
                            (click)="confirmAssign()"
                        >
                            {{
                                'APP.CONCIERGE.PARKING_ASSIGN_SPACE_CONFIRM'
                                    | translate
                            }}
                        </button>
                    }
                </div>
            </div>
        </main>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatDialogModule,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        FormsModule,
        IconComponent,
        InteractiveMapComponent,
        TranslatePipe,
    ],
})
export class ParkingAssignSpaceModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<{ booking: Booking }>(MAT_DIALOG_DATA);
    private _dialog_ref = inject(MatDialogRef);
    private _org = inject(OrganisationService);

    public levels: BuildingLevel[] = [];
    public focus = '';
    public readonly selected_space = signal<PlaceAsset | null>(null);
    public readonly loading = signal(false);
    public readonly selected_level = new BehaviorSubject<BuildingLevel | null>(
        null,
    );

    public readonly map_url = this.selected_level.pipe(
        map((lvl) => lvl?.map_id || ''),
    );

    public readonly map_actions = [
        {
            id: '*',
            action: 'click',
            callback: (_e: any, p: any) => this._onMapClick(p || _e),
        },
    ];

    /** Available spaces for the selected level, excluding those booked during the booking's time range */
    public readonly available_spaces = this.selected_level.pipe(
        switchMap((level) => {
            if (!level) return of([] as PlaceAsset[]);
            return combineLatest([
                queryParkingSpaces(level.id).pipe(catchError(() => of([]))),
                queryBookings({
                    period_start: getUnixTime(
                        startOfDay(this._data.booking.date),
                    ),
                    period_end: getUnixTime(endOfDay(this._data.booking.date)),
                    type: 'parking',
                    zones: level.id,
                }).pipe(catchError(() => of([]))),
            ]).pipe(
                map(([spaces, bookings]) => {
                    const booked_ids = new Set(
                        bookings
                            .filter(
                                (b) =>
                                    !b.asset_id?.startsWith('unallocated') &&
                                    !b.rejected,
                            )
                            .map((b) => b.asset_id),
                    );
                    return spaces.filter(
                        (s) =>
                            !booked_ids.has(s.id) &&
                            !s.assigned_to &&
                            s.bookable !== false,
                    );
                }),
            );
        }),
        shareReplay(1),
    );

    /** Map styles: green for available, amber for selected */
    public readonly map_styles = combineLatest([
        this.available_spaces,
        this.selected_level.pipe(
            switchMap((level) =>
                level
                    ? queryParkingSpaces(level.id).pipe(
                          catchError(() => of([])),
                      )
                    : of([]),
            ),
        ),
    ]).pipe(
        map(([available, all_spaces]) => {
            const styles: ViewerStyles = {};
            const available_ids = new Set(available.map((s) => s.id));
            const selected = this.selected_space();
            for (const space of all_spaces) {
                const id = space.map_id || space.id;
                if (selected && space.id === selected.id) {
                    styles[`#${id}`] = {
                        fill: DEFAULT_COLOURS['pending'],
                        opacity: 0.6,
                    };
                } else if (available_ids.has(space.id)) {
                    styles[`#${id}`] = {
                        fill: DEFAULT_COLOURS['free'],
                        opacity: 0.6,
                    };
                } else if (space.bookable === false) {
                    styles[`#${id}`] = {
                        fill: DEFAULT_COLOURS['not-bookable'],
                        opacity: 0.6,
                    };
                } else {
                    styles[`#${id}`] = {
                        fill: DEFAULT_COLOURS['busy'],
                        opacity: 0.6,
                    };
                }
            }
            return styles;
        }),
    );

    /** Map features: hover tooltips on spaces */
    public readonly map_features = combineLatest([
        this.available_spaces,
        this.selected_level.pipe(
            switchMap((level) =>
                level
                    ? queryParkingSpaces(level.id).pipe(
                          catchError(() => of([])),
                      )
                    : of([]),
            ),
        ),
    ]).pipe(
        map(([available, all_spaces]) => {
            const features: ViewerFeature[] = [];
            const available_ids = new Set(available.map((s) => s.id));
            const selected = this.selected_space();
            for (const space of all_spaces) {
                const id = space.map_id || space.id;
                const is_available = available_ids.has(space.id);
                const is_selected = selected?.id === space.id;
                features.push({
                    location: `${id}`,
                    content: ExploreParkingInfoComponent,
                    z_index: 20,
                    hover: true,
                    data: {
                        ...space,
                        name: this.space_label(space),
                        user: space.assigned_to || '',
                        plate_number: '',
                        status: is_selected
                            ? 'reserved'
                            : space.bookable === false
                              ? 'not-bookable'
                              : is_available
                                ? 'free'
                                : 'busy',
                    },
                });
            }
            return features;
        }),
    );

    public ngOnInit() {
        this.levels = this._org.levels.filter((_) =>
            _.tags.includes('parking'),
        );
        const booking_zone = this._data.booking.zones?.find((z) =>
            this.levels.some((l) => l.id === z),
        );
        const initial_level = booking_zone
            ? this.levels.find((l) => l.id === booking_zone)
            : this.levels[0];
        if (initial_level) {
            this.selected_level.next(initial_level);
        }
    }

    public selectLevel(level: BuildingLevel) {
        this.selected_level.next(level);
        this.selected_space.set(null);
        this.focus = '';
    }

    public selectSpace(space: PlaceAsset) {
        this.selected_space.set(space);
        this.focus = space.map_id || space.id;
        this._refreshStyles();
    }

    public readonly space_label = (space: PlaceAsset) =>
        (space as any)?.identifier ||
        space?.name ||
        (space as any)?.display_name ||
        (space as any)?.metadata?.display_name ||
        (space as any)?.extension_data?.display_name ||
        '';

    public async confirmAssign() {
        const space = this.selected_space();
        if (!space) return;
        this.loading.set(true);
        try {
            const asset_name = this.space_label(space);
            await updateBooking(this._data.booking.id, {
                asset_id: space.id,
                asset_name,
                extension_data: {
                    ...this._data.booking.extension_data,
                    asset_name,
                },
            } as any).toPromise();
            await approveBooking(this._data.booking.id).toPromise();
            notifySuccess(i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_SUCCESS'));
            this._dialog_ref.close(true);
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR', {
                    error: e.message || e.error || e,
                }),
            );
            this.loading.set(false);
        }
    }

    private _onMapClick(e: any) {
        this.timeout('map_click', async () => {
            const id =
                e?.properties?.externalId || e?.properties?.roomId || e?.id;
            if (!id) return;
            const spaces =
                (await this.available_spaces.pipe(map((_) => _)).toPromise()) ||
                [];
            const space = spaces.find((s) => s.id === id || s.map_id === id);
            if (space) {
                this.selectSpace(space);
            }
        });
    }

    private _refreshStyles() {
        // Trigger style recalculation by re-emitting the level
        const current = this.selected_level.getValue();
        if (current) {
            this.selected_level.next({ ...current } as BuildingLevel);
        }
    }
}
