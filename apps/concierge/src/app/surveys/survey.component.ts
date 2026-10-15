import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';

@Component({
    selector: 'app-survey',
    template: `
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
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
                background-color: var(--base-100);
            }
        `,
    ],
    imports: [ApplicationSidebarComponent, RouterModule],
})
export class SurveyComponent {}
