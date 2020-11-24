import { Component } from "@angular/core";
import { SettingsService } from '@user-interfaces/common';
import { ControlStateService } from './control-state.service';

@Component({
    selector: 'topbar-header',
    template: `
        <div class="flex-1 px-4">
            <img class="h-10" [src]="logo.src"/>
        </div>
        <div class="p-4 text-lg">{{ (system | async).name }}</div>
        <div class="flex-1 p-4 flex items-center justify-end space-x-2">
            <button mat-icon-button>
                <app-icon className="material-icons">brightness_high</app-icon>
            </button>
            <button mat-icon-button>
                <app-icon className="material-icons">unfold_more</app-icon>
            </button>
            <button mat-icon-button>
                <app-icon className="material-icons">help</app-icon>
            </button>
            <button mat-icon-button (click)="powerOff()">
                <app-icon className="material-icons">power_settings_new</app-icon>
            </button>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc8;
        }

        img {
            max-height: calc(100% - 1rem);
        }

        button {
            border-radius: .25rem;
            background-color: rgba(255,255,255, .15);
        }
    `]
})
export class TopbarHeaderComponent {

    public readonly system = this._state.system;

    public readonly powerOff = () => this._state.powerOff();

    public get logo() {
        return this._settings.get('app.logo_dark') || {};
    }

    constructor(private _settings: SettingsService, private _state: ControlStateService) {

    }
}
