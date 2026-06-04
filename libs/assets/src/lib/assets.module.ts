import { NgModule } from '@angular/core';

import { AssetGroupPipe } from './asset-group.pipe';
import { AssetListFieldComponent } from './asset-list-field.component';
import { NewAssetSelectModalComponent } from './new-asset-select-modal/new-asset-select-modal.component';

const STANDALONE_COMPONENTS = [
    NewAssetSelectModalComponent,
    AssetListFieldComponent,
    AssetGroupPipe,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class AssetsModule {}
