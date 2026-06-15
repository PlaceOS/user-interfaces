import { Component, inject, signal } from '@angular/core';
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
import {
    OrganisationService,
    SettingsService,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { DeskHeightPresetsComponent } from 'libs/components/src/lib/desk-height-presets.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'desk-settings-modal',
    template: `
        @if (!edit_presets()) {
            <div
                class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm"
            >
                <div class="text-lg">Desk Height</div>
                <div class="mb-4 text-xs opacity-60">
                    Set your desk height for the best experience
                </div>
                <div class="mt-2 mb-4 flex flex-col">
                    <label>Presets</label>
                    <div class="flex items-center space-x-2 pb-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1"
                        >
                            <mat-select
                                placeholder="No selected preset"
                                [ngModel]="preset()"
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
                            (click)="edit_presets.set(true)"
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
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
                                [ngModel]="height()"
                                (ngModelChange)="updateHeight($event)"
                            />
                        </mat-slider>
                        <div class="w-12 text-right text-sm">
                            {{ height().toFixed(1) }}cm
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
                    class="absolute top-2 right-2"
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <desk-height-presets
                [show_close]="true"
                (close)="edit_presets.set(false)"
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
    public readonly edit_presets = signal(false);
    public readonly preset = signal<string | null>(null);
    public readonly height = signal(71);
    private readonly _sitting_height = this._settings.signal(
        'desk_sitting_height',
        71,
        true,
    );
    private readonly _standing_height = this._settings.signal(
        'desk_standing_height',
        102,
        true,
    );

    public ngOnInit() {
        const sitting_height = this._sitting_height();
        const standing_height = this._standing_height();
        if (!sitting_height && !standing_height) {
            this.edit_presets.set(true);
        }
        const last_height = parseInt(
            localStorage.getItem('PLACEOS.last_desk_height'),
            10,
        );
        this.height.set(last_height || sitting_height || 71);
        if (this.height() === sitting_height) {
            this.preset.set('sitting');
        } else if (this.height() === standing_height) {
            this.preset.set('standing');
        }
    }

    public updatePreset(new_height: number) {
        const sitting_height = this._sitting_height() || 71;
        const standing_height = this._standing_height() || 102;
        if (new_height === sitting_height) {
            this.preset.set('sitting');
        } else if (new_height === standing_height) {
            this.preset.set('standing');
        } else {
            this.preset.set(null);
        }
    }

    public updateHeight(new_height: number) {
        this.height.set(new_height);
        this.updatePreset(new_height);
    }

    public setPreset(value: string) {
        this.preset.set(value || null);
        switch (value) {
            case 'standing':
                this.height.set(this._standing_height() || 102);
                break;
            case 'sitting':
                this.height.set(this._sitting_height() || 71);
                break;
            default:
                this.height.set(70);
                break;
        }
    }

    public async setDeskHeight() {
        const mod = this._org.module('desks', 'DeskControl');
        localStorage.setItem('PLACEOS.last_desk_height', `${this.height()}`);
        if (!mod) return this._dialog_ref.close();
        await mod
            .execute('set_desk_height', [this.desk_id, this.height()])
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
