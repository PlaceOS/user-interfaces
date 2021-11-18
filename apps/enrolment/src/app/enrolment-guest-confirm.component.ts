import { Component } from '@angular/core';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-guest-confirm',
    template: `
        <div
            class="bg-white p-4 mx-auto my-4 border border-gray-300 shadow w-[480px] max-w-[calc(100vw-2rem)] rounded"
            [formGroup]="form"
        >
            <h3 class="text-center text-xl font-medium mb-4">
                Confirm your details
            </h3>
            <div class="flex flex-col">
                <label>Name:</label>
                <mat-form-field appearance="outline">
                    <input matInput formControlName="name" placeholder="Name" />
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
                </mat-form-field>
            </div>
            <upload-list formControlName="attachments"></upload-list>
            <mat-checkbox
                formControlName="accepted_terms_conditions"
                class="mb-4"
            >
                Accept Terms and Conditions
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-4">
                <button
                    mat-button
                    class="w-32"
                    [disabled]="!form.value.accepted_terms_conditions"
                    (click)="updateGuest()"
                >
                    Save
                </button>
                <button
                    mat-button
                    class="w-32"
                    [disabled]="!form.value.accepted_terms_conditions"
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

    constructor(private _state: EnrolmentStateService) {}
}
