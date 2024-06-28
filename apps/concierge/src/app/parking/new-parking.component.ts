import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'app-new-parking',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full relative">
                <parking-topbar></parking-topbar>
                <div class="relative flex-1 h-1/2 w-full overflow-auto px-8">
                    <router-outlet></router-outlet>
                </div>
                <div
                    *ngIf="!(levels | async)?.length"
                    class="absolute inset-0 flex flex-col items-center justify-center z-50"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-80 z-0"
                    ></div>
                    <p class="z-10 opacity-60">
                        No parking floors for the currently selected building
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
})
export class NewParkingComponent extends AsyncHandler {
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
