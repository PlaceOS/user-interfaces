import { Component } from '@angular/core';

@Component({
    selector: 'app-facilities',
    template: `
        <sidebar></sidebar>
        <main class="relative">
            <facilities-topbar></facilities-topbar>
            <div class="flex flex-1">
                <facilities-map class="flex-1 h-full"></facilities-map>
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

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }

            facilities-map {
                min-width: 50%;
            }
        `
    ],
})
export class FacilitiesComponent {}
