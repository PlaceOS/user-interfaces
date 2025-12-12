import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'footer-menu',
    template: `
        <div
            class="flex w-full items-center divide-x border-t border-solid border-base-200 bg-base-100"
        >
            <a
                btn
                matRipple
                class="h-16 flex-1 rounded-none!"
                [routerLink]="['/desks']"
                routerLinkActive="bg-primary! text-white!"
            >
                <div class="flex flex-col items-center justify-center">
                    <icon class="text-2xl">book</icon>
                    <p class="m-0">Book Desk</p>
                </div>
            </a>
            <a
                btn
                matRipple
                class="h-16 flex-1 rounded-none!"
                [routerLink]="['/explore']"
                routerLinkActive="bg-primary! text-white!"
            >
                <div class="flex flex-col items-center justify-center">
                    <icon class="text-2xl">place</icon>
                    <p class="m-0">Map</p>
                </div>
            </a>
        </div>
    `,
    imports: [MatRippleModule, RouterModule, IconComponent],
})
export class FooterMenuComponent {}
