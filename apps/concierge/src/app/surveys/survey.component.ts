import { Component } from '@angular/core';

@Component({
    selector: '[app-survey]',
    template: `
        <sidebar></sidebar>
        <main class="relative w-full flex flex-col bg-base-200">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }
        `,
    ],
})
export class SurveyComponent {}
