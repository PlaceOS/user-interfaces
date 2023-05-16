import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { ActivatedRoute } from '@angular/router';
import { generateAssetForm } from '@placeos/assets';

@Component({
    selector: 'asset-form',
    template: ``,
    styles: [``],
})
export class AssetFormComponent {
    public readonly form = generateAssetForm();

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute
    ) {}
}
