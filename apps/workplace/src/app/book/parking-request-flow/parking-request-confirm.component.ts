import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    notifyError,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'parking-request-confirm',
    template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="m-0 flex-1 text-xl font-medium capitalize">
                {{
                    'APP.WORKPLACE.PARKING_REQUEST_CONFIRM_TITLE' | translate
                }}
            </h2>
            <div class="">
                @if (loading | async) {
                    <mat-spinner diameter="32"></mat-spinner>
                }
                @if (show_close()) {
                    <button
                        icon
                        name="close-parking-request-confirm"
                        matRipple
                        (click)="dismiss()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>
                }
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4 text-base">
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">
                    {{ booking.title || '~Untitled~' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <icon>calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>schedule</icon>
                    <div time>
                        {{
                            booking.all_day
                                ? ('COMMON.ALL_DAY' | translate)
                                : (booking.date | date: time_format) +
                                  ' - ' +
                                  (booking.date + booking.duration * 60 * 1000
                                      | date: time_format + ' (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        <section
            vehicle
            class="flex space-x-1 border-t px-2 py-4 text-base"
        >
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">
                    {{ 'BOOKINGS.PARKING_VEHICLE_TYPE' | translate }}
                </h3>
                <div class="flex items-center space-x-2">
                    <icon>directions_car</icon>
                    <span>
                        {{
                            'BOOKINGS.PARKING_VEHICLE_'
                                + (booking.vehicle_type | uppercase)
                                | translate
                        }}
                    </span>
                </div>
                @if (booking.plate_number) {
                    <div class="flex items-center space-x-2">
                        <icon>confirmation_number</icon>
                        <span>{{ booking.plate_number }}</span>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <icon>category</icon>
                    <span>
                        {{
                            'BOOKINGS.PARKING_REQUEST_'
                                + (booking.request_type | uppercase)
                                | translate
                        }}
                    </span>
                </div>
                @if (booking.space_restrictions) {
                    <div class="flex items-center space-x-2">
                        <icon>warning</icon>
                        <span>
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS'
                                    | translate
                            }}
                        </span>
                    </div>
                }
                @if (booking.recurrence_type && booking.recurrence_type !== 'none') {
                    <div class="flex items-center space-x-2">
                        <icon>repeat</icon>
                        <span class="capitalize">
                            {{ booking.recurrence_type }}
                        </span>
                    </div>
                }
                @if (location) {
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <span>{{ location }}</span>
                    </div>
                }
            </div>
        </section>
        <footer class="border-base-200 mt-4 w-full border-t p-2">
            @if (!(loading | async)) {
                <button
                    confirm
                    btn
                    matRipple
                    class="w-full"
                    (click)="postForm()"
                >
                    {{ 'COMMON.CONFIRM' | translate }}
                </button>
            }
        </footer>
    `,
    styles: [
        `
            section > icon {
                font-size: 1.5rem;
                margin-top: 0.3rem;
            }

            h3 {
                font-size: 1.25rem;
                font-weight: medium;
                margin: 0.5rem 0;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatProgressSpinnerModule,
    ],
})
export class ParkingRequestConfirmComponent extends AsyncHandler {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _sheet_ref = inject(MatBottomSheetRef, { optional: true });
    private _settings = inject(SettingsService);

    public readonly show_close = model<boolean>(false);

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        const r = await this._state.postForm().catch((_) => {
            notifyError(`Unable to submit parking request. ${_}`);
        });
        if (!r) return;
        this.dismiss(true);
    };
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    public get time_format() {
        return this._settings.time_format;
    }

    public get booking() {
        return this._state.form.getRawValue() as any;
    }

    public get location() {
        const building = this._org.buildings.find((b) =>
            this.booking.zones?.includes(b.id),
        );
        return building?.display_name || building?.name || '';
    }
}
