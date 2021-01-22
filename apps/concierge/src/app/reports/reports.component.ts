import { Component } from '@angular/core';

@Component({
    selector: '[app-reports]',
    template: `
        <sidebar class="h-full"></sidebar>
        <main class="relative overflow-hidden flex flex-col flex-1 w-1/2 h-full">
            <reports-options></reports-options>
            <div class="flex-1 h-1/2 w-full overflow-auto">
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
export class ReportsComponent {}
