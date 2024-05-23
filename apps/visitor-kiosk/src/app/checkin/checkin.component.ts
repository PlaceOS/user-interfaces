import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { startOfMinute } from 'date-fns';

@Component({
    selector: '[app-checkin]',
    template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 p-8 flex items-center"
            [style.background-image]="'url(' + background + ')'"
        >
            <div class="flex flex-col justify-center space-y-8 z-10 w-full">
                <router-outlet></router-outlet>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
            <img
                src="assets/img/building.png"
                class="absolute w-[60%] bottom-0 right-0"
            />
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
    public get now() {
        return startOfMinute(new Date());
    }

    public get background() {
        return this._settings.get('app.home.background');
    }

    constructor(private _settings: SettingsService) {}
}
