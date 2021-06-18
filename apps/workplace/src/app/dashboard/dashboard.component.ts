import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { format } from 'date-fns';

@Component({
    selector: '[dashboard]',
    template: `
        <topbar></topbar>
        <div class="flex-1 flex sm:flex-row flex-col-reverse h-1/2">
            <nav-menu class="relative z-10"></nav-menu>
            <div
                class="relative z-0 flex flex-col flex-1 h-1/2 sm:h-auto overflow-hidden"
            >
                <div
                    class="top relative flex flex-col justify-center text-white px-12 py-4"
                >
                    <div class="row location">
                        {{ bld?.display_name || bld?.name || 'Sydney' }}
                    </div>
                    <div class="row text-2xl text-bold uppercase">
                        {{ datetime }}
                    </div>
                </div>
                <main
                    class="flex flex-1 px-8 flex-wrap overflow-auto h-px sm:h-auto"
                >
                    <a-dashboard-availability
                        class="flex-1 min-w-64"
                    ></a-dashboard-availability>
                    <a-dashboard-upcoming
                        class="flex-1 min-w-64"
                    ></a-dashboard-upcoming>
                    <a-dashboard-contacts
                        class="flex-1 min-w-64"
                    ></a-dashboard-contacts>
                </main>
            </div>
        </div>
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
                background: #f0f0f0;
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
})
export class DashboardComponent {
    /** Whether to show overlay menu */
    public show_menu: boolean;

    public get bld() {
        return this._org.building;
    }

    public get tiles() {
        return this._settings.get('app.home.tiles') || [];
    }

    public get datetime() {
        return format(new Date(), 'EEEE, h:mma');
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
