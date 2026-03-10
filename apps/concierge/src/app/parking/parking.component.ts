import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AsyncHandler, SettingsService, currentUser } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { ParkingStateService } from './parking-state.service';
import { ParkingTopbarComponent } from './parking-topbar.component';

@Component({
    selector: 'app-parking',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <parking-topbar></parking-topbar>
                @if (
                    show_requests &&
                    section() === 'events' &&
                    view() !== 'map'
                ) {
                    <div class="px-8 pb-2">
                        <nav
                            mat-tab-nav-bar
                            class="bg-base-200 overflow-hidden rounded-sm"
                            [tabPanel]="eventsTabPanel"
                        >
                            @if (can_view_requests) {
                                <a
                                    mat-tab-link
                                    [routerLink]="[
                                        '/book',
                                        'parking',
                                        'events',
                                        'requests',
                                    ]"
                                    [active]="view() === 'requests'"
                                >
                                    {{
                                        'APP.CONCIERGE.PARKING_TAB_REQUESTS'
                                            | translate
                                    }}
                                </a>
                            }
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'events',
                                    'bookings',
                                ]"
                                [active]="view() === 'bookings'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_BOOKINGS'
                                        | translate
                                }}
                            </a>
                        </nav>
                        <mat-tab-nav-panel
                            #eventsTabPanel
                        ></mat-tab-nav-panel>
                    </div>
                }
                @if (section() === 'manage') {
                    <div class="px-8 pb-2">
                        <nav
                            mat-tab-nav-bar
                            class="bg-base-200 overflow-hidden rounded-sm"
                            [tabPanel]="tabPanel"
                        >
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'spaces',
                                ]"
                                [active]="view() === 'spaces'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_SPACES'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'users',
                                ]"
                                [active]="view() === 'users'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_USERS'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'map',
                                ]"
                                [active]="view() === 'map'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_MAP' | translate
                                }}
                            </a>
                        </nav>
                        <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
                    </div>
                }
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if (!(levels | async)?.length) {
                    <div
                        class="absolute inset-0 z-50 flex flex-col items-center justify-center"
                    >
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-80"
                        ></div>
                        <p class="z-10 opacity-60">
                            {{
                                'APP.CONCIERGE.PARKING_UNAVAILABLE' | translate
                            }}
                        </p>
                    </div>
                }
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        MatTabsModule,
        RouterModule,
        ParkingTopbarComponent,
        TranslatePipe,
    ],
})
export class ParkingComponent extends AsyncHandler implements OnInit {
    private _state = inject(ParkingStateService);
    private _router = inject(Router);
    private _settings = inject(SettingsService);

    /** List of levels for the active building */
    public readonly levels = this._state.levels;

    public readonly section = signal<'events' | 'manage'>('events');
    public readonly view = signal<'spaces' | 'list' | 'map' | 'users' | 'requests' | 'bookings'>('bookings');

    public get show_requests() {
        return !!this._settings.get('app.parking.show_requests');
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

    public get can_view_requests() {
        if (!this.show_requests) return false;
        const feature_groups = this._settings.get('app.feature_groups') || {};
        const request_groups = feature_groups['parking-requests'] || [];
        const groups = currentUser().groups || [];
        return (
            this.is_admin ||
            !request_groups.length ||
            groups.some((grp) => request_groups.includes(grp))
        );
    }

    public ngOnInit() {
        this.subscription('poll_bookings', () => this._state.startPolling());
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) this._updatePath();
            }),
        );
        this._updatePath();
    }

    private _updatePath() {
        const parts = this._router.url?.split('/') || [''];
        const [section = 'events', view = 'bookings'] = parts.slice(-2);
        const current_view = view.split('?')[0] as any;
        this.section.set(section as any);
        if (section === 'events' && current_view === 'requests') {
            if (!this.can_view_requests) {
                this.view.set('bookings');
                void this._router.navigate(
                    ['/book', 'parking', 'events', 'bookings'],
                    { replaceUrl: true },
                );
                return;
            }
        }
        this.view.set(current_view);
    }
}
