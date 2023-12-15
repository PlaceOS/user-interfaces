export class AssetCategory {
    id: string = '';
    name: string = '';
    description: string = '';
    parent_category_id?: string = '';
    created_at: number = Date.now();
    updated_at: number = Date.now();

    constructor(data?: Partial<AssetCategory>) {
        Object.assign(this, data);
    }
}

export class AssetPurchaseOrder {
    id: string;
    order_number: string;
    invoice_number: string;
    purchase_date: number;
    unit_price: number;
    expected_service_start_date: number;
    expected_service_end_date: number;
    created_at: number;
    updated_at: number;

    constructor(data?: Partial<AssetPurchaseOrder>) {
        Object.assign(this, data);
    }
}

export class AssetGroup {
    id: string;
    category_id: string;
    brand: string;
    name: string;
    in_use: number;
    description: string;
    asset_count: number;
    category?: AssetCategory;
    assets?: Asset[];
    images: string[] = [];
    purchase_orders?: AssetPurchaseOrder[];
    quantity?: number;
    zone_id: string;
    created_at: number;
    updated_at: number;

    constructor(data?: Partial<AssetGroup>) {
        Object.assign(this, data);
    }
}

export class Asset {
    id: string = '';
    type_id: string = '';
    description: string = '';
    serial_number: string = '';
    barcode: string = '';
    identifier: string = '';
    other_data: Record<string, any> = {};
    purchase_order_id: string = '';
    created_at: number = Date.now();
    updated_at: number = Date.now();

    constructor(data?: Partial<Asset>) {
        Object.assign(this, data);
    }
}
