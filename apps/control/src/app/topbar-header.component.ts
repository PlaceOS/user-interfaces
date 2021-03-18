import { Component } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';
import { ControlStateService } from './control-state.service';
import { BlindsTooltipComponent } from './ui/blinds-tooltip.component';
import { CameraTooltipComponent } from './ui/camera-tooltip.component';
import { HelpTooltipComponent } from './ui/help-tooltip.component';
import { LightingTooltipComponent } from './ui/lighting-tooltip.component';
import { MicrophoneTooltipComponent } from './ui/microphone-tooltip.component';
import { PowerTooltipComponent } from './ui/power-tooltip.component';

@Component({
    selector: 'topbar-header',
    template: `
        <div class="flex-1 px-4">
            <img class="h-10" [src]="logo.src" />
        </div>
        <div class="p-4 text-lg">{{ (system | async).name }}</div>
        <div class="flex-1 p-4 flex items-center justify-end space-x-2">
            <div customTooltip [content]="cmp.lighting">
                <button mat-icon-button>
                    <app-icon>brightness_high</app-icon>
                </button>
            </div>
            <div customTooltip [content]="cmp.blinds">
                <button mat-icon-button>
                    <app-icon>unfold_more</app-icon>
                </button>
            </div>
            <div customTooltip [content]="cmp.mics" *ngIf="(mic_list | async)?.length">
                <button mat-icon-button>
                    <app-icon>mic</app-icon>
                </button>
            </div>
            <div customTooltip [content]="cmp.camera" *ngIf="(camera_list | async)?.length">
                <button mat-icon-button>
                    <app-icon>photo_camera</app-icon>
                </button>
            </div>
            <div customTooltip [content]="cmp.help">
                <button mat-icon-button>
                    <app-icon>help</app-icon>
                </button>
            </div>
            <div customTooltip [content]="cmp.power">
                <button mat-icon-button>
                    <app-icon>power_settings_new</app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc8;
            }

            img {
                max-height: calc(100% - 1rem);
            }

            button {
                border-radius: 0.25rem;
                background-color: rgba(255, 255, 255, 0.15);
            }
        `,
    ],
})
export class TopbarHeaderComponent {
    public readonly system = this._state.system;
    public readonly mic_list = this._state.mic_list;
    public readonly camera_list = this._state.camera_list;

    public readonly cmp = {
        lighting: LightingTooltipComponent,
        power: PowerTooltipComponent,
        help: HelpTooltipComponent,
        blinds: BlindsTooltipComponent,
        camera: CameraTooltipComponent,
        mics: MicrophoneTooltipComponent
    };

    public readonly powerOff = () => this._state.powerOff();

    public get logo() {
        return this._settings.get('app.logo_dark') || {};
    }

    constructor(
        private _settings: SettingsService,
        private _state: ControlStateService
    ) {}
}
