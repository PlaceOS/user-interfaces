import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@placeos/components';
import { NewSpaceSelectModalComponent } from './space-select-modal/new-space-select-modal.component';

import { SpaceSelectItemComponent } from './space-select-item.component';
import { SpaceSelectModalComponent } from './space-select-modal.component';
import { SpaceDetailsComponent } from './space-select-modal/space-details.component';
import { SpaceListComponent } from './space-select-modal/space-list.component';
import { SpaceFiltersDisplayComponent } from './space-select-modal/space-filters-display.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    SpaceSelectItemComponent,
    NewSpaceSelectModalComponent,

    SpaceDetailsComponent,
    SpaceListComponent,
    SpaceFiltersDisplayComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        MatDialogModule,
        ComponentsModule,
        MatBottomSheetModule,
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedSpacesModule {}
