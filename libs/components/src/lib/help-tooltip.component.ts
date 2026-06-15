import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex w-74 flex-col rounded-sm shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-4"
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
                        class="hover:bg-base-200 flex w-full items-center space-x-2 rounded-sm p-2"
                    >
                        <icon class="text-xl" [icon]="tile.icon"></icon>
                        <div>{{ tile.name }}</div>
                    </div>
                </a>
            }
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, TranslatePipe, IconComponent],
})
export class HelpTooltipComponent {
    private _data = inject(CustomTooltipData);
    private _settings = inject(SettingsService);
    private readonly _tiles = this._settings.signal('help', []);

    /** Tiles to display on the help page */
    public get tiles(): ApplicationLink[] {
        return this._tiles();
    }

    public readonly close = () => {
        this._data?.close();
    };
}
