import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    getInvalidSignalFields,
    notifyError,
    OrganisationService,
    randomString,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import { roundToNearestMinutes, startOfDay } from 'date-fns';
import { ParkingRequestFormDetailsComponent } from './parking-request-form-details.component';

@Component({
    selector: 'parking-request-form',
    template: `
        <div class="bg-base-200 h-full w-full overflow-auto p-2 sm:p-4">
            <div
                class="bg-base-100 border-base-300 mx-auto flex w-3xl max-w-full flex-col gap-2 rounded-xl border p-2 sm:gap-4 sm:p-4"
            >
                <!-- Header -->
                <div
                    class="bg-base-100 border-base-300 flex items-center gap-4 rounded-lg border p-6"
                >
                    <div
                        class="bg-info/20 text-info flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold"
                    >
                        P
                    </div>
                    <div>
                        <h1 class="text-2xl font-semibold">
                            {{
                                (model().id
                                    ? 'APP.WORKPLACE.PARKING_REQUEST_EDIT_HEADER'
                                    : 'BOOKINGS.PARKING_REQUEST_TITLE'
                                ) | translate
                            }}
                        </h1>
                        <p class="opacity-60">
                            {{
                                'BOOKINGS.PARKING_REQUEST_SUBTITLE' | translate
                            }}
                        </p>
                    </div>
                </div>

                <!-- Form Details -->
                <parking-request-form-details
                    [form]="form"
                    [model_input]="model"
                    [show_special_needs]="show_special_needs()"
                ></parking-request-form-details>

                <!-- SUMMARY + SUBMISSION -->
                <div
                    class="bg-base-200 border-base-300 space-y-4 rounded-lg border p-2 sm:mt-2"
                >
                    @if (submission_notes_html()) {
                        <div
                            class="bg-base-100 border-base-300 rounded-lg border p-4"
                        >
                            <h3 class="mb-3 text-lg font-semibold">
                                {{
                                    'BOOKINGS.PARKING_SUMMARY_TITLE' | translate
                                }}
                            </h3>
                            <div
                                class="prose prose-sm max-w-none"
                                [innerHTML]="submission_notes_html() | sanitize"
                            ></div>
                        </div>
                    }
                    <!-- Buttons -->
                    <div
                        class="flex items-center justify-end gap-1 text-sm sm:gap-3 sm:text-base"
                    >
                        @if (loading()) {
                            <mat-spinner diameter="32"></mat-spinner>
                        } @else {
                            <button
                                btn
                                matRipple
                                class="inverse flex w-24 flex-1 items-center gap-2 sm:w-auto sm:flex-none"
                                (click)="clearForm()"
                            >
                                <icon class="text-xl">close</icon>
                                <div class="mr-2">
                                    {{ 'COMMON.CANCEL' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                confirm
                                class="flex flex-1 items-center gap-2 sm:flex-none"
                                (click)="submitRequest()"
                            >
                                <icon class="text-xl">send</icon>
                                <div>
                                    {{
                                        'BOOKINGS.PARKING_SUBMIT_REQUEST'
                                            | translate
                                    }}
                                </div>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        SanitizePipe,
        IconComponent,
        ParkingRequestFormDetailsComponent,
        MatProgressSpinnerModule,
    ],
})
export class ParkingRequestFormComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(BookingFormService);
    private _parking = inject(ParkingService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    public readonly loading = signal(false);
    public readonly show_special_needs = signal(false);
    public readonly available_days = settingSignal(
        'parking.available_period',
        14,
    );
    public readonly submission_notes_html = computed(() =>
        settingSignal('parking.request_submission_notes_html', '')().trim(),
    );

    public readonly clearForm = () => this._state.resetForm();

    public get form() {
        return this._state.form;
    }

    public get model() {
        return this._state.model;
    }

    public get user_name(): string {
        const user = this.model().user;
        return user?.name || user?.email || '';
    }

    public async ngOnInit() {
        this._state.setOptions({ type: 'parking' });
        const user = currentUser();
        const now = roundToNearestMinutes(Date.now(), {
            nearestTo: 5,
            roundingMethod: 'ceil',
        }).valueOf();
        const defaults: Record<string, any> = {
            user,
            title: 'Parking Request',
            request_type: 'standard',
            vehicle_type: 'car',
            space_restrictions: false,
            extra_space_restrictions: [],
            prefer_booked_location_first: false,
            attachments: [],
            recurrence_type: 'none',
        };
        // For new parking requests (no id), always seed a sensible parking
        // window — the booking-form service starts every form with
        // `date = Date.now() + 5min` and `duration = 60` (see Booking
        // class), so the existing `!date` guard never trips and the form
        // would otherwise open at "current time, 1 hour" instead of the
        // shift the user expects.
        if (!this.model().id) {
            const day_start = startOfDay(now);
            defaults.date = day_start.valueOf() + 8 * 60 * 60 * 1000;
            defaults.duration = 540;
        }
        this.model.update((m) => ({ ...m, ...defaults }));
        const parking_user = this._parking.user_details();
        if (parking_user?.email) {
            if (!this.model().plate_number) {
                this.model.update((m) => ({
                    ...m,
                    plate_number:
                        this._settings.get('plate_number') ||
                        parking_user.plate_number ||
                        '',
                }));
            }
            this.show_special_needs.set(!!parking_user.special_needs);
        }
    }

    public readonly submitRequest = async () => {
        const { date } = this.model();
        if (!date) {
            // Disabled state no longer blocks writing the model value.
            this.model.update((m) => ({
                ...m,
                date: roundToNearestMinutes(Date.now(), {
                    nearestTo: 5,
                    roundingMethod: 'ceil',
                }).valueOf(),
            }));
        }
        this.model.update((m) => ({
            ...m,
            asset_id: `unallocated-${randomString(8)}`,
            asset_name: 'Parking Request',
            description: 'Parking Request',
            title: m.title || 'Parking Request',
            plate_number: `${m.plate_number || ''}`.trim(),
        }));
        const building = this._org.building;
        const location =
            building?.display_name || building?.name || this.model().location;
        const extension_data = {
            ...((this.model() as any).extension_data || {}),
            location,
        };
        this.model.update(
            (m) =>
                ({
                    ...m,
                    zones: [
                        this._org.organisation.id,
                        this._org.region?.id,
                        building?.id,
                    ].filter(Boolean),
                    location,
                    extension_data,
                }) as any,
        );
        if (!this.form().valid())
            return notifyError(
                `Some fields are invalid. [${getInvalidSignalFields(
                    this.form,
                    this.model,
                ).join(', ')}]`,
            );
        const plate_number = this.model().plate_number;
        this.loading.set(true);
        try {
            const r = await this._state.postForm().catch((_) => {
                notifyError(`Unable to submit parking request. ${_}`);
                return null;
            });
            if (!r) return;
            this._savePlateNumber(plate_number);
            this._router.navigate(['/book', 'parking-request', 'success']);
            this._state.setView('success');
        } finally {
            this.loading.set(false);
        }
    };

    private _savePlateNumber(plate_number: string) {
        if (!plate_number) return;
        const saved_plate_numbers = this._settings.get('plate_numbers');
        const plate_numbers = Array.isArray(saved_plate_numbers)
            ? saved_plate_numbers
            : [];
        this._settings.saveUserSetting('plate_numbers', [
            plate_number,
            ...plate_numbers.filter(
                (_) =>
                    typeof _ === 'string' &&
                    _.trim().toLowerCase() !== plate_number.toLowerCase(),
            ),
        ]);
    }
}
