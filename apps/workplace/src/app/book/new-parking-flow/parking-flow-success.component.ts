import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'parking-flow-success',
    template: `
        <div
            class="absolute inset-0 bg-base-100 flex flex-col z-50 overflow-auto"
        >
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium" i18n>
                    Parking Space Confirmed!
                </h2>
                <p class="text-center max-w-[32rem]" i18n>
                    Your
                    <span>
                        parking space reservation for
                        {{ last_event.asset_name }} at {{ location }}, </span
                    >has been successfully booked for the
                    {{ last_event.date | date: 'mediumDate' }} at
                    {{ last_event.date | date: time_format }}-{{
                        last_event.date + last_event.duration * 60 * 1000
                            | date: time_format
                    }}.
                </p>
                <img src="assets/icons/parking-success.svg" />
            </main>
            <footer
                class="sticky bottom-0 bg-base-100 p-2 w-full border-t border-base-200 mt-4 flex items-center justify-center"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/']"
                    i18n
                >
                    Great, thanks!
                </a>
            </footer>
        </div>
    `,
    styles: [``],
})
export class ParkingFlowSuccessComponent {
    public get location() {
        const resource = this.last_event?.extension_data?.booking_asset;
        if (!resource) return '';
        return resource.zone
            ? `, ${
                  resource.zone.display_name ||
                  resource.zone.name ||
                  resource.zone.id
              }`
            : '';
    }

    public get last_event() {
        return this._state.last_success;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService
    ) {}
}
