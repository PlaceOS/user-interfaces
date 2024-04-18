import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';
import { Router } from '@angular/router';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';

@Component({
    selector: '[checkin-induction]',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
        >
            <p class="my-4">
                Please read the induction information below before proceeding.
            </p>
            <p>{{ induction_details }}</p>
            <mat-checkbox [(ngModel)]="agree" class="mt-4"
                >I agree</mat-checkbox
            >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!agree"
                (click)="continue()"
            >
                Continue
            </button>
        </div>
    `,
    styles: [],
})
export class CheckinInductionComponent {
    public agree = false;
    public loading = false;

    public get induction_details() {
        return this._settings.get('app.induction_details');
    }

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
        private _settings: SettingsService
    ) {}

    public async continue() {
        this.loading = true;
        await this._checkin.completeInduction().catch((err) => {
            notifyError('Error completing induction', err);
            throw err;
        });
        notifySuccess('Induction completed successfully');
        this._router.navigate(['/checkin', 'details']);
    }
}
