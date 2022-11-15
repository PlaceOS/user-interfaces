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
                [routerLink]="[default_page]"
                routerLinkActive="text-primary active"
                matTooltip="Home"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">home</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >home</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Home</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('spaces')"
                [routerLink]="
                    new_features ? ['/book', 'meeting'] : ['/book', 'spaces']
                "
                routerLinkActive="text-primary active"
                matTooltip="Book Room"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">meeting_room</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >meeting_room</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block"
                    >Book Room</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('desks')"
                [routerLink]="
                    new_features ? ['/book', 'newdesk'] : ['/book', 'desks']
                "
                routerLinkActive="text-primary active"
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
                <span *ngIf="show_text" class="truncate hidden xl:block" i18n
                    >Book Desk</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('parking')"
                [routerLink]="
                    new_features
                        ? ['/book', 'new-parking']
                        : ['/book', 'parking']
                "
                routerLinkActive="text-primary active"
                matTooltip="Book Car Space"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">directions_car</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >directions_car</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block" i18n
                    >Book Car Space</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('visitor-invite')"
                [routerLink]="['/book', 'visitor']"
                routerLinkActive="text-primary active"
                matTooltip="Invite Visitor"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">person_add</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >person_add</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block" i18n
                    >Invite Visitor</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('explore')"
                [routerLink]="['/explore']"
                routerLinkActive="text-primary active"
                matTooltip="Spaces"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">place</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >place</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block" i18n
                    >Spaces</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('schedule')"
                [routerLink]="new_features ? ['/your-bookings'] : ['/schedule']"
                routerLinkActive="text-primary active"
                matTooltip="Your Bookings"
                matTooltipPosition="below"
            >
                <app-icon filled class="text-xl">event</app-icon>
                <app-icon
                    outline
                    className="material-icons-outlined"
                    class="text-xl !m-0"
                    >event</app-icon
                >
                <span *ngIf="show_text" class="truncate hidden xl:block" i18n
                    >Your Bookings</span
                >
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                ></div>
            </a>
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

            a:not(.active) > [filled],
            a.active > [outline] {
                display: none;
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

    public get default_page(): string {
        return this._settings.get('app.default_route') || '/dashboard';
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
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
