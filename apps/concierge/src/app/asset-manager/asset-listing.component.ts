import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AssetManagerStateService } from './asset-manager-state.service';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'asset-listing',
    template: `
        <asset-manager-topbar [active]="active"></asset-manager-topbar>
        <div class="flex flex-col flex-1 h-1/2 w-full px-8">
            <nav mat-tab-nav-bar *ngIf="!is_new || active !== 'requests'">
                <a
                    mat-tab-link
                    [routerLink]="[base_route, 'list', 'requests']"
                    [routerLinkActive]="'active'"
                    [active]="active === 'requests'"
                    (click)="active = 'requests'"
                    *ngIf="!is_new"
                >
                    Requests
                </a>
                <a
                    mat-tab-link
                    [routerLink]="[base_route, 'list', 'items']"
                    [active]="active === 'items'"
                    (click)="active = 'items'"
                >
                    Products
                </a>
                <a
                    mat-tab-link
                    [routerLink]="[base_route, 'list', 'purchase-orders']"
                    [active]="active === 'purchase-orders'"
                    (click)="active = 'purchase-orders'"
                >
                    Purchase Orders
                </a>
            </nav>
            <div class="flex-1 h-1/2 w-full overflow-visible">
                <router-outlet></router-outlet>
            </div>
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
})
export class AssetListingComponent extends AsyncHandler {
    public active = 'requests';
    public is_new = false;

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _router: Router,
        private _state: AssetManagerStateService
    ) {
        super();
    }

    public ngOnInit() {
        this.is_new = this._router.url.includes('new');
        this.active = this._router.url.includes('requests')
            ? 'requests'
            : this._router.url.includes('items')
            ? 'items'
            : 'purchase-orders';
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    this.is_new = this._router.url.includes('new');
                    this.active = this._router.url.includes('requests')
                        ? 'requests'
                        : this._router.url.includes('items')
                        ? 'items'
                        : 'purchase-orders';
                }
            })
        );
    }
}
