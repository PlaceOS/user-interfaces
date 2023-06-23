import { Component } from '@angular/core';

@Component({
    selector: '[app-survey]',
    template: `
        <sidebar></sidebar>
        <main
            class="relative w-full flex flex-col bg-gray-200 dark:bg-neutral-600"
        >
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                background-color: #fff;
            }
        `,
    ],
})
export class SurveyComponent {}
