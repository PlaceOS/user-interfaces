import { Component } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';

@Component({
    selector: '[app-checkin]',
    template: `
        <a-topbar-header class="w-full"></a-topbar-header>
        <div
            class="flex-1 w-full bg-center bg-cover relative"
            [style.background-image]="'url(' + background + ')'"
        >
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class CheckinComponent {
    public get background() {
        return this._settings.get('app.home.background');
    }

    constructor(private _settings: SettingsService) {}
}
