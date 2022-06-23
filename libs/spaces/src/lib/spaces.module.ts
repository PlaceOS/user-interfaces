import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@placeos/components';
import { NewSpaceSelectModalComponent } from './space-select-modal/new-space-select-modal.component';

import { SpaceSelectItemComponent } from './space-select-item.component';
import { SpaceSelectModalComponent } from './space-select-modal.component';
import { SpaceDetailsComponent } from './space-select-modal/space-details.component';
import { SpaceListComponent } from './space-select-modal/space-list.component';
import { SpaceFiltersComponent } from './space-select-modal/space-filters.component';
import { SpaceFiltersDisplayComponent } from './space-select-modal/space-filters-display.component';
import { SpaceSelectMapComponent } from './space-select-modal/space-map.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormFieldsModule } from '@placeos/form-fields';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceLocationPinComponent } from './space-select-modal/space-location-pin.component';
import { SpacePipe } from './space.pipe';

const COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    SpaceSelectItemComponent,
    NewSpaceSelectModalComponent,

    SpaceDetailsComponent,
    SpaceListComponent,
    SpaceFiltersComponent,
    SpaceFiltersDisplayComponent,
    SpaceSelectMapComponent,
    SpaceLocationPinComponent,

    SpacePipe
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        MatDialogModule,
        ComponentsModule,
        FormFieldsModule,
        MatBottomSheetModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedSpacesModule {}
