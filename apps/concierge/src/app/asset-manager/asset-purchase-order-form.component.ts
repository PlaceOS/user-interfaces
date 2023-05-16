import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { generateAssetPurchaseOrderForm } from '@placeos/assets';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'asset-purchase-order-form',
    template: ``,
    styles: [``],
})
export class AssetPurchaseOrderFormComponent {
    public readonly form = generateAssetPurchaseOrderForm();

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute
    ) {}
}
