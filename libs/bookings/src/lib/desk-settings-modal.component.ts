import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';

@Component({
    selector: 'desk-settings-modal',
    template: `
        <div class="relative p-4 bg-base-100 rounded shadow w-[20rem]">
            <div class="text-lg" i18n>Desk Height</div>
            <div class="text-xs opacity-60 mb-4" i18n>
                Set your desk height for the best experience
            </div>
            <div class="flex flex-col mt-2 mb-4">
                <label>Presets</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        placeholder="No selected preset"
                        [(ngModel)]="preset"
                        (ngModelChange)="setPreset($event)"
                    >
                        <mat-option value="">None</mat-option>
                        <mat-option value="standing">Standing</mat-option>
                        <mat-option value="sitting">Seated</mat-option>
                    </mat-select>
                </mat-form-field>
                <label>Current Height</label>
                <div class="flex items-center space-x-2">
                    <mat-slider
                        min="60"
                        max="120"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input matSliderThumb [(ngModel)]="height" />
                    </mat-slider>
                    <div class="text-sm w-12 text-right">
                        {{ height.toFixed(1) }}cm
                    </div>
                </div>
            </div>
            <button btn matRipple (click)="setDeskHeight()" class="w-full">
                Apply Settings
            </button>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-0 right-0"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [],
})
export class DeskSettingsModalComponent {
    public readonly desk_id = this._data.id;
    public preset: string;
    public height = 71;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { id: string },
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog_ref: MatDialogRef<DeskSettingsModalComponent>
    ) {}

    public ngOnInit() {
        const sitting_height = this._settings.get('desk_sitting_height');
        const standing_height = this._settings.get('desk_standing_height');
        this.height = sitting_height || 71;
        if (this.height === sitting_height) {
            this.preset = 'sitting';
        } else if (this.height === standing_height) {
            this.preset = 'standing';
        }
    }

    public setPreset(value: string) {
        console.log('Set preset:', value);
        switch (value) {
            case 'standing':
                this.height = this._settings.get('desk_standing_height') || 102;
                break;
            case 'sitting':
                this.height = this._settings.get('desk_sitting_height') || 71;
                break;
            default:
                this.height = 70;
                break;
        }
    }

    public async setDeskHeight() {
        const sys_id = this._org.binding('desks');
        if (!sys_id) return this._dialog_ref.close();
        const module = getModule(sys_id, 'DeskControl');
        await module
            .execute('set_desk_height', [this.desk_id, this.height])
            .catch((_) => {
                notifyError('Error setting desk height.' + _);
                throw _;
            });
        notifySuccess('Successfully set desk height');
        this._dialog_ref.close();
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }
}
