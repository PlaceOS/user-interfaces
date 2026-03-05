import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { startOfMinute } from 'date-fns';

@Component({
    selector: '[app-checkin]',
    template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div class="absolute inset-0 flex items-center p-8 print:hidden">
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
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
    imports: [CommonModule, RouterModule, AuthenticatedImageDirective],
})
export class CheckinComponent {
    public readonly background = settingSignal('welcome_background');
    public readonly hide_building_image = settingSignal('hide_building_image');

    public get now() {
        return startOfMinute(new Date());
    }
}
