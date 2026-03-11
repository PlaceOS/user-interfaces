import { COMMA, ENTER, SEMICOLON, SPACE } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
} from '@placeos/components';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

@Component({
    selector: 'broadcast-email-modal',
    template: `
        <fullscreen-modal-shell
            heading="Broadcast Email"
            [loading]="loading"
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
                <mat-form-field appearance="outline" class="mb-4">
                    <mat-chip-grid
                        #chipGrid
                        aria-label="Recipients"
                        formControlName="recipients"
                    >
                        @for (email of recipients; track email) {
                            <mat-chip-row (removed)="removeRecipient(email)">
                                <span
                                    class="max-w-md truncate"
                                    [class.text-error]="!isValidEmail(email)"
                                >
                                    {{ email }}
                                </span>
                                <button
                                    matChipRemove
                                    [attr.aria-label]="'Remove ' + email"
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        placeholder="Enter email addresses..."
                        [matChipInputFor]="chipGrid"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addRecipient($event)"
                    />
                    <mat-hint>
                        Press Enter, comma, or semicolon to add recipients.
                    </mat-hint>
                    <mat-error>
                        @if (form.controls.recipients.hasError('required')) {
                            At least one recipient is required
                        } @else if (
                            form.controls.recipients.hasError('invalidEmails')
                        ) {
                            Some email addresses are invalid
                        }
                    </mat-error>
                </mat-form-field>

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
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        FullscreenModalShellComponent,
        IconComponent,
    ],
})
export class BroadcastEmailModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<BroadcastEmailModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);

    public loading = '';
    public recipients: string[] = [];
    public readonly separators = [ENTER, COMMA, SEMICOLON, SPACE];

    public readonly form = new FormGroup({
        subject: new FormControl('', Validators.required),
        recipients: new FormControl<string[]>([], this._validateRecipients),
        message_plaintext: new FormControl('', Validators.required),
    });

    public isValidEmail(email: string): boolean {
        return EMAIL_REGEX.test(email);
    }

    public addRecipient(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value
                .split(/[\n,;]+/)
                .map((e) => e.trim())
                .filter((e) => !!e);
            this.recipients.push(...emails);
            this.form.controls.recipients.setValue(this.recipients);
        }
        event.chipInput.clear();
    }

    public removeRecipient(email: string): void {
        const idx = this.recipients.indexOf(email);
        if (idx >= 0) {
            this.recipients.splice(idx, 1);
            this.form.controls.recipients.setValue([...this.recipients]);
        }
    }

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
        const recipient_list = this.recipients.filter((e) => !!e);
        if (!recipient_list.length) {
            this.form.controls.recipients.setErrors({ required: true });
            return;
        }
        const to =
            recipient_list.length === 1 ? recipient_list[0] : recipient_list;
        this.loading = 'Sending email...';
        try {
            await mod.execute('send_mail', [to, subject, message_plaintext]);
            notifySuccess('Broadcast email sent.');
            this._dialog_ref.close(true);
        } catch (error) {
            notifyError(`Failed to send broadcast email. Error: ${error}`);
        } finally {
            this.loading = '';
        }
    }

    private _validateRecipients(
        control: FormControl<string[]>,
    ): { [key: string]: boolean } | null {
        const value = control.value;
        if (!value || !value.length) return { required: true };
        const has_invalid = value.some((email) => !EMAIL_REGEX.test(email));
        if (has_invalid) return { invalidEmails: true };
        return null;
    }
}
