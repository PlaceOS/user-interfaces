import { Component } from '@angular/core';

@Component({
    selector: '[app-facilities]',
    template: `
        <sidebar></sidebar>
        <main class="relative flex w-full flex-col bg-base-200">
            <facilities-topbar></facilities-topbar>
            <div class="flex flex-1">
                <facilities-map class="h-full flex-1"></facilities-map>
                <facilities-status class="h-full space-y-4"></facilities-status>
            </div>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            facilities-map {
                min-width: 50%;
            }
        `,
    ],
    standalone: false,
})
export class FacilitiesComponent {}
