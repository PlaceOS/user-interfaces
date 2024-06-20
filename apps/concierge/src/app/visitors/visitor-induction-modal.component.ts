import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'visitor-induction-modal',
    template: `
        <div
            class="relative bg-base-100 rounded shadow overflow-hidden flex flex-col items-center w-[32rem] p-4"
        >
            <p class="my-4">
                Please read the induction information below before proceeding
            </p>
            <div
                class="rounded border border-base-300 w-full p-4 opacity-60 text-sm overflow-y-auto overflow-x-hidden max-h-[50vh] whitespace-pre-wrap"
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
                    class="w-32 clear underline"
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
})
export class VisitorInductionModalComponent {
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

    constructor(private _settings: SettingsService) {}
}
