import { Component, computed, inject, signal } from '@angular/core';
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
                class="fixed inset-0 bottom-16 z-20"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-meeting"
                                matRipple
                                [routerLink]="['/book', 'meeting']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                matRipple
                                [routerLink]="['/book', 'desk']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-parking"
                                matRipple
                                [routerLink]="['/book', 'parking']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-parking-requests"
                                matRipple
                                [routerLink]="['/book', 'parking-request']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-visitors"
                                matRipple
                                [routerLink]="['/book', 'visitor']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-my-day"
                                matRipple
                                [routerLink]="['/your-bookings']"
                                routerLinkActive="active"
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
                                icon default
                                class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                name="footer-nav-events"
                                matRipple
                                [routerLink]="['/group-events']"
                                routerLinkActive="active"
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
                            @if (item.external) {
                                <a
                                    icon default
                                    class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                    [name]="'footer-nav-embed-' + item.id"
                                    [href]="item.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <icon class="text-4xl" filled>{{
                                        item.icon || 'open_in_browser'
                                    }}</icon>
                                    <icon
                                        outline
                                        class="text-base-400 text-4xl"
                                        className="material-symbols-outlined"
                                        >{{
                                            item.icon || 'open_in_browser'
                                        }}</icon
                                    >
                                    <div class="text-center text-sm">
                                        {{ item.name | translate }}
                                    </div>
                                </a>
                            } @else {
                                <a
                                    icon default
                                    class="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-xl"
                                    [name]="'footer-nav-embed-' + item.id"
                                    [routerLink]="['/embedded', item.id]"
                                    routerLinkActive="active"
                                >
                                    <icon class="text-4xl" filled>{{
                                        item.icon || 'open_in_browser'
                                    }}</icon>
                                    <icon
                                        outline
                                        class="text-base-400 text-4xl"
                                        className="material-symbols-outlined"
                                        >{{
                                            item.icon || 'open_in_browser'
                                        }}</icon
                                    >
                                    <div class="text-center text-sm">
                                        {{ item.name | translate }}
                                    </div>
                                </a>
                            }
                        </div>
                    }
                </div>
            </div>
        }
        @if (footer_item_count() > 1) {
            <div
                class="border-base-200 gap-1 bg-base-100 relative z-30 flex min-h-16 w-full items-center justify-center border-t shadow-sm sm:hidden pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] px-1"
                [attr.dark]="dark_mode()"
            >
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center"
                    [routerLink]="[default_page()]"
                    name="footer-nav-home"
                    routerLinkActive="active"
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
                    <div bar class="absolute -bottom-2 inset-x-2 h-1.5 rounded-t bg-info"></div>
                </a>
                <button
                    matRipple
                    class="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-base-300"
                    (click)="show_book_items.set(!show_book_items())"
                    [class.bg-base-200]="!show_book_items()"
                    [class.border-info!]="show_book_items()"
                    [class.bg-info-light]="show_book_items()"
                    [class.shadow-md]="show_book_items()"
                >
                    <icon class="text-2xl">{{
                        show_book_items() ? 'close' : 'add'
                    }}</icon>
                </button>
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center rounded-lg"
                    [routerLink]="['/explore']"
                    [attr.disabled]="!features().includes('explore')"
                    [class.opacity-0]="!features().includes('explore')"
                    routerLinkActive="active"
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
                    <div bar class="absolute -bottom-2 inset-x-2 h-1.5 rounded-t bg-info"></div>
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
            a.active {
                font-weight: 500;
            }

            [icon][default].active {
                background: var(--info-light);
                color: var(--info);
                border-color: var(--info);
            }

            a:not(.active) [filled],
            a.active [outline],
            a:not(.active) [bar] {
                display: none;
            }
        `,
    ],
    imports: [TranslatePipe, IconComponent, RouterModule],
})
export class FooterMenuComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly show_book_items = signal(false);
    // Derive settings-based state as computeds so they stay consistent within a
    // change detection pass. Writing these from an effect created the menu
    // views late, throwing NG0100 (ExpressionChangedAfterItHasBeenChecked).
    public readonly dark_mode = computed(() => {
        this._org.active_building();
        return (
            this._settings.get('app.allow_dark_mode') &&
            this._settings.theme === 'dark'
        );
    });
    public readonly features = computed<string[]>(() => {
        this._org.active_building();
        return this._settings.get('app.features') || [];
    });
    public readonly default_page = computed<string>(() => {
        this._org.active_building();
        return this._settings.get('app.default_route') || '/landing';
    });
    public readonly menu_embeds = computed<TopMenuEmbedItem[]>(() => {
        this._org.active_building();
        return (this._settings.get('app.menu_embeds') || []).filter(
            (item) => item?.id && item?.name && item?.url,
        );
    });
    public readonly footer_item_count = computed(
        () => this.features().length + this.menu_embeds().length,
    );
}
