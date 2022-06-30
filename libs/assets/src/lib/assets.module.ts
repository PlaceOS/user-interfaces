import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetSelectModalComponent } from './asset-select-modal/asset-select-modal.component';
import { ComponentsModule } from '@placeos/components';
import { AssetDetailsComponent } from './asset-select-modal/asset-details.component';
import { AssetFiltersComponent } from './asset-select-modal/asset-filters.component';
import { AssetFiltersDisplayComponent } from './asset-select-modal/asset-filters-display.component';
import { AssetListComponent } from './asset-select-modal/asset-list.component';
import { FormFieldsModule } from '@placeos/form-fields';
import { FormsModule } from '@angular/forms';

export * from './asset-select-modal/asset-select-modal.component';

const COMPONENTS = [AssetSelectModalComponent];

const MODULE_COMPONENTS = [
    AssetDetailsComponent,
    AssetFiltersComponent,
    AssetFiltersDisplayComponent,
    AssetListComponent,
];

@NgModule({
    declarations: [...COMPONENTS, ...MODULE_COMPONENTS],
    imports: [
        CommonModule, 
        FormFieldsModule, 
        FormsModule, 
        ComponentsModule
    ],
    exports: [...COMPONENTS],
})
export class AssetsModule {}
