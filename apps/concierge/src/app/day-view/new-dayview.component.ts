import { Component } from '@angular/core';

@Component({
    selector: '[app-new-dayview]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="relative flex flex-col flex-1 w-1/2 h-full">
                <room-bookings></room-bookings>
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
        `,
    ],
})
export class NewDayViewComponent {}
