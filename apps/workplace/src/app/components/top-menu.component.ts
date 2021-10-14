import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'top-menu',
    template: `
        <div menu class="flex items-center h-full">
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                [routerLink]="['/dashboard']"
                routerLinkActive="text-secondary active"
                matTooltip="Home"
                matTooltipPosition="below"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/home-' +
                            (type === 'home' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span *ngIf="show_text">Home</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </a>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('spaces')"
                [routerLink]="['/book', 'spaces']"
                routerLinkActive="text-secondary active"
                matTooltip="Book Room"
                matTooltipPosition="below"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/meeting-room-' +
                            (type === 'spaces' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span *ngIf="show_text">Book Room</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('desks')"
                [routerLink]="['/book', 'desks']"
                routerLinkActive="text-secondary active"
                matTooltip="Book Desk"
                matTooltipPosition="below"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/desk-' +
                            (type === 'desks' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span *ngIf="show_text">Book Desk</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('parking')"
                [routerLink]="['/book', 'parking']"
                routerLinkActive="text-secondary active"
                matTooltip="Book Car Space"
                matTooltipPosition="below"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/car-' +
                            (type === 'parking' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span *ngIf="show_text">Book Car Space</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative px-8"
                *ngIf="features.includes('explore')"
                [routerLink]="['/explore']"
                routerLinkActive="text-secondary active"
                matTooltip="Spaces"
                matTooltipPosition="below"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/place-' +
                            (type === 'explore' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span *ngIf="show_text">Spaces</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
        </div>
    `,
    styles: [
        `
            [menu] > * {
                height: 3.5rem;
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
        return '';
    }

    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _router: Router
    ) {}
}
