import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

const DEFAULT_FEATURES = [
    'desks',
    'spaces',
    'parking',
    'lockers',
    'catering',
    'contact-tracing',
    'assets',
    'visitors',
];

const REPORT_CONFIGS = [
    { id: 'desks', route: 'desks', icon: 'room', name: 'Desks' },
    { id: 'spaces', route: 'bookings', icon: 'meeting_room', name: 'Rooms' },
    {
        id: 'catering',
        route: 'catering',
        icon: 'room_service',
        name: 'Catering',
    },
    {
        id: 'contact-tracing',
        route: 'contact-tracing',
        icon: 'connect_without_contact',
        name: 'Contact Tracing',
    },
    {
        id: 'parking',
        route: 'parking',
        icon: 'local_parking',
        name: 'Parking',
    },
    { id: 'lockers', route: 'lockers', icon: 'lock', name: 'Lockers' },
    { id: 'assets', route: 'assets', icon: 'inventory_2', name: 'Assets' },
    { id: 'visitors', route: 'visitors', icon: 'badge', name: 'Visitors' },
];

@Component({
    selector: 'reports-menu,[reports-menu]',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-auto bg-base-200">
            <div class="p-8">
                <h1 class="mb-2 text-3xl font-bold">
                    {{ 'APP.CONCIERGE.MENU_REPORTS' | translate }}
                </h1>
                <p class="text-base-content/60">
                    {{ 'APP.CONCIERGE.REPORTS_DESCRIPTION' | translate }}
                </p>
            </div>
            <div class="grid w-full p-8 pt-0">
                @for (report of available_reports; track report.id) {
                    <a
                        [routerLink]="['/reports', report.route]"
                        matRipple
                        class="flex h-64 min-w-64 flex-col items-center justify-center rounded-xl border border-base-300 bg-base-100 p-4 shadow hover:border-info"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">{{ report.name }}</h3>
                        <div class="flex items-center">
                            <p class="underline">View Report</p>
                            <icon class=" text-2xl">chevron_right</icon>
                        </div>
                    </a>
                }
                @for (report of custom_reports; track report.id) {
                    <a
                        [routerLink]="['/reports', report.id]"
                        matRipple
                        class="flex h-64 min-w-64 flex-col items-center justify-center rounded-xl border border-base-300 bg-base-100 p-4 shadow hover:border-info"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">
                            {{ report.name }}
                        </h3>
                        <div class="flex items-center">
                            <p class="underline">View Report</p>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                }
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
                gap: 0.75rem;
                max-width: 100%;
            }
        `,
    ],
    imports: [RouterModule, IconComponent, MatRippleModule, TranslatePipe],
})
export class ReportsMenuComponent {
    private _settings = inject(SettingsService);

    public get custom_reports() {
        return this._settings.get('app.custom_reports') || [];
    }

    public get features() {
        return this._settings.get('app.reports.features') || DEFAULT_FEATURES;
    }

    public get available_reports() {
        return REPORT_CONFIGS.filter((report) =>
            this.features.includes(report.id),
        );
    }
}
