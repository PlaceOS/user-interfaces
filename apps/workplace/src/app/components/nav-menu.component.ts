import { Component } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';

@Component({
    selector: 'nav-menu',
    template: `
        <div
            class="flex sm:flex-col bg-white overflow-auto text-black shadow divide-y divide-gray-100 w-full sm:w-auto h-auto sm:h-full border-t sm:border-t border-gray-300"
        >
            <a
                mat-icon-button
                class="h-16 w-16 rounded"
                *ngFor="let item of menu_items"
                [routerLink]="[item.route]"
                routerLinkActive="active"
            >
                <div class="flex flex-col items-center">
                    <app-icon [icon]="item.icon"></app-icon>
                    <div
                        text
                        class="text-sm font-normal h-0 overflow-hidden opacity-0"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </a>
        </div>
    `,
    styles: [
        `
            [text] {
                transition: opacity 200ms, height 200ms;
            }

            .active {
                color: var(--primary);
            }

            .active [text],
            a:hover [text] {
                height: 1.25rem !important;
                opacity: 1 !important;
            }
        `,
    ],
})
export class NavMenuComponent {
    public get menu_items(): ApplicationLink[] {
        return this._settings.get('app.general.menu_items') || [];
    }

    constructor(private _settings: SettingsService) {}
}
