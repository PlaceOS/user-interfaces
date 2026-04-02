import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';

import { Router } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    getInvalidFields,
    nextValueFrom,
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
            class="bg-base-200 relative z-0 flex h-full w-full flex-col overflow-auto"
        >
            <div
                class="mx-auto min-h-full w-[80rem] max-w-full flex-1 space-y-4 px-4 pt-4"
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
                                (form.value.id
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
                        @if (form.value.request_type === 'after_hours') {
                            <div class="text-warning flex items-center gap-2">
                                <icon class="text-lg">error</icon>
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
                    class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
                >
                    <button
                        btn
                        matRipple
                        class="inverse flex items-center gap-2"
                        (click)="clearForm()"
                    >
                        <icon>close</icon>
                        {{ 'BOOKINGS.PARKING_CANCEL' | translate }}
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
                                <icon class="text-2xl">send</icon>
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
        MatRippleModule,
        ReactiveFormsModule,
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
    public readonly submission_notes_html = settingSignal(
        'parking.request_submission_notes_html',
        '',
    );

    public readonly clearForm = () => this._state.resetForm();

    public get form() {
        return this._state.form;
    }

    public get user_name(): string {
        const user = this.form.value.user;
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
            prefer_booked_location_first: false,
            p2_document_names: [],
            attachments: [],
            recurrence_type: 'none',
        };
        if (!this.form.getRawValue().date) {
            const day_start = startOfDay(now);
            defaults.date = day_start.valueOf() + 7 * 60 * 60 * 1000;
            defaults.duration = 600;
        }
        this.form.patchValue(defaults);
        const parking_user = await nextValueFrom(this._parking.user_details);
        if (parking_user?.email) {
            if (!this.form.value.plate_number) {
                this.form.patchValue({
                    plate_number:
                        this._settings.get('plate_number') ||
                        parking_user.plate_number ||
                        '',
                });
            }
            this.show_special_needs.set(!!parking_user.special_needs || true);
        }
    }

    public readonly submitRequest = async () => {
        const { date } = this.form.getRawValue();
        if (!date) {
            const state = this.form.controls.date.disabled;
            if (state) this.form.controls.date.enable();
            this.form.patchValue({
                date: roundToNearestMinutes(Date.now(), {
                    nearestTo: 5,
                    roundingMethod: 'ceil',
                }).valueOf(),
            });
            if (state) this.form.controls.date.disable();
        }
        this.form.patchValue({
            asset_id: `unallocated-${randomString(8)}`,
            asset_name: 'Parking Request',
            description: 'Parking Request',
            title: this.form.value.title || 'Parking Request',
        });
        if (
            this.form.value.request_type === 'special' &&
            !`${this.form.value.notes || ''}`.trim()
        ) {
            return notifyError(
                'Reason for request is required for P2 Special Needs Request.',
            );
        }
        const building = this._org.building;
        this.form.patchValue({
            zones: [
                this._org.organisation.id,
                this._org.region?.id,
                building?.id,
            ].filter(Boolean),
        });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(', ')}]`,
            );
        this.loading.set(true);
        try {
            const r = await this._state.postForm().catch((_) => {
                notifyError(`Unable to submit parking request. ${_}`);
                return null;
            });
            if (!r) return;
            this._router.navigate(['/book', 'parking-request', 'success']);
            this._state.setView('success');
        } finally {
            this.loading.set(false);
        }
    };
}
