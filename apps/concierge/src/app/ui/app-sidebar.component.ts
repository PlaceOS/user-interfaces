import { Component, ElementRef, OnInit } from '@angular/core';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    SettingsService,
    currentUser,
    i18n,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { debounceTime, filter, first } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    template: `
        <div
            class="w-64 h-full border-r border-base-200 py-2 pr-3 overflow-auto"
        >
            <ng-container *ngFor="let link of filtered_links">
                <ng-container *ngIf="!link.children; else group_view">
                    <a
                        matRipple
                        class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-base-200 w-full"
                        [routerLink]="link.route"
                        routerLinkActive="active"
                    >
                        <app-icon class="text-2xl opacity-60">{{
                            link.icon
                        }}</app-icon>
                        <span class="font-medium">{{ link.name }}</span>
                    </a>
                </ng-container>
                <ng-template #group_view>
                    <button
                        matRipple
                        *ngIf="link.children?.length"
                        class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-base-200 w-full"
                        (click)="
                            show_block[link.id || link._id] =
                                !show_block[link.id || link._id]
                        "
                    >
                        <app-icon class="text-2xl opacity-60">
                            {{ link.icon }}
                        </app-icon>
                        <div class="font-medium flex-1 text-left">
                            {{ link.name }}
                        </div>
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </button>
                    <section
                        class="overflow-hidden w-full"
                        *ngIf="link.children?.length"
                        [@show]="
                            !show_block[link.id || link._id] ? 'show' : 'hide'
                        "
                    >
                        <a
                            class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-base-200 w-full"
                            *ngFor="let child of link.children"
                            [routerLink]="child.route"
                            routerLinkActive="active"
                        >
                            <app-icon class="text-2xl"></app-icon>
                            <span>{{ child.name }}</span>
                        </a>
                    </section>
                </ng-template>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }

            a.active {
                background-color: var(--s);
                color: var(--sc);
            }

            a.active:hover {
                color: var(--bc);
                opacity: 0.75;
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    standalone: false,
})
export class ApplicationSidebarComponent
    extends AsyncHandler
    implements OnInit
{
    public show_block: Record<string, boolean> = {};
    public links = [];

    public filtered_links = [];

    public get feature_list() {
        return this._settings.get('app.features') || [];
    }

    public get feature_groups() {
        return this._settings.get('app.feature_groups') || {};
    }

    public get is_admin() {
        const groups = currentUser().groups;
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        return (
            groups.includes(admin_group) ||
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support')
        );
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _element_ref: ElementRef<HTMLElement>,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.links = [
            {
                name: i18n('APP.CONCIERGE.MENU_BOOKINGS'),
                icon: 'add_circle',
                children: [
                    {
                        id: 'spaces',
                        name: i18n('APP.CONCIERGE.MENU_ROOM_BOOKINGS'),
                        route: ['/book/rooms/new'],
                    },
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_DESK_BOOKINGS'),
                        route: ['/book/desks/new/events'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_PARKING_BOOKINGS'),
                        route: ['/book/parking/new/events'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_LOCKER_BOOKINGS'),
                        route: ['/book/lockers/new/events'],
                    },
                    {
                        id: 'assets',
                        name: i18n('APP.CONCIERGE.MENU_ASSET_BOOKINGS'),
                        route: ['/book/assets/new/list/requests'],
                    },
                    {
                        id: 'catering',
                        name: i18n('APP.CONCIERGE.MENU_CATERING_BOOKINGS'),
                        route: ['/book/catering/new/orders'],
                    },
                ],
            },
            {
                name: i18n('APP.CONCIERGE.MENU_VISITORS'),
                icon: 'badge',
                children: [
                    {
                        id: 'visitors',
                        name: i18n('APP.CONCIERGE.MENU_VISITOR_BOOKINGS'),
                        route: ['/book/visitors/new'],
                    },
                    {
                        id: 'visitor-rules',
                        name: i18n('APP.CONCIERGE.MENU_VISITOR_RULES'),
                        route: ['/book/visitors/new/rules'],
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
                    //     route: ['/facilities/new'],
                    // },
                    {
                        id: 'zones',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_REGIONS'),
                        route: ['/region-management/new'],
                    },
                    {
                        id: 'zones',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_BUILDINGS'),
                        route: ['/building-management/new'],
                    },
                    {
                        id: 'zones',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_LEVELS'),
                        route: ['/level-management/new'],
                    },
                    {
                        id: 'spaces',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_ROOMS'),
                        route: ['/room-management/new'],
                    },
                    {
                        id: 'desks',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_DESKS'),
                        route: ['/book/desks/new/manage'],
                    },
                    {
                        id: 'parking',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_PARKING'),
                        route: ['/book/parking/new/manage'],
                    },
                    {
                        id: 'lockers',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_LOCKERS'),
                        route: ['/book/lockers/new/manage'],
                    },
                    {
                        id: 'catering',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_CATERING'),
                        route: ['/book/catering/new/menu'],
                    },
                    {
                        id: 'points',
                        name: i18n('APP.CONCIERGE.MENU_MANAGE_POINTS'),
                        route: ['/points-management/new'],
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
                ],
            },
            {
                id: 'assets',
                name: i18n('APP.CONCIERGE.MENU_ASSETS'),
                route: ['/book/assets/new/list/items'],
                icon: 'vibration',
            },
            {
                id: 'internal-users',
                name: i18n('APP.CONCIERGE.MENU_USER_LIST'),
                icon: 'assignment_ind',
                route: ['/users/staff/new'],
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
                        route: ['/reports/new/bookings'],
                    },
                    {
                        id: 'desk-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_DESKS'),
                        route: ['/reports/new/desks'],
                    },
                    {
                        id: 'parking-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_PARKING'),
                        route: ['/reports/new/parking'],
                    },
                    {
                        id: 'lockers-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_LOCKERS'),
                        route: ['/reports/new/lockers'],
                    },
                    {
                        id: 'catering-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_CATERING'),
                        route: ['/reports/new/catering'],
                    },
                    {
                        id: 'contact-tracing-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING'),
                        route: ['/reports/new/contact-tracing'],
                    },
                    {
                        id: 'assets-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_ASSETS'),
                        route: ['/reports/new/assets'],
                    },
                    {
                        id: 'visitors-report',
                        name: i18n('APP.CONCIERGE.MENU_REPORT_VISITORS'),
                        route: ['/reports/new/visitors'],
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
                .subscribe(() => this.updateFilteredLinks()),
        );
        this.timeout('update_inview', () => this._moveActiveLinkIntoView(), 50);
    }

    private _isFeatureAvailable(name: string): boolean {
        if (name.startsWith('*')) {
            console.log('Is Available:', name, true);
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
            console.log('Is Available:', name, true);
            return true;
        }
        console.log('Is Available:', name, false);
        console.log(
            'Details:',
            has_feature,
            this.is_admin,
            !feature_groups.length ||
                groups.find((grp) => feature_groups.includes(grp)),
        );
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
                        route: ['/reports/new', _.id],
                    })),
                ),
                'id',
            );
        }
        console.log('Features:', this.feature_list);
        console.log('Links:', this.links, [...this.filtered_links]);
        this.filtered_links = this.links
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
            );
        if (this.filtered_links.find((_) => _.id === 'home')) {
            const link = this.filtered_links.find((_) => _.id === 'home');
            link.route = this._settings.get('app.default_route') || ['/'];
        }
        if (!this.is_admin) {
            this.filtered_links = this.filtered_links.filter(
                (_) => _.id !== 'facilities',
            );
        }
        console.log('Links:', this.links, this.filtered_links);
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
