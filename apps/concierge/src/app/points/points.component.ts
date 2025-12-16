import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { PointsStateService } from './points-state.service';
import { PointsTopbarComponent } from './points-topbar.component';

@Component({
    selector: 'placeos-new-points',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <points-topbar class="relative z-10">
                    @if (page === 'assets') {
                        <button btn matRipple class="w-40" (click)="newAsset()">
                            {{ 'APP.CONCIERGE.POINTS_ASSETS_ADD' | translate }}
                        </button>
                    }
                </points-topbar>
                <div class="mb-4 px-8">
                    <div class="bg-base-200 overflow-hidden rounded-sm">
                        <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/points-management',
                                    'overview',
                                ]"
                                [active]="page === 'overview'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_OVERVIEW'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="['/points-management', 'assets']"
                                [active]="page === 'assets'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_ASSETS'
                                        | translate
                                }}
                            </a>
                        </nav>
                    </div>
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
                background-color: var(--base-100);
            }
        `,
    ],
    imports: [
        MatTabsModule,
        RouterModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        PointsTopbarComponent,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class PointsComponent extends AsyncHandler implements OnInit {
    private _state = inject(PointsStateService);
    private _router = inject(Router);

    /** Page being displayed */
    public page: string;

    public readonly newAsset = () => this._state.newAsset();

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
