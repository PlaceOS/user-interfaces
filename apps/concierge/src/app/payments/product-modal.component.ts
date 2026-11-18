import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import {
    errorMessage,
    i18n,
    notifyError,
    OrganisationService,
} from '@placeos/common';
import {
    DIALOG_TITLE_STYLES,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    PaymentProduct,
    PaymentProductInput,
    PaymentResourceType,
    PaymentsService,
    PaymentUnit,
    toMajorUnits,
    toMinorUnits,
    unitKey,
} from '@placeos/payments';

/** Resource types that a product can price. Catering uses the menu prices */
export const PRODUCT_RESOURCE_TYPES: PaymentResourceType[] = [
    'room',
    'desk',
    'parking',
    'locker',
    'asset',
    'service',
];

const UNITS: PaymentUnit[] = ['booking', 'hour', 'day', 'item'];

/** Make or change a product. Closes with the saved product */
@Component({
    selector: 'product-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="flex-1 px-2 text-xl font-medium">
                {{
                    (product ? 'PAYMENTS.EDIT_PRODUCT' : 'PAYMENTS.NEW_PRODUCT')
                        | translate
                }}
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
            <main class="w-lg max-w-[85vw] space-y-1 p-4">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                    <input matInput required name="name" [(ngModel)]="name" />
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{
                        'COMMON.DESCRIPTION' | translate
                    }}</mat-label>
                    <textarea
                        matInput
                        rows="2"
                        [(ngModel)]="description"
                    ></textarea>
                </mat-form-field>
                <div class="flex gap-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-label>{{
                            'PAYMENTS.RESOURCE_TYPE' | translate
                        }}</mat-label>
                        <mat-select
                            name="resource-type"
                            [(ngModel)]="resource_type"
                        >
                            @for (type of resource_types; track type) {
                                <mat-option [value]="type">{{
                                    type_key(type) | translate
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-32">
                        <mat-label>{{
                            'PAYMENTS.PRICE' | translate
                        }}</mat-label>
                        <span matTextPrefix>{{ currency }}&nbsp;</span>
                        <input
                            matInput
                            required
                            name="price"
                            type="number"
                            min="0"
                            [(ngModel)]="price"
                        />
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-36">
                        <mat-label>{{ 'PAYMENTS.UNIT' | translate }}</mat-label>
                        <mat-select name="unit" [(ngModel)]="unit">
                            @for (item of units; track item) {
                                <mat-option [value]="item">{{
                                    unit_key(item) | translate
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'PAYMENTS.ZONES' | translate }}</mat-label>
                    <mat-select multiple [(ngModel)]="zone_ids">
                        @for (zone of zones(); track zone.id) {
                            <mat-option [value]="zone.id">{{
                                zone.name
                            }}</mat-option>
                        }
                    </mat-select>
                    <mat-hint>{{ 'PAYMENTS.ZONES_HINT' | translate }}</mat-hint>
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{
                        'PAYMENTS.RESOURCE_IDS' | translate
                    }}</mat-label>
                    <input matInput [(ngModel)]="resource_ids" />
                    <mat-hint>{{
                        'PAYMENTS.RESOURCE_IDS_HINT' | translate
                    }}</mat-hint>
                </mat-form-field>
                <mat-checkbox [(ngModel)]="active">
                    {{ 'PAYMENTS.ACTIVE' | translate }}
                </mat-checkbox>
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
                    name="save-product"
                    class="flex-1"
                    [disabled]="!valid()"
                    (click)="save()"
                >
                    {{ 'COMMON.SAVE' | translate }}
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
        TranslatePipe,
    ],
})
export class ProductModalComponent {
    private _payments = inject(PaymentsService);
    private _org = inject(OrganisationService);
    private _ref = inject(MatDialogRef<ProductModalComponent, PaymentProduct>);

    public readonly product = inject<PaymentProduct | null>(MAT_DIALOG_DATA, {
        optional: true,
    });
    public readonly currency =
        this.product?.currency || this._payments.currency();
    public readonly resource_types = PRODUCT_RESOURCE_TYPES;
    public readonly units = UNITS;
    public readonly unit_key = unitKey;
    public readonly type_key = (type: string) =>
        `PAYMENTS.TYPE_${type.toUpperCase()}`;

    public readonly name = signal(this.product?.name || '');
    public readonly description = signal(this.product?.description || '');
    public readonly resource_type = signal<PaymentResourceType>(
        this.product?.resource_type || 'room',
    );
    public readonly unit = signal<PaymentUnit>(this.product?.unit || 'hour');
    /** Price in the major unit, e.g. dollars */
    public readonly price = signal<number | null>(
        this.product
            ? toMajorUnits(this.product.unit_amount, this.currency)
            : null,
    );
    public readonly zone_ids = signal<string[]>(this.product?.zone_ids || []);
    /** Comma separated list of resource IDs */
    public readonly resource_ids = signal(
        (this.product?.resource_ids || []).join(', '),
    );
    public readonly active = signal(this.product?.active ?? true);
    public readonly saving = signal(false);

    /** Buildings and levels that a product can apply to */
    public readonly zones = computed(() => [
        ...this._org.buildings.map((_) => ({
            id: _.id,
            name: _.display_name || _.name,
        })),
        ...this._org.levels.map((_) => ({
            id: _.id,
            name: `${this._org.buildings.find((b) => b.id === _.parent_id)?.name || ''} – ${_.display_name || _.name}`,
        })),
    ]);

    public readonly valid = computed(() => {
        const price = this.price();
        return !!this.name().trim() && price !== null && price >= 0;
    });

    public async save() {
        if (!this.valid()) return;
        const input: PaymentProductInput = {
            id: this.product?.id,
            name: this.name().trim(),
            description: this.description().trim(),
            active: this.active(),
            resource_type: this.resource_type(),
            resource_ids: this.resource_ids()
                .split(',')
                .map((_) => _.trim())
                .filter((_) => !!_),
            zone_ids: this.zone_ids(),
            unit: this.unit(),
            unit_amount: toMinorUnits(this.price() || 0, this.currency),
            currency: this.currency,
        };
        this.saving.set(true);
        this._ref.disableClose = true;
        try {
            this._ref.close(await this._payments.call('save_product', input));
        } catch (e) {
            notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
            this.saving.set(false);
            this._ref.disableClose = false;
        }
    }
}
