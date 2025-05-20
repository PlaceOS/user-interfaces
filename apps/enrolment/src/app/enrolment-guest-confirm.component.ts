import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-guest-confirm',
    template: `
        <div
            class="mx-auto my-4 w-[480px] max-w-[calc(100vw-2rem)] rounded border border-base-200 bg-base-100 p-4 shadow"
            [formGroup]="form"
        >
            <h3 class="mb-4 text-center text-xl font-medium">
                Confirm your details
            </h3>
            <div class="flex flex-col">
                <label>Name:</label>
                <mat-form-field appearance="outline">
                    <input matInput formControlName="name" placeholder="Name" />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label>Email:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        formControlName="email"
                        placeholder="Email"
                    />
                    <mat-error>Email Address is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label>Organisation:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        formControlName="organisation"
                        placeholder="Organisation"
                    />
                    <mat-error>Organisation is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex min-h-12 flex-col">
                <label>Identification:</label>
                <div class="mb-4 border border-base-200 bg-base-200 p-2">
                    <upload-list formControlName="attachments"></upload-list>
                </div>
            </div>
            <div class="mb-4 flex flex-col" *ngIf="check_vaccine">
                <label>Vaccination Proof:</label>
                <upload-file formControlName="vaccination_proof"></upload-file>
            </div>
            <mat-checkbox
                formControlName="accepted_terms_conditions"
                class="mb-4"
            >
                Accept Terms and Conditions
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-4">
                <button
                    btn
                    matRipple
                    class="inverse w-32"
                    [disabled]="!form.valid"
                    (click)="updateGuest()"
                >
                    {{ 'COMMON.UPDATE' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form.valid"
                    (click)="checkin()"
                >
                    {{ 'COMMON.CHECK_IN' | translate }}
                </button>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class EnrolmentGuestConfirmComponent {
    public readonly form = this._state.form;
    public readonly updateGuest = () => this._state.updateGuest();
    public readonly checkin = () => this._state.checkin();

    public get check_vaccine() {
        return this._settings.get('app.guests.vaccine_check');
    }

    constructor(
        private _state: EnrolmentStateService,
        private _settings: SettingsService,
    ) {}
}
