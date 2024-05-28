import { Component } from '@angular/core';
import { RegionManagementService } from './region-management.service';

@Component({
    selector: '[app-region-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between mb-2 px-8 pt-4 pb-8"
                >
                    <h2 class="text-2xl font-medium">Region Management</h2>
                    <button btn matRipple (click)="newRegion()" class="w-40">
                        Add Region
                    </button>
                </header>
                <region-list
                    class="block w-full relative flex-1 h-1/2"
                ></region-list>
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
export class RegionManagerComponent {
    public readonly newRegion = () => this._state.editRegion();

    constructor(private readonly _state: RegionManagementService) {}
}
