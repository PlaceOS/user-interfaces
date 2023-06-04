import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@placeos/components';
import { FormFieldsModule } from '@placeos/form-fields';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssetSelectModalComponent } from './asset-select-modal/asset-select-modal.component';
import { AssetDetailsComponent } from './asset-select-modal/asset-details.component';
import { AssetFiltersComponent } from './asset-select-modal/asset-filters.component';
import { AssetFiltersDisplayComponent } from './asset-select-modal/asset-filters-display.component';
import { AssetListComponent } from './asset-select-modal/asset-list.component';
import { AssetGroupPipe } from './asset-group.pipe';
import { AssetListFieldComponent } from './asset-list-field.component';

export * from './asset-select-modal/asset-select-modal.component';

const COMPONENTS = [AssetSelectModalComponent, AssetListFieldComponent];

const MODULE_COMPONENTS = [
    AssetDetailsComponent,
    AssetFiltersComponent,
    AssetFiltersDisplayComponent,
    AssetListComponent,
    AssetGroupPipe,
];

@NgModule({
    declarations: [...COMPONENTS, ...MODULE_COMPONENTS],
    imports: [
        CommonModule,
        FormFieldsModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],
    exports: [...COMPONENTS],
})
export class AssetsModule {}
