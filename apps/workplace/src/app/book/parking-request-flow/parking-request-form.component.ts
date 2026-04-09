import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
        <div class="bg-base-200 h-full w-full overflow-auto p-4">
            <div
                class="bg-base-100 mx-auto w-3xl max-w-full space-y-4 rounded-xl p-4"
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
                                (form.value.id
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
                    [show_special_needs]="show_special_needs()"
                ></parking-request-form-details>

                <!-- SUMMARY + SUBMISSION -->
                <div
                    class="bg-base-200 border-base-300 mt-4 space-y-4 rounded-lg border p-2"
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
                    <div class="flex items-center justify-end gap-3">
                        @if (loading()) {
                            <mat-spinner diameter="32"></mat-spinner>
                        } @else {
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
                                confirm
                                class="flex items-center gap-2"
                                (click)="submitRequest()"
                            >
                                <icon>send</icon>
                                {{
                                    'BOOKINGS.PARKING_SUBMIT_REQUEST'
                                        | translate
                                }}
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
        ReactiveFormsModule,
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
            extra_space_restrictions: [],
            prefer_booked_location_first: false,
            recurrence_type: 'none',
        };
        if (!this.form.getRawValue().date) {
            const day_start = startOfDay(now);
            defaults.date = day_start.valueOf() + 8 * 60 * 60 * 1000;
            defaults.duration = 540;
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
            this.show_special_needs.set(!!parking_user.special_needs);
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
