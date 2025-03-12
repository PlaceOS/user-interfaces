import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { PointsStateService } from './points-state.service';

@Component({
    selector: 'placeos-new-points',
    template: `
        <app-topbar></app-topbar>
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <points-topbar class="relative z-10">
                    <button
                        *ngIf="page === 'assets'"
                        btn
                        matRipple
                        class="w-40"
                        (click)="newAsset()"
                    >
                        {{ 'APP.CONCIERGE.POINTS_ASSETS_ADD' | translate }}
                    </button>
                </points-topbar>
                <div class="mb-4 px-8">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        <a
                            mat-tab-link
                            [routerLink]="['/points-management', 'overview']"
                            [active]="page === 'overview'"
                        >
                            {{
                                'APP.CONCIERGE.POINTS_TAB_OVERVIEW' | translate
                            }}
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/points-management', 'assets']"
                            [active]="page === 'assets'"
                        >
                            {{ 'APP.CONCIERGE.POINTS_TAB_ASSETS' | translate }}
                        </a>
                    </nav>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 w-full flex-1 overflow-auto px-8"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
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
        `,
    ],
    standalone: false,
})
export class PointsComponent extends AsyncHandler implements OnInit {
    /** Page being displayed */
    public page: string;

    public readonly newAsset = () => this._state.newAsset();

    constructor(
        private _state: PointsStateService,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._router.events.subscribe(() => {
                const url_parts = this._router.url?.split('/') || [''];
                this.page = url_parts[url_parts.length - 1];
            }),
        );
        const parts = this._router.url?.split('/') || [''];
        this.page = parts[parts.length - 1];
    }
}
