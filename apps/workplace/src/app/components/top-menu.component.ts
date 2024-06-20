import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'top-menu',
    template: `
        <div
            #menuContainer
            menu
            [class.opacity-0]="mobile_menu || checking"
            [class.!h-0]="mobile_menu"
            (window:resize)="checkMenu()"
            class="flex items-center justify-center h-full w-full overflow-hidden text-base-content min-w-full"
        >
            <ng-container *ngFor="let route of routes">
                <a
                    matRipple
                    [name]="'nav-' + route.id"
                    class="flex items-center justify-center space-x-2 relative px-8"
                    [routerLink]="[route.route]"
                    routerLinkActive="text-secondary active"
                    [matTooltip]="route.name"
                    *ngIf="features.includes(route.id) || route.id === 'home'"
                    matTooltipPosition="below"
                >
                    <app-icon filled class="text-xl">{{ route.icon }}</app-icon>
                    <app-icon
                        outline
                        className="material-icons-outlined"
                        class="text-xl !m-0"
                    >
                        {{ route.icon }}
                    </app-icon>
                    <span *ngIf="!hide_text" class="truncate">{{
                        route.name
                    }}</span>
                    <div
                        bar
                        class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                    ></div>
                </a>
            </ng-container>
        </div>
        <div
            class="absolute inset-y-0 left-0 -right-16 flex items-center justify-end"
            *ngIf="mobile_menu"
        >
            <button icon matRipple [matMenuTriggerFor]="menu">
                <app-icon>menu</app-icon>
            </button>
        </div>
        <mat-menu #menu="matMenu">
            <ng-container *ngFor="let route of routes">
                <a
                    mat-menu-item
                    *ngIf="features.includes(route.id) || route.id === 'home'"
                    [routerLink]="route.route"
                    routerLinkActive="text-secondary active"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon filled class="text-xl">{{
                            route.icon
                        }}</app-icon>
                        <app-icon
                            outline
                            className="material-icons-outlined"
                            class="text-xl !m-0"
                        >
                            {{ route.icon }}
                        </app-icon>
                        <div class="truncate">{{ route.name }}</div>
                    </div>
                </a>
            </ng-container>
        </mat-menu>
    `,
    styles: [
        `
            [menu] > * {
                height: 3.5rem;
                flex-shrink: 1;
            }

            [bar] {
                display: none;
            }

            .active > [bar] {
                display: block;
            }

            a:not([mat-menu-item]):not(.active) {
                opacity: 0.6;
            }

            a:not([mat-menu-item]):not(.active):hover {
                border-radius: 0.5rem;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
                height: 3rem;

                background-color: var(--b2);
                opacity: 0.4;
            }

            a:not(.active) [filled],
            a.active [outline] {
                display: none;
            }
        `,
    ],
})
export class TopMenuComponent extends AsyncHandler {
    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;
    public previous_size = 9999;
    public checking = false;
    public mobile_menu = false;
    public hide_text = false;

    public readonly setBuilding = (b) => (this._org.building = b);

    public readonly routes = [
        { id: 'home', route: this.default_page, icon: 'home', name: 'Home' },
        {
            id: 'spaces',
            route: '/book/meeting',
            icon: 'meeting_room',
            name: 'Book Room',
        },
        {
            id: 'desks',
            route: '/book/new-desks',
            icon: 'desk',
            name: 'Book Desk',
        },
        {
            id: 'lockers',
            route: '/book/locker',
            icon: 'lock',
            name: 'Book Locker',
        },
        {
            id: 'parking',
            route: '/book/new-parking',
            icon: 'directions_car',
            name: 'Book Car Space',
        },
        {
            id: 'visitor-invite',
            route: '/book/visitor',
            icon: 'person',
            name: 'Invite Visitors',
        },
        { id: 'explore', route: '/explore', icon: 'place', name: 'Spaces' },
        {
            id: 'schedule',
            route: '/your-bookings',
            icon: 'event',
            name: 'Your Bookings',
        },
        {
            id: 'group-events',
            route: '/group-events',
            icon: 'local_activity',
            name: 'Events',
        },
    ];

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get default_page(): string {
        return this._settings.get('app.default_route') || '/dashboard';
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    public get type() {
        const url = this._router.url;
        if (url.includes('dashboard')) return 'home';
        if (url.includes('book/spaces')) return 'spaces';
        if (url.includes('book/desks')) return 'desks';
        if (url.includes('book/locker')) return 'lockers';
        if (url.includes('book/parking')) return 'parking';
        if (url.includes('explore')) return 'explore';
        if (url.includes('schedule')) return 'schedule';
        return '';
    }

    @ViewChild('menuContainer') private menu: ElementRef<HTMLDivElement>;

    constructor(
        private _element: ElementRef,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.checking = true;
    }

    public ngAfterViewInit() {
        this.timeout('check_menu', () => this.checkMenu());
    }

    public checkMenu() {
        const menu_width = this.menu.nativeElement?.offsetWidth || 0;
        const container_width =
            this._element.nativeElement.parentElement.offsetWidth;
        this.checking = false;
        if (menu_width > container_width && !this.hide_text) {
            this.hide_text = true;
            this.timeout('check_menu', () => this.checkMenu(), 20);
            this.checking = true;
            this.previous_size = container_width;
            return;
        }
        if (this.hide_text) this.mobile_menu = menu_width > container_width;
        if (container_width > this.previous_size && this.hide_text) {
            this.hide_text = false;
            this.timeout('check_menu', () => this.checkMenu(), 20);
            this.checking = true;
        }
        this.previous_size = container_width;
    }
}
