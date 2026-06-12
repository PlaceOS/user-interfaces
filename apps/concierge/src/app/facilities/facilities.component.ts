import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { FacilitiesMapComponent } from './facilities-map.component';
import { FacilitiesStatusComponent } from './facilities-status.component';
import { FacilitiesTopbarComponent } from './facilities-topbar.component';

@Component({
    selector: '[app-new-facilities]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <facilities-topbar></facilities-topbar>
                <div class="flex flex-1">
                    <facilities-map class="h-full flex-1"></facilities-map>
                    <facilities-status
                        class="h-full space-y-4"
                    ></facilities-status>
                </div>
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

            facilities-map {
                min-width: 50%;
            }
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        FacilitiesTopbarComponent,
        FacilitiesMapComponent,
        FacilitiesStatusComponent,
    ],
})
export class FacilitiesComponent {
    private _router = inject(Router);

    private readonly _url = toSignal(
        this._router.events.pipe(startWith(null)),
        {
            initialValue: null,
        },
    );

    public readonly path = computed(() => {
        this._url();
        const parts = this._router.url.split('/');
        return parts[parts.length - 1].split('?')[0];
    });
}
