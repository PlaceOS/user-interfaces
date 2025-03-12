import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'app-new-parking',
    template: `
        <app-topbar></app-topbar>
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <parking-topbar></parking-topbar>
                <div class="px-8 pb-2" *ngIf="path !== 'events'">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        <a
                            mat-tab-link
                            [routerLink]="['/book', 'parking', 'manage']"
                            [active]="path === 'manage'"
                        >
                            {{ 'APP.CONCIERGE.PARKING_TAB_SPACES' | translate }}
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="[
                                '/book',
                                'parking',
                                'manage',
                                'users',
                            ]"
                            [active]="path === 'users'"
                        >
                            {{ 'APP.CONCIERGE.PARKING_TAB_USERS' | translate }}
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/book', 'parking', 'manage', 'map']"
                            [active]="path === 'map'"
                        >
                            {{ 'APP.CONCIERGE.PARKING_TAB_MAP' | translate }}
                        </a>
                    </nav>
                    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
                </div>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                <div
                    *ngIf="!(levels | async)?.length"
                    class="absolute inset-0 z-50 flex flex-col items-center justify-center"
                >
                    <div
                        class="absolute inset-0 z-0 bg-base-100 opacity-80"
                    ></div>
                    <p class="z-10 opacity-60">
                        {{ 'APP.CONCIERGE.PARKING_UNAVAILABLE' | translate }}
                    </p>
                </div>
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
                background-color: var(--b1);
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
    standalone: false,
})
export class ParkingComponent extends AsyncHandler implements OnInit {
    /** List of levels for the active building */
    public readonly levels = this._state.levels;

    public path = '';

    constructor(
        private _state: ParkingStateService,
        private _router: Router,
    ) {
        super();
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
        this.timeout(
            'update_path',
            () => {
                const parts = this._router.url?.split('/') || [''];
                this.path = parts[parts.length - 1].split('?')[0];
            },
            50,
        );
    }
}
