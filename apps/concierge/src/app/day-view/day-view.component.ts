import { Component } from '@angular/core';

@Component({
    selector: '[app-dayview]',
    template: `
        <sidebar class="h-full"></sidebar>
        <main
            class="relative overflow-hidden flex flex-col flex-1 w-1/2 h-full"
        >
            <dayview-topbar></dayview-topbar>
            <dayview-timeline></dayview-timeline>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                background: var(--bg);
            }
        `,
    ],
})
export class DayViewComponent {}
