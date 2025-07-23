import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncHandler, current_user, SettingsService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'accessibility-tooltip',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-[20rem] flex-col overflow-auto rounded bg-base-100 pb-3 shadow"
        >
            <div
                matRipple
                class="flex items-center space-x-2 border-b border-base-300 px-2 py-3"
                (click)="close()"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                </div>
            </div>
            <div class="space-y-2 p-2">
                @if (can_change_dark_mode) {
                    <settings-toggle
                        [ngModel]="dark_mode"
                        (ngModelChange)="setDarkMode($event)"
                        [toggle]="true"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="-ml-2 text-xl">mode_night</icon>
                            <div>{{ 'COMMON.DARK_MODE' | translate }}</div>
                        </div>
                    </settings-toggle>
                }
                <settings-toggle
                    [ngModel]="locatable()"
                    (ngModelChange)="setLocatable($event)"
                    [toggle]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="-ml-2 text-xl">emergency_share</icon>
                        <div>{{ 'COMMON.LOCATABLE' | translate }}</div>
                    </div>
                </settings-toggle>
                <settings-toggle
                    [ngModel]="accessible()"
                    (ngModelChange)="applySetting('accessible', $event)"
                    [toggle]="true"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="-ml-2 text-xl">playlist_add</icon>
                        <div>{{ 'COMMON.TEXT_SIZE' | translate }}</div>
                    </div>
                </settings-toggle>
            </div>
            @if (accessible()) {
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
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AccessibilityTooltipComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject(CustomTooltipData);
    private _settings = inject(SettingsService);

    public readonly accessible = signal(false);
    public readonly locatable = signal(false);

    public get dark_mode() {
        return this._settings.theme === 'dark';
    }

    public get can_change_dark_mode() {
        return !!this._settings.get('app.allow_dark_mode');
    }

    public get font_size() {
        return this._settings.get('font_size') || 16;
    }

    public readonly applySetting = (n, v) =>
        this.timeout(
            'apply_setting',
            () => {
                this._settings.saveUserSetting(n, v);
                if (n === 'accessible') {
                    this.accessible.set(v);
                }
            },
            500,
        );

    public readonly close = () => this._data?.close();
    public readonly setLocatable = (l: boolean) => {
        this._settings.updateLocatable(l);
        this.locatable.set(l);
    };

    public async ngOnInit() {
        this.accessible.set(!!this._settings.get('accessible'));
        this.subscription(
            'user',
            current_user.subscribe((u) => {
                this.locatable.set(u.locatable);
            }),
        );
    }

    public setDarkMode(state: boolean) {
        const theme = this._settings.theme;
        if (state && theme !== 'dark') this._settings.setTheme('dark');
        else if (!state && theme === 'dark') this._settings.setTheme('light');
    }
}
