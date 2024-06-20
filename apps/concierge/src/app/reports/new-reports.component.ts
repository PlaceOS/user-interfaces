import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[app-new-reports]',
    template: `
        <app-topbar class="screen-only"></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar class="screen-only"></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full relative">
                <router-outlet></router-outlet>
                <div
                    reports-menu
                    *ngIf="path === 'reports'"
                    class="absolute inset-0 screen-only"
                ></div>
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

            main > *:not(router-outlet) {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class NewReportsComponent {
    public get path() {
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    }

    constructor(private _router: Router) {}
}
