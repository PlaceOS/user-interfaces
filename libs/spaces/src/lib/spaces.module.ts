import { NgModule, Type } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '@user-interfaces/components';

import { SpaceSelectItemComponent } from './space-select-modal/item/item.component';
import { SpaceSelectModalComponent } from './space-select-modal/space-select-modal.component';

const COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    SpaceSelectItemComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        MatDialogModule,
        ComponentsModule
    ],
    providers: [],
    exports: [...COMPONENTS]
})
export class SharedSpacesModule {}
