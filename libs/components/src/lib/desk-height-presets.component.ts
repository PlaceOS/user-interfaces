import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'desk-height-presets',
    template: `
        <div class="relative p-4 bg-base-100 rounded shadow w-[20rem]">
            <div class="text-lg mb-2" i18n>Desk Height Presets</div>
            <div class="text-xs opacity-60 mb-4" i18n>
                Desk height presets allow you to store and recall your preferred
                desk height when checking into a booked desk that supports
                height adjustment.
            </div>
            <div
                class="text-xs mb-4 -mx-2 p-2 rounded bg-warning text-warning-content"
                *ngIf="not_set && show_close"
            >
                Before you can set a desk height, presets must be set
            </div>
            <div class="text-xs opacity-60 mb-4" i18n>
                Set your desk height for the best experience.
            </div>
            <div class="flex flex-col mt-2">
                <label>Sitting Height</label>
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
                    <div class="text-sm w-12 text-right">
                        {{ desk_sitting_height.toFixed(1) }}cm
                    </div>
                </div>
                <label>Standing Height</label>
                <div class="flex items-center space-x-2  mr-2">
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
                    <div class="text-sm w-12 text-right mr-2">
                        {{ desk_standing_height.toFixed(1) }}cm
                    </div>
                </div>
            </div>
            <button
                btn
                matRipple
                (click)="onClose()"
                class="w-full mt-2"
                *ngIf="show_close"
            >
                Save Presets
            </button>
        </div>
    `,
    styles: [``],
})
export class DeskHeightPresetsComponent {
    @Input() public show_close = false;
    @Output() public close = new EventEmitter<void>();
    public not_set = false;
    public desk_sitting_height = 71;
    public desk_standing_height = 101;

    constructor(private _settings: SettingsService) {}

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
        this.close.emit();
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }

    public saveSetting(name: string, value: any) {
        this._settings.saveUserSetting(name, value);
    }
}
