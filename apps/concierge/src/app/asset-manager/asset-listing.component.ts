import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';
import { AssetManagerTopbarComponent } from './asset-manager-topbar.component';

@Component({
    selector: 'asset-listing',
    template: `
        <asset-manager-topbar [active]="active" />
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
    imports: [
        MatTabsModule,
        RouterModule,
        TranslatePipe,
        AssetManagerTopbarComponent,
    ],
})
export class AssetListingComponent extends AsyncHandler {
    private _router = inject(Router);
    private _state = inject(AssetManagerStateService);

    public active = 'requests';
    public is_new = true;

    public get base_route() {
        return this._state.base_route;
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
