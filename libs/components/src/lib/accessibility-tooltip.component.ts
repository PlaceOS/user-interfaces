import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {
    AsyncHandler,
    current_user,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { IconComponent } from './icon.component';
import { SettingsToggleComponent } from './settings-toggle.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'accessibility-tooltip',
    template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-[20rem] flex-col overflow-auto rounded-sm pb-3 shadow-sm"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
                (click)="close()"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                </div>
            </div>
            <div class="space-y-2 p-2">
                @if (can_change_dark_mode()) {
                    <settings-toggle
                        [ngModel]="dark_mode()"
                        (ngModelChange)="setDarkMode($event)"
                        [toggle]="true"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="-ml-2 text-xl">mode_night</icon>
                            <div>{{ 'COMMON.DARK_MODE' | translate }}</div>
                        </div>
                    </settings-toggle>
                }
                @if (can_locate()) {
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
                }
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
                            [ngModel]="font_size()"
                            (ngModelChange)="applySetting('font_size', $event)"
                        />
                    </mat-slider>
                    <span class="text-2xl">A</span>
                    <span
                        class="bg-base-300 my-2 rounded-sm px-2 py-1 text-base text-white"
                    >
                        {{ font_size() }}px
                    </span>
                </div>
            }
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatRippleModule,
        MatSliderModule,
        SettingsToggleComponent,
        IconComponent,
        TranslatePipe,
        FormsModule,
    ],
})
export class AccessibilityTooltipComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject(CustomTooltipData);
    private _settings = inject(SettingsService);

    public readonly accessible = signal(false);
    public readonly locatable = signal(false);
    public readonly can_locate = settingSignal(
        'allow_locatability_option',
        true,
    );
    private readonly _allow_dark_mode = this._settings.signal(
        'allow_dark_mode',
        false,
    );
    private readonly _font_size = this._settings.signal('font_size', 16, true);
    private readonly _accessible = this._settings.signal(
        'accessible',
        false,
        true,
    );
    private readonly _theme = this._settings.theme_signal;

    public readonly dark_mode = computed(() => this._theme() === 'dark');
    public readonly can_change_dark_mode = computed(
        () => !!this._allow_dark_mode(),
    );
    public readonly font_size = this._font_size;

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
        this.accessible.set(!!this._accessible());
        this.subscription(
            'user',
            current_user.subscribe((u) => {
                this.locatable.set(u.locatable);
            }),
        );
    }

    public setDarkMode(state: boolean) {
        const theme = this._theme();
        if (state && theme !== 'dark') this._settings.setTheme('dark');
        else if (!state && theme === 'dark') this._settings.setTheme('light');
    }
}
