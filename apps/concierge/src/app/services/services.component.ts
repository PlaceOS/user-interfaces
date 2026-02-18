import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';

@Component({
    selector: 'app-services',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                @if (!is_form()) {
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'packages']"
                            [active]="path()?.includes('packages')"
                        >
                            Event Packages
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'spaces']"
                            [active]="path()?.includes('spaces')"
                        >
                            Spaces & AV
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'additional']"
                            [active]="path()?.includes('additional')"
                        >
                            Additional Services
                        </a>
                    </nav>
                }
                <mat-tab-nav-panel
                    #tabPanel
                    class="flex-1 overflow-auto"
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
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
    imports: [
        RouterModule,
        MatTabsModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
    ],
})
export class ServicesComponent {
    private _router = inject(Router);
    public path = signal(location.hash);
    public is_form = computed(() => this.path()?.includes('/form'));

    constructor() {
        this._router.events.subscribe(() => {
            this.path.set(location.hash);
        });
    }
}
