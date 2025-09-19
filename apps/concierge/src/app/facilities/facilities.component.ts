import { Component } from '@angular/core';
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
                background-color: var(--b1);
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
export class FacilitiesComponent {}
