import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    UploadFileFieldComponent,
    UploadListFieldComponent,
} from '@placeos/form-fields';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-guest-confirm',
    template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-4 w-120 max-w-[calc(100vw-2rem)] rounded-sm border p-4 shadow-sm"
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
                <div class="border-base-200 bg-base-200 mb-4 border p-2">
                    <upload-list formControlName="attachments"></upload-list>
                </div>
            </div>
            @if (check_vaccine) {
                <div class="mb-4 flex flex-col">
                    <label>Vaccination Proof:</label>
                    <upload-file
                        formControlName="vaccination_proof"
                    ></upload-file>
                </div>
            }
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
    imports: [
        ReactiveFormsModule,
        TranslatePipe,
        MatCheckboxModule,
        UploadFileFieldComponent,
        UploadListFieldComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class EnrolmentGuestConfirmComponent {
    private _state = inject(EnrolmentStateService);
    private _settings = inject(SettingsService);

    public readonly form = this._state.form;
    public readonly updateGuest = () => this._state.updateGuest();
    public readonly checkin = () => this._state.checkin();

    public get check_vaccine() {
        return this._settings.get('app.guests.vaccine_check');
    }
}
