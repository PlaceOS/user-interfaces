import {
    Component,
    ElementRef,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    user_group_names,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

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
}

/** Collapsible group of links. Shows when one or more of its links show */
interface SidebarGroup {
    id: string;
    name: string;
    /** Whether only admin users can see the group */
    admin_only?: boolean;
    children: SidebarLink[];
}

type SidebarItem = SidebarLink | SidebarGroup;

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

/** All items of the sidebar, in display order */
const SIDEBAR_ITEMS: readonly SidebarItem[] = [
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
                id: 'signage',
                name: 'APP.CONCIERGE.MENU_MANAGE_SIGNAGE',
                route: ['/signage'],
                icon: 'tv',
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
 * Navigation between the areas of the application. Shows the links of the
 * features that the `app.features` setting turns on for the current user.
 */
@Component({
    selector: 'app-sidebar',
    template: `
        <nav
            class="border-base-200 h-full w-64 overflow-auto border-r py-2 pr-3"
        >
            @for (item of links(); track item.id) {
                @if ('children' in item) {
                    <button
                        matRipple
                        class="hover:bg-base-200 flex w-full items-center rounded-r-full py-1 pr-1 pl-3 text-xs font-medium uppercase opacity-60 not-first:mt-3"
                        [attr.aria-expanded]="!collapsed()[item.id]"
                        (click)="toggleGroup(item.id)"
                    >
                        <div class="flex-1 text-left">
                            {{ item.name | translate }}
                        </div>
                        <icon
                            class="text-xl transition-transform"
                            [class.-rotate-90]="collapsed()[item.id]"
                        >
                            arrow_drop_down
                        </icon>
                    </button>
                    <!-- The bottom margin sets the group apart from links below -->
                    <section
                        class="contract-expand mb-3 w-full"
                        [class.contract-collapsed]="collapsed()[item.id]"
                    >
                        @for (child of item.children; track child.id) {
                            <a
                                matRipple
                                class="hover:bg-base-200 my-0.5 flex w-full items-center gap-2 rounded-r-full py-1 pr-2 pl-3 text-sm"
                                [routerLink]="child.route"
                                routerLinkActive="active"
                            >
                                <icon class="text-xl opacity-60">
                                    {{ child.icon }}
                                </icon>
                                <span>{{ child.name | translate }}</span>
                            </a>
                        }
                    </section>
                } @else {
                    <a
                        matRipple
                        class="hover:bg-base-200 my-0.5 flex w-full items-center gap-2 rounded-r-full py-1 pr-2 pl-3 text-sm"
                        [routerLink]="item.route"
                        routerLinkActive="active"
                    >
                        <icon class="text-xl opacity-60">{{ item.icon }}</icon>
                        <span>{{ item.name | translate }}</span>
                    </a>
                }
            }
        </nav>
    `,
    styles: [
        `
            :host {
                height: 100%;
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
    imports: [RouterModule, MatRippleModule, IconComponent, TranslatePipe],
})
export class ApplicationSidebarComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _element_ref = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly collapsed = collapsed_groups;

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
     * Items that the current user can see. Empty until the organisation
     * loads, because the building can change the enabled features.
     */
    public readonly links = computed<SidebarItem[]>(() => {
        if (!this._org.initialised()) return [];
        return SIDEBAR_ITEMS.flatMap((item): SidebarItem[] => {
            if (!('children' in item)) {
                return this._canView(item) ? [item] : [];
            }
            if (item.admin_only && !this._is_admin()) return [];
            const children = item.children.filter((_) => this._canView(_));
            // Custom reports have no feature to turn them on
            if (item.id === REPORTS_GROUP) {
                children.push(...this._custom_reports());
            }
            return children.length ? [{ ...item, children }] : [];
        });
    });

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        // Wait for the router to mark the active link
        this.timeout('scroll', () => this._scrollToActiveLink(), 50);
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
