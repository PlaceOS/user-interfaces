import { Component } from '@angular/core';

@Component({
    selector: '[asset-manager]',
    template: `
        <sidebar></sidebar>
        <main class="relative w-1/2 flex-1 bg-base-100 overflow-hidden">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                background: var(--b1);
            }
        `,
    ],
})
export class AssetManagerComponent {}
