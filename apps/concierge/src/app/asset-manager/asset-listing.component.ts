import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-listing',
    template: `
        <asset-manager-topbar [active]="active"></asset-manager-topbar>
        <div class="flex h-1/2 w-full flex-1 flex-col px-8">
            @if (!is_new || active !== 'requests') {
                <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                    @if (!is_new) {
                        <a
                            mat-tab-link
                            [routerLink]="[base_route, 'list', 'requests']"
                            [routerLinkActive]="'active'"
                            [active]="active === 'requests'"
                            (click)="active = 'requests'"
                        >
                            {{ 'APP.CONCIERGE.ASSETS_REQUESTS' | translate }}
                        </a>
                    }
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'items']"
                        [active]="active === 'items'"
                        (click)="active = 'items'"
                    >
                        {{ 'APP.CONCIERGE.ASSETS_PRODUCTS' | translate }}
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="[base_route, 'list', 'purchase-orders']"
                        [active]="active === 'purchase-orders'"
                        (click)="active = 'purchase-orders'"
                    >
                        {{ 'APP.CONCIERGE.ASSETS_PO' | translate }}
                    </a>
                </nav>
            }
            <mat-tab-nav-panel
                class="h-1/2 w-full flex-1 overflow-visible"
                #tabPanel
            >
                <router-outlet></router-outlet>
            </mat-tab-nav-panel>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    standalone: false,
})
export class AssetListingComponent extends AsyncHandler {
    public active = 'requests';
    public is_new = true;

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _router: Router,
        private _state: AssetManagerStateService,
    ) {
        super();
    }

    public ngOnInit() {
        this.active = this._router.url.includes('requests')
            ? 'requests'
            : this._router.url.includes('items')
              ? 'items'
              : 'purchase-orders';
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    this.active = this._router.url.includes('requests')
                        ? 'requests'
                        : this._router.url.includes('items')
                          ? 'items'
                          : 'purchase-orders';
                }
            }),
        );
    }
}
