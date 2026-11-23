import type {
    Asset,
    AssetCategory,
    AssetPurchaseOrder,
    AssetType,
} from '@placeos/ts-client';

export type {
    Asset,
    AssetCategory,
    AssetPurchaseOrder,
    AssetType,
} from '@placeos/ts-client';

/** @deprecated 6.x name. Use `Asset`. */
export type PlaceAsset = Asset;
/** @deprecated 6.x name. Use `AssetCategory`. */
export type PlaceAssetCategory = AssetCategory;
/** @deprecated 6.x name. Use `AssetPurchaseOrder`. */
export type PlaceAssetPurchaseOrder = AssetPurchaseOrder;
/** @deprecated 6.x name. Use `AssetType`. */
export type PlaceAssetType = AssetType;

/** Asset type with additional UI properties */
export interface AssetGroup extends AssetType {
    in_use?: number;
    category?: AssetCategory;
    assets?: Asset[];
    purchase_orders?: AssetPurchaseOrder[];
    quantity?: number;
    zone_id?: string;
    available?: any;
}
