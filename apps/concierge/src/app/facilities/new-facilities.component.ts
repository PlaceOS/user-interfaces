import { Component } from '@angular/core';

@Component({
    selector: '[app-new-facilities]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <facilities-topbar></facilities-topbar>
                <div class="flex flex-1">
                    <facilities-map class="flex-1 h-full"></facilities-map>
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
})
export class NewFacilitiesComponent {}
