import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseClass, SettingsService } from '@user-interfaces/common';

@Component({
    selector: 'app-welcome',
    template: `
        <div
            class="absolute inset-0 bg-transparent z-50 flex flex-col items-center justify-center bg-center bg-cover"
            [style.background-image]="'url(' + background + ')'"
        >
            <a-topbar-header class="w-full"></a-topbar-header>
            <div
                class="flex flex-col flex-1 w-full items-center justify-center text-white bg-black bg-opacity-50 space-y-4"
            >
                <h3 class="text-2xl">Welcome to PlaceOS Self Service Kiosk</h3>
                <a
                    matRipple
                    [routerLink]="['/checkin']"
                    class="text-xl py-2 px-8 mt-4 border-2 border-white text-white w-40 whitespace-nowrap flex items-center justify-center"
                >
                    Check In
                </a>
                <a
                    *ngIf="level"
                    matRipple
                    [routerLink]="['/explore', level]"
                    class="text-xl py-2 px-8 mt-4 border-2 border-white text-white w-40 whitespace-nowrap flex items-center justify-center"
                >
                    Explore
                </a>
            </div>
        </div>
    `,
    styles: [`
        a {
            height: 3.5rem;
            background-color: rgba(255,255,255, .25);
        }
    `],
})
export class WelcomeComponent extends BaseClass implements OnInit, OnDestroy {
    /** Level to initially load on explore */
    public level: string = '';

    public get background() {
        return this._settings.get('app.home.background');
    }

    constructor(
        private route: ActivatedRoute,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this.route.paramMap.subscribe((params) => {
                if (params.has('level')) {
                    this.level = params.get('level');
                }
            })
        );
        this.subscription(
            'level',
            this._settings
                .listen('KIOSK.level')
                .subscribe((lvl) => (this.level = lvl))
        );
    }
}
