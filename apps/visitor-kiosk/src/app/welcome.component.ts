import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: 'app-welcome',
    template: `
        <div class="absolute inset-0 p-8 flex items-center">
            <img
                [src]="background"
                class="absolute min-h-[100%] min-w-[100%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <div class="flex flex-col justify-center space-y-8 z-10 w-[60%]">
                <h3 class="mb-4 text-white text-6xl space-y-2">
                    <p>Welcome to Place<span class="text-primary">OS</span></p>
                    <p>Self Service Kiosk</p>
                </h3>
                <div class="flex items-center space-x-4 font-medium">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkin']"
                        class="base w-40"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">Check-in</div>
                            <app-icon class="text-2xl">chevron_right</app-icon>
                        </div>
                    </a>
                    <a
                        *ngIf="level"
                        btn
                        matRipple
                        [routerLink]="['/explore', level]"
                        class="base w-40"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">Explore</div>
                            <app-icon class="text-2xl">place</app-icon>
                        </div>
                    </a>
                </div>
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
            a {
                height: 3.5rem;
                background-color: rgba(255, 255, 255, 0.25);
            }
        `,
    ],
})
export class WelcomeComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public now = Date.now();
    /** Level to initially load on explore */
    public level = '';

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
        this.interval('time', () => (this.now = Date.now()), 30 * 1000);
        this.subscription(
            'level',
            this._settings
                .listen('KIOSK.level')
                .subscribe((lvl) => (this.level = lvl))
        );
        this.level = localStorage?.getItem('KIOSK.level');
        this.subscription(
            'route.params',
            this.route.paramMap.subscribe((params) => {
                if (params.has('level')) {
                    this.level = params.get('level');
                }
            })
        );
    }
}
