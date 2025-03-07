import { Component, Inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="relative -right-1 -top-12 flex w-[18.5rem] flex-col divide-y divide-base-200 rounded bg-base-100 shadow"
            (click)="close()"
        >
            <div class="flex items-center space-x-2 border-b p-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="">{{ 'COMMON.CONTROLS_HELP' | translate }}</div>
            </div>
            <a
                btn
                matRipple
                *ngFor="let tile of tiles"
                class="clear h-auto w-full text-left"
                target="_blank"
                ref="noreferer noopener"
                [href]="tile.link"
            >
                <div class="flex w-full items-center space-x-2 py-2">
                    <div
                        class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
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
    standalone: false,
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
        private _settings: SettingsService,
    ) {}
}
