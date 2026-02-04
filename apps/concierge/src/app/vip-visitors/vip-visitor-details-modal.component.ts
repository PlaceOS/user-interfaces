import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import {
    Booking,
    getTimezoneOffsetString,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'vip-visitor-details-modal',
    template: `
        <div class="bg-base-100 w-[32rem] max-w-full overflow-hidden rounded-lg">
            <header
                class="bg-secondary text-secondary-content flex items-center justify-between p-4"
            >
                <h2 class="flex items-center space-x-2 text-lg font-medium">
                    <icon class="text-warning">star</icon>
                    <span>{{ 'APP.CONCIERGE.VIP_DETAILS_TITLE' | translate }}</span>
                </h2>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="text-secondary-content"
                >
                    <icon>close</icon>
                </button>
            </header>
            <div class="max-h-[70vh] space-y-4 overflow-y-auto p-4">
                <!-- Visitor Info -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>person</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_VISITOR' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.NAME' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.asset_name || '-' }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.EMAIL' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.asset_id || '-' }}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Visit Details -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>event</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_VISIT' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.DATE' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.date | date: 'mediumDate' : tz }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.TIME' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.date | date: time_format : tz }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.HOST' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.user_name || booking.user_email || '-' }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.STATUS' | translate }}
                            </div>
                            <div class="font-medium">
                                <span
                                    class="rounded px-2 py-0.5 text-xs"
                                    [class.bg-success]="booking.status === 'approved'"
                                    [class.text-success-content]="booking.status === 'approved'"
                                    [class.bg-error]="booking.status === 'declined'"
                                    [class.text-error-content]="booking.status === 'declined'"
                                    [class.bg-warning]="booking.status !== 'approved' && booking.status !== 'declined'"
                                    [class.text-warning-content]="booking.status !== 'approved' && booking.status !== 'declined'"
                                >
                                    {{ booking.status | titlecase }}
                                </span>
                            </div>
                        </div>
                        @if (booking.title) {
                            <div class="col-span-2">
                                <div class="opacity-60">
                                    {{ 'BOOKINGS.VIP_VISITOR_REASON' | translate }}
                                </div>
                                <div class="font-medium">{{ booking.title }}</div>
                            </div>
                        }
                    </div>
                </section>

                <!-- Booked By -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>edit_calendar</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_BOOKED_BY' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.NAME' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.booked_by_name || '-' }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.EMAIL' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.booked_by_email || '-' }}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- VIP Assistant -->
                @if (booking.extension_data?.vip_assistant_name || booking.extension_data?.vip_assistant_email) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3 class="mb-3 flex items-center space-x-2 font-medium">
                            <icon>support_agent</icon>
                            <span>{{ 'BOOKINGS.VIP_ASSISTANT' | translate }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <div class="opacity-60">
                                    {{ 'FORM.NAME' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.vip_assistant_name || '-' }}
                                </div>
                            </div>
                            <div>
                                <div class="opacity-60">
                                    {{ 'FORM.EMAIL' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.vip_assistant_email || '-' }}
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <!-- VIP Services -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>room_service</icon>
                        <span>{{ 'BOOKINGS.VIP_SERVICES' | translate }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_MEET_GREET' | translate }}
                            </div>
                            <div class="font-medium">
                                @switch (booking.extension_data?.meet_greet) {
                                    @case ('internal') {
                                        {{ 'BOOKINGS.VIP_MEET_GREET_INTERNAL' | translate }}
                                    }
                                    @case ('external_airport') {
                                        {{ 'BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT' | translate }}
                                    }
                                    @default {
                                        {{ 'BOOKINGS.VIP_MEET_GREET_NONE' | translate }}
                                    }
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_DRIVER' | translate }}
                            </div>
                            <div class="font-medium">
                                @switch (booking.extension_data?.driver) {
                                    @case ('in_house') {
                                        {{ 'BOOKINGS.VIP_DRIVER_IN_HOUSE' | translate }}
                                    }
                                    @case ('third_party') {
                                        {{ 'BOOKINGS.VIP_DRIVER_THIRD_PARTY' | translate }}
                                    }
                                    @default {
                                        -
                                    }
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_WALKTHROUGH' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.extension_data?.walkthrough ? ('COMMON.YES' | translate) : ('COMMON.NO' | translate) }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_GIVEAWAY_GIFT' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.extension_data?.gift ? ('COMMON.YES' | translate) : ('COMMON.NO' | translate) }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_PHOTOGRAPHER' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.extension_data?.photographer ? ('COMMON.YES' | translate) : ('COMMON.NO' | translate) }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_WELCOME_SCREEN' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.extension_data?.welcome_screen ? ('COMMON.YES' | translate) : ('COMMON.NO' | translate) }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_PRESENTATION' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.extension_data?.presentation ? ('COMMON.YES' | translate) : ('COMMON.NO' | translate) }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_WELCOME_BEVERAGE' | translate }}
                            </div>
                            <div class="font-medium">
                                @switch (booking.extension_data?.welcome_beverage) {
                                    @case ('standard') {
                                        {{ 'BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD' | translate }}
                                    }
                                    @case ('custom') {
                                        {{ booking.extension_data?.welcome_beverage_custom || ('BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM' | translate) }}
                                    }
                                    @default {
                                        {{ 'BOOKINGS.VIP_WELCOME_BEVERAGE_NONE' | translate }}
                                    }
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Restaurant Reservation -->
                @if (booking.extension_data?.restaurant_reservation) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3 class="mb-3 flex items-center space-x-2 font-medium">
                            <icon>restaurant</icon>
                            <span>{{
                                'BOOKINGS.VIP_RESTAURANT_RESERVATION' | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <div class="opacity-60">
                                    {{ 'BOOKINGS.VIP_RESTAURANT_NAME' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.restaurant_reservation?.name || '-' }}
                                </div>
                            </div>
                            <div>
                                <div class="opacity-60">
                                    {{ 'BOOKINGS.VIP_RESTAURANT_TIME' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.restaurant_reservation?.time | date: time_format : tz }}
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div class="opacity-60">
                                    {{ 'BOOKINGS.VIP_RESTAURANT_ADDRESS' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.restaurant_reservation?.address || '-' }}
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <!-- Check-in Status -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>how_to_reg</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_CHECKIN' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.CHECKED_IN' | translate }}
                            </div>
                            <div class="font-medium">
                                @if (booking.checked_in_at) {
                                    {{ booking.checked_in_at * 1000 | date: 'medium' : tz }}
                                } @else {
                                    -
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.CHECKED_OUT' | translate }}
                            </div>
                            <div class="font-medium">
                                @if (booking.checked_out_at) {
                                    {{ booking.checked_out_at * 1000 | date: 'medium' : tz }}
                                } @else {
                                    -
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="border-base-300 flex justify-end border-t p-4">
                <button btn matRipple mat-dialog-close>
                    {{ 'COMMON.CLOSE' | translate }}
                </button>
            </footer>
        </div>
    `,
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class VipVisitorDetailsModalComponent {
    private _dialog_ref = inject(MatDialogRef<VipVisitorDetailsModalComponent>);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly booking: Booking = inject(MAT_DIALOG_DATA).booking;

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        const use_tz = this._settings.get('app.bookings.use_building_timezone');
        const bld_tz = this._org.building?.timezone;
        return use_tz &&
            bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone
            ? bld_tz
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }
}
