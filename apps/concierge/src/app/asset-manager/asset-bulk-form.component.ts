import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AssetGroup,
    addAssetsInBulk,
    generateAssetForm,
    showAsset,
    showAssetGroup,
} from '@placeos/assets';
import {
    AsyncHandler,
    getInvalidFields,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'asset-bulk-form',
    template: `
        <div class="absolute inset-0 bg-base-100">
            <div
                class="h-full max-w-[32rem] mx-auto flex flex-col"
                *ngIf="!loading; else load_state"
            >
                <header class="p-4">
                    <h2 class="text-center text-xl font-medium">
                        Bulk {{ form.value.id ? 'Edit' : 'Add' }} Asset
                    </h2>
                </header>
                <main class="flex-1 h-1/2 overflow-auto" [formGroup]="form">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="name">Product</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="product?.name || 'No Product'"
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="true"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="count">
                                Number of Assets to create
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [(ngModel)]="count"
                                    name="count"
                                    type="number"
                                    placeholder="Number of assets to add"
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="identifier">Label/Friendly Name</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="identifier"
                                placeholder="Identifier, Asset ID or Barcode"
                                formControlName="identifier"
                            />
                            <mat-error>
                                Label/Friendly Name is required
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="purchase-order-id">
                            Purchase Order ID
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="purchase_order_id"
                                placeholder="Select Purchase Order"
                            >
                                <mat-option
                                    *ngFor="
                                        let order of purchase_orders | async
                                    "
                                    [value]="order.id"
                                >
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                                <mat-option
                                    *ngIf="!(purchase_orders | async)?.length"
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
                </main>
                <footer
                    class="flex justify-end space-x-2 p-2 border-t border-base-200"
                >
                    <a
                        btn
                        matRipple
                        class="w-32 inverse"
                        [routerLink]="
                            product
                                ? [base_route, 'view', product.id]
                                : [base_route]
                        "
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
export class AssetBulkFormComponent extends AsyncHandler {
    public readonly form = generateAssetForm();
    public readonly purchase_orders = this._state.purchase_orders;
    public product: AssetGroup;
    public count = 2;
    public loading: string = '';

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService
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
                        this._router.navigate([this.base_route]);
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
                        this._router.navigate([this.base_route]);
                    }
                    this.product = product;
                    this.form.patchValue({ type_id: product.id });
                    this.loading = '';
                }
            })
        );
        this._state.setOptions({ active_item: null });
        this.count = 2;
    }

    public async save() {
        if (!this.count && this.count < 1) {
            return notifyError('Please enter a valid number of assets to add.');
        }
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this.loading = 'Saving Product...';
        const data = this.form.value;
        const list = await addAssetsInBulk(
            new Array(this.count).fill({
                ...data,
                zone_id: this._org.building.id,
            })
        )
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving asset: ${e.message}`);
                throw e;
            });
        this._state.setExtraAssets(
            list.map((d) => ({ ...d, type_id: this.product.id }))
        );
        this.form.reset();
        this._state.postChange();
        notifySuccess(`Asset added ${list.length} successfully.`);
        this._router.navigate([this.base_route, 'view', this.product?.id]);
        this.loading = '';
    }
}
