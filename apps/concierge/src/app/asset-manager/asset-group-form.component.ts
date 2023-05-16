import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { generateAssetGroupForm } from '@placeos/assets';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'asset-group-form',
    template: ``,
    styles: [``],
})
export class AssetGroupFormComponent {
    public readonly form = generateAssetGroupForm();

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute
    ) {}
}
