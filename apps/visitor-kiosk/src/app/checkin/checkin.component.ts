import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { minuteClock } from '../minute-clock';

@Component({
    selector: '[app-checkin]',
    template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 flex items-center p-8 print:static print:block print:p-0"
        >
            <img
                auth
                alt=""
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 print:hidden"
            />
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div
                class="absolute top-4 right-4 text-2xl text-white print:hidden"
            >
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.webp"
                    alt=""
                    class="absolute right-0 bottom-0 w-[60%] print:hidden"
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
    public readonly now = minuteClock();
}
