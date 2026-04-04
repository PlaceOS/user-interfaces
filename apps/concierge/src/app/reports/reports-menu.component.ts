import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';

const DEFAULT_FEATURES = ['desks', 'spaces', 'catering', 'contact-tracing'];

@Component({
    selector: 'reports-menu,[reports-menu]',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex items-center justify-center overflow-auto"
        >
            <div class="grid w-full justify-items-center">
                @if (features().includes('desks')) {
                    <a
                        [routerLink]="['/reports', 'desks']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">room</icon>
                        <h3 class="mb-4 text-xl font-bold">Desks</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('spaces')) {
                    <a
                        [routerLink]="['/reports', 'bookings']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">meeting_room</icon>
                        <h3 class="mb-4 text-xl font-bold">Rooms</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('catering')) {
                    <a
                        [routerLink]="['/reports', 'catering']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">room_service</icon>
                        <h3 class="mb-4 text-xl font-bold">Catering</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @if (features().includes('contact-tracing')) {
                    <a
                        [routerLink]="['/reports', 'contact-tracing']"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">connect_without_contact</icon>
                        <h3 class="mb-4 text-xl font-bold">Contact Tracing</h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
                        </div>
                    </a>
                }
                @for (report of custom_reports(); track report) {
                    <a
                        [routerLink]="['/reports', report.id]"
                        matRipple
                        class="border-base-200 bg-base-100 flex h-64 w-64 flex-col items-center justify-center rounded-sm border p-4 shadow-sm hover:opacity-80"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">
                            {{ report.name }}
                        </h3>
                        <div class="flex items-center">
                            <p>View Report</p>
                            <icon class="ml-2">chevron_right</icon>
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
                gap: 1rem;
            }
        `,
    ],
    imports: [RouterModule, IconComponent, MatRippleModule],
})
export class ReportsMenuComponent {
    private _settings = inject(SettingsService);

    public readonly custom_reports = this._settings.signal(
        'app.custom_reports',
        [],
        true,
    );
    public readonly features = this._settings.signal(
        'app.reports.features',
        DEFAULT_FEATURES,
        true,
    );
}
