import { Component } from '@angular/core';

@Component({
    selector: '[app-weekview]',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden">
            <week-view-topbar></week-view-topbar>
            <week-view-timeline></week-view-timeline>
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
export class WeekViewComponent {}
