import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
    User,
} from '@placeos/common';
import {
    DIALOG_TITLE_STYLES,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import {
    PaymentAmountPipe,
    PaymentLineItemRequest,
    PaymentProduct,
    PaymentQuote,
    PaymentsService,
    unitKey,
} from '@placeos/payments';

interface InvoiceRow {
    product_id: string;
    quantity: number;
}

/** Limit of line items on one invoice */
const MAX_ROWS = 50;

/**
 * Bill a user for products and services. The driver prices the items.
 * Closes with `true` when the invoice is made.
 */
@Component({
    selector: 'invoice-create-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="flex-1 px-2 text-xl font-medium">
                {{ 'PAYMENTS.NEW_INVOICE' | translate }}
            </h2>
            <button
                icon
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (saving()) {
            <main
                class="flex h-48 w-lg max-w-[85vw] items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
            </main>
        } @else {
            <main class="w-lg max-w-[85vw] space-y-2 p-4">
                <label id="invoice-user-label" class="text-sm font-medium">{{
                    'PAYMENTS.USER' | translate
                }}</label>
                <a-user-search-field
                    labelled_by="invoice-user-label"
                    [(ngModel)]="user"
                ></a-user-search-field>
                <div class="text-sm font-medium">
                    {{ 'PAYMENTS.ITEMS' | translate }}
                </div>
                @for (row of rows(); track $index; let i = $index) {
                    <div class="flex items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1"
                        >
                            <mat-label>{{
                                'PAYMENTS.SELECT_PRODUCT' | translate
                            }}</mat-label>
                            <mat-select
                                [ngModel]="row.product_id"
                                (ngModelChange)="
                                    updateRow(i, { product_id: $event })
                                "
                            >
                                @for (product of products(); track product.id) {
                                    <mat-option [value]="product.id">
                                        {{ product.name }} ·
                                        {{
                                            product.unit_amount
                                                | amount: product.currency
                                        }}
                                        {{ unit_key(product.unit) | translate }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-24"
                        >
                            <input
                                matInput
                                type="number"
                                min="1"
                                [attr.aria-label]="
                                    'PAYMENTS.QUANTITY' | translate
                                "
                                [ngModel]="row.quantity"
                                (ngModelChange)="
                                    updateRow(i, { quantity: $event })
                                "
                            />
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            [attr.aria-label]="'COMMON.REMOVE' | translate"
                            (click)="removeRow(i)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
                <button
                    btn
                    matRipple
                    class="inverse w-full"
                    [disabled]="rows().length >= max_rows"
                    (click)="addRow()"
                >
                    <icon class="mr-2 text-xl">add</icon>
                    {{ 'PAYMENTS.ADD_ITEM' | translate }}
                </button>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'PAYMENTS.MEMO' | translate }}</mat-label>
                    <textarea matInput rows="2" [(ngModel)]="memo"></textarea>
                </mat-form-field>
                <div class="flex items-center gap-4">
                    <mat-form-field appearance="outline" class="w-36">
                        <mat-label>{{
                            'PAYMENTS.DUE_DAYS' | translate
                        }}</mat-label>
                        <input
                            matInput
                            type="number"
                            min="0"
                            max="365"
                            [(ngModel)]="due_days"
                        />
                    </mat-form-field>
                    <mat-checkbox [(ngModel)]="send">
                        {{ 'PAYMENTS.SEND_NOW' | translate }}
                    </mat-checkbox>
                </div>
                <div
                    class="bg-base-200 flex justify-between rounded-sm p-2 font-medium"
                >
                    <span>{{ 'PAYMENTS.TOTAL' | translate }}</span>
                    <span total aria-live="polite">
                        @if (quote(); as q) {
                            {{ q.total | amount: q.currency }}
                        } @else {
                            –
                        }
                    </span>
                </div>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="save-invoice"
                    class="flex-1"
                    [disabled]="!valid()"
                    (click)="save()"
                >
                    {{
                        (send()
                            ? 'PAYMENTS.SEND_INVOICE'
                            : 'PAYMENTS.SAVE_DRAFT'
                        ) | translate
                    }}
                </button>
            </footer>
        }
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [
        FormsModule,
        IconComponent,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        TranslatePipe,
        UserSearchFieldComponent,
    ],
})
export class InvoiceCreateModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _payments = inject(PaymentsService);
    private _ref = inject(MatDialogRef<InvoiceCreateModalComponent, boolean>);

    public readonly max_rows = MAX_ROWS;
    public readonly unit_key = unitKey;
    public readonly user = signal<User | null>(null);
    public readonly products = signal<PaymentProduct[]>([]);
    public readonly rows = signal<InvoiceRow[]>([
        { product_id: '', quantity: 1 },
    ]);
    public readonly memo = signal('');
    public readonly due_days = signal(14);
    public readonly send = signal(true);
    public readonly quote = signal<PaymentQuote | null>(null);
    public readonly saving = signal(false);

    /** Rows with a product, as driver line items */
    public readonly items = computed<PaymentLineItemRequest[]>(() =>
        this.rows().flatMap((row) => {
            const product = this.products().find(
                (_) => _.id === row.product_id,
            );
            if (!product || !(row.quantity > 0)) return [];
            return [
                {
                    resource_type: product.resource_type,
                    product_id: product.id,
                    quantity: Math.floor(row.quantity),
                },
            ];
        }),
    );

    public readonly valid = computed(
        () =>
            !!this.user()?.email &&
            this.items().length > 0 &&
            this.due_days() >= 0 &&
            (this.quote()?.total || 0) > 0,
    );

    public async ngOnInit() {
        this.products.set(
            await this._payments.call('list_products', {}).catch((e) => {
                notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
                return [] as PaymentProduct[];
            }),
        );
    }

    public addRow() {
        if (this.rows().length >= MAX_ROWS) return;
        this.rows.update((rows) => [...rows, { product_id: '', quantity: 1 }]);
        this._updateQuote();
    }

    public removeRow(index: number) {
        this.rows.update((rows) => rows.filter((_, i) => i !== index));
        this._updateQuote();
    }

    public updateRow(index: number, changes: Partial<InvoiceRow>) {
        this.rows.update((rows) =>
            rows.map((row, i) => (i === index ? { ...row, ...changes } : row)),
        );
        this._updateQuote();
    }

    public async save() {
        const user = this.user();
        if (!this.valid() || !user) return;
        this.saving.set(true);
        this._ref.disableClose = true;
        try {
            await this._payments.call('create_invoice', {
                user_email: user.email,
                user_name: user.name,
                items: this.items(),
                memo: this.memo() || undefined,
                due_days: Math.floor(this.due_days()),
                send: this.send(),
            });
            notifySuccess(
                i18n(
                    this.send()
                        ? 'PAYMENTS.INVOICE_SENT'
                        : 'PAYMENTS.INVOICE_SAVED',
                ),
            );
            this._ref.close(true);
        } catch (e) {
            notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
            this.saving.set(false);
            this._ref.disableClose = false;
        }
    }

    /** Ask the driver for the total after the items stop changing */
    private _updateQuote() {
        // Do not allow a save with the total of the old items
        this.quote.set(null);
        this.timeout('quote', async () => {
            const items = this.items();
            const quote = items.length
                ? await this._payments.call('quote', items).catch((e) => {
                      notifyError(
                          errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'),
                      );
                      return null;
                  })
                : null;
            // Skip the result when the items changed while it loaded
            if (items === this.items()) this.quote.set(quote);
        });
    }
}
