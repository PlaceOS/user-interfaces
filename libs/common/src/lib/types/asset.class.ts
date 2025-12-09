// Re-export ts-client types
export {
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    PlaceAssetType,
    PlaceAsset,
} from '@placeos/ts-client';

// Type aliases for backwards compatibility
export { PlaceAssetCategory as AssetCategory } from '@placeos/ts-client';
export { PlaceAssetPurchaseOrder as AssetPurchaseOrder } from '@placeos/ts-client';
export { PlaceAsset as Asset } from '@placeos/ts-client';

// Extended AssetGroup type with additional UI properties
import {
    PlaceAssetType,
    PlaceAssetCategory,
    PlaceAsset,
    PlaceAssetPurchaseOrder,
} from '@placeos/ts-client';

export interface AssetGroup extends PlaceAssetType {
    in_use?: number;
    asset_count?: number;
    category?: PlaceAssetCategory;
    assets?: PlaceAsset[];
    purchase_orders?: PlaceAssetPurchaseOrder[];
    quantity?: number;
    zone_id?: string;
}
