import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { MatSelectModule } from '@angular/material/select';
import { queryAllBookings } from '@placeos/bookings';
import {
    getTimezoneDifferenceInHours,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    User,
} from '@placeos/common';
import { FullscreenModalShellComponent } from '@placeos/components';
import { queryAllEvents } from '@placeos/events';
import { UserListFieldComponent } from '@placeos/form-fields';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type BroadcastRecipientGroup = 'rooms' | 'desks' | 'parking' | 'all' | 'custom';

@Component({
    selector: 'broadcast-email-modal',
    template: `
        <fullscreen-modal-shell
            heading="Broadcast Email"
            [loading]="loading()"
            confirm_text="Send Email"
            [confirm_disabled]="send_disabled()"
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
                    for="recipient_group"
                    [class.error]="
                        form.controls.recipient_group.invalid &&
                        form.controls.recipient_group.touched
                    "
                >
                    Send to<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="recipient_group"
                        formControlName="recipient_group"
                    >
                        @for (option of recipient_options; track option.id) {
                            <mat-option [value]="option.id">
                                {{ option.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (form.controls.recipient_group.value !== 'custom') {
                    <div class="-mt-4 mb-4 text-sm opacity-60">
                        Recipients are resolved from today's bookings for the
                        active building or region.
                    </div>
                }

                @if (form.controls.recipient_group.value === 'custom') {
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
                        <div class="text-error -mt-4 mb-4 text-sm">
                            @if (
                                form.controls.recipients.hasError('required')
                            ) {
                                At least one recipient is required
                            } @else if (
                                form.controls.recipients.hasError(
                                    'invalidEmails'
                                )
                            ) {
                                Some email addresses are invalid
                            }
                        </div>
                    }
                }

                <div class="border-base-200 bg-base-100 mb-4 rounded border">
                    <div
                        class="flex items-center justify-between px-4 py-3 text-sm"
                    >
                        <span class="opacity-60">Recipients</span>
                        @if (resolving_recipients()) {
                            <span>Loading...</span>
                        } @else {
                            <span>{{ recipient_count() }}</span>
                        }
                    </div>
                    @if (!resolving_recipients() && recipient_count()) {
                        <ul
                            class="border-base-200 max-h-40 overflow-y-auto border-t px-4 py-2 text-sm"
                        >
                            @for (email of recipients(); track email) {
                                <li class="truncate py-1">{{ email }}</li>
                            }
                        </ul>
                    } @else if (!resolving_recipients()) {
                        <div
                            class="border-base-200 border-t px-4 py-3 text-sm opacity-60"
                        >
                            No recipients found
                        </div>
                    }
                </div>

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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FullscreenModalShellComponent,
        UserListFieldComponent,
    ],
})
export class BroadcastEmailModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<BroadcastEmailModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly loading = signal('');
    public readonly resolving_recipients = signal(false);
    public readonly recipients = signal<string[]>([]);
    public readonly recipient_count = computed(() => this.recipients().length);
    private readonly _form_changes = signal(0);
    private _recipient_request = 0;
    public readonly recipient_options: {
        id: BroadcastRecipientGroup;
        name: string;
    }[] = [
        { id: 'rooms', name: 'All room hosts & attendees' },
        { id: 'desks', name: 'All desk hosts' },
        { id: 'parking', name: 'All parking hosts' },
        { id: 'all', name: 'All room, desk & parking users' },
        { id: 'custom', name: 'Custom list' },
    ];

    public readonly form = new FormGroup({
        subject: new FormControl('', Validators.required),
        recipient_group: new FormControl<BroadcastRecipientGroup>('custom', {
            nonNullable: true,
            validators: Validators.required,
        }),
        recipients: new FormControl<User[]>([], {
            nonNullable: true,
            validators: this._validateRecipients,
        }),
        message_plaintext: new FormControl('', Validators.required),
    });

    public readonly send_disabled = computed(() => {
        this._form_changes();
        const is_custom = this.form.controls.recipient_group.value === 'custom';
        return (
            !!this.loading() ||
            this.resolving_recipients() ||
            this.form.controls.subject.invalid ||
            this.form.controls.message_plaintext.invalid ||
            this.form.controls.recipient_group.invalid ||
            (is_custom && this.form.controls.recipients.invalid) ||
            !this.recipient_count()
        );
    });

    constructor() {
        this.form.controls.recipient_group.valueChanges
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateRecipients());
        this.form.controls.recipients.valueChanges
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateRecipients());
        this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
            this._form_changes.update((value) => value + 1);
        });
        this.form.statusChanges
            .pipe(takeUntilDestroyed())
            .subscribe(() => this._form_changes.update((value) => value + 1));
        this.updateRecipients();
    }

    public async sendEmail() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        await this.updateRecipients();
        const is_custom = this.form.controls.recipient_group.value === 'custom';
        if (this.send_disabled()) return;
        const mod = this._org.module('smtp', 'Mailer');
        if (!mod) {
            return notifyError(
                'Mailing system is not configured for this application',
            );
        }
        const { subject, message_plaintext } = this.form.getRawValue();
        const recipient_list = this.recipients();
        if (!recipient_list.length) {
            if (is_custom) {
                this.form.controls.recipients.setErrors({ required: true });
            }
            notifyError('No matching recipients found.');
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

    public async updateRecipients() {
        const request_id = ++this._recipient_request;
        const recipient_group = this.form.controls.recipient_group.value;
        if (recipient_group === 'custom') {
            this.resolving_recipients.set(false);
            this.recipients.set(
                this._validEmails(
                    this.form.controls.recipients.value.map(
                        (user) => user.email,
                    ),
                ),
            );
            return;
        }
        this.resolving_recipients.set(true);
        try {
            const recipient_list = await this._recipientList();
            if (request_id === this._recipient_request) {
                this.recipients.set(recipient_list);
            }
        } finally {
            if (request_id === this._recipient_request) {
                this.resolving_recipients.set(false);
            }
        }
    }

    private async _recipientList() {
        const recipient_group = this.form.controls.recipient_group.value;
        if (recipient_group === 'custom') {
            return this._validEmails(
                this.form.controls.recipients.value.map((user) => user.email),
            );
        }
        const period_start = addMinutes(
            startOfDay(Date.now()),
            this._tzOffset() * 60,
        );
        const period_end = addMinutes(
            endOfDay(Date.now()),
            this._tzOffset() * 60,
        );
        const query = {
            period_start: getUnixTime(period_start),
            period_end: getUnixTime(period_end),
            limit: 1000,
        };
        const zone_ids = this._activeZoneIds().join(',');
        const rooms_request =
            recipient_group === 'rooms' || recipient_group === 'all'
                ? queryAllEvents({ ...query, zone_ids }).catch(() => [])
                : Promise.resolve([]);
        const desks_request =
            recipient_group === 'desks' || recipient_group === 'all'
                ? queryAllBookings({
                      ...query,
                      zones: zone_ids,
                      type: 'desk',
                      include_checked_out: true,
                  }).catch(() => [])
                : Promise.resolve([]);
        const parking_request =
            recipient_group === 'parking' || recipient_group === 'all'
                ? queryAllBookings({
                      ...query,
                      zones: zone_ids,
                      type: 'parking',
                      include_checked_out: true,
                  }).catch(() => [])
                : Promise.resolve([]);
        const [rooms, desks, parking] = await Promise.all([
            rooms_request,
            desks_request,
            parking_request,
        ]);
        return this._validEmails([
            ...rooms.flatMap((event) => [
                event.host,
                ...(event.attendees || []).map((user) => user.email),
            ]),
            ...desks.flatMap((booking) => [
                booking.user_email,
                booking.booked_by_email,
            ]),
            ...parking.flatMap((booking) => [
                booking.user_email,
                booking.booked_by_email,
            ]),
        ]);
    }

    private _validEmails(emails: string[]) {
        const email_set = new Set<string>();
        for (const email of emails) {
            const value = (email || '').trim().toLowerCase();
            if (EMAIL_REGEX.test(value)) email_set.add(value);
        }
        return [...email_set];
    }

    private _activeZoneIds() {
        const default_zones = this._settings.get('app.use_region')
            ? this._org.buildingsForRegion(this._org.region).map((_) => _.id)
            : [this._org.building?.id];
        return default_zones.filter((zone_id) => !!zone_id);
    }

    private _tzOffset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building?.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
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
