import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { SettingsService } from '@placeos/common';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'desk-height-presets',
    template: `
        <div class="relative w-[20rem] rounded bg-base-100 p-4 shadow">
            <div class="mb-2 text-lg">
                {{ 'COMMON.DESK_HEIGHT_TITLE' | translate }}
            </div>
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_MSG' | translate }}
            </div>
            @if (not_set && show_close()) {
                <div
                    class="-mx-2 mb-4 rounded bg-warning p-2 text-xs text-warning-content"
                >
                    {{ 'COMMON.DESK_HEIGHT_NOT_SET' | translate }}
                </div>
            }
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_INFO' | translate }}
            </div>
            <div class="mt-2 flex flex-col">
                <label>{{ 'COMMON.DESK_HEIGHT_SITTING' | translate }}</label>
                <div class="flex items-center space-x-2">
                    <mat-slider
                        min="60"
                        max="80"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [(ngModel)]="desk_sitting_height"
                            (ngModelChange)="
                                saveSetting('desk_sitting_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="w-12 text-right text-sm">
                        {{ desk_sitting_height.toFixed(1) }}cm
                    </div>
                </div>
                <label>{{ 'COMMON.DESK_HEIGHT_STANDING' | translate }}t</label>
                <div class="mr-2 flex items-center space-x-2">
                    <mat-slider
                        min="90"
                        max="120"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [(ngModel)]="desk_standing_height"
                            (ngModelChange)="
                                saveSetting('desk_standing_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="mr-2 w-12 text-right text-sm">
                        {{ desk_standing_height.toFixed(1) }}cm
                    </div>
                </div>
            </div>
            @if (show_close()) {
                <button btn matRipple (click)="onClose()" class="mt-2 w-full">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            }
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, MatRippleModule, MatSliderModule, FormsModule],
})
export class DeskHeightPresetsComponent {
    private _settings = inject(SettingsService);

    public readonly show_close = input(false);
    public readonly close = output<void>();
    public not_set = false;
    public desk_sitting_height = 71;
    public desk_standing_height = 101;

    public ngOnInit() {
        this.not_set =
            !this._settings.get('desk_sitting_height') &&
            !this._settings.get('desk_standing_height');
        this.desk_sitting_height =
            this._settings.get('desk_sitting_height') || 71;
        this.desk_standing_height =
            this._settings.get('desk_standing_height') || 101;
    }

    public onClose() {
        this.saveSetting('desk_sitting_height', this.desk_sitting_height);
        this.saveSetting('desk_standing_height', this.desk_standing_height);
        // TODO: The 'emit' function requires a mandatory void argument
        // TODO: The 'emit' function requires a mandatory void argument
        this.close.emit();
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }

    public saveSetting(name: string, value: any) {
        this._settings.saveUserSetting(name, value);
    }
}
