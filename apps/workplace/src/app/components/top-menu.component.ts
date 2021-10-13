import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'top-menu',
    template: `
        <div menu class="flex items-center h-full">
            <a
                matRipple
                class="flex items-center justify-center space-x-2 relative"
                [routerLink]="['/dashboard']"
                routerLinkActive="text-secondary active"
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
                <span>Home</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </a>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative"
                [matMenuTriggerFor]="book_menu"
                *ngIf="book_items.length"
                [class.text-secondary]="type === 'book'"
                [class.active]="type === 'book'"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/meeting-room-' +
                            (type === 'book' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span>Book</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
            <button
                matRipple
                [matMenuTriggerFor]="more_menu"
                class="flex items-center justify-center space-x-2 relative"
                *ngIf="other_items.length"
                [class.text-secondary]="type === 'more'"
                [class.active]="type === 'more'"
            >
                <app-icon
                    class="text-xl"
                    [icon]="{
                        type: 'img',
                        src:
                            'assets/icons/more-' +
                            (type === 'more' ? 'filled' : 'outline') +
                            '.svg'
                    }"
                ></app-icon>
                <span>More</span>
                <div
                    bar
                    class="absolute bottom-0 inset-x-0 h-0.5 bg-secondary"
                ></div>
            </button>
            <button
                matRipple
                class="flex items-center justify-center space-x-2 relative"
                [matMenuTriggerFor]="building_menu"
                *ngIf="(buildings | async)?.length > 1"
            >
                <app-icon>business</app-icon>
                <span>Building</span>
            </button>
        </div>
        <mat-menu #book_menu="matMenu">
            <a
                mat-menu-item
                *ngFor="let item of book_items"
                [routerLink]="item.route"
                routerLinkActive="text-primary"
                class="flex items-center space-x-2 text-base"
            >
                <app-icon [icon]="item.icon"></app-icon>
                <div>{{ item.name }}</div>
            </a>
        </mat-menu>
        <mat-menu #more_menu="matMenu">
            <a
                mat-menu-item
                *ngFor="let item of other_items"
                [routerLink]="item.route"
                routerLinkActive="text-primary"
                class="flex items-center space-x-2 text-base"
            >
                <app-icon [icon]="item.icon"></app-icon>
                <div>{{ item.name }}</div>
            </a>
        </mat-menu>
        <mat-menu #building_menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let item of buildings | async"
                (click)="setBuilding(item)"
                class="flex items-center space-x-2 text-base"
                [class.text-primary]="(building | async).id === item.id"
            >
                {{ item.name }}
            </button>
        </mat-menu>
    `,
    styles: [
        `
            [menu] > * {
                height: 3.5rem;
            }

            button,
            a {
                min-width: 8rem;
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

    public get book_items() {
        return this.menu_items.filter((_: any) => _.type === 'book');
    }

    public get other_items() {
        return this.menu_items.filter((_: any) => _.type !== 'book');
    }

    public get menu_items(): ApplicationLink[] {
        return this._settings.get('app.general.menu') || [];
    }

    public get type() {
        const url = this._router.url;
        if (url.includes('dashboard')) return 'home';
        return this.book_items.find((_) => url.includes(_.route))
            ? 'book'
            : this.other_items.find((_) => url.includes(_.route))
            ? 'more'
            : '';
    }

    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _router: Router
    ) {}
}
