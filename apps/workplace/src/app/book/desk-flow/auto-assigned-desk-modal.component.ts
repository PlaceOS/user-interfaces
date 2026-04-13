import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    model,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    BookingAsset,
    BookingFormService,
    findNearbyFeature,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    Desk,
    firstTruthyValueFrom,
    i18n,
    nextValueFrom,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    MapPinComponent,
    TranslatePipe,
} from '@placeos/components';
import { isBefore, startOfMinute } from 'date-fns';

@Component({
    selector: 'auto-assigned-desk-modal',
    standalone: true,
    template: `
        <div
            class="relative flex h-screen w-screen flex-col sm:h-auto sm:w-[32rem]"
        >
            <!-- Header -->
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.DESK_AUTO_ASSIGNED_TITLE' | translate }}
                </h2>
                @if (!loading()) {
                    @if (show_close()) {
                        <button
                            icon
                            matRipple
                            class="h-10 w-10"
                            (click)="dismiss()"
                        >
                            <icon>close</icon>
                        </button>
                    }
                }
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-auto p-4">
                @if (loading()) {
                    <!-- Loading State -->
                    <div
                        class="flex h-full min-h-[20rem] flex-col items-center justify-center"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p class="mt-4 opacity-60">
                            {{
                                (loading() == 'booking'
                                    ? 'BOOKINGS.DESK_REQUESTING'
                                    : 'BOOKINGS.DESK_LIST_LOADING'
                                ) | translate
                            }}
                        </p>
                    </div>
                } @else {
                    <!-- Success Message -->
                    <div class="mb-6 flex items-start space-x-3">
                        <div
                            class="bg-success flex h-8 w-8 items-center justify-center rounded-full text-white"
                        >
                            <icon class="text-xl">done</icon>
                        </div>
                        <div>
                            <h3 class="text-xl font-medium">
                                {{ 'BOOKINGS.DESK_FOUND' | translate }}
                            </h3>
                            <p class="text-sm opacity-60">
                                {{
                                    'BOOKINGS.DESK_PERFECT_DESK_MESSAGE'
                                        | translate
                                }}
                            </p>
                        </div>
                    </div>

                    <!-- Desk Details Card -->
                    <div
                        class="border-base-200 bg-base-100 mb-4 space-y-3 rounded-lg border p-4"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">chair</icon>
                            <div class="leading-tight">
                                <div class="text-xs tracking-wide uppercase">
                                    {{ 'RESOURCE.DESK' | translate }}
                                </div>
                                <div class="text-lg font-medium">
                                    {{
                                        assigned_desk()?.name ||
                                            assigned_desk()?.id
                                    }}
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">layers</icon>
                            <div class="leading-tight">
                                <div class="text-xs tracking-wide uppercase">
                                    {{ 'COMMON.FLOOR' | translate }}
                                </div>
                                <div class="text-lg font-medium">
                                    {{ level_name() }}
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">place</icon>
                            <div class="leading-none">
                                <div class="text-xs tracking-wide uppercase">
                                    {{
                                        'BOOKINGS.DESK_NEIGHBOURHOOD'
                                            | translate
                                    }}
                                </div>
                                <div class="text-lg font-medium">
                                    {{ location() }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Location on Map -->
                    <div class="mb-2 text-sm font-medium">
                        {{ 'BOOKINGS.DESK_LOCATION_ON_MAP' | translate }}
                    </div>
                    <div
                        class="border-base-200 bg-base-200 relative h-64 overflow-hidden rounded-lg border"
                    >
                        @if (map_url()) {
                            <interactive-map
                                [src]="map_url()"
                                [styles]="styles()"
                                [features]="features()"
                                [options]="{ controls: true }"
                            ></interactive-map>
                        } @else {
                            <div
                                class="text-base-content flex h-full w-full items-center justify-center opacity-30"
                            >
                                <div class="text-center">
                                    <icon class="mb-2 text-4xl">map</icon>
                                    <p class="text-sm">
                                        {{
                                            'BOOKINGS.DESK_NO_MAP_AVAILABLE'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                }
            </main>

            <!-- Footer -->
            <footer
                class="border-base-200 flex items-center justify-between gap-2 border-t p-4"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    (click)="dismiss()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="loading()"
                    (click)="confirm()"
                >
                    {{ 'BOOKINGS.DESK_CONFIRM_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        InteractiveMapComponent,
    ],
})
export class AutoAssignedDeskModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _dialog_ref = inject(MatDialogRef<AutoAssignedDeskModalComponent>, {
        optional: true,
    });

    public readonly show_close = model(false);
    public readonly loading = signal('');
    public readonly assigned_desk = signal<BookingAsset | Desk | null>(null);
    public readonly date = model<number | undefined>(undefined);
    public readonly duration = model<number | undefined>(undefined);
    /** When set, tries to find a desk nearby to this desk */
    public readonly nearby_desk_id = model<string | undefined>(undefined);
    /** When set, filters available desks to this level */
    public readonly level_id = model<string | undefined>(undefined);

    public zoom = 1.5;
    public center = signal({ x: 0.5, y: 0.5 });

    public async ngOnInit() {
        await this.initializeAndAutoAssign();
    }

    private async initializeAndAutoAssign() {
        try {
            this.loading.set('available');

            // Initialize booking state for desk
            this._state.setOptions({ type: 'desk' });
            this._state.form.patchValue({ booking_type: 'desk' });

            // Set default values
            const form = this._state.form;
            const now = Date.now();
            const booking_date =
                this.date() ||
                (isBefore(form.value.date || 0, now)
                    ? startOfMinute(now).valueOf()
                    : form.value.date);
            const booking_duration =
                this.duration() ||
                this._settings.get('app.desks.default_duration') ||
                60;

            form.patchValue({
                date: booking_date,
                duration: booking_duration,
                all_day: false,
            });

            // Get available resources (desks)
            let available_desks = await firstTruthyValueFrom(
                this._state.available_resources,
            );

            if (!available_desks?.length) {
                notifyError(i18n('BOOKINGS.DESK_LIST_EMPTY'));
                this.dismiss();
                return;
            }

            let assigned_desk: BookingAsset;
            const nearby_desk_id = this.nearby_desk_id();
            const level_id = this.level_id();

            // If nearby_desk_id is provided, try to find a desk nearby
            if (nearby_desk_id) {
                // Filter to same level if level_id is provided
                if (level_id) {
                    const level_desks = available_desks.filter(
                        (desk) => desk.zone?.id === level_id,
                    );
                    if (level_desks.length > 0) {
                        available_desks = level_desks;
                    }
                }

                // Try to find the level by looking at nearby desk in all resources
                const all_resources = await firstTruthyValueFrom(
                    this._state.resources,
                );
                const nearby_resource = all_resources.find(
                    (r) =>
                        r.id === nearby_desk_id || r.map_id === nearby_desk_id,
                );

                if (nearby_resource?.zone?.id) {
                    const level = this._org.levelWithID([
                        nearby_resource.zone.id,
                    ]);
                    if (level?.map_id) {
                        // Use findNearbyFeature to get the closest desk
                        const desk_ids = available_desks.map(
                            (d) => d.map_id || d.id,
                        );
                        const closest_id = await findNearbyFeature(
                            level.map_id,
                            nearby_desk_id,
                            desk_ids,
                        );
                        if (closest_id) {
                            assigned_desk = available_desks.find(
                                (d) =>
                                    d.id === closest_id ||
                                    d.map_id === closest_id,
                            );
                        }
                    }
                }
            }

            // Fallback to original logic if no nearby desk found
            if (!assigned_desk) {
                // Prefer desks whose tags or homebase match the current user's groups
                const user_groups = currentUser()?.groups || [];
                const tag_matched = user_groups.length
                    ? available_desks.filter(
                          (desk) =>
                              desk.tags?.length &&
                              desk.tags.some((tag) =>
                                  user_groups.includes(tag),
                              ),
                      )
                    : [];
                const homebase_matched = user_groups.length
                    ? available_desks.filter(
                          (desk) =>
                              desk.homebase &&
                              user_groups.includes(desk.homebase),
                      )
                    : [];
                // Best: desks matching both tags and homebase
                const both_matched = tag_matched.filter(
                    (desk) =>
                        desk.homebase && user_groups.includes(desk.homebase),
                );
                // Priority: both > homebase > tags > all
                const pool = both_matched.length
                    ? both_matched
                    : homebase_matched.length
                      ? homebase_matched
                      : tag_matched.length
                        ? tag_matched
                        : available_desks;

                // Group desks by level and find level with most available desks
                const desks_by_level = pool.reduce(
                    (acc, desk) => {
                        const zone_id = desk.zone?.id || 'unknown';
                        if (!acc[zone_id]) {
                            acc[zone_id] = [];
                        }
                        acc[zone_id].push(desk);
                        return acc;
                    },
                    {} as Record<string, typeof available_desks>,
                );

                // Find the level with the most available desks
                const level_with_most_desks = Object.entries(
                    desks_by_level,
                ).sort(([, a], [, b]) => b.length - a.length)[0];

                // Pick the first desk from the level with most availability
                assigned_desk = level_with_most_desks[1][0];
            }

            form.patchValue({
                asset_id: assigned_desk.id,
                resources: [assigned_desk],
            });

            this.assigned_desk.set(assigned_desk);

            this.loading.set('');
        } catch (error) {
            console.error('Error auto-assigning desk:', error);
            notifyError(i18n('BOOKINGS.DESK_AUTO_ASSIGN_EMPTY'));
            this.dismiss();
        }
    }

    public readonly level = computed(() => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.id) return null;
        return this._org.levelWithID([desk.zone.id]);
    });

    public readonly map_url = computed(() => {
        return this.level()?.map_id || '';
    });

    public readonly location = computed(() => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.parent_id) return 'N/A';

        const building = this._org.buildings.find(
            (b) => b.id === desk.zone.parent_id,
        );
        return building?.display_name || building?.name || 'N/A';
    });

    public readonly level_name = computed(() => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.id) return 'N/A';

        const level = this._org.levels.find((l) => l.id === desk.zone.id);
        return level?.display_name || level?.name || 'N/A';
    });

    public readonly desks = toSignal(this._state.resources, {
        initialValue: [],
    });

    // Map features (desk pin for the assigned desk)
    public readonly styles = computed(() => {
        const assigned = this.assigned_desk();
        if (!assigned) return {};

        return {
            ['#' + assigned.map_id]: {
                fill: '#22c55e',
            },
        };
    });

    // Map features (desk pin for the assigned desk)
    public readonly features = computed(() => {
        const assigned = this.assigned_desk();
        if (!assigned) return [];

        console.log('Assigned:', assigned);

        return [
            {
                location: assigned.map_id,
                content: MapPinComponent,
                data: {
                    message: assigned.name || assigned.id || 'Assigned Desk',
                    fill: '#22c55e',
                    stroke: '#fff',
                },
            },
        ];
    });

    public readonly confirm = async () => {
        this.loading.set('booking');
        this._state.setOptions({ type: 'desk' });
        this._state.form.patchValue({ booking_type: 'desk' });
        this._state.form.patchValue({
            asset_id: this.assigned_desk().id,
            resources: [this.assigned_desk()],
        });
        try {
            if ((await nextValueFrom(this._state.options))?.group) {
                await this._state.postFormForGroup();
            } else {
                await this._state.postForm();
            }
            await this._router.navigate(['/book', 'desk', 'success']);
            this._dialog_ref?.close(true);
        } catch (e) {
            this.loading.set('');
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`),
            );
        }
    };

    public readonly dismiss = () => {
        this._dialog_ref?.close(false);
    };
}
