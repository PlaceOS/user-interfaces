import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';

@Component({
    selector: 'landing-quick-links',
    template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features().includes('spaces')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'meeting']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
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
            @if (features().includes('desks')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'desk']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
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
            @if (features().includes('parking')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'parking']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
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
            @if (features().includes('lockers')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'locker']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
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
    imports: [TranslatePipe, MatRippleModule, RouterModule],
})
export class LandingQuickLinksComponent {
    public readonly features = settingSignal<string[]>('features', []);
}
