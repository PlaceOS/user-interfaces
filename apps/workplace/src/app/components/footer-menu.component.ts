import {
    Component,
    computed,
    inject,
    model,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import type { TopMenuEmbedItem } from './top-menu.component';

interface FooterMenuItem {
    id: string;
    name: string;
    icon: string;
    route: string[];
}

const FEATURE_MENU_ITEMS: FooterMenuItem[] = [
    {
        id: 'spaces',
        name: 'APP.WORKPLACE.MENU_ROOMS',
        icon: 'meeting_room',
        route: ['/book', 'meeting'],
    },
    {
        id: 'desks',
        name: 'APP.WORKPLACE.MENU_DESKS',
        icon: 'desk',
        route: ['/book', 'desk'],
    },
    {
        id: 'parking',
        name: 'APP.WORKPLACE.MENU_PARKING',
        icon: 'directions_car',
        route: ['/book', 'parking'],
    },
    {
        id: 'parking-requests',
        name: 'APP.WORKPLACE.MENU_PARKING_REQUESTS',
        icon: 'local_parking',
        route: ['/book', 'parking-request'],
    },
    {
        id: 'visitor-invite',
        name: 'APP.WORKPLACE.MENU_VISITORS',
        icon: 'person_add',
        route: ['/book', 'visitor'],
    },
    {
        id: 'schedule',
        name: 'APP.WORKPLACE.MENU_SCHEDULE',
        icon: 'today',
        route: ['/your-bookings'],
    },
    {
        id: 'group-events',
        name: 'APP.WORKPLACE.MENU_EVENTS',
        icon: 'local_activity',
        route: ['/group-events'],
    },
    {
        id: 'lockers',
        name: 'APP.WORKPLACE.MENU_LOCKERS',
        icon: 'lock',
        route: ['/book', 'locker'],
    },
    {
        id: 'control',
        name: 'APP.WORKPLACE.MENU_CONTROL',
        icon: 'remote_gen',
        route: ['/control'],
    },
    {
        id: 'deals-n-offers',
        name: 'APP.WORKPLACE.MENU_DEALS',
        icon: 'confirmation_number',
        route: ['/deals-n-offers'],
    },
    {
        id: 'team-schedule',
        name: 'APP.WORKPLACE.MENU_TEAM_SCHEDULE',
        icon: 'groups',
        route: ['/team-schedule'],
    },
];

@Component({
    selector: 'footer-menu',
    template: `
        @if (show_book_items() && footer_item_count() > 1) {
            <div
                class="border-base-100 fixed inset-0 bottom-16 z-30 border-t"
                [attr.dark]="dark_mode()"
                (click)="show_book_items.set(false); blur_backdrop.set(false)"
            >
                <div
                    class="border-base-100 bg-base-100 absolute inset-x-0 bottom-0 grid max-h-[60vh] grid-cols-2 gap-4 overflow-y-auto rounded-t-xl border-t p-4"
                >
                    @for (item of menu_items(); track item.id) {
                        <a
                            matRipple
                            [name]="'footer-nav-' + item.id"
                            [routerLink]="item.route"
                            routerLinkActive="active"
                            class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
                        >
                            <icon class="text-4xl" filled>{{ item.icon }}</icon>
                            <icon
                                outline
                                class="text-base-400 text-4xl"
                                className="material-symbols-outlined"
                                >{{ item.icon }}</icon
                            >
                            <div class="text-center text-sm">
                                {{ item.name | translate }}
                            </div>
                        </a>
                    }
                    @for (item of menu_embeds(); track item.id) {
                        @if (item.external) {
                            <a
                                matRipple
                                [name]="'footer-nav-embed-' + item.id"
                                [href]="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
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
                        } @else {
                            <a
                                matRipple
                                [name]="'footer-nav-embed-' + item.id"
                                [routerLink]="['/embedded', item.id]"
                                routerLinkActive="active"
                                class="bg-base-100 border-base-300 hover:bg-base-200 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border p-2 shadow-lg"
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
                        }
                    }
                </div>
            </div>
        }
        @if (footer_item_count() > 1) {
            <div
                class="border-base-200 bg-base-100 relative z-60 flex h-16 w-full items-center justify-center gap-3 border-t px-2 shadow-sm sm:hidden"
                [attr.dark]="dark_mode()"
            >
                <a
                    matRipple
                    class="relative flex flex-1 flex-col items-center justify-center rounded-lg"
                    [routerLink]="[default_page()]"
                    name="footer-nav-home"
                    routerLinkActive="text-secondary active font-medium bg-secondary/10"
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
                    class="relative flex flex-1 flex-col items-center justify-center rounded-lg"
                    [routerLink]="['/explore']"
                    [attr.disabled]="!features().includes('explore')"
                    [class.opacity-0]="!features().includes('explore')"
                    routerLinkActive="text-secondary active font-medium bg-secondary/10"
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

            a:not(.active) [filled],
            a.active [outline] {
                display: none;
            }

            a.active {
                background: var(--brand-200) !important;
                color: #fff !important;
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
    public readonly menu_embeds = signal<TopMenuEmbedItem[]>([]);
    public readonly menu_items = computed(() => {
        const features = this.features();
        return FEATURE_MENU_ITEMS.filter((item) => features.includes(item.id));
    });
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
