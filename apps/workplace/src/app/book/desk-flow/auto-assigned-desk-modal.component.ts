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
import { BookingAsset, BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
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
                class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
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
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-success text-white"
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
                        class="mb-4 space-y-3 rounded-lg border border-base-200 bg-base-100 p-4"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">chair</icon>
                            <div class="leading-tight">
                                <div class="text-xs uppercase tracking-wide">
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
                                <div class="text-xs uppercase tracking-wide">
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
                                <div class="text-xs uppercase tracking-wide">
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
                        class="relative h-64 overflow-hidden rounded-lg border border-base-200 bg-base-200"
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
                                class="flex h-full w-full items-center justify-center text-base-content opacity-30"
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
                class="flex items-center justify-between gap-2 border-t border-base-200 p-4"
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
            const available_desks = await firstTruthyValueFrom(
                this._state.available_resources,
            );

            if (!available_desks?.length) {
                notifyError(i18n('BOOKINGS.DESK_LIST_EMPTY'));
                this.dismiss();
                return;
            }

            // Group desks by level and find level with most available desks
            const desks_by_level = available_desks.reduce(
                (acc, desk) => {
                    const level_id = desk.zone?.id || 'unknown';
                    if (!acc[level_id]) {
                        acc[level_id] = [];
                    }
                    acc[level_id].push(desk);
                    return acc;
                },
                {} as Record<string, typeof available_desks>,
            );

            // Find the level with the most available desks
            const level_with_most_desks = Object.entries(desks_by_level).sort(
                ([, a], [, b]) => b.length - a.length,
            )[0];

            // Pick the first desk from the level with most availability
            const assigned_desk = level_with_most_desks[1][0];

            form.patchValue({
                asset_id: assigned_desk.id,
                resources: [assigned_desk],
            });

            this.assigned_desk.set(assigned_desk);

            this.loading.set('');
        } catch (error) {
            console.error('Error auto-assigning desk:', error);
            notifyError(i18n('BOOKINGS.DESK_LIST_EMPTY'));
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
