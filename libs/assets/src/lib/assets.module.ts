import { NgModule } from '@angular/core';

import { AssetGroupPipe } from './asset-group.pipe';
import { AssetListFieldComponent } from './asset-list-field.component';
import { AssetSelectModalComponent } from './asset-select-modal/asset-select-modal.component';

export * from './asset-select-modal/asset-select-modal.component';

const STANDALONE_COMPONENTS = [
    AssetSelectModalComponent,
    AssetListFieldComponent,
    AssetGroupPipe,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class AssetsModule {}
