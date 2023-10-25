import { Component, Inject } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'accessibility-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow relative -top-12 -right-1 overflow-hidden"
        >
            <div class="flex items-center space-x-2 p-2" (click)="close()">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="" i18n>Display & Accessibility</div>
            </div>
            <div
                action
                *ngIf="can_change_dark_mode"
                class="flex items-center space-x-2 w-full text-left h-auto px-4"
            >
                <div
                    class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200 my-2"
                >
                    <app-icon class="text-xl">mode_night</app-icon>
                </div>
                <div class="flex-1 text-sm" i18n>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </div>
            <div
                action
                class="flex items-center space-x-2 w-full text-left h-auto px-4"
            >
                <div
                    class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200 my-2"
                >
                    <app-icon class="text-xl">playlist_add</app-icon>
                </div>
                <div class="flex-1 text-sm" i18n>Large Accessibility Sizes</div>
                <mat-slide-toggle
                    [ngModel]="accessible"
                    (ngModelChange)="applySetting('accessible', $event)"
                ></mat-slide-toggle>
            </div>
            <ng-container *ngIf="accessible">
                <div class="px-8 py-4 bg-base-200 text-center" i18n>
                    Adjust your preferred reading size below.
                </div>
                <div class="flex items-center px-4 space-x-4">
                    <span class="text-sm">A</span>
                    <mat-slider
                        class="flex-1 w-1/2 text-[16px]"
                        [min]="10"
                        [max]="24"
                        [step]="2"
                    >
                        <input
                            matSliderThumb
                            class="text-[16px]"
                            [ngModel]="font_size"
                            (ngModelChange)="applySetting('font_size', $event)"
                        />
                    </mat-slider>
                    <span class="text-2xl">A</span>
                    <span
                        class="text-base py-1 px-2 rounded bg-base-300 text-white my-2"
                    >
                        {{ font_size }}px
                    </span>
                </div>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host > div > [action] {
                border-top: 1px solid #ccc;
            }
        `,
    ],
})
export class AccessibilityTooltipComponent extends AsyncHandler {
    public get dark_mode() {
        return this._settings.get('theme') === 'dark';
    }

    public get can_change_dark_mode() {
        return !!this._settings.get('app.general.dark_mode');
    }

    public get accessible() {
        return !!this._settings.get('accessible');
    }

    public get font_size() {
        return this._settings.get('font_size') || 16;
    }

    public readonly applySetting = (n, v) =>
        this.timeout(
            'apply_setting',
            () => this._settings.saveUserSetting(n, v),
            1000
        );

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService
    ) {
        super();
    }

    public setDarkMode(state: boolean) {
        const theme = this._settings.get('theme');
        if (state && theme !== 'dark') this._settings.setTheme('dark');
        else if (!state && theme === 'dark') this._settings.setTheme('light');
    }
}
