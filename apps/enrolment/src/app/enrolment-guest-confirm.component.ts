import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-guest-confirm',
    template: `
        <div
            class="bg-base-100 p-4 mx-auto my-4 border border-base-200 shadow w-[480px] max-w-[calc(100vw-2rem)] rounded"
            [formGroup]="form"
        >
            <h3 class="text-center text-xl font-medium mb-4">
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
            <div class="flex flex-col">
                <label>Identification:</label>
                <div class="bg-base-200 p-2 border border-base-200 mb-4">
                    <upload-list formControlName="attachments"></upload-list>
                </div>
            </div>
            <div class="flex flex-col mb-4" *ngIf="check_vaccine">
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
                    matRipple
                    class="w-32"
                    [disabled]="!form.valid"
                    (click)="updateGuest()"
                >
                    Save
                </button>
                <button
                    matRipple
                    class="w-32"
                    [disabled]="!form.valid"
                    (click)="checkin()"
                >
                    Check-in
                </button>
            </div>
        </div>
    `,
    styles: [``],
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
        private _settings: SettingsService
    ) {}
}
