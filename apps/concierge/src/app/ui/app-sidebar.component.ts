import { Component } from '@angular/core';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'app-sidebar',
    template: `
        <div
            class="w-56 h-full border-r border-gray-300 py-2 pr-3 overflow-auto"
        >
            <ng-container *ngFor="let link of filtered_links">
                <ng-container *ngIf="!link.children; else group_view">
                    <a
                        matRipple
                        class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-black/10 w-full"
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
                        class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-black/10 w-full"
                        (click)="show_block[link.id] = !show_block[link.id]"
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
                        [@show]="!show_block[link.id] ? 'show' : 'hide'"
                    >
                        <a
                            class="flex items-center space-x-2 rounded-r-full p-1 my-1 hover:bg-black/10 w-full"
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
                background-color: var(--primary);
                color: #fff;
            }

            a.active:hover {
                background-color: var(--primary);
                color: #000;
                opacity: 0.75;
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class ApplicationSidebarComponent extends AsyncHandler {
    public show_block: Record<string, boolean> = {};
    public readonly links = [
        { id: 'home', name: 'Home', route: ['/'], icon: 'home' },
        {
            id: 'facilities',
            name: 'Facilities',
            icon: 'place',
            children: [
                {
                    id: 'room-management',
                    name: 'Room Management',
                    route: ['/room-management'],
                },
                {
                    id: 'facilities',
                    name: 'Building Map',
                    route: ['/facilities'],
                },
                {
                    id: 'surveys',
                    name: 'Surveys',
                    route: ['/surveys'],
                },
            ],
        },
        {
            id: 'bookings',
            name: 'Bookings/Admin',
            icon: 'add_circle',
            children: [
                {
                    id: 'spaces',
                    name: 'Rooms',
                    route: ['/book/rooms'],
                },
                {
                    id: 'desks',
                    name: 'Desks',
                    route: ['/book/desks'],
                },
                {
                    id: 'parking',
                    name: 'Parking',
                    route: ['/book/parking'],
                },
                {
                    id: 'lockers',
                    name: 'Lockers',
                    route: ['/book/lockers'],
                },
                {
                    id: 'visitors',
                    name: 'Visitors',
                    route: ['/book/visitors'],
                },
                {
                    id: 'assets',
                    name: 'Assets',
                    route: ['/book/assets'],
                },
            ],
        },
        {
            id: 'users',
            name: 'User Directory',
            icon: 'assignment_ind',
            children: [
                {
                    id: 'internal-users',
                    name: 'Internal',
                    route: ['/users/internal'],
                },
                {
                    id: 'external-users',
                    name: 'External',
                    route: ['/book/external'],
                },
            ],
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            icon: 'confirmation_number',
            children: [
                {
                    id: 'events',
                    name: 'Events',
                    route: ['/entertainment/events'],
                },
                {
                    id: 'points',
                    name: 'Points',
                    route: ['/entertainment/points'],
                },
            ],
        },
        {
            id: 'reports',
            name: 'Reports',
            icon: 'analytics',
            children: [
                {
                    id: 'booking-report',
                    name: 'Bookings',
                    route: ['/reports/bookings'],
                },
                {
                    id: 'contact-tracing-report',
                    name: 'Contact Tracing',
                    route: ['/reports/contact-tracing'],
                },
            ],
        },
    ];

    public filtered_links = [];

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
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
    }

    public updateFilteredLinks() {
        const features = this._settings.get('app.features') || [];
        const custom_reports = this._settings.get('app.custom_reports') || [];
        this.filtered_links = this.links
            .map((link) => ({
                ...link,
                children: link.children
                    ? link.children.filter((_) => features.includes(_.id))
                    : null,
            }))
            .filter((_) => _.route || _.children?.length);
        if (this.filtered_links.find((_) => _.id === 'home')) {
            const link = this.filtered_links.find((_) => _.id === 'home');
            link.route = this._settings.get('app.default_route') || ['/'];
        }
        if (
            custom_reports.length &&
            this.filtered_links.find((_) => _.id === 'reports')
        ) {
            const reports = this.filtered_links.find((_) => _.id === 'reports');
            reports.children = reports.children.concat(custom_reports);
        }
    }
}
