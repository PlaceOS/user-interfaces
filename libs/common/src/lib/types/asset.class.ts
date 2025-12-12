// Re-export ts-client types
export {
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    PlaceAssetType,
} from '@placeos/ts-client';

// Type aliases for backwards compatibility
export {
    PlaceAsset as Asset,
    PlaceAssetCategory as AssetCategory,
    PlaceAssetPurchaseOrder as AssetPurchaseOrder,
} from '@placeos/ts-client';

// Extended AssetGroup type with additional UI properties
import {
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    PlaceAssetType,
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
