import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule, InteractiveMapComponent } from '@user-interfaces/components';

import { ExploreMapControlComponent } from './explore-map-control.component';
import { ExploreMapViewComponent } from './explore-map-view.component';
import { ExploreSearchComponent } from './explore-search.component';
import { ExploreSpaceInfoComponent } from './explore-space-info.component';
import { ExploreZoomControlComponent } from './explore-zoom-control.component';

const COMPONENTS: Type<any>[] = [
    ExploreMapControlComponent,
    ExploreMapViewComponent,
    ExploreSearchComponent,
    ExploreSpaceInfoComponent,
    ExploreZoomControlComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [ComponentsModule, FormsModule],
    exports: [...COMPONENTS]
})
export class SharedExploreModule {}
