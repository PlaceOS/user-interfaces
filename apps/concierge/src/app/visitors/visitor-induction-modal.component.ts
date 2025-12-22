import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'visitor-induction-modal',
    template: `
        <div
            class="bg-base-100 relative flex w-lg flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
        >
            <p class="my-4">
                Please read the induction information below before proceeding
            </p>
            <div
                class="border-base-300 max-h-[50vh] w-full overflow-x-hidden overflow-y-auto rounded-sm border p-4 text-sm whitespace-pre-wrap opacity-60"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                I agree
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    [mat-dialog-close]="false"
                >
                    Decline
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    [mat-dialog-close]="true"
                >
                    Accept
                </button>
            </div>
        </div>
    `,
    styles: [``],
    imports: [MatDialogModule, MatRippleModule, MatCheckboxModule, FormsModule],
})
export class VisitorInductionModalComponent {
    private _settings = inject(SettingsService);

    public agree = false;

    public get induction_details() {
        return this._settings.get('app.induction_details');
    }

    public get is_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }
}
