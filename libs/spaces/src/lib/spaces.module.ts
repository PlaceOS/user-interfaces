import { NgModule, Type } from '@angular/core';

import { SpaceSelectModalComponent } from './space-select-modal/space-select-modal.component';

import { NewSpaceSelectModalComponent } from './new-space-select-modal/new-space-select-modal.component';
import { SpacePipe } from './space.pipe';

const STANDALONE_COMPONENTS: Type<any>[] = [
    SpaceSelectModalComponent,
    NewSpaceSelectModalComponent,
    SpacePipe,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedSpacesModule {}
