import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'app-parking',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden bg-base-100">
            <parking-topbar></parking-topbar>
            <div class="dark">
                <nav mat-tab-nav-bar>
                    <a
                        mat-tab-link
                        [routerLink]="['/parking', 'events']"
                        queryParamsHandling="merge"
                        [active]="path === 'events'"
                    >
                        Bookings
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="['/parking', 'spaces']"
                        queryParamsHandling="merge"
                        [active]="path === 'spaces'"
                    >
                        Manage Spaces
                    </a>
                    <!-- <a
                        mat-tab-link
                        [routerLink]="['/parking', 'map']"
                        queryParamsHandling="merge"
                        [active]="path === 'map'"
                    >
                        Make Booking
                    </a> -->
                </nav>
            </div>
            <div class="flex-1 h-1/2 w-full relative overflow-auto px-4">
                <router-outlet></router-outlet>
            </div>
            <div
                *ngIf="!(levels | async)?.length"
                class="absolute inset-0 flex flex-col items-center justify-center z-50"
            >
                <div class="absolute inset-0 bg-base-100 opacity-50 z-0"></div>
                <p>No parking floors for the currently selected building</p>
            </div>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
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
})
export class ParkingComponent extends AsyncHandler {
    /** List of levels for the active building */
    public readonly levels = this._state.levels;

    public path = '';

    constructor(private _state: ParkingStateService, private _router: Router) {
        super();
    }

    public ngOnInit() {
        this._state.startPolling();
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path = url_parts[parts.length - 1].split('?')[0];
                }
            })
        );
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
    }
}
