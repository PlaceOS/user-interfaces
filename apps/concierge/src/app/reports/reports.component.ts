import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[app-reports]',
    template: `
        <sidebar class="h-full"></sidebar>
        <main class="relative overflow-hidden flex flex-col flex-1 w-1/2 h-full">
            <reports-options></reports-options>
            <div class="flex-1 h-1/2 w-full overflow-auto">
                <router-outlet></router-outlet>
            </div>
            <div reports-menu *ngIf="path === 'reports'" class="absolute inset-0"></div>
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
export class ReportsComponent {

    public get path() {
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    }

    constructor(private _router: Router) {

    }
}
