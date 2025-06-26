import { Component, inject } from '@angular/core';
import { BuildingManagementService } from './building-management.service';

@Component({
    selector: '[app-building-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-8 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.BUILDINGS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="newBuilding()" class="w-40">
                        {{ 'APP.CONCIERGE.BUILDINGS_ADD' | translate }}
                    </button>
                </header>
                <building-list
                    class="relative block h-1/2 w-full flex-1"
                ></building-list>
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
export class BuildingManagerComponent {
    private _state = inject(BuildingManagementService);

    public readonly newBuilding = () => this._state.editBuilding();
}
