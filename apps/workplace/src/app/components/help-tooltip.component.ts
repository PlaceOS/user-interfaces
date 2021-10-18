import { Component, Inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-white shadow relative -top-12 -right-1"
            (click)="close()"
        >
            <div class="flex items-center space-x-2 p-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="">Help & Support</div>
            </div>
            <a
                button
                mat-button
                *ngFor="let tile of tiles"
                class="clear w-full text-left h-auto"
                [href]="tile.link"
            >
                <div class="flex items-center space-x-2">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 my-2"
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
            :host > div > a {
                border-top: 1px solid #ccc;
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
