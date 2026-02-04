import {
    afterNextRender,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
    i18n,
    OrganisationService,
    settingSignal,
    userSignal,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'top-menu',
    template: `
        @if (routes().length > 1) {
            <div
                #menuContainer
                menu
                [class.opacity-0]="mobile_menu() || checking()"
                [class.h-0!]="mobile_menu()"
                (window:resize)="checkMenu()"
                class="text-base-content flex h-full w-full min-w-full items-center justify-center overflow-hidden"
            >
                @for (route of routes(); track route) {
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
                            <icon
                                filled
                                class="text-xl"
                                [class.mx-auto]="hide_text()"
                                >{{ route.icon }}</icon
                            >
                            <icon
                                outline
                                className="material-symbols-outlined"
                                [class.mx-auto]="hide_text()"
                                class="m-0! text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            @if (!hide_text()) {
                                <span class="truncate">{{ route.name }}</span>
                            }
                            <div
                                bar
                                class="bg-secondary absolute inset-x-0 bottom-0 h-0.5"
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
            @for (route of routes(); track route) {
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
                                class="text-xl"
                            >
                                {{ route.icon }}
                            </icon>
                            <div class="truncate pr-4">{{ route.name }}</div>
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
                shrink: 1;
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

                background-color: var(--base-200);
                opacity: 0.4;
            }

            a:not(.active) [filled],
            a.active [outline] {
                display: none;
            }
        `,
    ],
    imports: [MatMenuModule, IconComponent, RouterModule, MatTooltipModule],
})
export class TopMenuComponent {
    private _element = inject(ElementRef);
    private _org = inject(OrganisationService);
    private _router = inject(Router);

    private readonly menu =
        viewChild<ElementRef<HTMLDivElement>>('menuContainer');

    public readonly buildings = this._org.building_list;
    public readonly building = toSignal(this._org.active_building);
    private readonly previous_size = signal(9999);
    public readonly checking = signal(false);
    public readonly mobile_menu = signal(false);
    public readonly hide_text = signal(false);

    public readonly setBuilding = (b) => (this._org.building = b);
    public readonly user = userSignal();
    public readonly feature_list = settingSignal<string[]>('features', []);
    public readonly feature_groups = settingSignal<Record<string, string[]>>(
        'feature_groups',
        {},
    );
    public readonly default_page = settingSignal(
        'app.default_route',
        '/landing',
    );
    public readonly new_features = settingSignal('app.new_features', false);
    public readonly vip_visitor_booker_group = settingSignal<string>(
        'vip_visitor_booker_group',
        '',
    );

    public readonly is_admin = computed(() => {
        const groups = this.user().groups;
        return (
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support')
        );
    });

    public readonly features = computed(() => {
        const feature_list = this.feature_list();
        const feature_groups = this.feature_groups();
        const groups = this.user().groups;
        const vip_group = this.vip_visitor_booker_group();
        return feature_list.filter((name) => {
            // Special check for VIP visitor - requires user to be in vip_visitor_booker_group
            if (name === 'vip-visitor-invite') {
                if (vip_group && !groups.includes(vip_group)) {
                    return false;
                }
            }
            // Regular feature group check
            return (
                !feature_groups[name]?.length ||
                feature_groups[name].find((_) => groups.includes(_))
            );
        });
    });

    private readonly url = toSignal(
        this._router.events.pipe(
            filter((e) => e instanceof NavigationEnd),
            map(() => this._router.url),
        ),
        { initialValue: this._router.url },
    );

    public readonly type = computed(() => {
        const url = this.url();
        const default_page = this.default_page();
        if (url.includes(default_page)) return 'home';
        if (url.includes('book/spaces')) return 'spaces';
        if (url.includes('book/desk')) return 'desks';
        if (url.includes('book/locker')) return 'lockers';
        if (url.includes('book/parking')) return 'parking';
        if (url.includes('explore')) return 'explore';
        if (url.includes('schedule')) return 'schedule';
        return '';
    });

    public readonly routes = computed(() => [
        {
            id: 'home',
            route: this.default_page(),
            icon: 'home',
            name: i18n('APP.WORKPLACE.MENU_HOME'),
        },
        {
            id: 'desks',
            route: '/book/desk',
            icon: 'desk',
            name: i18n('APP.WORKPLACE.MENU_DESKS'),
        },
        {
            id: 'spaces',
            route: '/book/meeting',
            icon: 'meeting_room',
            name: i18n('APP.WORKPLACE.MENU_ROOMS'),
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
            id: 'vip-visitor-invite',
            route: '/book/vip-visitor',
            icon: 'star',
            name: i18n('APP.WORKPLACE.MENU_VIP_VISITORS'),
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
        {
            id: 'team-schedule',
            route: '/team-schedule',
            icon: 'groups',
            name: i18n('APP.WORKPLACE.MENU_TEAM_SCHEDULE'),
        },
    ]);

    private _check_menu_timer: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        this.checking.set(true);

        effect(() => {
            this.building();
            this._checkRoute();
        });

        afterNextRender(() => {
            this._scheduleCheckMenu(300);
        });
    }

    private _checkRoute() {
        const type = this.type();
        const features = this.features();
        if (type && type !== 'home' && !features.includes(type)) {
            this._router.navigate(['/']);
        }
        this._scheduleCheckMenu(300);
    }

    private _scheduleCheckMenu(delay: number) {
        if (this._check_menu_timer) {
            clearTimeout(this._check_menu_timer);
        }
        this._check_menu_timer = setTimeout(() => this.checkMenu(), delay);
    }

    public checkMenu() {
        const menu_el = this.menu();
        const menu_width = menu_el?.nativeElement?.offsetWidth || 0;
        const container_width =
            this._element.nativeElement.parentElement?.offsetWidth || 0;
        this.checking.set(false);
        if (menu_width > container_width && !this.hide_text()) {
            this.hide_text.set(true);
            this._scheduleCheckMenu(20);
            this.checking.set(true);
            this.previous_size.set(container_width);
            return;
        }
        if (this.hide_text()) {
            this.mobile_menu.set(menu_width > container_width);
        }
        if (container_width > this.previous_size() && this.hide_text()) {
            this.hide_text.set(false);
            this._scheduleCheckMenu(20);
            this.checking.set(true);
        }
        this.previous_size.set(container_width);
    }
}
