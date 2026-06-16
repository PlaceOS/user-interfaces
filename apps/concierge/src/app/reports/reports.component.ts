import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { ReportsMenuComponent } from './reports-menu.component';

@Component({
    selector: '[app-new-reports]',
    template: `
        <app-topbar class="screen-only" />
        <div class="flex h-px flex-1">
            <app-sidebar class="screen-only"></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
                @if (path() === 'reports') {
                    <div
                        reports-menu
                        class="screen-only absolute inset-0"
                    ></div>
                }
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

            main > *:not(router-outlet) {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        RouterModule,
        ReportsMenuComponent,
    ],
})
export class ReportsComponent extends AsyncHandler {
    private _router = inject(Router);

    private readonly _url = signal<unknown>(null);

    public readonly path = computed(() => {
        this._url();
        const parts = this._router.url.split('/');
        return parts[parts.length - 1];
    });

    constructor() {
        super();
        this.subscription(
            'router',
            this._router.events.subscribe((event) => this._url.set(event)),
        );
    }
}
