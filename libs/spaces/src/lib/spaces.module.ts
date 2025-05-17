import { NgModule, Type } from '@angular/core';

import { NewSpaceSelectModalComponent } from './space-select-modal/new-space-select-modal.component';

import { SpacePipe } from './space.pipe';

const STANDALONE_COMPONENTS: Type<any>[] = [
    NewSpaceSelectModalComponent,
    SpacePipe,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedSpacesModule {}
