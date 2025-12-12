import { Component, inject, model, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'footer-menu',
    template: `
        @if (show_book_items() && features().length > 1) {
            <div
                class="fixed inset-0 bottom-16 z-20"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false); blur_backdrop.set(false)"
            >
                <div
                    class="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-4 rounded-t-xl border-t border-base-200 bg-base-100 p-4"
                >
                    @if (features().includes('spaces')) {
                        <a
                            name="footer-nav-meeting"
                            matRipple
                            [routerLink]="['/book', 'meeting']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-secondary"
                                >meeting_room</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_ROOMS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('desks')) {
                        <a
                            matRipple
                            name="footer-nav-desks"
                            [routerLink]="['/book', 'desks']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-secondary">desk</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_DESKS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('parking')) {
                        <a
                            matRipple
                            name="footer-nav-parking"
                            [routerLink]="['/book', 'parking']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-secondary"
                                >directions_car</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_PARKING' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('visitor-invite')) {
                        <a
                            matRipple
                            name="footer-nav-visitor-invite"
                            [routerLink]="['/book', 'visitor']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-secondary"
                                >person_add</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_VISITORS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('schedule')) {
                        <a
                            matRipple
                            name="footer-nav-my-day"
                            [routerLink]="['/your-bookings']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-secondary">today</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_SCHEDULE' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('events')) {
                        <a
                            matRipple
                            name="footer-nav-my-day"
                            [routerLink]="['/group-events']"
                            routerLinkActive="active"
                            class="flex flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-4 py-8"
                        >
                            <icon class="text-3xl text-primary"
                                >local_activity</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_EVENTS' | translate }}
                            </div>
                        </a>
                    }
                </div>
            </div>
        }
        @if (features().length > 1) {
            <div
                class="relative z-40 flex h-16 w-full items-center justify-center border-t border-base-200 bg-base-100 shadow-sm sm:hidden"
                [attr.dark]="dark_mode"
            >
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center"
                    [routerLink]="[default_page()]"
                    name="footer-nav-home"
                    routerLinkActive="text-secondary active"
                >
                    <icon filled class="text-2xl">home</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >home</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_HOME' | translate
                    }}</span>
                </a>
                <button
                    matRipple
                    class="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                    (click)="
                        show_book_items.set(!show_book_items());
                        blur_backdrop.set(show_book_items())
                    "
                    [class.bg-secondary]="show_book_items()"
                    [class.text-white]="show_book_items()"
                    [class.bg-base-200]="!show_book_items()"
                >
                    <icon class="text-2xl">{{
                        show_book_items() ? 'close' : 'add'
                    }}</icon>
                </button>
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center"
                    [routerLink]="['/explore']"
                    [attr.disabled]="!features().includes('explore')"
                    [class.opacity-0]="!features().includes('explore')"
                    routerLinkActive="text-secondary active"
                >
                    <icon filled class="text-2xl">place</icon>
                    <icon
                        outline
                        className="material-symbols-outlined"
                        class="m-0! text-2xl"
                        >place</icon
                    >
                    <span class="text-sm">{{
                        'APP.WORKPLACE.MENU_EXPLORE' | translate
                    }}</span>
                </a>
                <div
                    class="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
                >
                    <div
                        class="mx-auto h-16 w-16 rounded-full border-t border-base-200 bg-base-100 shadow-sm"
                    ></div>
                </div>
            </div>
        }
    `,
    styles: [
        `
            a.active icon {
                color: var(--secondary) !important;
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
    imports: [TranslatePipe, IconComponent, RouterModule, MatRippleModule],
})
export class FooterMenuComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly blur_backdrop = model(false);
    public readonly show_book_items = signal(false);
    public readonly dark_mode = signal(false);
    public readonly features = signal<string[]>([]);
    public readonly default_page = signal<string>('/landing');

    public ngOnInit() {
        this.subscription(
            'building',
            this._org.active_building.subscribe(() => {
                this.dark_mode.set(
                    this._settings.get('app.allow_dark_mode') &&
                        this._settings.theme === 'dark',
                );
                this.features.set(this._settings.get('app.features') || []);
                this.default_page.set(
                    this._settings.get('app.default_route') || '/landing',
                );
            }),
        );
    }
}
