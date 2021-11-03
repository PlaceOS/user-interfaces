import { Component } from '@angular/core';

@Component({
    selector: '[asset-manager]',
    template: `
        <sidebar></sidebar>
        <main class="relative w-full flex-1 bg-gray-200">
            <router-outlet></router-outlet>
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
export class AssetManagerComponent {}
