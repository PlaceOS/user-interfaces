import { Component } from '@angular/core';
import { ApplicationLink, BaseClass, SettingsService } from '@placeos/common';

@Component({
    selector: 'nav-menu',
    template: `
        <div class="absolute hidden sm:w-[10rem]"></div>
        <div
            class="flex sm:flex-col bg-white overflow-auto text-black shadow divide-y divide-gray-100 w-full sm:w-auto h-auto sm:h-full border-t sm:border-t border-gray-300 relative p-2"
            (mouseenter)="hidden ? entered() : ''"
        >
            <a
                mat-icon-button
                class="h-16 w-16 sm:h-12 rounded sm:mb-2 sm:hover:bg-gray-200"
                *ngFor="let item of menu_items"
                [routerLink]="[item.route]"
                [class.sm:w-[10rem]]="!hidden"
                [class.sm:w-12]="hidden"
                routerLinkActive="active"
            >
                <div
                    class="flex flex-col items-center w-16 px-2"
                    [class.sm:flex-row]="!hidden"
                    [class.sm:w-[10rem]]="!hidden"
                >
                    <app-icon [icon]="item.icon"></app-icon>
                    <div
                        text
                        class="text-sm font-normal h-0 overflow-hidden opacity-0"
                        [class.sm:hidden]="hidden"
                        [class.sm:opacity-100]="!hidden"
                        [class.sm:h-auto]="!hidden"
                        [class.sm:ml-2]="!hidden"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </a>
        </div>
        <button
            mat-icon-button
            class="hidden sm:block absolute bottom-2 right-0 transform translate-x-1/2 bg-white shadow w-8 h-8 text-xs"
            (click)="hidden = !hidden"
        >
            <app-icon>
                {{ hidden ? 'chevron_right' : 'chevron_left' }}
            </app-icon>
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
            [text] {
                transition: opacity 200ms, height 200ms;
            }

            :host > div,
            a {
                transition: width 200ms, height 200ms;
            }

            .active {
                background-color: var(--primary) !important;
                color: #fff;
            }

            .active [text],
            a:hover [text] {
                height: 1.25rem !important;
                opacity: 1 !important;
            }
        `,
    ],
})
export class NavMenuComponent extends BaseClass {
    public get hidden(): boolean {
        return this._settings.value('nav.small');
    }

    public set hidden(value: boolean) {
        this._settings.post('nav.small', value);
        this.clearTimeout('entered');
    }

    public get menu_items(): ApplicationLink[] {
        return this._settings.get('app.general.menu_items') || [];
    }

    constructor(private _settings: SettingsService) {
        super();
        this.entered();
    }

    public entered() {
        this.hidden = false;
        this.timeout('entered', () => (this.hidden = true), 5 * 1000);
    }
}
