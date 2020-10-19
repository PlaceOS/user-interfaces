import { Component } from '@angular/core';

@Component({
    selector: 'app-visitors',
    template: `
        <sidebar></sidebar>
        <main class="relative">

        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `
    ],
})
export class VisitorsComponent {}
