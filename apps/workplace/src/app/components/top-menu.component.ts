import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'top-menu',
    template: `
        <div
            menu
            class="flex items-center justify-center h-full w-full overflow-hidden"
        >
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                [routerLink]="['/dashboard']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Home"
                matTooltipPosition="below"
            >
                <app-icon class="text-xl">home</app-icon>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Home</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </a>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('spaces')"
                [routerLink]="['/book', 'spaces']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Book Room"
                matTooltipPosition="below"
            >
                <div class="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="currentColor"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"
                        />
                    </svg>
                </div>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Book Room</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('desks')"
                [routerLink]="['/book', 'desks']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Book Desk"
                matTooltipPosition="below"
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.106"
                        height="15.251"
                        viewBox="0 0 22.106 15.251"
                    >
                        <path
                            id="Desk_Name"
                            d="M21.809,82.031l-4.434-4.292a.85.85,0,0,0-.6-.239H5.246a.878.878,0,0,0-.6.239L.22,82.031a.838.838,0,0,0-.194.924.854.854,0,0,0,.791.526H2.293V91.9A.853.853,0,0,0,4,91.9V83.485H5.224v3.444a.853.853,0,0,0,1.706,0V83.485h8.178v3.444a.853.853,0,0,0,1.706,0V83.485h1.224V91.9a.853.853,0,0,0,1.706,0V83.485h1.476a.858.858,0,0,0,.791-.526A.874.874,0,0,0,21.809,82.031ZM5.595,79.193H16.434l2.683,2.6H2.912Z"
                            transform="translate(0.038 -77.5)"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Book Desk</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('parking')"
                [routerLink]="['/book', 'parking']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Book Car Space"
                matTooltipPosition="below"
            >
                <app-icon class="text-xl">directions_car</app-icon>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Book Car Space</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('visitor-invite')"
                [routerLink]="['/book', 'visitor']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Invite Visitor"
                matTooltipPosition="below"
            >
                <app-icon class="text-xl">person_add</app-icon>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Invite Visitor</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('explore')"
                [routerLink]="['/explore']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Spaces"
                matTooltipPosition="below"
            >
                <app-icon class="text-xl">place</app-icon>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Spaces</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('schedule')"
                [routerLink]="['/schedule']"
                routerLinkActive="text-secondary active dark:text-pink-700"
                matTooltip="Your Bookings"
                matTooltipPosition="below"
            >
                <app-icon class="text-xl">event</app-icon>
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Your Bookings</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary dark:bg-pink-700"
                ></div>
            </button>
        </div>
    `,
    styles: [
        `
            [menu] > * {
                height: 3.5rem;
                flex-shrink: 1;
            }

            [bar] {
                display: none;
            }

            .active > [bar] {
                display: block;
            }
        `,
    ],
})
export class TopMenuComponent {
    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => (this._org.building = b);

    public get show_text() {
        return this.features.length <= 5;
    }

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get type() {
        const url = this._router.url;
        if (url.includes('dashboard')) return 'home';
        if (url.includes('book/spaces')) return 'spaces';
        if (url.includes('book/desks')) return 'desks';
        if (url.includes('book/parking')) return 'parking';
        if (url.includes('explore')) return 'explore';
        if (url.includes('schedule')) return 'schedule';
        return '';
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _router: Router
    ) {}
}
