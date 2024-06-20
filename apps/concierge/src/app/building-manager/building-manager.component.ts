import { Component } from '@angular/core';
import { Building } from '@placeos/organisation';
import { BuildingManagementService } from './building-management.service';

@Component({
    selector: '[app-building-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between mb-2 px-8 pt-4 pb-8"
                >
                    <h2 class="text-2xl font-medium">Building Management</h2>
                    <button btn matRipple (click)="newBuilding()" class="w-40">
                        Add Building
                    </button>
                </header>
                <building-list
                    class="block w-full relative flex-1 h-1/2"
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
})
export class BuildingManagerComponent {
    public readonly newBuilding = () => this._state.editBuilding();

    constructor(private _state: BuildingManagementService) {}
}
