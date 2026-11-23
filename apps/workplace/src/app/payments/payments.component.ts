import { DatePipe } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    untracked,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

import {
    currentUser,
    currentUserLoaded,
    errorMessage,
    i18n,
    notifyError,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import {
    Invoice,
    Payment,
    PaymentAmountPipe,
    PaymentDetailsModalComponent,
    PaymentMethod,
    PaymentsService,
    PaymentStatusComponent,
} from '@placeos/payments';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';

type PaymentsTab = 'payments' | 'invoices' | 'methods';

const PAGE_SIZE = 20;

/**
 * Payments of the current user, their invoices and their saved payment
 * methods. Only available when the building has a payment driver.
 */
@Component({
    selector: 'workplace-payments',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            <topbar />
            <main class="bg-base-200 flex h-1/2 flex-1 flex-col overflow-auto">
                <div class="mx-auto w-160 max-w-full space-y-4 p-4">
                    <h1 class="text-2xl font-medium">
                        {{ 'PAYMENTS.HEADER' | translate }}
                    </h1>
                    <nav class="bg-base-100 flex rounded-lg p-1">
                        @for (item of tabs(); track item.id) {
                            <button
                                matRipple
                                class="flex-1 rounded-md px-3 py-2 text-sm"
                                [name]="'tab-' + item.id"
                                [attr.aria-pressed]="tab() === item.id"
                                [class.bg-secondary]="tab() === item.id"
                                [class.text-secondary-content]="
                                    tab() === item.id
                                "
                                (click)="setTab(item.id)"
                            >
                                {{ item.name | translate }}
                            </button>
                        }
                    </nav>
                    @if (error()) {
                        <div
                            class="bg-base-100 flex flex-col items-center gap-2 rounded-lg p-8 text-center"
                        >
                            <p>{{ error() }}</p>
                            <button btn matRipple (click)="load()">
                                {{ 'COMMON.RETRY' | translate }}
                            </button>
                        </div>
                    } @else {
                        @switch (tab()) {
                            @case ('payments') {
                                <ul class="space-y-2">
                                    @for (item of payments(); track item.id) {
                                        <li>
                                            <button
                                                matRipple
                                                class="bg-base-100 flex w-full items-center gap-4 rounded-lg p-4 text-left shadow-sm"
                                                (click)="view(item)"
                                            >
                                                <icon
                                                    class="text-3xl opacity-60"
                                                    >receipt</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate font-medium"
                                                    >
                                                        {{
                                                            item.description ||
                                                                ('PAYMENTS.PAYMENT'
                                                                    | translate)
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-sm opacity-70"
                                                    >
                                                        {{
                                                            item.created_at *
                                                                1000
                                                                | date
                                                                    : 'mediumDate'
                                                        }}
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex flex-col items-end gap-1"
                                                >
                                                    <div class="font-medium">
                                                        {{
                                                            item.amount
                                                                | amount
                                                                    : item.currency
                                                        }}
                                                    </div>
                                                    <payment-status
                                                        [status]="item.status"
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_PAYMENTS'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                            }
                            @case ('invoices') {
                                <ul class="space-y-2">
                                    @for (item of invoices(); track item.id) {
                                        <li
                                            class="bg-base-100 flex items-center gap-4 rounded-lg p-4 shadow-sm"
                                        >
                                            <icon class="text-3xl opacity-60"
                                                >receipt_long</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate font-medium"
                                                >
                                                    {{
                                                        item.number ||
                                                            ('PAYMENTS.INVOICE'
                                                                | translate)
                                                    }}
                                                </div>
                                                <div class="text-sm opacity-70">
                                                    {{
                                                        item.created_at * 1000
                                                            | date: 'mediumDate'
                                                    }}
                                                    ·
                                                    {{
                                                        item.amount
                                                            | amount
                                                                : item.currency
                                                    }}
                                                </div>
                                            </div>
                                            <payment-status
                                                [status]="item.status"
                                            />
                                            @if (item.pdf_url || item.url) {
                                                <a
                                                    icon
                                                    matRipple
                                                    target="_blank"
                                                    rel="noopener"
                                                    [href]="
                                                        item.pdf_url || item.url
                                                    "
                                                    [attr.aria-label]="
                                                        'PAYMENTS.VIEW_INVOICE'
                                                            | translate
                                                    "
                                                >
                                                    <icon>open_in_new</icon>
                                                </a>
                                            }
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_INVOICES'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                            }
                            @case ('methods') {
                                <ul class="space-y-2">
                                    @for (item of methods(); track item.id) {
                                        <li
                                            class="bg-base-100 flex items-center gap-4 rounded-lg p-4 shadow-sm"
                                        >
                                            <icon class="text-3xl opacity-60"
                                                >credit_card</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div class="font-medium">
                                                    <span class="capitalize">{{
                                                        item.brand || item.type
                                                    }}</span>
                                                    •••• {{ item.last4 }}
                                                </div>
                                                <div class="text-sm opacity-70">
                                                    {{
                                                        'PAYMENTS.EXPIRES'
                                                            | translate
                                                                : {
                                                                      date:
                                                                          item.exp_month +
                                                                          '/' +
                                                                          item.exp_year,
                                                                  }
                                                    }}
                                                </div>
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                [attr.aria-label]="
                                                    'PAYMENTS.REMOVE_METHOD'
                                                        | translate
                                                "
                                                (click)="removeMethod(item)"
                                            >
                                                <icon class="text-error"
                                                    >delete</icon
                                                >
                                            </button>
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_METHODS'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                                <button
                                    btn
                                    matRipple
                                    name="add-method"
                                    class="w-full"
                                    (click)="addMethod()"
                                >
                                    <icon class="mr-2 text-xl">add</icon>
                                    {{ 'PAYMENTS.ADD_METHOD' | translate }}
                                </button>
                            }
                        }
                        @if (loading()) {
                            <div class="flex justify-center p-4">
                                <mat-spinner diameter="32"></mat-spinner>
                            </div>
                        } @else if (cursor()) {
                            <button
                                btn
                                matRipple
                                class="inverse w-full"
                                (click)="load(true)"
                            >
                                {{ 'PAYMENTS.LOAD_MORE' | translate }}
                            </button>
                        }
                    }
                </div>
            </main>
            <footer-menu />
        </div>
    `,
    imports: [
        DatePipe,
        FooterMenuComponent,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TopbarComponent,
        TranslatePipe,
    ],
})
export class PaymentsComponent implements OnInit {
    private _payments = inject(PaymentsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    public readonly tab = signal<PaymentsTab>('payments');
    public readonly payments = signal<Payment[]>([]);
    public readonly invoices = signal<Invoice[]>([]);
    public readonly methods = signal<PaymentMethod[]>([]);
    /** Cursor of the next page of the active tab */
    public readonly cursor = signal<string | undefined>(undefined);
    public readonly loading = signal(false);
    public readonly error = signal('');
    /** Whether the first load started, so a building change loads again */
    private _ready = false;
    /** ID of the latest load. The reply of an older load is ignored */
    private _load_id = 0;

    /** Tabs for the features of the driver */
    public readonly tabs = computed(() => [
        { id: 'payments' as const, name: 'PAYMENTS.TAB_PAYMENTS' },
        ...(this._payments.hasCapability('invoices')
            ? [{ id: 'invoices' as const, name: 'PAYMENTS.TAB_INVOICES' }]
            : []),
        ...(this._payments.hasCapability('saved_methods')
            ? [{ id: 'methods' as const, name: 'PAYMENTS.TAB_METHODS' }]
            : []),
    ]);

    constructor() {
        // Each building can have its own driver, so start again when it changes
        let building: string | undefined;
        effect(() => {
            const id = this._org.active_building()?.id;
            if (this._ready && id !== building) untracked(() => this._reset());
            building = id;
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        if (!this._payments.enabled) {
            this._router.navigate(['/']);
            return;
        }
        await currentUserLoaded();
        this._ready = true;
        await this.load();
    }

    public setTab(tab: PaymentsTab) {
        this.tab.set(tab);
        this.load();
    }

    /** Load the first page of the active tab, or the next page with `more` */
    public async load(more = false) {
        const tab = this.tab();
        const load_id = ++this._load_id;
        const stale = () => load_id !== this._load_id;
        const cursor = more ? this.cursor() : undefined;
        // Filter by email, as privileged users get the payments of all users
        const user_email = currentUser().email;
        this.loading.set(true);
        this.error.set('');
        const query = { user_email, limit: PAGE_SIZE, cursor };
        const append = <T>(list: T[], items: T[]) =>
            more ? [...list, ...items] : items;
        try {
            if (tab === 'payments') {
                const page = await this._payments.call('list_payments', query);
                if (stale()) return;
                this.payments.update((list) => append(list, page.items));
                this.cursor.set(page.next_cursor);
            } else if (tab === 'invoices') {
                const page = await this._payments.call('list_invoices', query);
                if (stale()) return;
                this.invoices.update((list) => append(list, page.items));
                this.cursor.set(page.next_cursor);
            } else {
                const methods = await this._payments.call(
                    'list_payment_methods',
                );
                if (stale()) return;
                this.methods.set(methods);
                this.cursor.set(undefined);
            }
        } catch (e) {
            if (stale()) return;
            this.error.set(
                i18n('PAYMENTS.LOAD_ERROR', { error: errorMessage(e) || e }),
            );
        } finally {
            if (!stale()) this.loading.set(false);
        }
    }

    public view(payment: Payment) {
        this._dialog
            .open(PaymentDetailsModalComponent, { data: { payment } })
            .afterClosed()
            .subscribe(() => this.load());
    }

    public async addMethod() {
        // Open the window in the click handler, or the browser blocks it
        const window_ref = this._payments.openWindow();
        await this._payments
            .addPaymentMethod(window_ref)
            .catch((e) => notifyError(errorMessage(e) || e));
        await this.load();
    }

    public async removeMethod(method: PaymentMethod) {
        const result = await openConfirmModal(
            {
                title: i18n('PAYMENTS.REMOVE_METHOD'),
                content: i18n('PAYMENTS.REMOVE_METHOD_CONFIRM', {
                    method: `${method.brand || method.type} •••• ${method.last4}`,
                }),
                icon: { content: 'delete' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('PAYMENTS.REMOVING_METHOD'));
        await this._payments
            .call('remove_payment_method', method.id)
            .catch((e) => notifyError(errorMessage(e) || e));
        result.close();
        await this.load();
    }

    /** Clear the lists of the old building and load the first page again */
    private _reset() {
        this.payments.set([]);
        this.invoices.set([]);
        this.methods.set([]);
        this.cursor.set(undefined);
        this.tab.set('payments');
        this.load();
    }
}
