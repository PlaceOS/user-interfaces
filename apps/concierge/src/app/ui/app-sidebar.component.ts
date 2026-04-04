import { Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    OrganisationService,
    SettingsService,
    currentUser,
    firstTruthyValueFrom,
    i18n,
    unique,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    template: `
        <div
            class="border-base-200 h-full w-64 overflow-auto border-r py-2 pr-3"
        >
            @for (link of filtered_links(); track link.id + '' + $index) {
                @if (!link.children) {
                    <a
                        matRipple
                        class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                        [routerLink]="link.route"
                        routerLinkActive="active"
                    >
                        <icon class="text-2xl opacity-60">{{ link.icon }}</icon>
                        <span class="font-medium">{{ link.name }}</span>
                    </a>
                } @else {
                    @if (link.children?.length) {
                        <button
                            matRipple
                            class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                            (click)="toggleBlock(link.id || link._id)"
                        >
                            <icon class="text-2xl opacity-60">
                                {{ link.icon }}
                            </icon>
                            <div class="flex-1 text-left font-medium">
                                {{ link.name }}
                            </div>
                            <icon class="text-2xl">arrow_drop_down</icon>
                        </button>
                    }
                    @if (link.children?.length) {
                        <section
                            class="w-full overflow-hidden"
                            [@show]="
                                !isBlockCollapsed(link.id || link._id)
                                    ? 'show'
                                    : 'hide'
                            "
                        >
                            @for (child of link.children; track child) {
                                <a
                                    class="hover:bg-base-200 my-1 flex w-full items-center space-x-2 rounded-r-full p-1"
                                    [routerLink]="child.route"
                                    routerLinkActive="active"
                                >
                                    <icon class="text-2xl"></icon>
                                    <span>{{ child.name }}</span>
                                </a>
                            }
                        </section>
                    }
                }
            }
        </div>
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
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [RouterModule, MatRippleModule, IconComponent],
})
export class ApplicationSidebarComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _element_ref = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly show_block = signal<Record<string, boolean>>({});
    public links = [];

    public filtered_links = signal([]);

    public get feature_list() {
        return this._settings.get('app.features') || [];
    }

    public get feature_groups() {
        return this._settings.get('app.feature_groups') || {};
    }

    public get is_admin() {
        const groups = currentUser().groups || [];
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        return (
            groups.includes(admin_group) ||
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support')
        );
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.links = [
            {
                name: i18n('APP.CONCIERGE.MENU_BOOKINGS'),
                icon: 'add_circle',
                children: [
                    {
                        id: 'spaces',
                        name: i18n('APP.CONCIERGE.MENU_ROOM_BOOKINGS'),
                        route: ['/book/rooms'],
                    },
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_DESK_BOOKINGS'),
                        route: ['/book/desks/events'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_PARKING_BOOKINGS'),
                        route: ['/book/parking/events'],
                    },
                    {
                        id: 'parking-bookings',
                        name: i18n('APP.CONCIERGE.MENU_PARKING_BOOKINGS'),
                        route: ['/book/parking/events'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_LOCKER_BOOKINGS'),
                        route: ['/book/lockers/events'],
                    },
                    {
                        id: 'assets',
                        name: i18n('APP.CONCIERGE.MENU_ASSET_BOOKINGS'),
                        route: ['/book/assets/list/requests'],
                    },
                    {
                        id: 'catering',
                        name: i18n('APP.CONCIERGE.MENU_CATERING_BOOKINGS'),
                        route: ['/book/catering/orders'],
                    },
                    {
                        id: 'visitors',
                        name: i18n('APP.CONCIERGE.MENU_VISITOR_BOOKINGS'),
                        route: ['/book/visitors'],
                    },
                    {
                        id: 'visitor-rules',
                        name: i18n('APP.CONCIERGE.MENU_VISITOR_RULES'),
                        route: ['/book/visitors/rules'],
                    },
                ],
            },
            {
                id: 'facilities',
                name: i18n('APP.CONCIERGE.MENU_MANAGEMENT'),
                icon: 'place',
                children: [
                    // {
                    //     id: 'facilities',
                    //     name: 'Building Map',
                    //     route: ['/facilities'],
                    // },
                    {
                        id: 'zones',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_ZONES'),
                        route: ['/zone-management'],
                    },
                    {
                        id: 'spaces',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_ROOMS'),
                        route: ['/room-management'],
                    },
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_DESKS'),
                        route: ['/book/desks/manage'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_PARKING'),
                        route: ['/book/parking/manage'],
                    },
                    {
                        id: 'parking-manage',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_PARKING'),
                        route: ['/book/parking/manage'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_LOCKERS'),
                        route: ['/book/lockers/manage'],
                    },
                    {
                        id: 'catering',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_CATERING'),
                        route: ['/book/catering/menu'],
                    },
                    {
                        id: 'points',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_POINTS'),
                        route: ['/points-management'],
                    },
                    {
                        id: 'emergency-contacts',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_CONTACTS'),
                        icon: 'assignment_ind',
                        route: ['/users/staff/emergency-contacts'],
                    },
                    {
                        id: 'signage',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_SIGNAGE'),
                        route: ['/signage'],
                    },
                    {
                        id: 'points-of-interest',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES'),
                        route: ['/points-of-interest'],
                    },
                    {
                        id: 'url-management',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_URLS'),
                        route: ['/url-management'],
                    },
                    {
                        id: 'email-templates',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_EMAILS'),
                        route: ['/email-templates'],
                    },
                    {
                        id: 'deals-n-offers',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_DEALS'),
                        route: ['/deals-n-offers'],
                    },
                ],
            },
            {
                id: 'assets',
                name: i18n('APP.CONCIERGE.MENU_ASSETS'),
                route: ['/book/assets/list/items'],
                icon: 'vibration',
            },
            {
                id: 'internal-users',
                name: i18n('APP.CONCIERGE.MENU_USER_LIST'),
                icon: 'assignment_ind',
                route: ['/users/staff'],
            },
            {
                id: 'events',
                name: i18n('APP.CONCIERGE.MENU_EVENTS'),
                route: ['/entertainment/events'],
                icon: 'confirmation_number',
            },
            {
                id: 'surveys',
                name: i18n('APP.CONCIERGE.MENU_SURVEYS'),
                route: ['/surveys'],
                icon: 'add_reaction',
            },
            {
                _id: 'reports',
                name: i18n('APP.CONCIERGE.MENU_REPORTS'),
                icon: 'analytics',
                children: [
                    {
                        id: 'booking-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_ROOMS'),
                        route: ['/reports/bookings'],
                    },
                    {
                        id: 'desk-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_DESKS'),
                        route: ['/reports/desks'],
                    },
                    {
                        id: 'parking-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_PARKING'),
                        route: ['/reports/parking'],
                    },
                    {
                        id: 'lockers-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_LOCKERS'),
                        route: ['/reports/lockers'],
                    },
                    {
                        id: 'catering-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_CATERING'),
                        route: ['/reports/catering'],
                    },
                    {
                        id: 'contact-tracing-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING'),
                        route: ['/reports/contact-tracing'],
                    },
                    {
                        id: 'assets-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_ASSETS'),
                        route: ['/reports/assets'],
                    },
                    {
                        id: 'visitors-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_VISITORS'),
                        route: ['/reports/visitors'],
                    },
                ],
            },
        ];
        this.updateFilteredLinks();
        this.subscription(
            'building',
            this._org.active_building
                .pipe(
                    filter((_) => !!_),
                    debounceTime(100),
                )
                .subscribe(() =>
                    this.timeout(
                        'update_links',
                        () => this.updateFilteredLinks(),
                        500,
                    ),
                ),
        );
        this.timeout('update_inview', () => this._moveActiveLinkIntoView(), 50);
        this.timeout('update_links', () => this.updateFilteredLinks(), 500);
    }

    private _isFeatureAvailable(name: string): boolean {
        if (name.startsWith('*')) {
            return true;
        }
        const has_feature = this.feature_list.includes(name);
        const feature_groups = this.feature_groups[name] || [];
        const groups = currentUser().groups;
        if (
            has_feature &&
            (this.is_admin ||
                !feature_groups.length ||
                groups.find((grp) => feature_groups.includes(grp)))
        ) {
            return true;
        }
        return false;
    }

    public updateFilteredLinks() {
        const custom_reports = this._settings.get('app.custom_reports') || [];
        if (
            custom_reports.length &&
            this.links.find((_) => _._id === 'reports')
        ) {
            const reports = this.links.find((_) => _._id === 'reports');
            reports.children = unique(
                reports.children.concat(
                    custom_reports.map((_) => ({
                        ..._,
                        id: `*${_.id}`,
                        route: ['/reports', _.id],
                    })),
                ),
                'id',
            );
        }
        this.filtered_links.set(
            this.links
                .map((link) => ({
                    ...link,
                    children: link.children
                        ? link.children.filter((_) =>
                              this._isFeatureAvailable(_.id),
                          )
                        : null,
                }))
                .filter(
                    (_) =>
                        ((!_.id ||
                            _.id === 'home' ||
                            this._isFeatureAvailable(_.id)) &&
                            _.route) ||
                        _.children?.length,
                ),
        );
        if (this.filtered_links().find((_) => _.id === 'home')) {
            const link = this.filtered_links().find((_) => _.id === 'home');
            link.route = this._settings.get('app.default_route') || ['/'];
        }
        if (!this.is_admin) {
            this.filtered_links.update((links) =>
                links.filter((_) => _.id !== 'facilities'),
            );
        }
    }

    public toggleBlock(id: string) {
        this.show_block.update((state) => ({
            ...state,
            [id]: !state[id],
        }));
    }

    public isBlockCollapsed(id: string) {
        return !!this.show_block()[id];
    }

    public _moveActiveLinkIntoView() {
        const active_link =
            this._element_ref.nativeElement.querySelector('a.active');
        if (!active_link) return;
        active_link.scrollIntoView({
            block: 'center',
            behavior: 'instant',
        });
    }
}
