import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';

const DEFAULT_FEATURES = ["desks", "spaces", "catering", "contact-tracing"];

@Component({
    selector: 'reports-menu,[reports-menu]',
    template: `
        <a
            [routerLink]="['/reports', 'desks']"
            matRipple
            *ngIf="features.includes('desks')"
            class="h-64 w-64 m-4 p-4 flex flex-col items-center justify-center bg-white rounded shadow hover:bg-gray-100"
        >
            <app-icon class="text-8xl">room</app-icon>
            <h3 class="text-xl font-bold mb-4">Desks</h3>
            <div class="flex items-center">
                <p>View Report</p>
                <app-icon class="ml-2">chevron_right</app-icon>
            </div>
        </a>
        <a
            [routerLink]="['/reports', 'spaces']"
            matRipple
            *ngIf="features.includes('spaces')"
            class="h-64 w-64 m-4 p-4 flex flex-col items-center justify-center bg-white rounded shadow hover:bg-gray-100"
        >
            <app-icon class="text-8xl">meeting_room</app-icon>
            <h3 class="text-xl font-bold mb-4">Rooms</h3>
            <div class="flex items-center">
                <p>View Report</p>
                <app-icon class="ml-2">chevron_right</app-icon>
            </div>
        </a>
        <a
            [routerLink]="['/reports', 'catering']"
            matRipple
            *ngIf="features.includes('catering')"
            class="h-64 w-64 m-4 p-4 flex flex-col items-center justify-center bg-white rounded shadow hover:bg-gray-100"
        >
            <app-icon class="text-8xl">room_service</app-icon>
            <h3 class="text-xl font-bold mb-4">Catering</h3>
            <div class="flex items-center">
                <p>View Report</p>
                <app-icon class="ml-2">chevron_right</app-icon>
            </div>
        </a>
        <a
            [routerLink]="['/reports', 'contact-tracing']"
            matRipple
            *ngIf="features.includes('contact-tracing')"
            class="h-64 w-64 m-4 p-4 flex flex-col items-center justify-center bg-white rounded shadow hover:bg-gray-100"
        >
            <app-icon class="text-8xl">connect_without_contact</app-icon>
            <h3 class="text-xl font-bold mb-4">Contact Tracing</h3>
            <div class="flex items-center">
                <p>View Report</p>
                <app-icon class="ml-2">chevron_right</app-icon>
            </div>
        </a>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--bg);
            }
        `,
    ],
})
export class ReportsMenuComponent {

    public get features() {
        return this._settings.get('app.reports.features') || DEFAULT_FEATURES;
    }

    constructor(private _settings: SettingsService) {}
}
