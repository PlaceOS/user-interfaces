import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';
import { addYears } from 'date-fns';
import { flatten } from '@placeos/common';

export function generateAssetCategoryForm(category: AssetCategory = {} as any) {
    return new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name || '', [Validators.required]),
        parent_id: new FormControl(category.parent_id),
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
        purchase_date: new FormControl(order.purchase_date * 1000 || 0, [
            Validators.required,
        ]),
        expected_service_start_date: new FormControl(
            order.expected_service_start_date * 1000 ||
                (order as any).depreciation_start_date ||
                Date.now(),
            [Validators.required]
        ),
        expected_service_end_date: new FormControl(
            order.expected_service_end_date * 1000 ||
                (order as any).depreciation_end_date ||
                addYears(Date.now(), 5),
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
        identifier: new FormControl(asset.identifier || ''),
        other_data: new FormControl(asset.other_data || {}),
        purchase_order_id: new FormControl(asset.purchase_order_id, [
            Validators.required,
        ]),
        purchase_price: new FormControl(asset.purchase_price || 0, [
            Validators.required,
        ]),
        end_of_life_date: new FormControl(
            asset.end_of_life_date || addYears(Date.now(), 5)
        ),
    });
}

export function assetsToGroups(assets: Asset[]) {
    const groups: AssetGroup[] = [];
    for (const asset of assets) {
        const group = groups.find((_) => _.id === asset.type_id);
        if (group) {
            group.assets.push(asset);
        } else {
            groups.push({
                id: asset.type_id,
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
