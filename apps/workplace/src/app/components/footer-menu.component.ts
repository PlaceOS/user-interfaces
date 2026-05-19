import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import type { TopMenuEmbedItem } from './top-menu.component';

@Component({
    selector: 'footer-menu',
    template: `
        @if (show_book_items() && footer_item_count() > 1) {
            <div
                class="fixed inset-0 bottom-16 z-20 text-white"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false)"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center p-4"
                >
                    @if (features().includes('spaces')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-meeting"
                                matRipple
                                [routerLink]="['/book', 'meeting']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled
                                    >meeting_room</icon
                                >
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >meeting_room</icon
                                >
                                <div class="text-center text-sm">
                                    {{ 'APP.WORKPLACE.MENU_ROOMS' | translate }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('desks')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-desks"
                                matRipple
                                [routerLink]="['/book', 'desk']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-200 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl border p-2"
                            >
                                <icon class="text-4xl" filled>desk</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >desk</icon
                                >
                                <div class="text-center text-sm">
                                    {{ 'APP.WORKPLACE.MENU_DESKS' | translate }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('parking')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-parking"
                                matRipple
                                [routerLink]="['/book', 'parking']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled
                                    >directions_car</icon
                                >
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >directions_car</icon
                                >
                                <div class="text-center text-sm">
                                    {{
                                        'APP.WORKPLACE.MENU_PARKING' | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('parking-requests')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-parking-requests"
                                matRipple
                                [routerLink]="['/book', 'parking-request']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled
                                    >local_parking</icon
                                >
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >local_parking</icon
                                >
                                <div class="text-center text-sm">
                                    {{
                                        'APP.WORKPLACE.MENU_PARKING_REQUESTS'
                                            | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('visitor-invite')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-visitors"
                                matRipple
                                [routerLink]="['/book', 'visitor']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled>person_add</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >person_add</icon
                                >
                                <div class="text-center text-sm">
                                    {{
                                        'APP.WORKPLACE.MENU_VISITORS'
                                            | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('schedule')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-my-day"
                                matRipple
                                [routerLink]="['/your-bookings']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled>today</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >today</icon
                                >
                                <div class="text-center text-sm">
                                    {{
                                        'APP.WORKPLACE.MENU_SCHEDULE'
                                            | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    }
                    @if (features().includes('events')) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-events"
                                matRipple
                                [routerLink]="['/group-events']"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled
                                    >local_activity</icon
                                >
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >local_activity</icon
                                >
                                <div class="text-center text-sm">
                                    {{
                                        'APP.WORKPLACE.MENU_EVENTS' | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    }
                    @for (item of menu_embeds(); track item.id) {
                        <div
                            class="flex w-1/2 min-w-1/2 flex-1 items-center justify-center p-2"
                        >
                            <a
                                name="footer-nav-meeting"
                                [name]="'footer-nav-embed-' + item.id"
                                [routerLink]="['/embedded', item.id]"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                            >
                                <icon class="text-4xl" filled>{{
                                    item.icon || 'open_in_browser'
                                }}</icon>
                                <icon
                                    outline
                                    class="text-base-400 text-4xl"
                                    className="material-symbols-outlined"
                                    >{{ item.icon || 'open_in_browser' }}</icon
                                >
                                <div class="text-center text-sm">
                                    {{ item.name | translate }}
                                </div>
                            </a>
                        </div>
                    }
                </div>
            </div>
        }
        @if (footer_item_count() > 1) {
            <div
                class="border-base-200 bg-base-100 relative z-40 flex h-16 w-full items-center justify-center border-t shadow-sm sm:hidden"
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
                    (click)="show_book_items.set(!show_book_items())"
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
    imports: [TranslatePipe, IconComponent, RouterModule],
})
export class FooterMenuComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly show_book_items = signal(false);
    public readonly dark_mode = signal(false);
    public readonly features = signal<string[]>([]);
    public readonly default_page = signal<string>('/landing');
    public readonly menu_embeds = signal<TopMenuEmbedItem[]>([]);
    public readonly footer_item_count = computed(
        () => this.features().length + this.menu_embeds().length,
    );

    public ngOnInit() {
        this.subscription(
            'building',
            this._org.active_building.subscribe(() => {
                this.dark_mode.set(
                    this._settings.get('app.allow_dark_mode') &&
                        this._settings.theme === 'dark',
                );
                this.features.set(this._settings.get('app.features') || []);
                this.menu_embeds.set(
                    (this._settings.get('app.menu_embeds') || []).filter(
                        (item) => item?.id && item?.name && item?.url,
                    ),
                );
                this.default_page.set(
                    this._settings.get('app.default_route') || '/landing',
                );
            }),
        );
    }
}
