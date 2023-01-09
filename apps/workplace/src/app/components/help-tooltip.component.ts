import { Component, Inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-white shadow relative -top-12 -right-1 dark:bg-neutral-700 dark:text-white divide-y divide-gray-300 dark:divide-neutral-500"
            (click)="close()"
        >
            <div
                class="flex items-center space-x-2 p-2 border-b dark:border-neutral-500"
            >
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="" i18n>Help & Support</div>
            </div>
            <a
                btn
                matRipple
                *ngFor="let tile of tiles"
                class="clear w-full text-left h-auto"
                [href]="tile.link"
            >
                <div
                    class="flex items-center space-x-2 dark:text-white py-2 w-full"
                >
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800"
                    >
                        <app-icon class="text-xl" [icon]="tile.icon"></app-icon>
                    </div>
                    <div class="flex-1">{{ tile.name }}</div>
                </div>
            </a>
        </div>
    `,
    styles: [
        `
            a:not(:last-child) {
                border-bottom-width: 1px !important;
                border-bottom-style: solid !important;
                border-radius: 0;
            }
        `,
    ],
})
export class HelpTooltipComponent {
    /** Tiles to display on the help page */
    public get tiles(): ApplicationLink[] {
        return this._settings.get('app.help.tiles') || [];
    }

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService
    ) {}
}
