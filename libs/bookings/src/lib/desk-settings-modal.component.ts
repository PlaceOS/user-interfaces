import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { DeskHeightPresetsComponent } from 'libs/components/src/lib/desk-height-presets.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'desk-settings-modal',
    template: `
        @if (!edit_presets) {
            <div class="relative w-[20rem] rounded bg-base-100 p-4 shadow">
                <div class="text-lg">Desk Height</div>
                <div class="mb-4 text-xs opacity-60">
                    Set your desk height for the best experience
                </div>
                <div class="mb-4 mt-2 flex flex-col">
                    <label>Presets</label>
                    <div class="flex items-center space-x-2 pb-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1"
                        >
                            <mat-select
                                placeholder="No selected preset"
                                [(ngModel)]="preset"
                                (ngModelChange)="setPreset($event)"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option value="standing"
                                    >Standing</mat-option
                                >
                                <mat-option value="sitting">Seated</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            (click)="edit_presets = true"
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                        >
                            <icon>edit</icon>
                        </button>
                    </div>
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
                            <input
                                matSliderThumb
                                [(ngModel)]="height"
                                (ngModelChange)="updatePreset(height)"
                            />
                        </mat-slider>
                        <div class="w-12 text-right text-sm">
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
                    class="absolute right-2 top-2"
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <desk-height-presets
                [show_close]="true"
                (close)="edit_presets = false"
            />
        }
    `,
    styles: [],
    imports: [
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        MatRippleModule,
        FormsModule,
        DeskHeightPresetsComponent,
    ],
})
export class DeskSettingsModalComponent {
    private _data = inject<{
        id: string;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog_ref =
        inject<MatDialogRef<DeskSettingsModalComponent>>(MatDialogRef);

    public readonly desk_id = this._data.id;
    public edit_presets = false;
    public preset: string;
    public height = 71;

    public ngOnInit() {
        const sitting_height = this._settings.get('desk_sitting_height');
        const standing_height = this._settings.get('desk_standing_height');
        if (!sitting_height && !standing_height) {
            this.edit_presets = true;
        }
        const last_height = parseInt(
            localStorage.getItem('PLACEOS.last_desk_height'),
            10,
        );
        this.height = last_height || sitting_height || 71;
        if (this.height === sitting_height) {
            this.preset = 'sitting';
        } else if (this.height === standing_height) {
            this.preset = 'standing';
        }
    }

    public updatePreset(new_height: number) {
        const sitting_height = this._settings.get('desk_sitting_height') || 71;
        const standing_height =
            this._settings.get('desk_standing_height') || 102;
        if (new_height === sitting_height) {
            this.preset = 'sitting';
        } else if (new_height === standing_height) {
            this.preset = 'standing';
        } else {
            this.preset = null;
        }
    }

    public setPreset(value: string) {
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
        const mod = this._org.module('desks', 'DeskControl');
        localStorage.setItem('PLACEOS.last_desk_height', `${this.height}`);
        if (!mod) return this._dialog_ref.close();
        await mod
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
