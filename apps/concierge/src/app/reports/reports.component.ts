import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[app-new-reports]',
    template: `
        <app-topbar class="screen-only" />
        <div class="flex h-px flex-1">
            <app-sidebar class="screen-only"></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
                @if (path === 'reports') {
                    <div
                        reports-menu
                        class="screen-only absolute inset-0"
                    ></div>
                }
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
    standalone: false,
})
export class ReportsComponent {
    private _router = inject(Router);

    public get path() {
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    }
}
