import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { startOfMinute } from 'date-fns';

@Component({
    selector: '[app-checkin]',
    template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 flex items-center p-8 print:hidden"
            [style.background-image]="'url(' + background + ')'"
        >
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
            <img
                src="assets/img/building.png"
                class="absolute right-0 bottom-0 w-[60%]"
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
    imports: [CommonModule, RouterModule],
})
export class CheckinComponent {
    private _settings = inject(SettingsService);

    public get now() {
        return startOfMinute(new Date());
    }

    public get background() {
        return this._settings.get('app.welcome_background');
    }
}
