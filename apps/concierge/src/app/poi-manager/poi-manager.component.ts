import { Component } from '@angular/core';
import { POIManagementService } from './poi-management.service';

@Component({
    selector: '[app-poi-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between mb-2 px-4 py-8"
                >
                    <h2 class="text-2xl font-medium">
                        Point of Interest Management
                    </h2>
                    <button btn matRipple (click)="new()">
                        Add Point of Interest
                    </button>
                </header>
                <poi-list class="block w-full relative flex-1 h-1/2"></poi-list>
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
export class POIManagerComponent {
    public readonly new = () => this._state.editPointOfInterest();

    constructor(private readonly _state: POIManagementService) {}
}
