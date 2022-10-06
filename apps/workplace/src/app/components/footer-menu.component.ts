import { Component } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="fixed z-20 inset-0 bottom-16 bg-black/75 text-white"
            *ngIf="show_book_items"
            [attr.dark]="dark_mode"
            (click)="show_book_items = false"
        >
            <div
                class="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center p-4"
            >
                <a
                    matRipple
                    [routerLink]="
                        new_features
                            ? ['/book', 'meeting']
                            : ['/book', 'spaces']
                    "
                    *ngIf="features.includes('spaces')"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3 m-2"
                >
                    <div
                        class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                    >
                        <app-icon filled class="text-neutral-500"
                            >meeting_room</app-icon
                        >
                        <app-icon outline className="material-icons-outlined"
                            >meeting_room</app-icon
                        >
                    </div>
                    <div class="text-xs">Book Meeting</div>
                </a>
                <a
                    matRipple
                    [routerLink]="
                        new_features ? ['/book', 'newdesk'] : ['/book', 'desks']
                    "
                    routerLinkActive="active"
                    *ngIf="features.includes('desks')"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3 m-2"
                >
                    <div
                        class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                    >
                        <app-icon class="text-neutral-500">
                            <svg
                                style="font-size: 1em; height: 1em"
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 26"
                            >
                                <defs>
                                    <style>
                                        .cls-1 {
                                            fill: currentColor;
                                        }
                                    </style>
                                </defs>
                                <polygon
                                    class="cls-1"
                                    points="24.999 7 0.999 7 0.999 9 2.999 9 2.999 22 4.999 22 4.999 12 20.999 12 20.999 22 22.999 22 22.999 9 24.999 9 24.999 7"
                                />
                            </svg>
                        </app-icon>
                    </div>
                    <div class="text-xs">Book Desk</div>
                </a>
                <a
                    matRipple
                    [routerLink]="['/book', 'parking']"
                    routerLinkActive="active"
                    *ngIf="features.includes('parking')"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3 m-2"
                >
                    <div
                        class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                    >
                        <app-icon filled class="text-neutral-500"
                            >directions_car</app-icon
                        >
                        <app-icon outline className="material-icons-outlined"
                            >directions_car</app-icon
                        >
                    </div>
                    <div class="text-xs">Book Car Space</div>
                </a>
                <a
                    matRipple
                    *ngIf="features.includes('visitor-invite')"
                    [routerLink]="['/book', 'visitor']"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3 m-2"
                >
                    <div
                        class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                    >
                        <app-icon filled class="text-neutral-500"
                            >person_add</app-icon
                        >
                        <app-icon outline className="material-icons-outlined"
                            >person_add</app-icon
                        >
                    </div>
                    <div class="text-xs">Invite Visitor</div>
                </a>
                <a
                    matRipple
                    [routerLink]="
                        new_features ? ['/your-bookings'] : ['/schedule']
                    "
                    *ngIf="features.includes('schedule')"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3  m-2"
                >
                    <div
                        class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                    >
                        <app-icon filled class="text-neutral-500"
                            >today</app-icon
                        >
                        <app-icon outline className="material-icons-outlined"
                            >today</app-icon
                        >
                    </div>
                    <div class="text-xs">Your Bookings</div>
                </a>
            </div>
        </div>
        <div
            class="flex items-center justify-center bg-white dark:bg-neutral-700 border-t border-gray-200 dark:border-neutral-500 shadow relative h-16 w-full sm:hidden z-40"
            *ngIf="features.length > 3; else simple_state"
            [attr.dark]="dark_mode"
        >
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="[default_page]"
                routerLinkActive="text-primary active"
            >
                <app-icon filled class="text-2xl">home</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-2xl !m-0"
                    >home</app-icon
                >
                <span class="text-sm">Home</span>
            </a>
            <button
                matRipple
                class="flex items-center justify-center w-12 h-12 mb-4 rounded-full z-10 dark:bg-neutral-800"
                (click)="show_book_items = !show_book_items"
                [class.bg-primary]="show_book_items"
                [class.text-white]="show_book_items"
                [class.bg-gray-300]="!show_book_items"
            >
                <app-icon class="text-2xl">{{
                    show_book_items ? 'close' : 'add'
                }}</app-icon>
            </button>
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="['/explore']"
                routerLinkActive="text-primary active"
            >
                <app-icon filled class="text-2xl">place</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-2xl !m-0"
                    >place</app-icon
                >
                <span class="text-sm">Spaces</span>
            </a>
            <div
                class="overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-24 h-2"
            >
                <div
                    class="w-16 h-16 rounded-full bg-white dark:bg-neutral-700 shadow mx-auto border-t border-gray-200 dark:border-neutral-500"
                ></div>
            </div>
        </div>
        <ng-template #simple_state>
            <div
                class="flex items-center justify-center bg-white dark:bg-neutral-700 border-t border-gray-200 dark:border-neutral-500 shadow relative h-16 w-full sm:hidden z-40"
            >
                <top-menu></top-menu>
            </div>
        </ng-template>
    `,
    styles: [
        `
            a.active app-icon {
                color: var(--primary) !important;
            }

            [dark="true"] a.active app-icon,
            [dark="true"] a.active {
                color: var(--secondary) !important;
            }

            a:not(.active) [filled],
            a.active [outline] {
                display: none;
            }
        `,
    ],
})
export class FooterMenuComponent {
    public show_book_items = false;

    public get default_page(): string {
        return this._settings.get('app.default_route') || '/dashboard';
    }

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    public get dark_mode(): boolean {
        return !!this._settings.get('dark_mode');
    }

    constructor(private _settings: SettingsService) {}
}
