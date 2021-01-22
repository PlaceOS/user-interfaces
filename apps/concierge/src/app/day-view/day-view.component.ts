import { Component } from '@angular/core';

@Component({
    selector: '[app-dayview]',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden">
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
        `
    ],
})
export class DayViewComponent {}
