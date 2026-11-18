import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import {
    AsyncHandler,
    errorMessage,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    Invoice,
    InvoiceStatus,
    PaymentAmountPipe,
    PaymentsService,
    PaymentStatusComponent,
} from '@placeos/payments';
import { InvoiceCreateModalComponent } from './invoice-create-modal.component';

const PAGE_SIZE = 50;

const STATUSES: InvoiceStatus[] = [
    'requested',
    'draft',
    'open',
    'paid',
    'void',
];

/**
 * Invoices of all users. Staff send the invoices that users request, and
 * make new invoices for products and services.
 */
@Component({
    selector: 'invoices-list',
    template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-72">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    type="email"
                    [placeholder]="'PAYMENTS.FILTER_USER' | translate"
                    [ngModel]="user_email()"
                    (ngModelChange)="user_email.set($event); reload(true)"
                />
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="status()"
                    (ngModelChange)="status.set($event); reload()"
                    [placeholder]="'PAYMENTS.ALL_STATUSES' | translate"
                >
                    <mat-option value="">{{
                        'PAYMENTS.ALL_STATUSES' | translate
                    }}</mat-option>
                    @for (item of statuses; track item) {
                        <mat-option [value]="item">{{
                            status_key(item) | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-1"></div>
            <button
                btn
                matRipple
                name="new-invoice"
                data-shortcut="new"
                (click)="create()"
            >
                <icon class="mr-2 text-xl">add</icon>
                {{ 'PAYMENTS.NEW_INVOICE' | translate }}
            </button>
        </div>
        @if (error()) {
            <div class="bg-base-200 rounded-lg p-8 text-center">
                {{ error() }}
            </div>
        } @else {
            <div
                class="border-base-200 overflow-hidden rounded-lg border text-sm"
                role="table"
            >
                <div
                    role="row"
                    class="bg-base-200 grid grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DATE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.NUMBER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.USER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3 text-right">
                        {{ 'PAYMENTS.AMOUNT' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of invoices(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 grid grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem] items-center border-t"
                    >
                        <div role="cell" class="p-3">
                            {{ item.created_at * 1000 | date: 'mediumDate' }}
                        </div>
                        <div role="cell" class="truncate p-3 font-mono text-xs">
                            {{ item.number || '–' }}
                        </div>
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate">{{ item.user_name }}</div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.billing?.email || item.user_email }}
                                @if (item.billing?.company) {
                                    · {{ item.billing?.company }}
                                }
                            </div>
                        </div>
                        <div role="cell" class="p-3 text-right">
                            {{ item.amount | amount: item.currency }}
                        </div>
                        <div role="cell" class="p-3">
                            <payment-status [status]="item.status" />
                        </div>
                        <div role="cell" class="flex justify-end gap-1 p-1">
                            @if (
                                item.status === 'requested' ||
                                item.status === 'draft'
                            ) {
                                <button
                                    btn
                                    matRipple
                                    class="inverse"
                                    [name]="'send-' + item.id"
                                    (click)="send(item)"
                                >
                                    {{ 'PAYMENTS.SEND' | translate }}
                                </button>
                            }
                            @if (item.pdf_url || item.url) {
                                <a
                                    icon
                                    matRipple
                                    target="_blank"
                                    rel="noopener"
                                    [href]="item.pdf_url || item.url"
                                    [attr.aria-label]="
                                        'PAYMENTS.VIEW_INVOICE' | translate
                                    "
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            }
                        </div>
                    </div>
                } @empty {
                    @if (!loading()) {
                        <div class="p-8 text-center opacity-70">
                            {{ 'PAYMENTS.EMPTY_INVOICES' | translate }}
                        </div>
                    }
                }
            </div>
            @if (loading()) {
                <div class="flex justify-center p-4">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else if (cursor()) {
                <button
                    btn
                    matRipple
                    class="inverse my-4 w-full"
                    (click)="load(true)"
                >
                    {{ 'PAYMENTS.LOAD_MORE' | translate }}
                </button>
            }
        }
    `,
    imports: [
        DatePipe,
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TranslatePipe,
    ],
})
export class InvoicesListComponent extends AsyncHandler implements OnInit {
    private _payments = inject(PaymentsService);
    private _dialog = inject(MatDialog);
    private _load_id = 0;

    public readonly statuses = STATUSES;
    public readonly user_email = signal('');
    public readonly status = signal<InvoiceStatus | ''>('');
    public readonly invoices = signal<Invoice[]>([]);
    public readonly cursor = signal<string | undefined>(undefined);
    public readonly loading = signal(false);
    public readonly error = signal('');

    public readonly status_key = (status: string) =>
        `PAYMENTS.STATUS_${status.toUpperCase()}`;

    public ngOnInit() {
        this.load();
    }

    public reload(debounce = false) {
        if (debounce) this.timeout('reload', () => this.load(), 400);
        else this.load();
    }

    public async load(more = false) {
        const id = ++this._load_id;
        this.loading.set(true);
        this.error.set('');
        try {
            const page = await this._payments.call('list_invoices', {
                user_email: this.user_email().trim() || undefined,
                status: this.status() || undefined,
                limit: PAGE_SIZE,
                cursor: more ? this.cursor() : undefined,
            });
            if (id !== this._load_id) return;
            this.invoices.update((list) =>
                more ? [...list, ...page.items] : page.items,
            );
            this.cursor.set(page.next_cursor);
        } catch (e) {
            if (id !== this._load_id) return;
            this.error.set(
                i18n('PAYMENTS.LOAD_ERROR', { error: errorMessage(e) || e }),
            );
        } finally {
            if (id === this._load_id) this.loading.set(false);
        }
    }

    public async send(invoice: Invoice) {
        try {
            const sent = await this._payments.call(
                'send_invoice',
                invoice.id,
                null,
            );
            this.invoices.update((list) =>
                list.map((item) => (item.id === sent.id ? sent : item)),
            );
            notifySuccess(i18n('PAYMENTS.INVOICE_SENT'));
        } catch (e) {
            notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
        }
    }

    public create() {
        this._dialog
            .open(InvoiceCreateModalComponent)
            .afterClosed()
            .subscribe((done) => (done ? this.load() : null));
    }
}
