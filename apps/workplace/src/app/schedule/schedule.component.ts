import { Component } from '@angular/core';

@Component({
    selector: 'schedule',
    template: `
        <topbar></topbar>
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <router-outlet></router-outlet>
            </main>
        </div>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class ScheduleComponent {}
