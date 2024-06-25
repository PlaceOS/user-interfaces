import { Component } from '@angular/core';
import { UrlManagementService } from './url-management.service';

@Component({
    selector: '[app-short-url-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between mb-2 px-8 py-4"
                >
                    <h2 class="text-2xl font-medium">Short URL Management</h2>
                    <button btn matRipple (click)="new()">Add Short URL</button>
                </header>
                <short-url-list
                    class="block w-full relative flex-1 h-1/2"
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
})
export class UrlManagerComponent {
    public readonly new = () => this._state.editURL();

    constructor(private readonly _state: UrlManagementService) {}
}
