import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    approveBooking as approveBookingApi,
    BookingFormService,
    ParkingService,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    currentUser,
    getInvalidFields,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomString,
    settingSignal,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import { roundToNearestMinutes, startOfDay } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { ParkingRequestFormDetailsComponent } from '../../../../workplace/src/app/book/parking-request-flow/parking-request-form-details.component';

@Component({
    selector: 'parking-request-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                form.value.id
                    ? ('APP.CONCIERGE.PARKING_REQUEST_EDIT' | translate)
                    : ('APP.CONCIERGE.PARKING_REQUEST_NEW' | translate)
            "
            [loading]="loading() ? ('COMMON.SAVING' | translate) : ''"
            (confirm)="postForm()"
        >
            <div class="mx-auto -mb-4 w-[80rem] max-w-full space-y-4">
                <div
                    class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                >
                    <div
                        class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                    >
                        <icon>local_parking</icon>
                        <div>
                            {{
                                form.value.id
                                    ? ('APP.CONCIERGE.PARKING_REQUEST_EDIT'
                                      | translate)
                                    : ('BOOKINGS.PARKING_REQUEST_TITLE'
                                      | translate)
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

                    <parking-request-form-details
                        [form]="form"
                        [show_special_needs]="show_special_needs()"
                        [force_show_host_select]="true"
                        [force_allow_any_host]="can_book_for_anyone()"
                    ></parking-request-form-details>

                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>info</icon>
                        <div>
                            {{ 'BOOKINGS.PARKING_SUMMARY_TITLE' | translate }}
                        </div>
                    </div>
                    <div class="space-y-4 p-4">
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
                    </div>
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
        </fullscreen-modal-shell>
    `,
    styles: [
        `
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        TranslatePipe,
        SanitizePipe,
        IconComponent,
        ParkingRequestFormDetailsComponent,
    ],
})
export class ParkingRequestModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<{ booking?: Booking; date?: number }>(
        MAT_DIALOG_DATA,
    );
    private _booking_form = inject(BookingFormService);
    private _parking = inject(ParkingService);
    private _dialog_ref =
        inject<MatDialogRef<ParkingRequestModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly loading = signal(false);
    public readonly show_special_needs = signal(false);
    public readonly can_book_for_anyone = settingSignal(
        'parking.can_book_for_anyone',
        false,
    );
    public readonly submission_notes_html = settingSignal(
        'parking.request_submission_notes_html',
        '',
    );

    public form = this._booking_form.form;

    public async ngOnInit() {
        this._booking_form.newForm('parking', this._data.booking);
        this._booking_form.setOptions({ type: 'parking' });
        const form_value = this.form.getRawValue();
        this.form.patchValue({
            user: form_value.user || currentUser(),
            title: form_value.title || 'Parking Request',
            booking_type: 'parking',
            request_type: form_value.request_type || 'standard',
            vehicle_type: form_value.vehicle_type || 'car',
            space_restrictions: form_value.space_restrictions ?? false,
            extra_space_restrictions: form_value.extra_space_restrictions || [],
            prefer_booked_location_first:
                form_value.prefer_booked_location_first ?? false,
            date: this.form.value.date || this._defaultStartDate(),
            duration: this.form.value.duration || 540,
            all_day: form_value.all_day ?? false,
            recurrence_type: form_value.recurrence_type || 'none',
        });
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

    public async postForm() {
        if (!this.form.getRawValue().date) {
            const was_disabled = this.form.controls.date.disabled;
            if (was_disabled) this.form.controls.date.enable();
            this.form.patchValue({
                date: roundToNearestMinutes(Date.now(), {
                    nearestTo: 5,
                    roundingMethod: 'ceil',
                }).valueOf(),
            });
            if (was_disabled) this.form.controls.date.disable();
        }
        const building = this._org.building;
        const form_value = this.form.getRawValue();
        this.form.patchValue({
            asset_id: form_value.asset_id || `unallocated-${randomString(8)}`,
            asset_name: 'Parking Request',
            description: 'Parking Request',
            title: this.form.value.title || 'Parking Request',
            booking_type: 'parking',
            zones: unique([
                this._org.organisation.id,
                this._org.region?.id,
                building?.id,
            ]).filter((_) => _),
        });
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const result = await this._booking_form
            .postForm(false, false)
            .catch((e) => {
                notifyError(e?.message || e?.error || e);
                this.loading.set(false);
                this._dialog_ref.disableClose = false;
                throw e;
            });
        if (!form_value.id && result?.id && result.status !== 'approved') {
            await lastValueFrom(approveBookingApi(result.id)).catch((e) => {
                notifyError(e?.message || e?.error || e);
                this.loading.set(false);
                this._dialog_ref.disableClose = false;
                throw e;
            });
        }
        notifySuccess(i18n('APP.CONCIERGE.PARKING_REQUEST_SAVE'));
        this._booking_form.clearForm();
        this._dialog_ref.close(result.id);
    }

    private _defaultStartDate() {
        const date = this._data.date || Date.now();
        const today_start = startOfDay(Date.now()).valueOf();
        const day_start = startOfDay(date).valueOf();
        if (day_start > today_start) return day_start + 8 * 60 * 60 * 1000;
        return roundToNearestMinutes(Date.now(), {
            nearestTo: 5,
            roundingMethod: 'ceil',
        }).valueOf();
    }
}
