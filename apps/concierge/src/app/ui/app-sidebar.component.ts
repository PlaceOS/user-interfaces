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
    unique, settingSignal
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    template: `
        <div
            class="h-full min-w-60 overflow-auto border-r border-base-200 py-2 pr-3"
        >
            @for (link of filtered_links(); track link.id + '' + $index) {
                @if (!link.children) {
                    <a
                        matRipple
                        class="my-1 flex w-full items-center space-x-2 rounded-r-full p-1 hover:bg-base-200"
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
                            class="my-1 flex w-full items-center space-x-2 rounded-r-full p-1 hover:bg-base-200"
                            (click)="
                                show_block[link.id || link._id] =
                                    !show_block[link.id || link._id]
                            "
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
                                !show_block[link.id || link._id]
                                    ? 'show'
                                    : 'hide'
                            "
                        >
                            @for (child of link.children; track child) {
                                <a
                                    class="my-1 flex w-full items-center space-x-2 rounded-r-full p-1 hover:bg-base-200"
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

    public show_block: Record<string, boolean> = {};
    public links = [];

    public filtered_links = signal([]);

    public readonly feature_list = settingSignal<string[]>('features', []);
    public readonly feature_groups = settingSignal<Record<string, string[]>>('feature_groups', {});

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
                id: 'spaces',
                name: i18n('APP.CONCIERGE.MENU_ROOM_BOOKINGS'),
                icon: 'meeting_room',
                route: ['/book/rooms'],
            },
            {
                id: 'bookings',
                name: i18n('APP.CONCIERGE.MENU_BOOKINGS'),
                icon: 'book_online',
                route: ['/bookings'],
                children: [
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_DESK_BOOKINGS'),
                        route: ['/bookings'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_PARKING_BOOKINGS'),
                        route: ['/bookings'],
                    },
                    {
                        id: 'parking-bookings',
                        name: i18n('APP.CONCIERGE.MENU_PARKING_BOOKINGS'),
                        route: ['/bookings'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_LOCKER_BOOKINGS'),
                        route: ['/bookings'],
                    },
                    {
                        id: 'assets',
                        name: i18n('APP.CONCIERGE.MENU_ASSET_BOOKINGS'),
                        route: ['/bookings'],
                    },
                    {
                        id: 'visitors',
                        name: i18n('APP.CONCIERGE.MENU_VISITOR_BOOKINGS'),
                        route: ['/bookings'],
                    },
                ],
            },
            {
                id: 'catering',
                name: i18n('APP.CONCIERGE.MENU_CATERING_BOOKINGS'),
                icon: 'restaurant',
                route: ['/book/catering/orders'],
            },
            {
                id: 'catering-menu',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_CATERING'),
                icon: 'restaurant_menu',
                route: ['/book/catering/menu'],
                admin: true,
                alias: 'catering',
            },
            {
                id: 'points',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_POINTS'),
                icon: 'loyalty',
                route: ['/points-management'],
                admin: true,
            },
            {
                id: 'signage',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_SIGNAGE'),
                icon: 'tv',
                route: ['/signage'],
                admin: true,
            },
            {
                id: 'deals-n-offers',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_DEALS'),
                icon: 'local_offer',
                route: ['/deals-n-offers'],
                admin: true,
            },
            {
                id: 'zones',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_ZONES'),
                icon: 'account_tree',
                route: ['/zone-management'],
                admin: true,
            },
            {
                id: 'settings',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_SETTINGS'),
                icon: 'settings',
                route: ['/settings-management'],
                admin: true,
                alias: ['emergency-contacts', 'email-templates', 'url-management', 'points-of-interest'],
                children: [
                    {
                        id: 'emergency-contacts',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_CONTACTS'),
                        route: ['/settings-management'],
                    },
                    {
                        id: 'email-templates',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_EMAILS'),
                        route: ['/settings-management'],
                    },
                    {
                        id: 'url-management',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_URLS'),
                        route: ['/settings-management'],
                    },
                    {
                        id: 'points-of-interest',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES'),
                        route: ['/settings-management'],
                    },
                ],
            },
            {
                id: 'resources',
                name: i18n('APP.CONCIERGE.MENU_MANAGE_RESOURCES'),
                icon: 'category',
                route: ['/resource-management'],
                admin: true,
                alias: ['spaces', 'desks', 'parking', 'lockers'],
                children: [
                    {
                        id: 'spaces',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_ROOMS'),
                        route: ['/resource-management'],
                    },
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_DESKS'),
                        route: ['/resource-management'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_PARKING'),
                        route: ['/resource-management'],
                    },
                    {
                        id: 'parking-manage',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_PARKING'),
                        route: ['/resource-management'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_LOCKERS'),
                        route: ['/resource-management'],
                    },
                ],
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
                admin: true,
            },
            {
                id: 'surveys',
                name: i18n('APP.CONCIERGE.MENU_SURVEYS'),
                route: ['/surveys'],
                icon: 'add_reaction',
                admin: true,
            },
            {
                id: 'reports',
                name: i18n('APP.CONCIERGE.MENU_REPORTS'),
                route: ['/reports'],
                icon: 'analytics',
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

    private _isFeatureAvailable(link: any): boolean {
        const name = link.id || link._id;
        if (name.startsWith('*')) {
            return true;
        }

        // Use alias if provided (can be string or array), otherwise use the item's id
        const aliases = link.alias
            ? (Array.isArray(link.alias) ? link.alias : [link.alias])
            : [name];

        // Check if at least one alias matches a feature
        const matching_features = aliases.filter(alias =>
            this.feature_list().includes(alias)
        );

        if (!matching_features.length) {
            return false;
        }

        const groups = currentUser().groups;

        // Special handling for items marked with admin: true
        if (link.admin) {
            // Check if user is admin or in feature groups for any of the matching features
            return this.is_admin || matching_features.some(feature_name => {
                const feature_groups = this.feature_groups()[feature_name] || [];
                return feature_groups.length && groups.find((grp) => feature_groups.includes(grp));
            });
        }

        // For other features: check each matching feature
        // If any feature has no groups defined, allow access
        // Otherwise, require admin or group membership for at least one feature
        const features_with_groups = matching_features.filter(feature_name => {
            const feature_groups = this.feature_groups()[feature_name] || [];
            return feature_groups.length > 0;
        });

        // If no features have groups defined, just having the feature is enough
        if (!features_with_groups.length) {
            return true;
        }

        // If some features have groups, check admin or group membership for any of them
        return this.is_admin || features_with_groups.some(feature_name => {
            const feature_groups = this.feature_groups()[feature_name] || [];
            return groups.find((grp) => feature_groups.includes(grp));
        });
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
                              this._isFeatureAvailable(_),
                          )
                        : null,
                }))
                .filter(
                    (_) =>
                        ((!_.id ||
                            _.id === 'home' ||
                            this._isFeatureAvailable(_)) &&
                            _.route) ||
                        _.children?.length,
                )
                .map((link) => {
                    // Convert resources to a simple link (not a dropdown)
                    // but only show if at least one resource feature is enabled
                    if (link.id === 'resources' && link.children?.length) {
                        return { ...link, children: null };
                    }
                    // Convert bookings to a simple link (not a dropdown)
                    // but only show if at least one booking feature is enabled
                    if (link.id === 'bookings' && link.children?.length) {
                        return { ...link, children: null };
                    }
                    // Convert settings to a simple link (not a dropdown)
                    // but only show if at least one settings feature is enabled
                    if (link.id === 'settings' && link.children?.length) {
                        return { ...link, children: null };
                    }
                    return link;
                }),
        );
        if (this.filtered_links().find((_) => _.id === 'home')) {
            const link = this.filtered_links().find((_) => _.id === 'home');
            link.route = this._settings.get('app.default_route') || ['/'];
        }
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
