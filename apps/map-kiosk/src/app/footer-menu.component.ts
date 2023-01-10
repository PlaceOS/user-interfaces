import { Component } from '@angular/core';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="flex items-center bg-white divide-x border-t border-solid border-gray-300 w-full"
        >
            <a
                btn
                matRipple
                class="flex-1 h-16 !rounded-none"
                [routerLink]="['/desks']"
                routerLinkActive="!bg-primary !text-white"
            >
                <div class="flex flex-col items-center justify-center">
                    <app-icon class="text-2xl">book</app-icon>
                    <p class="m-0">Book Desk</p>
                </div>
            </a>
            <a
                btn
                matRipple
                class="flex-1 h-16 !rounded-none"
                [routerLink]="['/explore']"
                routerLinkActive="!bg-primary !text-white"
            >
                <div class="flex flex-col items-center justify-center">
                    <app-icon class="text-2xl">place</app-icon>
                    <p class="m-0">Map</p>
                </div>
            </a>
        </div>
    `,
})
export class FooterMenuComponent {}
