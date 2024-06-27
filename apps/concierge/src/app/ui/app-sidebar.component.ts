import { Component, ElementRef } from '@angular/core';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    SettingsService,
    currentUser,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

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
})
export class ApplicationSidebarComponent extends AsyncHandler {
    public show_block: Record<string, boolean> = {};
    public readonly links = [
        {
            name: 'Bookings',
            icon: 'add_circle',
            children: [
                {
                    id: 'spaces',
                    name: 'Rooms',
                    route: ['/book/rooms/new'],
                },
                {
                    id: 'desks',
                    name: 'Desks',
                    route: ['/book/desks/new/events'],
                },
                {
                    id: 'parking',
                    name: 'Parking',
                    route: ['/book/parking/new/events'],
                },
                {
                    id: 'lockers',
                    name: 'Lockers',
                    route: ['/book/lockers/new'],
                },
                {
                    id: 'assets',
                    name: 'Assets',
                    route: ['/book/assets/new/list/requests'],
                },
                {
                    id: 'catering',
                    name: 'Catering',
                    route: ['/book/catering/new/orders'],
                },
            ],
        },
        {
            name: 'Visitor Management',
            icon: 'badge',
            children: [
                {
                    id: 'visitors',
                    name: 'Visitor List',
                    route: ['/book/visitors/new'],
                },
                {
                    id: 'visitor-rules',
                    name: 'External',
                    route: ['/book/visitors/new/rules'],
                },
            ],
        },
        {
            id: 'facilities',
            name: 'Facilities',
            icon: 'place',
            children: [
                // {
                //     id: 'facilities',
                //     name: 'Building Map',
                //     route: ['/facilities/new'],
                // },
                {
                    id: 'zones',
                    name: 'Region Management',
                    route: ['/region-management/new'],
                },
                {
                    id: 'zones',
                    name: 'Building Management',
                    route: ['/building-management/new'],
                },
                {
                    id: 'zones',
                    name: 'Levels Management',
                    route: ['/level-management/new'],
                },
                {
                    id: 'spaces',
                    name: 'Room Management',
                    route: ['/room-management/new'],
                },
                {
                    id: 'desks',
                    name: 'Desk Management',
                    route: ['/book/desks/new/manage'],
                },
                {
                    id: 'parking',
                    name: 'Parking Management',
                    route: ['/book/parking/new/manage'],
                },
                // {
                //     id: 'parking',
                //     name: 'Parking Users',
                //     route: ['/book/parking/new/users'],
                // },
                {
                    id: 'catering',
                    name: 'Catering Menu',
                    route: ['/book/catering/new/menu'],
                },
                {
                    id: 'points',
                    name: 'Points',
                    route: ['/points-management/new'],
                },
                {
                    id: 'emergency-contacts',
                    name: 'Emergency Contacts',
                    icon: 'assignment_ind',
                    route: ['/users/staff/emergency-contacts'],
                },
                {
                    id: 'signage',
                    name: 'Digital Signage',
                    route: ['/signage'],
                },
                {
                    id: 'points-of-interest',
                    name: 'Points Of Interest',
                    route: ['/points-of-interest'],
                },
                {
                    id: 'url-management',
                    name: 'URL Management',
                    route: ['/url-management'],
                },
            ],
        },
        {
            id: 'assets',
            name: 'Asset Manager',
            route: ['/book/assets/new/list/items'],
            icon: 'vibration',
        },
        {
            id: 'internal-users',
            name: 'User Directory',
            icon: 'assignment_ind',
            route: ['/users/staff/new'],
        },
        {
            id: 'events',
            name: 'Events',
            route: ['/entertainment/events'],
            icon: 'confirmation_number',
        },
        {
            id: 'surveys',
            name: 'Surveys',
            route: ['/surveys/new'],
            icon: 'add_reaction',
        },
        {
            _id: 'reports',
            name: 'Reports',
            icon: 'analytics',
            children: [
                {
                    id: 'booking-report',
                    name: 'Room Bookings',
                    route: ['/reports/new/bookings'],
                },
                {
                    id: 'desk-report',
                    name: 'Desk Bookings',
                    route: ['/reports/new/desks'],
                },
                {
                    id: 'catering-report',
                    name: 'Catering',
                    route: ['/reports/new/catering'],
                },
                {
                    id: 'contact-tracing-report',
                    name: 'Contact Tracing',
                    route: ['/reports/new/contact-tracing'],
                },
            ],
        },
    ];

    public filtered_links = [];

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _element_ref: ElementRef<HTMLElement>
    ) {
        super();
    }

    public ngOnInit() {
        this.updateFilteredLinks();
        this.subscription(
            'building',
            this._org.active_building.subscribe(() =>
                this.updateFilteredLinks()
            )
        );
        this.timeout('update_inview', () => this._moveActiveLinkIntoView(), 50);
    }

    public updateFilteredLinks() {
        const features = this._settings.get('app.features') || [];
        const custom_reports = this._settings.get('app.custom_reports') || [];
        const admin_group = this._settings.get('app.admin_group') || 'admin';
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
                    }))
                ),
                'id'
            );
        }
        this.filtered_links = this.links
            .map((link) => ({
                ...link,
                children: link.children
                    ? link.children.filter(
                          (_) => features.includes(_.id) || _.id.startsWith('*')
                      )
                    : null,
            }))
            .filter(
                (_) =>
                    ((!_.id || _.id === 'home' || features.includes(_.id)) &&
                        _.route) ||
                    _.children?.length
            );
        if (this.filtered_links.find((_) => _.id === 'home')) {
            const link = this.filtered_links.find((_) => _.id === 'home');
            link.route = this._settings.get('app.default_route') || ['/'];
        }
        const groups = currentUser().groups;
        if (
            !groups.includes(admin_group) &&
            !groups.includes('placeos_admin') &&
            !groups.includes('placeos_support')
        ) {
            this.filtered_links = this.filtered_links.filter(
                (_) => _.id !== 'facilities'
            );
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
