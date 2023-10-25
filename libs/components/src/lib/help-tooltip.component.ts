import { Component, Inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow relative -top-12 -right-1 divide-y divide-base-200"
            (click)="close()"
        >
            <div class="flex items-center space-x-2 p-2 border-b">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="" i18n>Help & Support</div>
            </div>
            <a
                btn
                matRipple
                *ngFor="let tile of tiles"
                class="clear w-full text-left h-auto"
                target="_blank"
                ref="noreferer noopener"
                [href]="tile.link"
            >
                <div class="flex items-center space-x-2 py-2 w-full">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
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
        return this._settings.get('app.help') || [];
    }

    public readonly close = () => {
        this._data?.close();
    };

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService
    ) {}
}
