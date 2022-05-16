import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@placeos/components';
import { NewSpaceSelectModalComponent } from './space-select-modal/new-space-select-modal.component';

import { SpaceSelectItemComponent } from './space-select-item.component';
import { SpaceSelectModalComponent } from './space-select-modal.component';
import { SpaceListComponent } from './space-select-modal/space-list.component';

const COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    SpaceSelectItemComponent,
    NewSpaceSelectModalComponent,
    SpaceListComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, MatDialogModule, ComponentsModule],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedSpacesModule {}
