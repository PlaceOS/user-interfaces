import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="fixed inset-0 bottom-16 z-20 text-white"
            *ngIf="show_book_items && features.length > 1"
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
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>meeting_room</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >meeting_room</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_ROOMS' | translate }}
                    </div>
                </a>
                <a
                    matRipple
                    name="footer-nav-desks"
                    [routerLink]="
                        new_features ? ['/book', 'desks'] : ['/book', 'desks']
                    "
                    routerLinkActive="active"
                    *ngIf="features.includes('desks')"
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>desk</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >desk</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_DESKS' | translate }}
                    </div>
                </a>
                <a
                    matRipple
                    name="footer-nav-parking"
                    [routerLink]="['/book', 'parking']"
                    routerLinkActive="active"
                    *ngIf="features.includes('parking')"
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>directions_car</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >directions_car</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_PARKING' | translate }}
                    </div>
                </a>
                <a
                    matRipple
                    name="footer-nav-visitor-invite"
                    *ngIf="features.includes('visitor-invite')"
                    [routerLink]="['/book', 'visitor']"
                    routerLinkActive="active"
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>person_add</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >person_add</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_VISITORS' | translate }}
                    </div>
                </a>
                <a
                    matRipple
                    name="footer-nav-my-day"
                    [routerLink]="['/your-bookings']"
                    *ngIf="features.includes('schedule')"
                    routerLinkActive="active"
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>today</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >today</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_SCHEDULE' | translate }}
                    </div>
                </a>
                <a
                    matRipple
                    name="footer-nav-my-day"
                    [routerLink]="['/group-events']"
                    *ngIf="features.includes('events')"
                    routerLinkActive="active"
                    class="m-2 flex w-1/3 flex-col items-center justify-center space-y-2 text-base"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl text-base-content"
                    >
                        <app-icon filled>local_activity</app-icon>
                        <app-icon
                            outline
                            class="text-neutral"
                            className="material-icons-outlined"
                            >local_activity</app-icon
                        >
                    </div>
                    <div class="text-xs">
                        {{ 'APP.WORKPLACE.MENU_EVENTS' | translate }}
                    </div>
                </a>
            </div>
        </div>
        <div
            class="relative z-40 flex h-16 w-full items-center justify-center border-t border-base-200 bg-base-100 shadow sm:hidden"
            *ngIf="features.length > 3; else simple_state"
            [attr.dark]="dark_mode"
        >
            <a
                matRipple
                class="relative flex flex-1 flex-col items-center justify-center"
                [routerLink]="[default_page]"
                name="footer-nav-home"
                routerLinkActive="text-secondary active"
            >
                <app-icon filled class="text-2xl">home</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="!m-0 text-2xl"
                    >home</app-icon
                >
                <span class="text-sm">{{
                    'APP.WORKPLACE.MENU_HOME' | translate
                }}</span>
            </a>
            <button
                matRipple
                class="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full"
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
                class="relative flex flex-1 flex-col items-center justify-center"
                [routerLink]="['/explore']"
                routerLinkActive="text-secondary active"
            >
                <app-icon filled class="text-2xl">place</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="!m-0 text-2xl"
                    >place</app-icon
                >
                <span class="text-sm">{{
                    'APP.WORKPLACE.MENU_EXPLORE' | translate
                }}</span>
            </a>
            <div
                class="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
            >
                <div
                    class="mx-auto h-16 w-16 rounded-full border-t border-base-200 bg-base-100 shadow"
                ></div>
            </div>
        </div>
        <ng-template #simple_state>
            <div
                class="relative z-40 flex h-16 w-full items-center justify-center border-t border-base-200 bg-base-100 shadow sm:hidden"
                *ngIf="features > 1"
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
    standalone: false,
})
export class FooterMenuComponent {
    public show_book_items = false;

    public get default_page(): string {
        return this._settings.get('app.default_route') || '/landing';
    }

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get dark_mode() {
        return (
            this._settings.get('app.allow_dark_mode') &&
            this._settings.theme === 'dark'
        );
    }

    constructor(private _settings: SettingsService) {}
}
