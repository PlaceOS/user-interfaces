import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'landing-quick-links',
    template: `
        <h3 class="sm:text-lg font-medium mb-2 sm:mb-4 px-4">
            Make a Reservation
        </h3>
        <div class="flex w-full overflow-auto space-x-2 px-4 mb-4">
            <a
                matRipple
                class="w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'meeting']"
                *ngIf="features.includes('spaces')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="m-auto"
                        src="assets/icons/room-placeholder.svg"
                    />
                </div>
                <div class="text-xl">Book a Room</div>
            </a>
            <a
                matRipple
                class="w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'new-desk']"
                *ngIf="features.includes('desks')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="m-auto"
                        src="assets/icons/desk-placeholder.svg"
                    />
                </div>
                <div class="text-xl">Book a Desk</div>
            </a>
            <a
                matRipple
                class="w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'new-parking']"
                *ngIf="features.includes('parking')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="m-auto"
                        src="assets/icons/car-placeholder.svg"
                    />
                </div>
                <div class="text-xl">Book a Parking Space</div>
            </a>
        </div>
    `,
    styles: [``],
})
export class LandingQuickLinksComponent {
    public get features() {
        return this._settings.get('app.features') || [];
    }

    constructor(private _settings: SettingsService) {}
}
