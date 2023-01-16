import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Asset } from './asset.class';

export function generateAssetForm(asset: Asset = new Asset()) {
    return new FormGroup({
        id: new FormControl(asset.id),
        name: new FormControl(asset.name, [Validators.required]),
        category: new FormControl(asset.category, [Validators.required]),
        count: new FormControl(asset.count),
        size: new FormControl(asset.size),
        description: new FormControl(asset.description),
        barcode: new FormControl(asset.barcode, [Validators.required]),
        brand: new FormControl(asset.brand, [Validators.required]),
        specifications: new FormControl(asset.specifications),
        purchase_date: new FormControl(Date.now(), [Validators.required]),
        purchase_price: new FormControl(asset.purchase_price || 0, [
            Validators.required,
        ]),
        expiry_date: new FormControl(0),
        invoices: new FormControl(asset.invoices),
        purchase_details: new FormControl(asset.purchase_details),
        consumables: new FormControl(asset.consumables),
        general_details: new FormControl(asset.general_details),
        images: new FormControl(asset.images),
    });
}
