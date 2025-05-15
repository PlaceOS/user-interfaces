import { Component, Inject } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'accessibility-tooltip',
    template: `
        <div
            class="relative -right-1 -top-12 flex w-[18.5rem] flex-col overflow-hidden rounded bg-base-100 shadow"
        >
            <div class="flex items-center space-x-2 p-2" (click)="close()">
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                </div>
            </div>
            <div
                action
                *ngIf="can_change_dark_mode"
                class="flex h-auto w-full items-center space-x-2 px-4 text-left"
            >
                <div
                    class="my-2 flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                >
                    <icon class="text-xl">mode_night</icon>
                </div>
                <div class="flex-1 text-sm">
                    {{ 'COMMON.DARK_MODE' | translate }}
                </div>
                <mat-slide-toggle
                    [ngModel]="dark_mode"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </div>
            <div
                action
                class="flex h-auto w-full items-center space-x-2 px-4 text-left"
            >
                <div
                    class="my-2 flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                >
                    <icon class="text-xl">playlist_add</icon>
                </div>
                <div class="flex-1 text-sm">
                    {{ 'COMMON.TEXT_SIZE' | translate }}
                </div>
                <mat-slide-toggle
                    [ngModel]="accessible"
                    (ngModelChange)="applySetting('accessible', $event)"
                ></mat-slide-toggle>
            </div>
            <ng-container *ngIf="accessible">
                <div class="bg-base-200 px-8 py-4 text-center">
                    {{ 'COMMON.TEXT_SIZE_MSG' | translate }}
                </div>
                <div class="flex items-center space-x-4 px-4">
                    <span class="text-sm">A</span>
                    <mat-slider
                        class="w-1/2 flex-1 text-[16px]"
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
                        class="my-2 rounded bg-base-300 px-2 py-1 text-base text-white"
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
    standalone: false,
})
export class AccessibilityTooltipComponent extends AsyncHandler {
    public get dark_mode() {
        return this._settings.theme === 'dark';
    }

    public get can_change_dark_mode() {
        return !!this._settings.get('app.allow_dark_mode');
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
            1000,
        );

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService,
    ) {
        super();
    }

    public setDarkMode(state: boolean) {
        const theme = this._settings.theme;
        if (state && theme !== 'dark') this._settings.setTheme('dark');
        else if (!state && theme === 'dark') this._settings.setTheme('light');
    }
}
