import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';

const DEFAULT_FEATURES = ['desks', 'spaces', 'catering', 'contact-tracing'];

@Component({
    selector: 'reports-menu,[reports-menu]',
    template: `
        <div
            class="absolute inset-0 flex items-center justify-center bg-base-200 overflow-auto"
        >
            <div class="grid w-full justify-items-center">
                <a
                    [routerLink]="['/reports', 'desks']"
                    matRipple
                    *ngIf="features.includes('desks')"
                    class="h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200"
                >
                    <app-icon class="text-8xl">room</app-icon>
                    <h3 class="text-xl font-bold mb-4">Desks</h3>
                    <div class="flex items-center">
                        <p>View Report</p>
                        <app-icon class="ml-2">chevron_right</app-icon>
                    </div>
                </a>
                <a
                    [routerLink]="['/reports', 'bookings']"
                    matRipple
                    *ngIf="features.includes('spaces')"
                    class="h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200"
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
                    class="h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200"
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
                    class="h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200"
                >
                    <app-icon class="text-8xl"
                        >connect_without_contact</app-icon
                    >
                    <h3 class="text-xl font-bold mb-4">Contact Tracing</h3>
                    <div class="flex items-center">
                        <p>View Report</p>
                        <app-icon class="ml-2">chevron_right</app-icon>
                    </div>
                </a>
                <a
                    [routerLink]="['/reports', report.id]"
                    matRipple
                    *ngFor="let report of custom_reports"
                    class="h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200"
                >
                    <app-icon class="text-8xl">{{ report.icon }}</app-icon>
                    <h3 class="text-xl font-bold mb-4">{{ report.name }}</h3>
                    <div class="flex items-center">
                        <p>View Report</p>
                        <app-icon class="ml-2">chevron_right</app-icon>
                    </div>
                </a>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: row !important;
                align-items: center;
                justify-content: center;
                background: inherit;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
                /* This is better for small screens, once min() is better supported */
                /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
                gap: 1rem;
            }
        `,
    ],
})
export class ReportsMenuComponent {
    public get custom_reports() {
        return this._settings.get('app.custom_reports') || [];
    }

    public get features() {
        return this._settings.get('app.reports.features') || DEFAULT_FEATURES;
    }

    constructor(private _settings: SettingsService) {}
}
