import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    user_group_names,
    userSignal,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
    UserControlsSidebarComponent,
} from '@placeos/components';

import { KeyboardShortcutsService } from './keyboard-shortcuts.service';

/** Link to a page of the application */
interface SidebarLink {
    /** Unique ID of the link. Also the name of the feature that shows it */
    id: string;
    /** Other features that also show the link */
    alt_features?: readonly string[];
    /** Translation key or display name of the link */
    name: string;
    route: string[];
    icon: string;
    /** Only show as active on the route itself, not on its child routes. Query params are ignored */
    exact?: boolean;
}

/** Collapsible group of links. Shows when one or more of its links show */
interface SidebarGroup {
    id: string;
    name: string;
    /** Whether only admin users can see the group */
    admin_only?: boolean;
    children: SidebarLink[];
}

/** Report page from the `app.custom_reports` setting */
interface CustomReport {
    id: string;
    name: string;
    icon?: string;
}

/** ID of the group that also lists the custom reports */
const REPORTS_GROUP = 'reports';

/** Groups that are admin in addition to the `app.admin_group` setting */
const ADMIN_GROUPS = ['placeos_admin', 'placeos_support'];

/**
 * Collapsed state of each group, by group ID. Each page makes its own
 * sidebar, so all sidebars share this state to keep it between pages.
 */
const collapsed_groups = signal<Record<string, boolean>>({});

const RAIL_KEY = 'PLACEOS.concierge.sidebar_rail';

/**
 * Whether the sidebar shows icons only. Uses the saved choice of the user,
 * else shows the full sidebar. Shared by all sidebars, like
 * `collapsed_groups`.
 */
const rail_mode = signal(readRailMode());

function readRailMode(): boolean {
    try {
        return localStorage.getItem(RAIL_KEY) === 'true';
    } catch {
        /* ignore privacy-mode errors */
        return false;
    }
}

/** All groups of the sidebar, in display order */
const SIDEBAR_GROUPS: readonly SidebarGroup[] = [
    {
        id: 'bookings',
        name: 'APP.CONCIERGE.MENU_BOOKINGS',
        children: [
            {
                id: 'spaces',
                name: 'APP.CONCIERGE.MENU_ROOM_BOOKINGS',
                route: ['/book/rooms'],
                icon: 'meeting_room',
            },
            {
                id: 'desks',
                name: 'APP.CONCIERGE.MENU_DESK_BOOKINGS',
                route: ['/book/desks/events'],
                icon: 'desk',
            },
            {
                id: 'parking',
                alt_features: ['parking-bookings'],
                name: 'APP.CONCIERGE.MENU_PARKING_BOOKINGS',
                route: ['/book/parking/events'],
                icon: 'local_parking',
            },
            {
                id: 'lockers',
                name: 'APP.CONCIERGE.MENU_LOCKER_BOOKINGS',
                route: ['/book/lockers/events'],
                icon: 'lock',
            },
            {
                id: 'assets',
                name: 'APP.CONCIERGE.MENU_ASSET_BOOKINGS',
                route: ['/book/assets/list/requests'],
                icon: 'inventory_2',
            },
            {
                id: 'catering',
                name: 'APP.CONCIERGE.MENU_CATERING_BOOKINGS',
                route: ['/book/catering/orders'],
                icon: 'restaurant',
            },
            {
                id: 'visitors',
                name: 'APP.CONCIERGE.MENU_VISITOR_BOOKINGS',
                route: ['/book/visitors'],
                icon: 'badge',
            },
            {
                id: 'visitor-rules',
                name: 'APP.CONCIERGE.MENU_VISITOR_RULES',
                route: ['/book/visitors/rules'],
                icon: 'rule',
            },
        ],
    },
    {
        id: 'facilities',
        name: 'APP.CONCIERGE.MENU_MANAGEMENT',
        admin_only: true,
        children: [
            {
                id: 'zones',
                name: 'APP.CONCIERGE.MENU_MANAGE_ZONES',
                route: ['/zone-management'],
                icon: 'business',
            },
            {
                id: 'maps',
                name: 'APP.CONCIERGE.MENU_MANAGE_MAPS',
                route: ['/map-management'],
                icon: 'map',
            },
            {
                id: 'spaces',
                name: 'APP.CONCIERGE.MENU_MANAGE_ROOMS',
                route: ['/room-management'],
                icon: 'meeting_room',
            },
            {
                id: 'desks',
                name: 'APP.CONCIERGE.MENU_MANAGE_DESKS',
                route: ['/book/desks/manage'],
                icon: 'desk',
            },
            {
                id: 'parking',
                alt_features: ['parking-manage'],
                name: 'APP.CONCIERGE.MENU_MANAGE_PARKING',
                route: ['/book/parking/manage'],
                icon: 'local_parking',
            },
            {
                id: 'lockers',
                name: 'APP.CONCIERGE.MENU_MANAGE_LOCKERS',
                route: ['/book/lockers/manage'],
                icon: 'lock',
            },
            {
                id: 'catering',
                name: 'APP.CONCIERGE.MENU_MANAGE_CATERING',
                route: ['/book/catering/menu'],
                icon: 'menu_book',
            },
            {
                id: 'points',
                name: 'APP.CONCIERGE.MENU_MANAGE_POINTS',
                route: ['/points-management'],
                icon: 'stars',
            },
            {
                id: 'emergency-contacts',
                name: 'APP.CONCIERGE.MENU_MANAGE_CONTACTS',
                route: ['/users/staff/emergency-contacts'],
                icon: 'contact_emergency',
            },
            {
                id: 'points-of-interest',
                name: 'APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES',
                route: ['/points-of-interest'],
                icon: 'pin_drop',
            },
            {
                id: 'url-management',
                name: 'APP.CONCIERGE.MENU_MANAGE_URLS',
                route: ['/url-management'],
                icon: 'link',
            },
            {
                id: 'email-templates',
                name: 'APP.CONCIERGE.MENU_MANAGE_EMAILS',
                route: ['/email-templates'],
                icon: 'mail',
            },
            {
                id: 'deals-n-offers',
                name: 'APP.CONCIERGE.MENU_MANAGE_DEALS',
                route: ['/deals-n-offers'],
                icon: 'local_offer',
            },
        ],
    },
    {
        id: 'other',
        name: 'APP.CONCIERGE.MENU_OTHER',
        children: [
            {
                id: 'assets',
                name: 'APP.CONCIERGE.MENU_ASSETS',
                route: ['/book/assets/list/items'],
                icon: 'vibration',
            },
            {
                id: 'internal-users',
                name: 'APP.CONCIERGE.MENU_USER_LIST',
                route: ['/users/staff'],
                icon: 'assignment_ind',
                exact: true,
            },
            {
                id: 'events',
                name: 'APP.CONCIERGE.MENU_EVENTS',
                route: ['/entertainment/events'],
                icon: 'confirmation_number',
            },
            {
                id: 'surveys',
                name: 'APP.CONCIERGE.MENU_SURVEYS',
                route: ['/surveys'],
                icon: 'add_reaction',
            },
        ],
    },
    {
        id: REPORTS_GROUP,
        name: 'APP.CONCIERGE.MENU_REPORTS',
        children: [
            {
                id: 'attendance-report',
                name: 'APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE',
                route: ['/reports/attendance'],
                icon: 'groups',
            },
            {
                id: 'booking-report',
                name: 'APP.CONCIERGE.MENU_REPORT_ROOMS',
                route: ['/reports/bookings'],
                icon: 'meeting_room',
            },
            {
                id: 'desk-report',
                name: 'APP.CONCIERGE.MENU_REPORT_DESKS',
                route: ['/reports/desks'],
                icon: 'desk',
            },
            {
                id: 'parking-report',
                name: 'APP.CONCIERGE.MENU_REPORT_PARKING',
                route: ['/reports/parking'],
                icon: 'local_parking',
            },
            {
                id: 'lockers-report',
                name: 'APP.CONCIERGE.MENU_REPORT_LOCKERS',
                route: ['/reports/lockers'],
                icon: 'lock',
            },
            {
                id: 'catering-report',
                name: 'APP.CONCIERGE.MENU_REPORT_CATERING',
                route: ['/reports/catering'],
                icon: 'room_service',
            },
            {
                id: 'contact-tracing-report',
                name: 'APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING',
                route: ['/reports/contact-tracing'],
                icon: 'connect_without_contact',
            },
            {
                id: 'assets-report',
                name: 'APP.CONCIERGE.MENU_REPORT_ASSETS',
                route: ['/reports/assets'],
                icon: 'inventory_2',
            },
            {
                id: 'visitors-report',
                name: 'APP.CONCIERGE.MENU_REPORT_VISITORS',
                route: ['/reports/visitors'],
                icon: 'badge',
            },
            {
                id: 'user-report',
                name: 'APP.CONCIERGE.MENU_REPORT_USER',
                route: ['/reports/user'],
                icon: 'person_search',
            },
        ],
    },
];

/**
 * Application shell for each page. Shows the logo, the navigation between
 * the areas of the application and the user controls. The navigation shows
 * the links of the features that the `app.features` setting turns on for the
 * current user.
 */
@Component({
    selector: 'app-sidebar',
    host: { '[class.rail]': 'rail()' },
    template: `
        @if (!rail()) {
            <a class="block px-4 pt-3 pb-2" [routerLink]="['/']">
                <img auth class="h-10" [source]="logo_src()" />
            </a>
        }
        <nav class="flex-1 overflow-auto py-2" [class.pr-3]="!rail()">
            @for (group of groups(); track group.id) {
                @if (rail()) {
                    <hr class="border-base-200 mx-3 not-first:my-2" />
                } @else {
                    <button
                        matRipple
                        class="hover:bg-base-200 flex w-full items-center rounded-r-full py-1 pr-1 pl-3 text-xs font-medium uppercase opacity-60 not-first:mt-3"
                        [attr.aria-expanded]="!collapsed()[group.id]"
                        (click)="toggleGroup(group.id)"
                    >
                        <div
                            class="flex-1 text-left uppercase"
                            [style.letter-spacing]="'0.125rem'"
                        >
                            {{ group.name | translate }}
                        </div>
                        <icon
                            class="text-xl transition-transform"
                            [class.-rotate-90]="collapsed()[group.id]"
                        >
                            arrow_drop_down
                        </icon>
                    </button>
                }
                <section
                    class="contract-expand w-full"
                    [class.contract-collapsed]="
                        !rail() && collapsed()[group.id]
                    "
                >
                    @for (link of group.children; track link.id) {
                        <a
                            matRipple
                            class="hover:bg-base-200 my-0.5 flex w-full items-center gap-2 py-1 text-sm"
                            [class.rounded-r-full]="!rail()"
                            [class.pr-2]="!rail()"
                            [class.pl-3]="!rail()"
                            [class.justify-center]="rail()"
                            [routerLink]="link.route"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{
                                paths: link.exact ? 'exact' : 'subset',
                                queryParams: 'subset',
                                matrixParams: 'ignored',
                                fragment: 'ignored',
                            }"
                            [attr.aria-label]="
                                rail() ? (link.name | translate) : null
                            "
                            [matTooltip]="rail() ? (link.name | translate) : ''"
                            matTooltipPosition="right"
                        >
                            <icon class="text-xl opacity-60">{{
                                link.icon
                            }}</icon>
                            @if (!rail()) {
                                <span>{{ link.name | translate }}</span>
                            }
                        </a>
                    }
                </section>
            }
        </nav>
        <div
            class="border-base-200 flex items-center gap-1 border-t p-2"
            [class.flex-col]="rail()"
        >
            <user-controls-sidebar #user_controls>
                <a-user-avatar [user]="user()"></a-user-avatar>
            </user-controls-sidebar>
            <!-- Mouse shortcut to the user controls. Keyboard users use the avatar -->
            <button
                [class.hidden]="rail()"
                matRipple
                type="button"
                tabindex="-1"
                class="hover:bg-base-200 min-w-0 flex-1 rounded-lg px-2 py-1 text-left"
                (click)="user_controls.open()"
            >
                <div class="truncate text-sm font-medium">
                    {{ user().name }}
                </div>
                <div class="truncate text-xs opacity-60">
                    {{
                        'APP.CONCIERGE.USER_GROUP_COUNT'
                            | translate
                                : { count: group_count() }
                                : group_count()
                    }}
                </div>
            </button>
            <button
                btn
                icon
                matRipple
                [matTooltip]="'APP.CONCIERGE.SHORTCUTS_TITLE' | translate"
                (click)="openShortcuts()"
            >
                <icon class="text-2xl">keyboard</icon>
            </button>
            <button
                btn
                icon
                matRipple
                [attr.aria-label]="
                    (rail()
                        ? 'APP.CONCIERGE.SIDEBAR_EXPAND'
                        : 'APP.CONCIERGE.SIDEBAR_COLLAPSE'
                    ) | translate
                "
                [matTooltip]="
                    (rail()
                        ? 'APP.CONCIERGE.SIDEBAR_EXPAND'
                        : 'APP.CONCIERGE.SIDEBAR_COLLAPSE'
                    ) | translate
                "
                (click)="toggleRail()"
            >
                <icon class="text-2xl">{{
                    rail() ? 'left_panel_open' : 'left_panel_close'
                }}</icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 16rem;
                border-right: 1px solid var(--base-200);
            }

            :host.rail {
                width: 4rem;
            }

            a.active {
                background-color: var(--secondary);
                color: var(--secondary-content);
            }

            a.active:hover {
                color: var(--base-content);
                opacity: 0.75;
            }
        `,
    ],
    imports: [
        RouterModule,
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
        UserControlsSidebarComponent,
    ],
})
export class ApplicationSidebarComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _element_ref = inject<ElementRef<HTMLElement>>(ElementRef);
    private _shortcuts = inject(KeyboardShortcutsService);

    private readonly _logo_dark = this._settings.signal(
        'app.logo_dark',
        {},
        true,
    );
    private readonly _logo_light = this._settings.signal(
        'app.logo_light',
        {},
        true,
    );

    public readonly collapsed = collapsed_groups;
    /** Whether the sidebar shows icons only */
    public readonly rail = rail_mode.asReadonly();
    public readonly user = userSignal();
    /** Number of groups of the current user. No groups before the user loads */
    public readonly group_count = computed(
        () => this.user().groups?.length || 0,
    );

    /** Source of the logo for the current theme */
    public readonly logo_src = computed(() => {
        const logo: string | { src?: string } =
            (this._settings.theme_signal() === 'dark'
                ? this._logo_dark()
                : this._logo_light()) || {};
        return typeof logo === 'string' ? logo : logo?.src || '';
    });

    private readonly _is_admin = computed(() => {
        const groups = user_group_names();
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        return [admin_group, ...ADMIN_GROUPS].some((_) => groups.includes(_));
    });

    private readonly _custom_reports = computed<SidebarLink[]>(() => {
        const reports: CustomReport[] =
            this._settings.get('app.custom_reports') || [];
        return reports.map(({ id, name, icon }) => ({
            id: `custom-${id}`,
            name,
            route: ['/reports', id],
            icon: icon || 'insert_chart',
        }));
    });

    /**
     * Groups that the current user can see. Empty until the organisation
     * loads, because the building can change the enabled features.
     */
    public readonly groups = computed<SidebarGroup[]>(() => {
        if (!this._org.initialised()) return [];
        return SIDEBAR_GROUPS.flatMap((group) => {
            if (group.admin_only && !this._is_admin()) return [];
            const children = group.children.filter((_) => this._canView(_));
            // Custom reports have no feature to turn them on
            if (group.id === REPORTS_GROUP) {
                children.push(...this._custom_reports());
            }
            return children.length ? [{ ...group, children }] : [];
        });
    });

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        // Wait for the router to mark the active link
        this.timeout('scroll', () => this._scrollToActiveLink(), 50);
    }

    public openShortcuts() {
        this._shortcuts.openHelp();
    }

    /** Switch between the full sidebar and icons only, and save the choice */
    public toggleRail() {
        rail_mode.update((rail) => !rail);
        try {
            localStorage.setItem(RAIL_KEY, `${rail_mode()}`);
        } catch {
            /* ignore quota / privacy-mode errors */
        }
    }

    public toggleGroup(id: string) {
        this.collapsed.update((state) => ({ ...state, [id]: !state[id] }));
    }

    /** Whether one of the features of the link is on for the current user */
    private _canView(link: SidebarLink): boolean {
        return [link.id, ...(link.alt_features || [])].some((_) =>
            this._hasFeature(_),
        );
    }

    /**
     * Whether the feature is on and the user is in one of its groups.
     * Admin users and features without groups skip the group check.
     */
    private _hasFeature(name: string): boolean {
        const features: string[] = this._settings.get('app.features') || [];
        if (!features.includes(name)) return false;
        const feature_groups: Record<string, string[]> =
            this._settings.get('app.feature_groups') || {};
        const allowed = feature_groups[name] || [];
        return (
            !allowed.length ||
            this._is_admin() ||
            user_group_names().some((_) => allowed.includes(_))
        );
    }

    private _scrollToActiveLink() {
        this._element_ref.nativeElement
            .querySelector('a.active')
            ?.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
}
