import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'new-desk-flow-success',
    styles: [],
    template: `
        <div class="absolute inset-0 bg-white dark:bg-neutral-600 flex flex-col z-50">
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium text-center">
                    {{ last_event.asset_name || last_event.asset_id
                    }}{{ location }} Booked!
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center">
                    Your desk has been successfully booked
                    <span assets *ngIf="last_event?.extension_data?.assets?.length">
                        including
                        {{ last_event?.extension_data?.assets?.length }}
                        asset(s)
                    </span>
                    for the
                    {{ last_event.date | date: 'mediumDate' }} at
                    {{ last_event.date | date: 'shortTime' }}-{{
                        last_event.date + last_event.duration * 60 * 1000
                            | date: 'shortTime'
                    }}.
                </p>
            </main>
            <footer class="p-2 w-full border-t border-gray-200 dark:border-neutral-500 mt-4">
                <a button mat-button class="w-full" [routerLink]="['/']">
                    Great, thanks!
                </a>
            </footer>
        </div>
    `,
})
export class NewDeskFlowSuccessComponent {
    public get location() {
        const desk = this.last_event?.extension_data?.booking_asset;
        if (!desk) return '';
        return desk.zone
            ? `, ${desk.zone.display_name || desk.zone.name || desk.zone.id}`
            : '';
    }

    public get last_event() {
        return this._state.last_success;
    }

    constructor(private _state: BookingFormService) {}
}
