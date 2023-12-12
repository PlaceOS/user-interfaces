import { Component } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="fixed z-20 inset-0 bottom-16 text-white"
            *ngIf="show_book_items"
            [attr.dark]="dark_mode"
            (click)="show_book_items = false"
        >
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                class="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center p-4"
            >
                <a
                    name="footer-nav-meeting"
                    matRipple
                    [routerLink]="
                        new_features
                            ? ['/book', 'meeting']
                            : ['/book', 'spaces']
                    "
                    *ngIf="features.includes('spaces')"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 w-1/3 m-2"
                >
                    <div
                        class="bg-base-100 text-base-content rounded-full h-12 w-12 text-2xl flex items-center justify-center"
                    >
                        <app-icon filled>meeting_room</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >meeting_room</app-icon
                        >
                    </div>
                    <div class="text-xs" i18n>Book Meeting</div>
                </a>
                <a
                    matRipple
                    name="footer-nav-desks"
                    [routerLink]="
                        new_features
                            ? ['/book', 'new-desks']
                            : ['/book', 'desks']
                    "
                    routerLinkActive="active"
                    *ngIf="features.includes('desks')"
                    class="flex flex-col items-center justify-center space-y-2 w-1/3 m-2"
                >
                    <div
                        class="bg-base-100 text-base-content rounded-full h-12 w-12 text-2xl flex items-center justify-center"
                    >
                        <app-icon filled>desk</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >desk</app-icon
                        >
                    </div>
                    <div class="text-xs" i18n>Book Desk</div>
                </a>
                <a
                    matRipple
                    name="footer-nav-parking"
                    [routerLink]="['/book', 'new-parking']"
                    routerLinkActive="active"
                    *ngIf="features.includes('parking')"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3 m-2"
                >
                    <div
                        class="bg-base-100 text-base-content rounded-full h-12 w-12 text-2xl flex items-center justify-center"
                    >
                        <app-icon filled>directions_car</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >directions_car</app-icon
                        >
                    </div>
                    <div class="text-xs" i18n>Book Car Space</div>
                </a>
                <a
                    matRipple
                    name="footer-nav-visitor-invite"
                    *ngIf="features.includes('visitor-invite')"
                    [routerLink]="['/book', 'visitor']"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 w-1/3 m-2"
                >
                    <div
                        class="bg-base-100 text-base-content rounded-full h-12 w-12 text-2xl flex items-center justify-center"
                    >
                        <app-icon filled>person_add</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >person_add</app-icon
                        >
                    </div>
                    <div class="text-xs" i18n>Invite Visitor</div>
                </a>
                <a
                    matRipple
                    name="footer-nav-my-day"
                    [routerLink]="
                        new_features ? ['/your-bookings'] : ['/schedule']
                    "
                    *ngIf="features.includes('schedule')"
                    routerLinkActive="active"
                    class="flex flex-col items-center justify-center space-y-2 text-base w-1/3  m-2"
                >
                    <div
                        class="bg-base-100 text-base-content rounded-full h-12 w-12 text-2xl flex items-center justify-center"
                    >
                        <app-icon filled>today</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >today</app-icon
                        >
                    </div>
                    <div class="text-xs" i18n>Your Bookings</div>
                </a>
            </div>
        </div>
        <div
            class="flex items-center justify-center bg-base-100 border-t border-base-200 shadow relative h-16 w-full sm:hidden z-40"
            *ngIf="features.length > 3; else simple_state"
            [attr.dark]="dark_mode"
        >
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="[default_page]"
                name="footer-nav-home"
                routerLinkActive="text-secondary active"
            >
                <app-icon filled class="text-2xl">home</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-2xl !m-0"
                    >home</app-icon
                >
                <span class="text-sm" i18n>Home</span>
            </a>
            <button
                matRipple
                class="flex items-center justify-center w-12 h-12 mb-4 rounded-full z-10"
                (click)="show_book_items = !show_book_items"
                [class.bg-secondary]="show_book_items"
                [class.text-white]="show_book_items"
                [class.bg-base-200]="!show_book_items"
            >
                <app-icon class="text-2xl">{{
                    show_book_items ? 'close' : 'add'
                }}</app-icon>
            </button>
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="['/explore']"
                routerLinkActive="text-secondary active"
            >
                <app-icon filled class="text-2xl">place</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-2xl !m-0"
                    >place</app-icon
                >
                <span class="text-sm" i18n>Spaces</span>
            </a>
            <div
                class="overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-24 h-2"
            >
                <div
                    class="w-16 h-16 rounded-full bg-base-100 shadow mx-auto border-t border-base-200"
                ></div>
            </div>
        </div>
        <ng-template #simple_state>
            <div
                class="flex items-center justify-center bg-base-100 border-t border-base-200 shadow relative h-16 w-full sm:hidden z-40"
            >
                <top-menu></top-menu>
            </div>
        </ng-template>
    `,
    styles: [
        `
            a.active app-icon {
                color: var(--s) !important;
            }

            a.active {
                font-weight: 500;
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
