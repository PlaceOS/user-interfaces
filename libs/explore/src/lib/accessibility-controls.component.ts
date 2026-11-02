import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: 'accessibility-controls',
    template: `
        @if (can_change_dark_mode()) {
            <button
                matRipple
                class="hover:bg-base-200 flex w-full items-center justify-between rounded-sm p-2"
                (click)="setDarkMode(!dark_mode())"
            >
                <div>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode()"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </button>
        }
    `,
    styles: [``],
    imports: [MatRippleModule, MatSlideToggleModule, FormsModule],
})
export class AccessibilityControlsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _allow_dark_mode = this._settings.signal('allow_dark_mode', false);

    public readonly can_change_dark_mode = computed(
        () => !!this._allow_dark_mode(),
    );

    public readonly dark_mode = computed(
        () =>
            this.can_change_dark_mode() &&
            this._settings.theme_signal() === 'dark',
    );

    public setDarkMode(state: boolean) {
        this.timeout(
            'dark_mode',
            () => {
                const theme = this._settings.theme_signal();
                if (state && theme !== 'dark') this._settings.setTheme('dark');
                else if (!state && theme === 'dark')
                    this._settings.setTheme('light');
            },
            100,
        );
    }
}
