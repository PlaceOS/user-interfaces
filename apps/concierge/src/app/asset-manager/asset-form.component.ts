import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AssetGroup,
    generateAssetForm,
    saveAsset,
    showAsset,
    showAssetGroup,
} from '@placeos/assets';
import { AsyncHandler, getInvalidFields, notifyError } from '@placeos/common';

@Component({
    selector: 'asset-form',
    template: `
        <div class="absolute inset-0 bg-white">
            <div
                class="h-full max-w-[32rem] mx-auto flex flex-col"
                *ngIf="!loading; else load_state"
            >
                <header class="p-4">
                    <h2 class="text-center text-xl font-medium">
                        {{ form.value.id ? 'Edit' : 'Add' }} Asset
                    </h2>
                </header>
                <main class="flex-1 h-1/2 overflow-auto" [formGroup]="form">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="name">Product<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="product?.name || 'No Product'"
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="true"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="description">Description</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                placeholder="Description of the product"
                                formControlName="description"
                            ></textarea>
                            <mat-error>Description is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="serial-number">
                                Serial Number<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="serial-number"
                                    placeholder="Serial Number"
                                    formControlName="serial_number"
                                />
                                <mat-error>Serial Number is required</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="identifier">Identifier</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="identifier"
                                    placeholder="Identifier"
                                    formControlName="identifier"
                                />
                                <mat-error>Identifier is required</mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="purchase-order-id">
                                Purchase Order ID <span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    formControlName="purchase_order_id"
                                    placeholder="Select Purchase Order"
                                >
                                    <mat-option
                                        *ngIf="
                                            let order of purchase_orders | async
                                        "
                                        [value]="order.id"
                                    >
                                        {{ order.id }}
                                    </mat-option>
                                    <mat-option
                                        *ngIf="
                                            (purchase_orders | async)?.length
                                        "
                                        class="opacity-60"
                                        [disabled]="true"
                                    >
                                        No purchase orders
                                    </mat-option>
                                </mat-select>
                                <mat-error>
                                    Purchase Order ID is required
                                </mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="purchase-price">Purchase Price</label>
                            <mat-form-field appearance="outline">
                                <span matPrefix>$</span>
                                <input
                                    matInput
                                    type="number"
                                    name="purchase-price"
                                    placeholder="Identifier"
                                    formControlName="purchase_price"
                                />
                                <mat-error
                                    >Purchase Price is required</mat-error
                                >
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="end-of-life-date">End of Life Date</label>
                        <a-date-field
                            name="end-of-life-date"
                            formControlName="end_of_life_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="images">Images</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                </main>
                <footer
                    class="flex justify-end space-x-2 p-2 border-t border-gray-100"
                >
                    <a
                        btn
                        matRipple
                        class="w-32 inverse"
                        [routerLink]="['/asset-manager']"
                    >
                        Cancel
                    </a>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </footer>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AssetFormComponent extends AsyncHandler {
    public readonly form = generateAssetForm();
    public readonly purchase_orders = this._state.purchase_orders;
    public product: AssetGroup;
    public loading: string = '';

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading = 'Loading Asset Details...';
                    const asset = await showAsset(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!asset) {
                        notifyError('Unable to load asset details.');
                        this._router.navigate(['/asset-manager']);
                    }
                    this.form.patchValue(asset);
                    this.loading = '';
                }
                if (params.get('group_id')) {
                    this.loading = 'Loading Product Details...';
                    const product = await showAssetGroup(params.get('group_id'))
                        .toPromise()
                        .catch(() => null);
                    if (!product) {
                        notifyError(
                            'Unable to load associated product details.'
                        );
                        this._router.navigate(['/asset-manager']);
                    }
                    this.product = product;
                    this.form.patchValue({ type_id: product.id });
                    this.loading = '';
                }
            })
        );
    }

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this.loading = 'Saving Product...';
        const data = this.form.value;
        const item = await saveAsset(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving asset: ${e.message}`);
                throw e;
            });
        this.form.reset();
        this.loading = '';
        this._router.navigate(['/asset-manager', 'view', this.product?.id]);
    }
}
