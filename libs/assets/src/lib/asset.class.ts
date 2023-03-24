export interface AssetResource {
    id?: string;
    name: string;
    url: string;
    price?: number;
}

export interface AssetDetail {
    id: string;
    name: string;
}

export interface AssetPurchase {
    id?: string;
    name: string;
    value: string;
}

export class Asset {
    public readonly id: string;
    public readonly name: string;
    public readonly category: string;
    public readonly images: AssetResource[];
    public readonly barcode: string;
    public readonly brand: string;
    public readonly size: 'Small' | 'Medium' | 'Large';
    public readonly description: string;
    public readonly specifications: Record<string, string>;
    public readonly purchase_date: number;
    public readonly purchase_price: number;
    public readonly purchase_details: AssetPurchase[];
    public readonly consumables: AssetDetail[];
    public readonly general_details: AssetDetail[];
    public readonly invoices: AssetResource[];
    public readonly quantity: number;
    public readonly locations: [string, string][];
    public in_use = 1;
    public other_data: Record<string, any> = {};

    constructor(_data: Partial<Asset> = {}) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.category = _data.category || '';
        this.images = _data.images || [];
        this.barcode = _data.barcode || '';
        this.brand = _data.brand || '';
        this.size = _data.size || 'Small';
        this.description = _data.description || '';
        this.specifications = _data.specifications || {};
        this.purchase_date = _data.purchase_date * 1000 || Date.now();
        this.purchase_price = _data.purchase_price || 0;
        this.purchase_details = _data.purchase_details || [];
        this.consumables = _data.consumables || [];
        this.general_details = _data.general_details || [];
        this.invoices = _data.invoices || [];
        this.quantity = _data.quantity ?? 0;
        this.locations = _data.locations || [];
        this.in_use = _data.in_use ?? 1;
        for (const key in _data.other_data) {
            if (key in this) {
                this[key] = _data.other_data[key];
            }
        }
    }
}
