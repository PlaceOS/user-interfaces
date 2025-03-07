import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: '[app-desks]',
    template: `
        <sidebar></sidebar>
        <main
            class="relative flex w-1/2 flex-1 flex-col overflow-hidden bg-base-100"
        >
            <desks-topbar class="w-full"></desks-topbar>
            <div class="dark">
                <nav mat-tab-nav-bar>
                    <a
                        mat-tab-link
                        [routerLink]="['/book', 'desks', 'events']"
                        queryParamsHandling="merge"
                        [active]="path === 'events'"
                    >
                        Bookings
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="['/book', 'desks', 'map']"
                        queryParamsHandling="merge"
                        [active]="path === 'map'"
                    >
                        Map View
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="['/book', 'desks', 'manage']"
                        queryParamsHandling="merge"
                        [active]="path === 'manage'"
                    >
                        Manage Desks
                    </a>
                </nav>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-auto">
                <router-outlet></router-outlet>
            </div>
            <mat-progress-bar
                class="w-full"
                *ngIf="loading | async"
                mode="indeterminate"
            ></mat-progress-bar>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class DesksComponent extends AsyncHandler implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;
    public path: string;

    constructor(
        private _state: DesksStateService,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this._state.refresh();
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path = url_parts[parts.length - 1].split('?')[0];
                }
            }),
        );
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }
}
