import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[app-reports]',
    template: `
        <sidebar class="h-full screen-only"></sidebar>
        <main
            class="relative overflow-hidden flex flex-col flex-1 w-1/2 h-full bg-base-200"
        >
            <router-outlet></router-outlet>
            <div
                reports-menu
                *ngIf="path === 'reports'"
                class="absolute inset-0 screen-only"
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
})
export class ReportsComponent {
    public get path() {
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    }

    constructor(private _router: Router) {}
}
