import { Component } from '@angular/core';
import { UrlManagementService } from './url-management.service';

@Component({
    selector: '[app-short-url-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 py-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.URLS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.URLS_ADD' | translate }}
                    </button>
                </header>
                <short-url-list
                    class="relative block h-1/2 w-full flex-1"
                ></short-url-list>
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

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `,
    ],
    standalone: false,
})
export class UrlManagerComponent {
    public readonly new = () => this._state.editURL();

    constructor(private readonly _state: UrlManagementService) {}
}
