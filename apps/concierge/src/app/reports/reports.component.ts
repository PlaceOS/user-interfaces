import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[app-reports]',
    template: `
        <sidebar class="screen-only h-full"></sidebar>
        <main
            class="relative flex h-full w-1/2 flex-1 flex-col overflow-hidden bg-base-200"
        >
            <router-outlet></router-outlet>
            <div
                reports-menu
                *ngIf="path === 'reports'"
                class="screen-only absolute inset-0"
            ></div>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            main > *:not(router-outlet) {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    standalone: false,
})
export class ReportsComponent {
    public get path() {
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    }

    constructor(private _router: Router) {}
}
