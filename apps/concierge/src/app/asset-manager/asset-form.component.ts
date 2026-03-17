import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { generateAssetForm, saveAsset } from '@placeos/assets';
import {
    AssetGroup,
    AsyncHandler,
    OrganisationService,
    getInvalidFields,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { showAsset, showAssetType } from '@placeos/ts-client';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_EDIT'
                    : 'APP.CONCIERGE.ASSETS_NEW'
                ) | translate
            "
            [close]="product ? [base_route, 'view', product.id] : [base_route]"
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
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
                        <label for="serial-number">{{
                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="serial-number"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                        | translate
                                "
                                formControlName="serial_number"
                            />
                            <mat-error>{{
                                'APP.CONCIERGE.ASSETS_SERIAL_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="identifier">{{
                            'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="identifier"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                        | translate
                                "
                                formControlName="identifier"
                            />
                            <mat-error>
                                {{
                                    'APP.CONCIERGE.ASSETS_NAME_REQUIRED'
                                        | translate
                                }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="purchase-order-id">{{
                        'APP.CONCIERGE.ASSETS_ORDER_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (
                                order of purchase_orders | async;
                                track order
                            ) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!(purchase_orders | async)?.length) {
                                <mat-option
                                    class="opacity-60"
                                    [disabled]="true"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY'
                                            | translate
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="serial-number">{{
                        'APP.CONCIERGE.ASSETS_BARCODE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="barcode"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_BARCODE' | translate
                            "
                            formControlName="barcode"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_BARCODE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        TranslatePipe,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class AssetFormComponent extends AsyncHandler implements OnInit {
    private _state = inject(AssetManagerStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    public readonly form = generateAssetForm();
    public readonly purchase_orders = this._state.purchase_orders;
    public product: AssetGroup;
    public loading = '';

    public get base_route() {
        return this._state.base_route;
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
                    const product = await showAssetType(params.get('group_id'))
                        .toPromise()
                        .catch(() => null);
                    if (!product) {
                        notifyError(
                            'Unable to load associated product details.',
                        );
                        this._router.navigate([this.base_route]);
                    }
                    this.product = product;
                    this.form.patchValue({ asset_type_id: product.id });
                    this.loading = '';
                }
            }),
        );
        this._state.setOptions({ active_item: null });
    }

    public async save() {
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`,
            );
        }
        this.loading = 'Saving Product...';
        const data = this.form.value;
        const item = await saveAsset({
            ...data,
            zone_id: this._org.building.id,
        } as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving asset: ${e.message}`);
                throw e;
            });
        this.form.reset();
        this._state.postChange();
        this._state.setExtraAssets(
            [item].map((d) => ({ ...d, asset_type_id: this.product.id })),
        );
        notifySuccess('Asset saved successfully.');
        this._router.navigate([this.base_route, 'view', this.product?.id]);
        this.loading = '';
    }
}
