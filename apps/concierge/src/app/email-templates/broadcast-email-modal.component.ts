import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';
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
            <form class="mx-auto flex max-w-3xl flex-col">
                <label
                    for="subject"
                    [class.error]="
                        form.subject().invalid() && form.subject().touched()
                    "
                >
                    Subject<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [formField]="form.subject"
                        placeholder="Email subject"
                    />
                    @if (
                        form.subject().invalid() && form.subject().touched()
                    ) {
                        <mat-error>A subject line is required</mat-error>
                    }
                </mat-form-field>

                <label
                    for="recipient_group"
                    [class.error]="
                        form.recipient_group().invalid() &&
                        form.recipient_group().touched()
                    "
                >
                    Send to<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.recipient_group">
                        @for (option of recipient_options; track option.id) {
                            <mat-option [value]="option.id">
                                {{ option.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (model().recipient_group !== 'custom') {
                    <div class="-mt-4 mb-4 text-sm opacity-60">
                        Recipients are resolved from today's bookings for the
                        active building or region.
                    </div>
                }

                @if (model().recipient_group === 'custom') {
                    <label
                        [class.error]="
                            form.recipients().invalid() &&
                            form.recipients().touched()
                        "
                    >
                        Recipients<span>*</span>
                    </label>
                    <a-user-list-field
                        [formField]="form.recipients"
                        [hide_actions]="true"
                    ></a-user-list-field>
                    @if (
                        form.recipients().invalid() &&
                        form.recipients().touched()
                    ) {
                        <div class="text-error -mt-4 mb-4 text-sm">
                            @if (recipientsHasError('required')) {
                                At least one recipient is required
                            } @else if (recipientsHasError('invalidEmails')) {
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
                        form.message_plaintext().invalid() &&
                        form.message_plaintext().touched()
                    "
                >
                    Plaintext body<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        rows="12"
                        [formField]="form.message_plaintext"
                        placeholder="Plaintext email body"
                    ></textarea>
                    @if (
                        form.message_plaintext().invalid() &&
                        form.message_plaintext().touched()
                    ) {
                        <mat-error>A plaintext body is required</mat-error>
                    }
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FormField,
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

    public readonly model = signal({
        subject: '',
        recipient_group: 'custom' as BroadcastRecipientGroup,
        recipients: [] as User[],
        message_plaintext: '',
    });

    public readonly form = form(this.model, (p) => {
        required(p.subject);
        required(p.recipient_group);
        required(p.message_plaintext);
        validate(p.recipients, ({ value }) => {
            const list = value() || [];
            if (!list.length) return { kind: 'required' };
            if (list.some((user) => !EMAIL_REGEX.test(user.email)))
                return { kind: 'invalidEmails' };
            return undefined;
        });
    });

    public readonly send_disabled = computed(() => {
        const is_custom = this.model().recipient_group === 'custom';
        return (
            !!this.loading() ||
            this.resolving_recipients() ||
            this.form.subject().invalid() ||
            this.form.message_plaintext().invalid() ||
            this.form.recipient_group().invalid() ||
            (is_custom && this.form.recipients().invalid()) ||
            !this.recipient_count()
        );
    });

    constructor() {
        // Re-resolve recipients whenever the group or the custom list changes.
        effect(() => {
            this.form.recipient_group().value();
            this.form.recipients().value();
            untracked(() => this.updateRecipients());
        });
    }

    public recipientsHasError(kind: string): boolean {
        return this.form
            .recipients()
            .errors()
            .some((error) => error.kind === kind);
    }

    public async sendEmail() {
        this.form().markAsTouched();
        await this.updateRecipients();
        if (this.send_disabled()) return;
        const mod = this._org.module('smtp', 'Mailer');
        if (!mod) {
            return notifyError(
                'Mailing system is not configured for this application',
            );
        }
        const { subject, message_plaintext } = this.model();
        const recipient_list = this.recipients();
        if (!recipient_list.length) {
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
        const recipient_group = this.model().recipient_group;
        if (recipient_group === 'custom') {
            this.resolving_recipients.set(false);
            this.recipients.set(
                this._validEmails(
                    this.model().recipients.map((user) => user.email),
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
        const recipient_group = this.model().recipient_group;
        if (recipient_group === 'custom') {
            return this._validEmails(
                this.model().recipients.map((user) => user.email),
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
            ...rooms.flatMap((event) => {
                const room_emails = new Set(
                    [event.system, ...(event.resources || [])]
                        .map((room) => room?.email?.trim().toLowerCase())
                        .filter((email) => !!email),
                );
                return [
                    event.host,
                    ...(event.attendees || [])
                        .filter((user) => !user.resource)
                        .map((user) => user.email),
                ].filter(
                    (email) => !room_emails.has(email.trim().toLowerCase()),
                );
            }),
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
}
