import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'landing-quick-links',
    template: `
        <h3 class="sm:text-lg font-medium mb-2 sm:mb-4 px-4">
            {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="flex w-[calc(100%-2rem)] overflow-auto space-x-2 mx-4 mb-4 snap-x"
        >
            <a
                matRipple
                class="w-64 min-w-64 snap-start p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'meeting']"
                *ngIf="features.includes('spaces')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="h-1/2 w-1/2 object-contain object-center"
                        src="assets/icons/room-placeholder.svg"
                    />
                </div>
                <div class="text-xl">
                    {{ 'APP.WORKPLACE.QUICK_LINK_ROOMS' | translate }}
                </div>
            </a>
            <a
                matRipple
                class="w-64 min-w-64 snap-start p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'new-desk']"
                *ngIf="features.includes('desks')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="h-1/2 w-1/2 object-contain object-center"
                        src="assets/icons/desk-placeholder.svg"
                    />
                </div>
                <div class="text-xl">
                    {{ 'APP.WORKPLACE.QUICK_LINK_DESKS' | translate }}
                </div>
            </a>
            <a
                matRipple
                class="w-64 min-w-64 snap-start p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'new-parking']"
                *ngIf="features.includes('parking')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="h-1/2 w-1/2 object-contain object-center"
                        src="assets/icons/car-placeholder.svg"
                    />
                </div>
                <div class="text-xl">
                    {{ 'APP.WORKPLACE.QUICK_LINK_PARKING' | translate }}
                </div>
            </a>
            <a
                matRipple
                class="w-64 min-w-64 snap-start p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100"
                [routerLink]="['/book', 'locker']"
                *ngIf="features.includes('parking')"
            >
                <div
                    class="min-w-[4rem] h-16 rounded bg-base-200 flex items-center justify-center"
                >
                    <img
                        class="h-1/2 w-1/2 object-contain object-center"
                        src="assets/icons/locker-placeholder.svg"
                    />
                </div>
                <div class="text-xl">
                    {{ 'APP.WORKPLACE.QUICK_LINK_LOCKERS' | translate }}
                </div>
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
