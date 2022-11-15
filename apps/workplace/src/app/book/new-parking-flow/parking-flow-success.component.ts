import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'parking-flow-success',
    template: ` <div class="absolute inset-0 bg-white flex flex-col z-50">
        <main
            class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
        >
            <h2 class="text-2xl font-medium" i18n>Parking Space Confirmed!</h2>
            <p class="text-center max-w-[512px]" i18n>
                Your
                <span>
                    parking space reservation for
                    {{ last_event.asset_name }} at {{ location }}, </span
                >has been successfully booked for the
                {{ last_event.date | date: 'mediumDate' }} at
                {{ last_event.date | date: 'shortTime' }}-{{
                    last_event.date + last_event.duration * 60 * 1000
                        | date: 'shortTime'
                }}.
            </p>
            <img src="assets/icons/parking-success.svg" />
        </main>
        <footer
            class="p-2 w-full border-t border-gray-200 mt-4 flex items-center justify-center"
        >
            <a
                button
                mat-button
                class="w-full max-w-[512px]"
                [routerLink]="['/']"
                i18n
            >
                Great, thanks!
            </a>
        </footer>
    </div>`,
    styles: [``],
})
export class ParkingFlowSuccessComponent {
    public get location() {
        const resource = this.last_event?.extension_data?.booking_asset;
        if (!resource) return '';
        return resource.zone
            ? `, ${resource.zone.display_name || resource.zone.name || resource.zone.id}`
            : '';
    }

    public get last_event() {
        return this._state.last_success;
    }

    constructor(private _state: BookingFormService) {}
}
