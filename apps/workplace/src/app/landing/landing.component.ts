import { Component } from '@angular/core';
import { currentUser, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { startOfMinute } from 'date-fns';

@Component({
    selector: 'app-landing',
    template: `
        <topbar class="z-10" *ngIf="!hide_nav"></topbar>
        <div class="flex flex-1 h-1/2 bg-base-200">
            <div
                class="relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-base-100 border-r border-base-300"
                *ngIf="!hide_landing_sidebar"
            >
                <div class="flex items-center divide-x divide-base-200">
                    <button
                        matRipple
                        class="flex-1 font-medium p-2 flex items-center justify-center space-x-2"
                        [class.border-b]="tab !== 'people'"
                        [class.border-base-200]="tab !== 'people'"
                        [class.bg-base-200]="tab !== 'people'"
                        [class.bg-opacity-5]="tab !== 'people'"
                        (click)="tab = 'people'"
                        *ngIf="!hide_colleagues"
                    >
                        <app-icon>people</app-icon>
                        <div>
                            {{ 'WPA.COLLEAGUES' | uppercase | translate }}
                        </div>
                    </button>
                    <button
                        matRipple
                        class="flex-1 font-medium p-2 flex items-center justify-center space-x-2"
                        [class.border-b]="tab !== 'fav'"
                        [class.border-base-200]="tab !== 'fav'"
                        [class.bg-base-200]="tab !== 'fav'"
                        [class.bg-opacity-5]="tab !== 'fav'"
                        (click)="tab = 'fav'"
                    >
                        <app-icon>favorite</app-icon>
                        <div>{{ 'WPA.FAVOURITES' | translate }}</div>
                    </button>
                </div>
                <div class="flex-1 w-full h-1/2">
                    <landing-colleagues
                        *ngIf="tab === 'people' && !hide_colleagues"
                    ></landing-colleagues>
                    <landing-favourites
                        *ngIf="tab === 'fav' || hide_colleagues"
                    ></landing-favourites>
                </div>
            </div>
            <div class="flex-1 h-full w-1/2 sm:px-4 overflow-auto z-0">
                <header
                    class="sticky top-0 z-50 bg-ternary px-4 sm:rounded-b flex items-center justify-between overflow-hidden"
                >
                    <div class="">
                        <div class="sm:text-xl font-medium">
                            {{
                                'WPA.WELCOME_MESSAGE'
                                    | translate: { name: user?.name }
                            }}
                        </div>
                        <div date class="text-sm sm:text-base">
                            {{ date | date: 'fullDate' }}
                        </div>
                        <div
                            class="text-sm sm:text-base"
                            *ngIf="building?.address || building?.name"
                        >
                            {{
                                building.address ||
                                    building.display_name ||
                                    building.name
                            }}
                        </div>
                    </div>
                    <div class="h-32 pt-4">
                        <img src="assets/img/landing.svg" />
                    </div>
                </header>
                <landing-quick-links
                    *ngIf="show_quick_links"
                ></landing-quick-links>
                <landing-availability></landing-availability>
                <div
                    class="mx-4 w-[calc(100%-2rem)] h-px bg-base-200 mb-2"
                ></div>
                <landing-upcoming></landing-upcoming>
            </div>
        </div>
        <footer-menu *ngIf="!hide_nav"></footer-menu>
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
        `,
    ],
})
export class LandingComponent {
    public time: number;
    public tab = 'people';

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    public get date() {
        return startOfMinute(this.time || Date.now());
    }

    public get user() {
        return currentUser();
    }

    public get building() {
        return this._org.building;
    }

    public get hide_landing_sidebar() {
        return this._settings.get('app.general.hide_landing_sidebar');
    }

    public get hide_colleagues() {
        return this._settings.get('app.general.hide_colleagues');
    }

    public get show_quick_links() {
        return this._settings.get('app.general.show_quick_links');
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}
}
