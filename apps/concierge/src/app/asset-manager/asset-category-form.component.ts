import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { ActivatedRoute } from '@angular/router';
import { generateAssetCategoryForm } from '@placeos/assets';

@Component({
    selector: 'asset-category-form',
    template: ``,
    styles: [``],
})
export class AssetCategoryFormComponent {
    public readonly form = generateAssetCategoryForm();

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute
    ) {}
}
