import { Component } from '@angular/core';
import { LevelManagementService } from './level-management.service';

@Component({
    selector: '[app-level-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between mb-2 px-8 pt-4 pb-8"
                >
                    <h2 class="text-2xl font-medium">Level Management</h2>
                    <button btn matRipple (click)="newLevel()" class="w-40">
                        Add Level
                    </button>
                </header>
                <level-list
                    class="block w-full relative flex-1 h-1/2"
                ></level-list>
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
export class LevelManagerComponent {
    public readonly newLevel = () => this._manager.editLevel();

    constructor(private _manager: LevelManagementService) {}
}
