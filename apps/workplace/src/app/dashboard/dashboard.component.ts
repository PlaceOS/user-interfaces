import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: '[dashboard]',
    template: `
        <topbar></topbar>
        <div class="flex h-1/2 flex-1 flex-col-reverse bg-base-200 sm:flex-row">
            <div
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <main
                    class="flex h-px flex-1 flex-wrap overflow-auto px-0 sm:h-auto sm:px-8"
                >
                    <a-dashboard-availability
                        *ngIf="!hide_availability"
                        class="min-w-64 flex-1"
                    ></a-dashboard-availability>
                    <a-dashboard-upcoming
                        class="min-w-64 flex-1"
                    ></a-dashboard-upcoming>
                    <a-dashboard-contacts
                        *ngIf="!hide_contacts"
                        class="min-w-64 flex-1"
                    ></a-dashboard-contacts>
                </main>
            </div>
        </div>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }

            .top {
                background-color: #007ac8;
            }

            a[button].tile {
                flex: 1;
                border-radius: 0;
                background-color: #fff;
                color: rgba(0, 0, 0, 0.85);
                border: none;
                border-right: 1px solid #ccc;
            }

            a[button].tile:last-child {
                border: none;
            }
        `,
    ],
    standalone: false,
})
export class DashboardComponent {
    constructor(private _settings: SettingsService) {}

    public get hide_availability() {
        return this._settings.get('app.hide_availability') !== false;
    }

    public get hide_contacts() {
        return this._settings.get('app.hide_contacts') !== false;
    }
}
