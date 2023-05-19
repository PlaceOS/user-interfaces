export interface AssetCategory {
    id: string;
    name: string;
    parent_id?: string;
}

export interface AssetPurchaseOrder {
    id: string;
    order_number: string;
    invoice_number: string;
    purchase_date: number;
    depreciation_start_date: number;
    depreciation_end_date: number;
}

export class AssetGroup {
    id: string;
    category_id: string;
    brand: string;
    name: string;
    in_use: number;
    description: string;
    category?: AssetCategory;
    assets?: Asset[];
    purchase_orders?: AssetPurchaseOrder[];
    amount?: number;
}

export class Asset {
    id: string;
    type_id: string;
    name: string;
    description: string;
    model_number: string;
    serial_number: string;
    identifier: string;
    other_data: Record<string, any>;
    images: string[];
    purchase_order_id: string;
    purchase_price: number;
    end_of_life_date: number;
}
