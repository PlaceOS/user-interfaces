import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { PointsStateService } from './points-state.service';

@Component({
    selector: 'placeos-new-points',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <points-topbar class="relative z-10">
                    <button
                        *ngIf="page === 'assets'"
                        btn
                        matRipple
                        (click)="newAsset()"
                    >
                        New Asset
                    </button>
                </points-topbar>
                <nav mat-tab-nav-bar>
                    <a
                        mat-tab-link
                        [routerLink]="['/entertainment', 'points', 'overview']"
                        [active]="page === 'overview'"
                    >
                        Overview
                    </a>
                    <a
                        mat-tab-link
                        [routerLink]="['/entertainment', 'points', 'assets']"
                        [active]="page === 'assets'"
                    >
                        Assets
                    </a>
                </nav>
                <div class="flex-1 w-full h-1/2 overflow-auto">
                    <router-outlet></router-outlet>
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
                background-color: #fff;
            }
        `,
    ],
})
export class NewPointsComponent extends AsyncHandler implements OnInit {
    /** Page being displayed */
    public page: string;

    public readonly newAsset = () => this._state.newAsset();

    constructor(private _state: PointsStateService, private _router: Router) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._router.events.subscribe(() => {
                const url_parts = this._router.url?.split('/') || [''];
                this.page = url_parts[url_parts.length - 1];
            })
        );
        const parts = this._router.url?.split('/') || [''];
        this.page = parts[parts.length - 1];
    }
}
