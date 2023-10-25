import { Component } from '@angular/core';

@Component({
    selector: '[app-room-manager]',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex flex-col">
            <room-manager-topbar class="block w-full"></room-manager-topbar>
            <room-list class="block w-full relative flex-1 h-1/2"></room-list>
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
export class RoomManagerComponent {}
