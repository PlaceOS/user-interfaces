import { Component } from '@angular/core';

@Component({
    selector: '[app-building-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header class="flex items-center justify-between mb-2 p-8">
                    <h2 class="text-2xl font-medium">Building Management</h2>
                    <button btn matRipple>Add Building</button>
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
                background-color: #fff;
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
export class BuildingManagerComponent {}
