import { Component, inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="relative -right-1 -top-12 flex w-[18.5rem] flex-col rounded bg-base-100 shadow"
            (click)="close()"
        >
            <div
                matRipple
                class="flex items-center space-x-2 border-b border-base-300 px-2 py-4"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">{{ 'COMMON.CONTROLS_HELP' | translate }}</div>
            </div>
            @for (tile of tiles; track tile) {
                <a
                    matRipple
                    class="w-full p-2 text-left"
                    target="_blank"
                    ref="noreferer noopener"
                    [href]="tile.link"
                >
                    <div
                        class="flex w-full items-center space-x-2 rounded p-2 hover:bg-base-200"
                    >
                        <icon class="text-xl" [icon]="tile.icon"></icon>
                        <div>{{ tile.name }}</div>
                    </div>
                </a>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class HelpTooltipComponent {
    private _data = inject(CustomTooltipData);
    private _settings = inject(SettingsService);

    /** Tiles to display on the help page */
    public get tiles(): ApplicationLink[] {
        return this._settings.get('app.help') || [];
    }

    public readonly close = () => {
        this._data?.close();
    };
}
