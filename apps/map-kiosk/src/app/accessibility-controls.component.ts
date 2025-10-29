import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: 'accessibility-controls',
    template: `
        @if (can_change_dark_mode) {
            <button
                matRipple
                class="flex w-full items-center justify-between rounded p-2 hover:bg-base-200"
                (click)="setDarkMode(!dark_mode)"
            >
                <div>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </button>
        }
        <!-- <button
            matRipple
            class="flex items-center justify-between hover:bg-base-200 w-full p-2 rounded"
            (click)="applySetting('accessible', !accessible)"
        >
            <div>Text Size</div>
            <mat-slide-toggle
                [ngModel]="accessible"
                (ngModelChange)="applySetting('accessible', $event)"
            ></mat-slide-toggle>
        </button>
        <div class="flex items-center pl-2 space-x-4" *ngIf="accessible">
            <div class="text-sm">A</div>
            <mat-slider
                class="flex-1 w-px min-w-0 text-[16px]"
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
            <div class="text-2xl">A</div>
            <div
                class="text-base py-1 px-2 rounded bg-base-300 text-base-content my-2"
            >
                {{ font_size }}px
            </div>
        </div> -->
    `,
    styles: [``],
    imports: [MatRippleModule, MatSlideToggleModule],
})
export class AccessibilityControlsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);

    public get dark_mode() {
        return this.can_change_dark_mode && this._settings.theme === 'dark';
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

    public setDarkMode(state: boolean) {
        this.timeout(
            'dark_mode',
            () => {
                const theme = this._settings.theme;
                if (state && theme !== 'dark') this._settings.setTheme('dark');
                else if (!state && theme === 'dark')
                    this._settings.setTheme('light');
            },
            100,
        );
    }
}
