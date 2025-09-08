import { Component, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'landing-quick-links',
    template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features.includes('spaces')) {
                <a
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    [routerLink]="['/book', 'meeting']"
                >
                    <div
                        class="flex h-16 min-w-[4rem] items-center justify-center rounded bg-base-200"
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
            }
            @if (features.includes('desks')) {
                <a
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    [routerLink]="['/book', 'desk']"
                >
                    <div
                        class="flex h-16 min-w-[4rem] items-center justify-center rounded bg-base-200"
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
            }
            @if (features.includes('parking')) {
                <a
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    [routerLink]="['/book', 'parking']"
                >
                    <div
                        class="flex h-16 min-w-[4rem] items-center justify-center rounded bg-base-200"
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
            }
            @if (features.includes('lockers')) {
                <a
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    [routerLink]="['/book', 'locker']"
                >
                    <div
                        class="flex h-16 min-w-[4rem] items-center justify-center rounded bg-base-200"
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
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class LandingQuickLinksComponent {
    private _settings = inject(SettingsService);

    public get features() {
        return this._settings.get('app.features') || [];
    }
}
