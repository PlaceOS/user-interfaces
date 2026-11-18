import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { AsyncHandler, errorMessage, i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    Payment,
    PaymentAmountPipe,
    PaymentDetailsModalComponent,
    PaymentQuery,
    PaymentsService,
    PaymentStatus,
    PaymentStatusComponent,
} from '@placeos/payments';

const PAGE_SIZE = 50;

/** Statuses to filter by, in display order */
const STATUSES: PaymentStatus[] = [
    'succeeded',
    'authorized',
    'pending',
    'requires_action',
    'partially_refunded',
    'refunded',
    'cancelled',
    'failed',
];

/** Periods to filter by, in days. `0` is all time */
const PERIODS = [7, 30, 90, 365, 0] as const;

/** Payments of all users, with filters by user, status and period */
@Component({
    selector: 'payments-list',
    template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-72">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    name="user-email"
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
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="period()"
                    (ngModelChange)="period.set($event); reload()"
                >
                    @for (days of periods; track days) {
                        <mat-option [value]="days">
                            {{
                                (days
                                    ? 'PAYMENTS.PERIOD_DAYS'
                                    : 'PAYMENTS.PERIOD_ALL'
                                ) | translate: { count: days }
                            }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                [attr.aria-label]="'COMMON.REFRESH' | translate"
                (click)="reload()"
            >
                <icon>refresh</icon>
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
                    class="bg-base-200 grid grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DATE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.USER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DESCRIPTION' | translate }}
                    </div>
                    <div role="columnheader" class="p-3 text-right">
                        {{ 'PAYMENTS.AMOUNT' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of payments(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 hover:bg-base-200 grid grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem] items-center border-t"
                    >
                        <div role="cell" class="p-3">
                            {{ item.created_at * 1000 | date: 'short' }}
                        </div>
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate">{{ item.user_name }}</div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.user_email }}
                            </div>
                        </div>
                        <div role="cell" class="truncate p-3">
                            {{ item.description }}
                        </div>
                        <div role="cell" class="p-3 text-right">
                            {{ item.amount | amount: item.currency }}
                            @if (item.amount_refunded) {
                                <div class="text-xs opacity-70">
                                    −{{
                                        item.amount_refunded
                                            | amount: item.currency
                                    }}
                                </div>
                            }
                        </div>
                        <div role="cell" class="p-3">
                            <payment-status [status]="item.status" />
                        </div>
                        <div role="cell">
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    'PAYMENTS.VIEW_PAYMENT' | translate
                                "
                                (click)="view(item)"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    </div>
                } @empty {
                    @if (!loading()) {
                        <div class="p-8 text-center opacity-70">
                            {{ 'PAYMENTS.EMPTY_PAYMENTS' | translate }}
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
export class PaymentsListComponent extends AsyncHandler implements OnInit {
    private _payments = inject(PaymentsService);
    private _dialog = inject(MatDialog);
    /** Counts loads, so that an old response does not replace a new one */
    private _load_id = 0;

    public readonly statuses = STATUSES;
    public readonly periods = PERIODS;
    public readonly user_email = signal('');
    public readonly status = signal<PaymentStatus | ''>('');
    public readonly period = signal<number>(30);
    public readonly payments = signal<Payment[]>([]);
    public readonly cursor = signal<string | undefined>(undefined);
    public readonly loading = signal(false);
    public readonly error = signal('');

    public readonly status_key = (status: string) =>
        `PAYMENTS.STATUS_${status.toUpperCase()}`;

    public ngOnInit() {
        this.load();
    }

    /** Load the first page again. `debounce` waits for the user to stop typing */
    public reload(debounce = false) {
        if (debounce) this.timeout('reload', () => this.load(), 400);
        else this.load();
    }

    public async load(more = false) {
        const id = ++this._load_id;
        const days = this.period();
        const query: PaymentQuery = {
            user_email: this.user_email().trim() || undefined,
            status: this.status() || undefined,
            period_start: days
                ? Math.floor(Date.now() / 1000) - days * 24 * 60 * 60
                : undefined,
            limit: PAGE_SIZE,
            cursor: more ? this.cursor() : undefined,
        };
        this.loading.set(true);
        this.error.set('');
        try {
            const page = await this._payments.call('list_payments', query);
            if (id !== this._load_id) return;
            this.payments.update((list) =>
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

    public view(payment: Payment) {
        this._dialog
            .open(PaymentDetailsModalComponent, { data: { payment } })
            .afterClosed()
            .subscribe(() => this.load());
    }
}
