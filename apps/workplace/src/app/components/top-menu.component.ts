import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    currentUser,
    i18n,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'top-menu',
    template: `
        @if (routes.length > 1) {
            <div
                #menuContainer
                menu
                [class.opacity-0]="mobile_menu() || checking()"
                [class.!h-0]="mobile_menu()"
                (window:resize)="checkMenu()"
                class="flex h-full w-full min-w-full items-center justify-center overflow-hidden text-base-content"
            >
                @for (route of routes; track route) {
                    @if (features().includes(route.id) || route.id === 'home') {
                        <a
                            matRipple
                            [name]="'nav-' + route.id"
                            class="relative flex items-center justify-center space-x-2 px-8"
                            [routerLink]="[route.route]"
                            routerLinkActive="text-secondary active"
                            [matTooltip]="route.name"
                            matTooltipPosition="below"
                        >
                            <icon filled class="text-xl">{{ route.icon }}</icon>
                            <icon
                                outline
                                className="material-symbols-outlined"
                                class="!m-0 text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            @if (!hide_text()) {
                                <span class="truncate">{{ route.name }}</span>
                            }
                            <div
                                bar
                                class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary"
                            ></div>
                        </a>
                    }
                }
            </div>
        }
        @if (mobile_menu()) {
            <div
                class="absolute inset-y-0 -right-16 left-0 flex items-center justify-end"
            >
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <icon>menu</icon>
                </button>
            </div>
        }
        <mat-menu #menu="matMenu">
            @for (route of routes; track route) {
                @if (features().includes(route.id) || route.id === 'home') {
                    <a
                        mat-menu-item
                        [routerLink]="route.route"
                        routerLinkActive="text-secondary active"
                    >
                        <div class="flex items-center space-x-2">
                            <icon filled class="text-xl">{{ route.icon }}</icon>
                            <icon
                                outline
                                className="material-symbols-outlined"
                                class="!m-0 text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            <div class="truncate">{{ route.name }}</div>
                        </div>
                    </a>
                }
            }
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
    standalone: false,
})
export class TopMenuComponent
    extends AsyncHandler
    implements OnInit, AfterViewInit
{
    private _element = inject(ElementRef);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;
    public previous_size = 9999;
    public readonly checking = signal(false);
    public readonly mobile_menu = signal(false);
    public readonly hide_text = signal(false);
    public readonly features = signal([] as string[]);

    public readonly setBuilding = (b) => (this._org.building = b);

    public routes = [];

    public get feature_list(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get available_features(): string[] {
        const feature_list = this.feature_list;
        const feature_groups: Record<string, string[]> =
            this._settings.get('app.feature_groups') || {};
        const groups = currentUser().groups;
        return feature_list.filter(
            (name) =>
                // this.is_admin ||
                !feature_groups[name]?.length ||
                feature_groups[name].find((_) => groups.includes(_)),
        );
    }

    public get is_admin() {
        const groups = currentUser().groups;
        return (
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support')
        );
    }

    public get default_page(): string {
        return this._settings.get('app.default_route') || '/landing';
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    public get type() {
        const url = this._router.url;
        if (url.includes(this.default_page)) return 'home';
        if (url.includes('book/spaces')) return 'spaces';
        if (url.includes('book/desk')) return 'desks';
        if (url.includes('book/locker')) return 'lockers';
        if (url.includes('book/parking')) return 'parking';
        if (url.includes('explore')) return 'explore';
        if (url.includes('schedule')) return 'schedule';
        return '';
    }

    private readonly menu =
        viewChild<ElementRef<HTMLDivElement>>('menuContainer');

    public ngOnInit() {
        this.checking.set(true);
        this.subscription(
            'building',
            this._org.active_building.subscribe(() =>
                this.timeout('check_route', () => this._checkRoute()),
            ),
        );
        this.routes = [
            {
                id: 'home',
                route: this.default_page,
                icon: 'home',
                name: i18n('APP.WORKPLACE.MENU_HOME'),
            },
            {
                id: 'spaces',
                route: '/book/meeting',
                icon: 'meeting_room',
                name: i18n('APP.WORKPLACE.MENU_ROOMS'),
            },
            {
                id: 'desks',
                route: '/book/desk',
                icon: 'desk',
                name: i18n('APP.WORKPLACE.MENU_DESKS'),
            },
            {
                id: 'lockers',
                route: '/book/locker',
                icon: 'lock',
                name: i18n('APP.WORKPLACE.MENU_LOCKERS'),
            },
            {
                id: 'parking',
                route: '/book/parking',
                icon: 'directions_car',
                name: i18n('APP.WORKPLACE.MENU_PARKING'),
            },
            {
                id: 'visitor-invite',
                route: '/book/visitor',
                icon: 'person',
                name: i18n('APP.WORKPLACE.MENU_VISITORS'),
            },
            {
                id: 'explore',
                route: '/explore',
                icon: 'place',
                name: i18n('APP.WORKPLACE.MENU_EXPLORE'),
            },
            {
                id: 'schedule',
                route: '/your-bookings',
                icon: 'event',
                name: i18n('APP.WORKPLACE.MENU_SCHEDULE'),
            },
            {
                id: 'control',
                route: '/control',
                icon: 'remote_gen',
                name: i18n('APP.WORKPLACE.MENU_CONTROL'),
            },
            {
                id: 'group-events',
                route: '/group-events',
                icon: 'local_activity',
                name: i18n('APP.WORKPLACE.MENU_EVENTS'),
            },
            {
                id: 'deals-n-offers',
                route: '/deals-n-offers',
                icon: 'confirmation_number',
                name: i18n('APP.WORKPLACE.MENU_DEALS'),
            },
        ];
    }

    public ngAfterViewInit() {
        this.timeout('check_menu', () => this.checkMenu(), 300);
    }

    private _checkRoute() {
        this.features.set(this.available_features);
        if (
            this.type &&
            this.type !== 'home' &&
            !this.features().includes(this.type)
        ) {
            this._router.navigate(['/']);
        }
        this.timeout('check_menu', () => this.checkMenu(), 300);
    }

    public checkMenu() {
        const menu_width = this.menu().nativeElement?.offsetWidth || 0;
        const container_width =
            this._element.nativeElement.parentElement.offsetWidth;
        this.checking.set(false);
        if (menu_width > container_width && !this.hide_text()) {
            this.hide_text.set(true);
            this.timeout('check_menu', () => this.checkMenu(), 20);
            this.checking.set(true);
            this.previous_size = container_width;
            return;
        }
        if (this.hide_text())
            this.mobile_menu.set(menu_width > container_width);
        if (container_width > this.previous_size && this.hide_text()) {
            this.hide_text.set(false);
            this.timeout('check_menu', () => this.checkMenu(), 20);
            this.checking.set(true);
        }
        this.previous_size = container_width;
    }
}
