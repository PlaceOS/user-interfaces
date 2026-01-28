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
                class="fixed inset-0 bottom-16 z-30"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false); blur_backdrop.set(false)"
            >
                <div
                    class="border-base-200 bg-base-100 absolute inset-x-0 bottom-0 grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto rounded-t-xl border-t p-4"
                >
                    @if (features().includes('spaces')) {
                        <a
                            name="footer-nav-meeting"
                            matRipple
                            [routerLink]="['/book', 'meeting']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
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
                            [routerLink]="['/book', 'desk']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">desk</icon>
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
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
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
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">person</icon>
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
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">event</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_SCHEDULE' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('group-events')) {
                        <a
                            matRipple
                            name="footer-nav-group-events"
                            [routerLink]="['/group-events']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >local_activity</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_EVENTS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('lockers')) {
                        <a
                            matRipple
                            name="footer-nav-lockers"
                            [routerLink]="['/book', 'locker']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">lock</icon>
                            <div>
                                {{ 'APP.WORKPLACE.MENU_LOCKERS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('control')) {
                        <a
                            matRipple
                            name="footer-nav-control"
                            [routerLink]="['/control']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >remote_gen</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_CONTROL' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('deals-n-offers')) {
                        <a
                            matRipple
                            name="footer-nav-deals"
                            [routerLink]="['/deals-n-offers']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl"
                                >confirmation_number</icon
                            >
                            <div>
                                {{ 'APP.WORKPLACE.MENU_DEALS' | translate }}
                            </div>
                        </a>
                    }
                    @if (features().includes('team-schedule')) {
                        <a
                            matRipple
                            name="footer-nav-team-schedule"
                            [routerLink]="['/team-schedule']"
                            routerLinkActive="active"
                            class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl px-4 py-8"
                        >
                            <icon class="text-secondary text-6xl">groups</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.MENU_TEAM_SCHEDULE'
                                        | translate
                                }}
                            </div>
                        </a>
                    }
                </div>
            </div>
        }
        @if (features().length > 1) {
            <div
                class="border-base-200 bg-base-100 relative z-[60] flex h-16 w-full items-center justify-center border-t shadow-sm sm:hidden"
                [attr.dark]="dark_mode()"
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
                    class="absolute top-0 left-1/2 h-2 w-24 -translate-x-1/2 -translate-y-full overflow-hidden"
                >
                    <div
                        class="border-base-200 bg-base-100 mx-auto h-16 w-16 rounded-full border-t shadow-sm"
                    ></div>
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                z-index: 200;
            }

            a.active icon {
                color: var(--secondary) !important;
            }

            a.active {
                background-color: var(--brand-200) !important;
                color: #fff !important;
            }
            a.active icon {
                color: #fff !important;
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
