import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-listing',
    template: `
        <asset-manager-topbar
            [show_actions]="active === 'items'"
        ></asset-manager-topbar>
        <div class="flex flex-col flex-1 h-1/2 w-full px-4">
            <nav mat-tab-nav-bar>
                <a
                    mat-tab-link
                    [routerLink]="['/asset-manager', 'list', 'requests']"
                    [routerLinkActive]="'active'"
                    [active]="active === 'requests'"
                    (click)="active = 'requests'"
                >
                    Requests
                </a>
                <a
                    mat-tab-link
                    [routerLink]="['/asset-manager', 'list', 'items']"
                    [active]="active === 'items'"
                    (click)="active = 'items'"
                >
                    Assets
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
export class AssetListingComponent {
    public active = 'requests';

    constructor(private _router: Router) {}

    public ngOnInit() {
        this.active = this._router.url.includes('requests')
            ? 'requests'
            : 'items';
    }
}
