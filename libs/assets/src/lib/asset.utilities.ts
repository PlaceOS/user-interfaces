import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';

export function generateAssetCategoryForm(category: AssetCategory = {} as any) {
    return new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name || '', [Validators.required]),
        parent_id: new FormControl(category.parent_id),
    });
}

export function generateAssetPurchaseOrderForm(
    purchaseOrder: AssetPurchaseOrder = {} as any
) {
    return new FormGroup({
        id: new FormControl(purchaseOrder.id),
        order_number: new FormControl(purchaseOrder.order_number || '', [
            Validators.required,
        ]),
        invoice_number: new FormControl(purchaseOrder.invoice_number || ''),
        purchase_date: new FormControl(purchaseOrder.purchase_date || 0, [
            Validators.required,
        ]),
        depreciation_start_date: new FormControl(
            purchaseOrder.depreciation_start_date || 0,
            [Validators.required]
        ),
        depreciation_end_date: new FormControl(
            purchaseOrder.depreciation_end_date || 0,
            [Validators.required]
        ),
    });
}

export function generateAssetGroupForm(group: AssetGroup = new AssetGroup()) {
    return new FormGroup({
        id: new FormControl(group.id),
        category_id: new FormControl(group.category_id || '', [
            Validators.required,
        ]),
        brand: new FormControl(group.brand || ''),
        name: new FormControl(group.name || '', [Validators.required]),
        description: new FormControl(group.description || ''),
    });
}

export function generateAssetForm(asset: Asset = new Asset()) {
    return new FormGroup({
        id: new FormControl(asset.id),
        type_id: new FormControl(asset.type_id || '', [Validators.required]),
        name: new FormControl(asset.name || '', [Validators.required]),
        description: new FormControl(asset.description || ''),
        model_number: new FormControl(asset.model_number || ''),
        serial_number: new FormControl(asset.serial_number || ''),
        identifier: new FormControl(asset.identifier || ''),
        other_data: new FormControl(asset.other_data || {}),
        images: new FormControl(asset.images),
        purchase_order_id: new FormControl(asset.purchase_order_id, [
            Validators.required,
        ]),
        purchase_price: new FormControl(asset.purchase_price || 0, [
            Validators.required,
        ]),
        end_of_life_date: new FormControl(0),
    });
}
