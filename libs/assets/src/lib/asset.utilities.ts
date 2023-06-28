import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';
import { flatten } from '@placeos/common';

export function generateAssetCategoryForm(category: AssetCategory = {} as any) {
    return new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name || '', [Validators.required]),
        parent_category_id: new FormControl(category.parent_category_id),
    });
}

export function generateAssetPurchaseOrderForm(
    order: AssetPurchaseOrder = {} as any
) {
    return new FormGroup({
        id: new FormControl(order.id),
        order_number: new FormControl(
            order.order_number || (order as any).purchase_order_number || '',
            [Validators.required]
        ),
        invoice_number: new FormControl(order.invoice_number || ''),
        unit_price: new FormControl(order.unit_price || 0),
        purchase_date: new FormControl(order.purchase_date * 1000 || null),
        expected_service_start_date: new FormControl(
            order.expected_service_start_date * 1000 ||
                (order as any).depreciation_start_date ||
                null
        ),
        expected_service_end_date: new FormControl(
            order.expected_service_end_date * 1000 ||
                (order as any).depreciation_end_date ||
                null
        ),
    });
}

export function generateAssetGroupForm(group: AssetGroup = new AssetGroup()) {
    return new FormGroup({
        id: new FormControl(group.id),
        category_id: new FormControl(group.category_id || '', [
            Validators.required,
        ]),
        images: new FormControl(group.images || []),
        brand: new FormControl(group.brand || ''),
        name: new FormControl(group.name || '', [Validators.required]),
        description: new FormControl(group.description || ''),
    });
}

export function generateAssetForm(asset: Asset = new Asset()) {
    return new FormGroup({
        id: new FormControl(asset.id),
        type_id: new FormControl(asset.type_id || '', [Validators.required]),
        description: new FormControl(asset.description || ''),
        serial_number: new FormControl(asset.serial_number || ''),
        barcode: new FormControl(asset.barcode || ''),
        identifier: new FormControl(asset.identifier || ''),
        other_data: new FormControl(asset.other_data || {}),
        purchase_order_id: new FormControl(asset.purchase_order_id),
    });
}

export function assetsToGroups(assets: Asset[]) {
    const groups: AssetGroup[] = [];
    for (const asset of assets) {
        const group = groups.find((_) => _.id === (asset as any).asset_type_id);
        if (group) {
            group.assets.push(asset);
        } else {
            groups.push({
                id: (asset as any).asset_type_id,
                name: (asset as any).name,
                assets: [asset],
            } as AssetGroup);
        }
    }
    for (const group of groups) {
        group.amount = group.assets.length;
    }
    return groups;
}

export function groupsToAssets(groups: AssetGroup[]) {
    return flatten(
        groups.map((_) =>
            _.assets
                .slice(0, (_ as any).amount)
                .map((asset) => ({ ...asset, name: _.name }))
        )
    );
}
