import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { PointsStateService } from './points-state.service';

@Component({
    selector: 'placeos-points',
    template: `
        <sidebar></sidebar>
        <main class="relative w-full flex flex-col">
            <points-topbar class="relative z-10">
                <button *ngIf="page === 'assets'" mat-button (click)="newAsset()">New Asset</button>
            </points-topbar>
            <nav mat-tab-nav-bar>
                <a
                    mat-tab-link
                    [routerLink]="['/points', 'overview']"
                    [active]="page === 'overview'"
                >
                    Overview
                </a>
                <a
                    mat-tab-link
                    [routerLink]="['/points', 'assets']"
                    [active]="page === 'assets'"
                >
                    Assets
                </a>
            </nav>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <router-outlet></router-outlet>
            </div>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                background: var(--bg);
            }
        `,
    ],
})
export class PointsComponent extends BaseClass implements OnInit {
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
                const parts = this._router.url.split('/');
                this.page = parts[parts.length - 1];
                console.log('URL:', this.page);
            })
        );
        const parts = this._router.url.split('/');
        this.page = parts[parts.length - 1];
    }
}
