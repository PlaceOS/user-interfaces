import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { errorMessage, i18n, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    PaymentAmountPipe,
    PaymentProduct,
    PaymentResourceType,
    PaymentsService,
    unitKey,
} from '@placeos/payments';
import {
    PRODUCT_RESOURCE_TYPES,
    ProductModalComponent,
} from './product-modal.component';

/**
 * Products and services with a price. Bookings of a resource use the
 * product of its type, zone and ID.
 */
@Component({
    selector: 'products-list',
    template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [(ngModel)]="type"
                    [aria-label]="'PAYMENTS.RESOURCE_TYPE' | translate"
                    [placeholder]="'PAYMENTS.ALL_TYPES' | translate"
                >
                    <mat-option value="">{{
                        'PAYMENTS.ALL_TYPES' | translate
                    }}</mat-option>
                    @for (item of types; track item) {
                        <mat-option [value]="item">{{
                            type_key(item) | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-checkbox
                [ngModel]="show_inactive()"
                (ngModelChange)="show_inactive.set($event); load()"
            >
                {{ 'PAYMENTS.SHOW_INACTIVE' | translate }}
            </mat-checkbox>
            <div class="flex-1"></div>
            <button
                btn
                matRipple
                name="new-product"
                data-shortcut="new"
                (click)="edit()"
            >
                <icon class="mr-2 text-xl">add</icon>
                {{ 'PAYMENTS.NEW_PRODUCT' | translate }}
            </button>
        </div>
        @if (error()) {
            <div class="bg-base-200 rounded-lg p-8 text-center">
                {{ error() }}
            </div>
        } @else if (loading()) {
            <div class="flex justify-center p-4">
                <mat-spinner diameter="32"></mat-spinner>
            </div>
        } @else {
            <div
                class="border-base-200 overflow-x-auto rounded-lg border text-sm"
                role="table"
            >
                <div
                    role="row"
                    class="bg-base-200 grid min-w-[52rem] grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'FORM.NAME' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.RESOURCE_TYPE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.PRICE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.APPLIES_TO' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of filtered(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 grid min-w-[52rem] grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem] items-center border-t"
                        [class.opacity-60]="!item.active"
                    >
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate font-medium">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.description }}
                            </div>
                        </div>
                        <div role="cell" class="p-3">
                            {{ type_key(item.resource_type) | translate }}
                        </div>
                        <div role="cell" class="p-3">
                            {{ item.unit_amount | amount: item.currency }}
                            <span class="opacity-70">{{
                                unit_key(item.unit) | translate
                            }}</span>
                        </div>
                        <div role="cell" class="p-3 text-xs">
                            {{
                                item.resource_ids.length || item.zone_ids.length
                                    ? ('PAYMENTS.APPLIES_TO_COUNT'
                                      | translate
                                          : {
                                                resources:
                                                    item.resource_ids.length,
                                                zones: item.zone_ids.length,
                                            })
                                    : ('PAYMENTS.APPLIES_TO_ALL' | translate)
                            }}
                        </div>
                        <div role="cell" class="p-3 text-xs">
                            {{
                                (item.active
                                    ? 'PAYMENTS.ACTIVE'
                                    : 'PAYMENTS.INACTIVE'
                                ) | translate
                            }}
                        </div>
                        <div role="cell" class="flex justify-end gap-1 p-1">
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    'PAYMENTS.EDIT_PRODUCT' | translate
                                "
                                (click)="edit(item)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    (item.active
                                        ? 'PAYMENTS.ARCHIVE_PRODUCT'
                                        : 'PAYMENTS.RESTORE_PRODUCT'
                                    ) | translate
                                "
                                (click)="toggleActive(item)"
                            >
                                <icon>{{
                                    item.active ? 'archive' : 'unarchive'
                                }}</icon>
                            </button>
                        </div>
                    </div>
                } @empty {
                    <div class="p-8 text-center opacity-70">
                        {{ 'PAYMENTS.EMPTY_PRODUCTS' | translate }}
                    </div>
                }
            </div>
        }
    `,
    imports: [
        FormsModule,
        IconComponent,
        MatCheckboxModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        TranslatePipe,
    ],
})
export class ProductsListComponent implements OnInit {
    private _payments = inject(PaymentsService);
    private _dialog = inject(MatDialog);

    public readonly types = PRODUCT_RESOURCE_TYPES;
    public readonly unit_key = unitKey;
    public readonly type_key = (type: string) =>
        `PAYMENTS.TYPE_${type.toUpperCase()}`;
    public readonly type = signal<PaymentResourceType | ''>('');
    public readonly show_inactive = signal(false);
    public readonly products = signal<PaymentProduct[]>([]);
    public readonly loading = signal(false);
    public readonly error = signal('');

    public readonly filtered = computed(() => {
        const type = this.type();
        return this.products().filter((p) => !type || p.resource_type === type);
    });

    public ngOnInit() {
        this.load();
    }

    public async load() {
        this.loading.set(true);
        this.error.set('');
        try {
            this.products.set(
                await this._payments.call('list_products', {
                    include_inactive: this.show_inactive(),
                }),
            );
        } catch (e) {
            this.error.set(
                i18n('PAYMENTS.LOAD_ERROR', { error: errorMessage(e) || e }),
            );
        } finally {
            this.loading.set(false);
        }
    }

    public edit(product?: PaymentProduct) {
        this._dialog
            .open(ProductModalComponent, { data: product ?? null })
            .afterClosed()
            .subscribe((saved) => (saved ? this.load() : null));
    }

    /** Archive an active product, or restore an archived one */
    public async toggleActive(product: PaymentProduct) {
        try {
            await this._payments.call('save_product', {
                ...product,
                active: !product.active,
            });
            await this.load();
        } catch (e) {
            notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
        }
    }
}
