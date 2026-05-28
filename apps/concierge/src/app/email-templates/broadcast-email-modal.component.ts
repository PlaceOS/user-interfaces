import { Component, inject, signal } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    notifyError,
    notifySuccess,
    OrganisationService,
    User,
} from '@placeos/common';
import { FullscreenModalShellComponent } from '@placeos/components';
import { UserListFieldComponent } from '@placeos/form-fields';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

@Component({
    selector: 'broadcast-email-modal',
    template: `
        <fullscreen-modal-shell
            heading="Broadcast Email"
            [loading]="loading()"
            confirm_text="Send Email"
            (confirm)="sendEmail()"
        >
            <form class="mx-auto flex max-w-3xl flex-col" [formGroup]="form">
                <label
                    for="subject"
                    [class.error]="
                        form.controls.subject.invalid &&
                        form.controls.subject.touched
                    "
                >
                    Subject<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="subject"
                        formControlName="subject"
                        placeholder="Email subject"
                    />
                    @if (
                        form.controls.subject.invalid &&
                        form.controls.subject.touched
                    ) {
                        <mat-error>A subject line is required</mat-error>
                    }
                </mat-form-field>

                <label
                    [class.error]="
                        form.controls.recipients.invalid &&
                        form.controls.recipients.touched
                    "
                >
                    Recipients<span>*</span>
                </label>
                <a-user-list-field
                    name="recipients"
                    formControlName="recipients"
                    [hide_actions]="true"
                ></a-user-list-field>
                @if (
                    form.controls.recipients.invalid &&
                    form.controls.recipients.touched
                ) {
                    <div class="-mt-4 mb-4 text-sm text-error">
                        @if (form.controls.recipients.hasError('required')) {
                            At least one recipient is required
                        } @else if (
                            form.controls.recipients.hasError('invalidEmails')
                        ) {
                            Some email addresses are invalid
                        }
                    </div>
                }

                <label
                    for="message_plaintext"
                    [class.error]="
                        form.controls.message_plaintext.invalid &&
                        form.controls.message_plaintext.touched
                    "
                >
                    Plaintext body<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="message_plaintext"
                        rows="12"
                        formControlName="message_plaintext"
                        placeholder="Plaintext email body"
                    ></textarea>
                    @if (
                        form.controls.message_plaintext.invalid &&
                        form.controls.message_plaintext.touched
                    ) {
                        <mat-error>A plaintext body is required</mat-error>
                    }
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FullscreenModalShellComponent,
        UserListFieldComponent,
    ],
})
export class BroadcastEmailModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<BroadcastEmailModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);

    public readonly loading = signal('');

    public readonly form = new FormGroup({
        subject: new FormControl('', Validators.required),
        recipients: new FormControl<User[]>([], {
            nonNullable: true,
            validators: this._validateRecipients,
        }),
        message_plaintext: new FormControl('', Validators.required),
    });

    public async sendEmail() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        const mod = this._org.module('smtp', 'Mailer');
        if (!mod) {
            return notifyError(
                'Mailing system is not configured for this application',
            );
        }
        const { subject, message_plaintext } = this.form.getRawValue();
        const recipient_list = this.form.controls.recipients.value
            .map((user) => user.email)
            .filter((email) => !!email);
        if (!recipient_list.length) {
            this.form.controls.recipients.setErrors({ required: true });
            return;
        }
        const to =
            recipient_list.length === 1 ? recipient_list[0] : recipient_list;
        this.loading.set('Sending email...');
        try {
            await mod.execute('send_mail', [to, subject, message_plaintext]);
            notifySuccess('Broadcast email sent.');
            this._dialog_ref.close(true);
        } catch (error) {
            notifyError(`Failed to send broadcast email. Error: ${error}`);
        } finally {
            this.loading.set('');
        }
    }

    private _validateRecipients(
        control: AbstractControl<User[]>,
    ): ValidationErrors | null {
        const value = control.value || [];
        if (!value || !value.length) return { required: true };
        const has_invalid = value.some((user) => !EMAIL_REGEX.test(user.email));
        if (has_invalid) return { invalidEmails: true };
        return null;
    }
}
