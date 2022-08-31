import { Component } from '@angular/core';
import { currentUser } from '@placeos/common';
import { startOfMinute } from 'date-fns';

@Component({
    selector: 'app-dashboard',
    template: `
        <topbar class="z-10" *ngIf="!hide_nav"></topbar>
        <div class="flex flex-1 h-1/2 bg-[#F8F8FA] dark:bg-zinc-700">
            <div
                class="relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-neutral-700 border-r border-gray-200 dark:border-neutral-500"
            >
                <div
                    class="flex items-center divide-x divide-gray-300"
                >
                    <button
                        matRipple
                        class="flex-1 font-medium p-4 flex items-center justify-center space-x-2"
                        [class.border-b]="tab !== 'people'"
                        [class.border-gray-300]="tab !== 'people'"
                        [class.bg-black]="tab !== 'people'"
                        [class.bg-opacity-5]="tab !== 'people'"
                        (click)="tab = 'people'"
                    >
                        <app-icon>people</app-icon>
                        <div>Colleages</div>
                    </button>
                    <button
                        matRipple
                        class="flex-1 font-medium p-4 flex items-center justify-center space-x-2"
                        [class.border-b]="tab !== 'fav'"
                        [class.border-gray-300]="tab !== 'fav'"
                        [class.bg-black]="tab !== 'fav'"
                        [class.bg-opacity-5]="tab !== 'fav'"
                        (click)="tab = 'fav'"
                    >
                        <app-icon>favorite</app-icon>
                        <div>Favourites</div>
                    </button>
                </div>
                <div class="flex-1 w-full h-1/2">
                    <landing-colleagues *ngIf="tab === 'people'"></landing-colleagues>
                    <landing-favourites *ngIf="tab === 'fav'"></landing-favourites>
                </div>
            </div>
            <div class="flex-1 h-full w-1/2 sm:px-4 overflow-auto z-0">
                <header
                    class="sticky top-0 z-50 bg-[#ECF0F3] dark:bg-neutral-800 px-4 rounded-b flex items-center justify-between overflow-hidden"
                >
                    <div class="">
                        <div class="sm:text-xl font-medium">
                            Hello {{ user?.name }},
                        </div>
                        <div date class="text-sm sm:text-base">
                            {{ date | date: 'fullDate' }}
                        </div>
                        <div class="text-sm sm:text-base">Sydney Australia</div>
                    </div>
                    <div class="h-32 pt-4">
                        <img src="assets/img/landing.svg" />
                    </div>
                </header>
                <landing-availability></landing-availability>
                <div
                    class="mx-4 w-[calc(100%-2rem)] h-px bg-gray-300 mb-2"
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
}
