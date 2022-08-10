import { Component } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="fixed flex flex-col items-center justify-end z-20 inset-0 bg-black/75 text-white px-2 pb-24 pt-2 space-y-4"
            *ngIf="show_book_items"
            (click)="show_book_items = false"
        >
            <a
                matRipple
                [routerLink]="new_features ? ['/book', 'meeting'] : ['/book', 'spaces']"
                *ngIf="features.includes('spaces')"
                class="flex items-center space-x-4 text-base w-48"
            >
                <div
                    class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                >
                    <app-icon
                        [icon]="{
                            type: 'img',
                            src: 'assets/icons/meeting-room-filled.svg'
                        }"
                    ></app-icon>
                </div>
                <div>Book Room</div>
            </a>
            <a
                matRipple
                [routerLink]="new_features ? ['/book', 'newdesk'] : ['/book', 'desks']"
                *ngIf="features.includes('desks')"
                class="flex items-center space-x-4 text-base w-48"
            >
                <div
                    class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                >
                    <app-icon
                        [icon]="{
                            type: 'img',
                            src: 'assets/icons/desk-filled.svg'
                        }"
                    ></app-icon>
                </div>
                <div>Book Desk</div>
            </a>
            <a
                matRipple
                [routerLink]="['/book', 'parking']"
                *ngIf="features.includes('parking')"
                class="flex items-center space-x-4 text-base w-48"
            >
                <div
                    class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                >
                    <app-icon
                        [icon]="{
                            type: 'img',
                            src: 'assets/icons/car-filled.svg'
                        }"
                    ></app-icon>
                </div>
                <div>Book Car Space</div>
            </a>
            <a
                matRipple
                *ngIf="features.includes('visitor-invite')"
                [routerLink]="['/book', 'visitor']"
                class="flex items-center space-x-4 text-base w-48"
            >
                <div
                    class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                >
                    <app-icon>person_add</app-icon>
                </div>
                <div>Invite Visitor</div>
            </a>
            <a
                matRipple
                [routerLink]="new_features ? ['/your-bookings'] : ['/schedule']"
                *ngIf="features.includes('schedule')"
                class="flex items-center space-x-4 text-base w-48"
            >
                <div
                    class="bg-white rounded-full h-12 w-12 text-black text-2xl flex items-center justify-center"
                >
                    <app-icon
                        [icon]="{
                            type: 'img',
                            src: 'assets/icons/today-filled.svg'
                        }"
                    ></app-icon>
                </div>
                <div>Your Bookings</div>
            </a>
        </div>
        <div
            class="flex items-center justify-center bg-white dark:bg-neutral-700 border-t border-gray-200 dark:border-neutral-500 shadow relative h-16 w-full sm:hidden z-40"
            *ngIf="features.length > 3; else simple_state"
        >
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="['/']"
                routerLinkActive="text-primary"
            >
                <app-icon class="text-2xl">home</app-icon>
                <span class="text-sm">Home</span>
            </a>
            <button
                matRipple
                class="flex items-center justify-center w-12 h-12 mb-4 rounded-full z-10 dark:bg-neutral-800"
                (click)="show_book_items = !show_book_items"
                [class.bg-secondary]="show_book_items"
                [class.text-white]="show_book_items"
                [class.bg-gray-300]="!show_book_items"
            >
                <app-icon class="text-2xl">{{
                    show_book_items ? 'close' : 'add'
                }}</app-icon>
            </button>
            <a
                matRipple
                class="flex flex-col items-center justify-center relative flex-1"
                [routerLink]="['/explore']"
                routerLinkActive="text-primary"
            >
                <app-icon class="text-2xl">place</app-icon>
                <span class="text-sm">Spaces</span>
            </a>
            <div
                class="overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-24 h-2"
            >
                <div
                    class="w-16 h-16 rounded-full bg-white dark:bg-neutral-700 shadow mx-auto border-t border-gray-200 dark:border-neutral-500"
                ></div>
            </div>
        </div>
        <ng-template #simple_state>
            <div
                class="flex items-center justify-center bg-white dark:bg-neutral-700 border-t border-gray-200 dark:border-neutral-500 shadow relative h-16 w-full sm:hidden z-40"
            >
                <top-menu></top-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class FooterMenuComponent {
    public show_book_items = false;

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    constructor(private _settings: SettingsService) {}
}
