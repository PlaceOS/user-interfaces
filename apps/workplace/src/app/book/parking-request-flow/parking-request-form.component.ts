import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

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
        <div
            cdkScrollable
            class="bg-base-200 relative z-0 flex h-full w-full flex-col overflow-auto"
        >
            <div
                class="mx-auto min-h-full w-[80rem] max-w-full flex-1 space-y-2 px-2 pt-2 sm:space-y-4 sm:px-4 sm:pt-4"
            >
                <div
                    class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                >
                    <!-- Gradient Header -->
                    <div
                        class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                    >
                        <icon>local_parking</icon>
                        <div>
                            {{
                                (model().id
                                    ? 'APP.WORKPLACE.PARKING_REQUEST_EDIT_HEADER'
                                    : 'BOOKINGS.PARKING_REQUEST_TITLE'
                                ) | translate
                            }}
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <p class="opacity-60">
                            {{
                                'BOOKINGS.PARKING_REQUEST_SUBTITLE' | translate
                            }}
                        </p>
                    </div>

                    <!-- Form Details -->
                    <parking-request-form-details
                        [form]="form"
                        [model_input]="model"
                        [show_special_needs]="show_special_needs()"
                    ></parking-request-form-details>

                    <!-- SUMMARY SECTION -->
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>info</icon>
                        <div>
                            {{ 'BOOKINGS.PARKING_SUMMARY_TITLE' | translate }}
                        </div>
                    </div>
                    <div class="space-y-4 p-4">
                        <!-- Allocation info box -->
                        <div
                            class="bg-base-200 border-base-300 flex items-start gap-3 rounded-lg border p-4"
                        >
                            <icon class="text-warning mt-0.5 shrink-0 text-xl"
                                >campaign</icon
                            >
                            <p
                                class="text-sm"
                                [innerHTML]="
                                    'BOOKINGS.PARKING_ALLOCATION_INFO'
                                        | translate
                                "
                            ></p>
                        </div>

                        <!-- Info bullets -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <icon class="text-success text-lg"
                                    >check_circle</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_ADVANCE_DAYS'
                                            | translate
                                                : {
                                                      days: available_days(),
                                                  }
                                    "
                                ></span>
                            </div>
                            <div class="flex items-center gap-2">
                                <icon class="text-success text-lg"
                                    >check_circle</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_APPROVAL_GROUP'
                                            | translate
                                    "
                                ></span>
                            </div>
                            <div class="flex items-center gap-2">
                                <icon class="text-warning text-lg"
                                    >warning</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_MANUAL_APPROVAL'
                                            | translate
                                    "
                                ></span>
                            </div>
                        </div>

                        <!-- Conditional after-hours warning -->
                        @if (model().request_type === 'after_hours') {
                            <div class="flex items-center gap-2">
                                <icon class="text-warning text-lg">error</icon>
                                <span class="text-sm">{{
                                    'BOOKINGS.PARKING_AFTER_HOURS_WARNING'
                                        | translate
                                }}</span>
                            </div>
                        }
                    </div>
                </div>

                <!-- Sticky bottom bar -->
                <div
                    class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between gap-2 rounded-t-xl border-x border-t p-3 text-sm sm:text-base"
                >
                    <button
                        btn
                        matRipple
                        class="inverse flex items-center gap-2"
                        (click)="clearForm()"
                    >
                        <icon class="text-xl">close</icon>
                        <div class="pr-2">
                            {{ 'BOOKINGS.PARKING_CANCEL' | translate }}
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        (click)="submitRequest()"
                        [disabled]="loading()"
                    >
                        <div class="flex items-center space-x-2">
                            @if (loading()) {
                                <icon class="animate-spin text-2xl"
                                    >progress_activity</icon
                                >
                            } @else {
                                <icon class="text-xl">send</icon>
                            }
                            <div class="flex-1 pr-4">
                                {{
                                    'BOOKINGS.PARKING_SUBMIT_REQUEST'
                                        | translate
                                }}
                            </div>
                            @if (!loading()) {
                                <icon class="text-2xl"
                                    >keyboard_arrow_right</icon
                                >
                            }
                        </div>
                    </button>
                </div>
                @if (submission_notes_html()) {
                    <div
                        class="border-base-300 bg-base-100 rounded-xl border p-4"
                    >
                        <div
                            class="prose prose-sm max-w-none"
                            [innerHTML]="submission_notes_html() | sanitize"
                        ></div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }

            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        CdkScrollable,
        MatRippleModule,
        TranslatePipe,
        SanitizePipe,
        IconComponent,
        ParkingRequestFormDetailsComponent,
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
    public readonly show_special_needs = signal(true);
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
            defaults.date = day_start.valueOf() + 7 * 60 * 60 * 1000;
            defaults.duration = 600;
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
            this.show_special_needs.set(!!parking_user.special_needs || true);
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
        if (
            this.model().request_type === 'special' &&
            !`${this.model().notes || ''}`.trim()
        ) {
            return notifyError(
                'Reason for request is required for P2 Special Needs Request.',
            );
        }
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
