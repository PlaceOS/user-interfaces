import { Component, Inject } from '@angular/core';
import { ApplicationLink, SettingsService } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

@Component({
    selector: 'accessibility-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-white shadow relative -top-12 -right-1 overflow-hidden dark:bg-neutral-700 dark:text-white"
        >
            <div class="flex items-center space-x-2 p-2" (click)="close()">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="" i18n>Display & Accessibility</div>
            </div>
            <div
                action
                class="flex items-center space-x-2 w-full text-left h-auto px-4"
            >
                <div
                    class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800 my-2"
                >
                    <app-icon class="text-xl">mode_night</app-icon>
                </div>
                <div class="flex-1 text-sm" i18n>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode"
                    (ngModelChange)="applySetting('dark_mode', $event)"
                ></mat-slide-toggle>
            </div>
            <div
                action
                class="flex items-center space-x-2 w-full text-left h-auto px-4"
            >
                <div
                    class="flex items-center justify-center rounded-full w-8 h-8 bg-gray-200 dark:bg-neutral-800 my-2"
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
                <div class="px-8 py-4 bg-gray-200 dark:bg-neutral-600 text-center" i18n>
                    Adjust your preferred reading size below.
                </div>
                <div class="flex items-center px-4 space-x-4">
                    <span class="text-sm">A</span>
                    <mat-slider
                        class="flex-1 w-1/2"
                        [min]="10"
                        [max]="22"
                        [ngModel]="font_size"
                        (ngModelChange)="applySetting('font_size', $event)"
                        [step]="2"
                    ></mat-slider>
                    <span class="text-2xl">A</span>
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
export class AccessibilityTooltipComponent {

    public get dark_mode() {
        return !!this._settings.get('dark_mode');
    }

    public get accessible() {
        return !!this._settings.get('accessible');
    }

    public get font_size() {
        return this._settings.get('font_size') || 16;
    }

    public readonly applySetting = (n, v) =>
        this._settings.saveUserSetting(n, v);

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _settings: SettingsService
    ) {}
}
