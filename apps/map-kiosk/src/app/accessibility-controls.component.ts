import {
    Component,
    computed,
    HostListener,
    inject,
    signal,
} from '@angular/core';
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
        <button
            matRipple
            class="hover:bg-base-200 flex w-full items-center justify-between rounded-sm p-2"
            (click)="setIsometric(!isometric())"
        >
            <div>Isometric View</div>
            <mat-slide-toggle
                [ngModel]="isometric()"
                (ngModelChange)="setIsometric($event)"
            ></mat-slide-toggle>
        </button>
        <!-- <button
            matRipple
            class="flex items-center justify-between hover:bg-base-200 w-full p-2 rounded-sm"
            (click)="applySetting('accessible', !accessible())"
        >
            <div>Text Size</div>
            <mat-slide-toggle
                [ngModel]="accessible()"
                (ngModelChange)="applySetting('accessible', $event)"
            ></mat-slide-toggle>
        </button>
        <div class="flex items-center pl-2 space-x-4" *ngIf="accessible()">
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
                    [ngModel]="font_size()"
                    (ngModelChange)="applySetting('font_size', $event)"
                />
            </mat-slider>
            <div class="text-2xl">A</div>
            <div
                class="text-base py-1 px-2 rounded-sm bg-base-300 text-base-content my-2"
            >
                {{ font_size() }}px
            </div>
        </div> -->
    `,
    styles: [``],
    imports: [MatRippleModule, MatSlideToggleModule, FormsModule],
})
export class AccessibilityControlsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _allow_dark_mode = this._settings.signal('allow_dark_mode', false);
    private _accessible = this._settings.signal('accessible', false, true);
    private _font_size = this._settings.signal<number>('font_size', 16, true);

    public readonly can_change_dark_mode = computed(
        () => !!this._allow_dark_mode(),
    );

    public readonly dark_mode = computed(
        () =>
            this.can_change_dark_mode() &&
            this._settings.theme_signal() === 'dark',
    );

    public readonly isometric = signal(
        localStorage.getItem('KIOSK.isometric') === 'true',
    );

    @HostListener('window:isometric-change', ['$event'])
    public onIsometricChange(event: Event) {
        this.isometric.set((event as CustomEvent<boolean>).detail);
    }

    public setIsometric(state: boolean) {
        this.isometric.set(state);
        localStorage.setItem('KIOSK.isometric', String(state));
        window.dispatchEvent(
            new CustomEvent('isometric-change', { detail: state }),
        );
    }

    public readonly accessible = computed(() => !!this._accessible());

    public readonly font_size = computed(() => this._font_size() || 16);

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
                const theme = this._settings.theme_signal();
                if (state && theme !== 'dark') this._settings.setTheme('dark');
                else if (!state && theme === 'dark')
                    this._settings.setTheme('light');
            },
            100,
        );
    }
}
