import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    firstTruthyValueFrom,
    i18n,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'user-parking-tooltip',
    template: `
        <div
            class="border-base-300 bg-base-100 min-w-[20rem] space-y-2 rounded-md border p-2"
        >
            <h3 class="border-base-300 border-b text-lg font-medium">
                {{ 'COMMON.CONTROLS_PARKING' | translate }}
            </h3>
            <div class="flex flex-col">
                <label for="plate-number">{{
                    'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                }}</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [(ngModel)]="plate_number"
                        [placeholder]="
                            'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                </mat-form-field>
            </div>
            <button btn matRipple class="w-full" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </div>
    `,
    styles: [``],
    imports: [MatFormFieldModule, MatInputModule, TranslatePipe, FormsModule],
})
export class UserParkingTooltipComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _tooltip = inject(CustomTooltipData, { optional: true });

    public readonly plate_number = signal('');

    public async ngOnInit() {
        await firstTruthyValueFrom(this._settings.initialised);
        this.plate_number.set(this._settings.get('plate_number') || '');
    }

    public save() {
        if (this.plate_number()) {
            this._settings.saveUserSetting('plate_number', this.plate_number());
        }
        notifySuccess(i18n('COMMON.PARKING_SETTINGS_SAVE'));
        this._tooltip?.close();
    }
}
